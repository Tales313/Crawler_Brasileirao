# Crawler_Brasileirao

## Descrição
O objetivo desse projeto é criar uma API que traz sempre a rodada do Campeonato Brasileiro (série A) que está sendo exibida neste link https://globoesporte.globo.com/futebol/brasileirao-serie-a/
Para isso é feito um Web scraping nessa página recolhendo cada um dos 10 jogos e adicionando-os em um array de Json's, como abaixo:

```
[ 
  { mandante: 'Fluminense',
    visitante: 'Palmeiras',
    infos: 'Qua 25/07/2018 Maracanã 19:30' },
  { mandante: 'Atlético-MG',
    visitante: 'Paraná',
    infos: 'Qua 25/07/2018 Independência 21:00' },
  { mandante: 'Santos',
    visitante: 'Flamengo',
    infos: 'Qua 25/07/2018 Vila Belmiro 21:45' },
  { mandante: 'Corinthians',
    visitante: 'Cruzeiro',
    infos: 'Qua 25/07/2018 Arena Corinthians 21:45' },
  { mandante: 'Vitória',
    visitante: 'Sport',
    infos: 'Qui 26/07/2018 Barradão 19:30' },
  { mandante: 'Botafogo',
    visitante: 'Chapecoense',
    infos: 'Qui 26/07/2018 Engenhão 19:30' },
  { mandante: 'Grêmio',
    visitante: 'São Paulo',
    infos: 'Qui 26/07/2018 Arena do Grêmio 19:30' },
  { mandante: 'América-MG',
    visitante: 'Internacional',
    infos: 'Qui 26/07/2018 Independência 20:00' },
  { mandante: 'Atlético-PR',
    visitante: 'Vasco',
    infos: 'Qua 29/08/2018 Arena da Baixada 19:30' },
  { mandante: 'Ceará',
    visitante: 'Bahia',
    infos: 'Qua 29/08/2018 Castelão (CE) 19:30' } 
]
  ```

O "puppeteer" é a única dependência desse projeto. Ele é um módulo node que possui centenas de funcionalidades para manipular páginas web.

## Instalação
O processo de instalação do projeto é simples, basta clonar o repositório, entrar na pasta dele no seu computador e dar um "npm install".
``` bash
  $ git clone https://github.com/Tales313/Crawler_Brasileirao.git
  $ cd Crawler_Brasileirao
  $ npm install
  ```