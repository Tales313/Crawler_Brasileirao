const puppeteer = require('puppeteer')

function teste() {
  let inicio = new Date() //pegando o milissegundo inicial para calcular a demora no fim
  puppeteer.launch().then(async browser => { //abrindo o browser

    const page = await browser.newPage() //abrindo uma nova página
    await page.setRequestInterception(true) //habilitando a interceptação de requisições
  
    page.on('request', interceptedRequest => {
      let irUrl = interceptedRequest.url()
      if (irUrl.endsWith('.png') || //abortando todas essas requisições para 
          irUrl.endsWith('.jpg') || //a página carregar mais rápido
          irUrl.endsWith('.css') )
        interceptedRequest.abort()
      else
        interceptedRequest.continue()
    })
  
    await page.goto('https://globoesporte.globo.com/futebol/brasileirao-serie-a/')
  
    const result = await page.evaluate(() => {
      const jogos = []
      $('div.placar-jogo').each((i, item) => { //para cada jogo, pegue os nomes dos dois times
          let obj = {
              mandante: $(item).find('.placar-jogo-equipes-escudo-mandante').attr('title'),
              visitante: $(item).find('.placar-jogo-equipes-escudo-visitante').attr('title'),
              infos: $(item).find('.placar-jogo-informacoes').text()
          }
          jogos.push(obj)
      })
      return jogos
    })
  
    await browser.close() //fechando o browser
    let final = new Date() //pegando o milissegundo final para calcular a demora
    let tempo = final.getTime() - inicio.getTime() //quanto tempo demorou todo processo
    console.log(result) 
    console.log(tempo + ' milissegundos')
  
  })
}

teste()