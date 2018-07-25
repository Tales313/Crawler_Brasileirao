# Crawler_Brasileirao

## Descrição
O objetivo desse projeto é criar uma API que traz sempre a rodada do Campeonato Brasileiro (série A) que está sendo exibida neste link https://globoesporte.globo.com/futebol/brasileirao-serie-a/
Para isso é feito um Web scraping nessa página recolhendo cada um dos 10 jogos e adicionando-os em um array de Json's, como abaixo:

[ 
  { mandante: 'Flamengo', visitante: 'Botafogo' },
  { mandante: 'São Paulo', visitante: 'Corinthians' },
  { mandante: 'Paraná', visitante: 'América-MG' },
  { mandante: 'Bahia', visitante: 'Vitória' },
  { mandante: 'Vasco', visitante: 'Grêmio' },
  { mandante: 'Sport', visitante: 'Fluminense' },
  { mandante: 'Palmeiras', visitante: 'Atlético-MG' },
  { mandante: 'Cruzeiro', visitante: 'Atlético-PR' },
  { mandante: 'Chapecoense', visitante: 'Santos' },
  { mandante: 'Internacional', visitante: 'Ceará' }
]

O "puppeteer" é a única dependência desse projeto. Ele é um módulo node que possui centenas de funcionalidades para manipular páginas web.

## Instalação
O processo de instalação do projeto é simples, basta clonar o repositório, entrar na pasta dele no seu computador e dar um "npm install".
``` bash
  $ git clone https://github.com/Tales313/Crawler_Brasileirao.git
  $ cd Crawler_Brasileirao
  $ npm install
  ```