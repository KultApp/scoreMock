


// JUNTAR A RESPOSTA DE TODAS AS CHAMADAS A APIS DE PESQUISA (TMBD, SPOTIFY E GOOGLE BOOKS) NUM OBJETO


let contents = [
    {
        "_id": "6000674d0fc291429667c793",
        "type": 1, //movie
        "name": "Batman",
        "year": "1900",
        "description": "Em Gotham City o milionário Bruce Wayne, que quando jovem teve os pais assassinados por bandidos, resolve combater o crime como Batman, o Homem-Morcego. Mas chega o dia em que o vilão Coringa decide dominar a cidade e se torna um grande desafio para o super-herói.",
        "image": "kbeWnmnHNEnuVej6wcjUv0eY6IL.jpg",
        "externId": "268",
        "__v": 0,
        "updatedAt": "2022-11-29T18:47:29.368Z",
        "length": "6",
        "originalTitle": "Batman",
       
    },
    {
        "_id": "6000674d0fc291429667c793",
        "type": 1, //movie
        "name": "",
        "year": "2001",
        "description": "",
        "image": "",
        "externId": "268",
        "__v": 0,
        "updatedAt": "2022-11-29T18:47:29.368Z",
        "length": "6",
        "originalTitle": "Batman",
   
    },
    {
        "_id": "6000674d0fc291429667c793",
        "type": 1, //movie
        "name": "Blonde",
        "year": "2022",
        "description": "testetestetestesteste",
        "image": "teste.jpg",
        "externId": "268",
        "__v": 0,
        "updatedAt": "2022-11-29T18:47:29.368Z",
        "length": "6",
        "originalTitle": "Batman",
   
    },
    {
        "_id": "60e43408f0d5a814a98a5b5c",
        "type": 4, //music
        "name": "Naive",
        "image": "ab67616d00001e0263a28c5ecb7b13e9b329fe47.jpg",
        "description": "",
        "year": "2022",
        "author": "The Kooks",
        "url": "https://open.spotify.com/track/7BHPGtpuuWWsvE7cCaMuEU",
        "preview": null,
        "externId": "7BHPGtpuuWWsvE7cCaMuEU",
        "__v": 0,
        "updatedAt": "2022-12-11T12:03:17.121Z",
        "length": "5",
      
      },
    {
        "_id": "6000674d0fc291429667c793",
        "type": 1, //movie
        "name": "",
        "year": "2005",
        "description": "auidhaidhasidah",
        "image": "",
        "externId": "268",
        "__v": 0,
        "updatedAt": "2022-11-29T18:47:29.368Z",
        "length": "6",
        "originalTitle": "Batman",
    
    },
    {
        "_id": "6000674d0fc291429667c793",
        "type": 1, //movie
        "name": "Batman segundo mais antigo",
        "year": "2014",
        "description": "",
        "image": "dddads",
        "externId": "268",
        "__v": 0,
        "updatedAt": "2022-11-29T18:47:29.368Z",
        "length": "6",
        "originalTitle": "Batman",

    },
    {
        "_id": "6048b908d9d400376759d2e0",
        "type": 2, //TV SHOW
        "name": "Família Soprano",
        "year": "1999",
        "description": "Chefe da máfia e pai de família, Tony Soprano começa a ter ataques de pânico e decide procurar a ajuda de uma profissional, Dra. Jennifer Melfi. Ele discute sua intimidade e a vida no crime, revelando o desconforto da mulher, Carmela Soprano, com as suas atividades profissionais. Enquanto tenta proteger os filhos, Meadow e Anthony Junior, o mafioso irá enfrentar uma investigação federal e a possível traição de um membro da família.",
        "image": "7tHab5iSiOF7MoCZ2PPyxAouNRT.jpg",
        "externId": "1398",
        "__v": 0,
        "updatedAt": "2022-11-23T02:10:33.700Z",
        "length": "15",
        "originalTitle": "The Sopranos",

      },
      {
        "_id": "6048b908d9d400376759d2e0",
        "type": 2,
        "name": "",
        "year": "2018",
        "description": "Chefe da máfia e pai de família, Tony Soprano começa a ter ataques de pânico e decide procurar a ajuda de uma profissional, Dra. Jennifer Melfi. Ele discute sua intimidade e a vida no crime, revelando o desconforto da mulher, Carmela Soprano, com as suas atividades profissionais. Enquanto tenta proteger os filhos, Meadow e Anthony Junior, o mafioso irá enfrentar uma investigação federal e a possível traição de um membro da família.",
        "image": "",
        "externId": "1398",
        "__v": 0,
        "updatedAt": "2022-11-23T02:10:33.700Z",
        "length": "15",
        "originalTitle": "The Sopranos",
   
      },
    {
        "_id": "61d17bda5d86ef22a6f5194f",
        "updatedAt": "2022-12-05T08:24:51.433Z",
        "type": 16, //book
        "image": "mkhwblnqzwfycwuy.jpg",
        "name": "BATMAN Gothams skurke på fri fod DK (udgave læs dansk med Batman)",
        "length": "65",
        "description": "<p>Gothams farligste forbrydere er på springtur! Efter Jokeren har befriet de mest skrupelløse skurke fra byens fængsel, må Batman handle hurtigt for at opspore dem og bringe dem tilbage i forvaring. Kan Batman med Robin ved sin side fangede onde banditter, før det er for sent?</p>",
        "author": "John Sazaklis, Bob Kane",
        "url": "https://play.google.com/store/books/details?id=BnPOBAAAQBAJ",
        "externId": "BnPOBAAAQBAJ",
        "__v": 0,
        "year": "2014",
 
    },
   {
        "_id": "60910bf21b5e414dedc55c00",
        "type": 4, //music
        "name": "Batman",
        "image": "ab67616d00001e026ffff7323c2d5158c5b5ce41.jpg",
        "description": "",
        "year": "2020",
        "author": "7 Minutoz",
        "url": "https://open.spotify.com/track/5x3Sb1OWs89Xe067P0bJng",
        "preview": "https://p.scdn.co/mp3-preview/4e7b141802a1d083d1abf381a20ba014f7fc597a?cid=66e410a2932b4021ba4f18c41db00ae3",
        "externId": "5x3Sb1OWs89Xe067P0bJng",
        "__v": 0,
        "updatedAt": "2022-11-29T18:47:41.438Z",
        "length": "6",

    },
    {
        "_id": "618ac7d68f7acf5b243480bf",
        "type": 8, //podcast
        "name": "Batman y el amor digital",
        "image": "57abb8bb8902081f2cb51e81458136cff9b09f6c.jpg",
        "description": "Con una rara e inesperada transición pasamos de hablar sobre el futuro en el cine del Caballero de la Noche a cuestionar las actitudes y sentimientos que se logran despertar por medio de redes sociales.",
        "year": "2022",
        "author": "",
        "url": "https://open.spotify.com/episode/2L4GvMtB1nioWzIbN2fJq8",
        "externId": "2L4GvMtB1nioWzIbN2fJq8",
        "__v": 0,
        "updatedAt": null,
        "length": "24",
       
    },
    {
        "_id": "618ac7d68f7acf5b243480bf",
        "type": 8, //podcast
        "name": "",
        "image": "57abb8bb8902081f2cb51e81458136cff9b09f6c.jpg",
        "description": "",
        "year": "",
        "author": "",
        "url": "https://open.spotify.com/episode/2L4GvMtB1nioWzIbN2fJq8",
        "externId": "2L4GvMtB1nioWzIbN2fJq8",
        "__v": 0,
        "updatedAt": null,
        "length": "24",
       
    },
    {
        "_id": "6000674d0fc291429667c793",
        "type": 1, //movie
        "name": "",
        "year": "1900",
        "description": "",
        "image": "",
        "externId": "268",
        "__v": 0,
        "updatedAt": "2022-11-29T18:47:29.368Z",
        "length": "6",
        "originalTitle": "Batman",
   
    },
    {
        "_id": "333",
        "type": 1, //movie
        "name": "",
        "year": "1900",
        "description": "",
        "image": "",
        "externId": "268",
        "__v": 0,
        "updatedAt": "2022-11-29T18:47:29.368Z",
        "length": "6",
        "originalTitle": "Batman",
   
    },
].map(v => ({...v, score: ""})) //ADICIONA O KEY VALUE "score" a todos objetos do array




contentsFiltered = contents.filter(function( obj ) { //retorna apenas objetos do array que tenham o key value "name" !== ''
    return obj.name !== '';
});



console.log('somente com nome preenchido')
console.log(contentsFiltered)





/* ATRIBUIÇÃO DE PONTOS CONSOANTE REGRA (essa parte do codigo acho que pode ser mais performatica e melhorada) */ 
contentsFiltered.forEach(element => { 
    switch (element.type) {//case type of content
      case 1: case 2://MOVIE AND TV SHOW
          var newScore = 6; //Para filmes e tv show ja começa com pontuação 4
       
          if(element.name !== ""){
            newScore +=1
          }
          if(element.year !== ""){
            newScore +=1
          }
          if(element.year == ""){
            element.year == "0"
          }
          if(element.description !== ""){
            newScore +=1
          }
          if(element.image !== ""){
            newScore +=1
          }
          element.score = newScore; //atribui os pontos ao key score
          
          break;
    
      case 16:
          var newScore = 0;
          
          if(element.name !== ""){
          newScore +=1
          }
          if(element.year !== ""){
              newScore +=0.5
          }
          if(element.year == ""){
              element.year == "0"
          }
          if(element.description !== ""){
              newScore +=0.5
          }
          if(element.image !== ""){
              newScore +=1
          }
          if(element.author !== ""){
              newScore +=1
          }
          element.score = newScore; //atribui os pontos ao key score
      break;
  
      case 4:
          var newScore = 0;
         
          if(element.name !== ""){
              newScore +=1
          }
          if(element.year !== ""){
              newScore +=1
          }
          if(element.year == ""){
              element.year == "0"
          }
          if(element.image !== ""){
              newScore +=1
          }
          if(element.author !== ""){
              newScore +=1
          }
          element.score = newScore; //atribui os pontos ao key score
      break;
  
      case 8:
          var newScore = 0;
         
          if(element.name !== ""){//if id is NOT empty
              newScore +=1
          }
          if(element.year !== ""){
              newScore +=1
          }
          if(element.year == ""){
              element.year == "0"
          }
          if(element.description !== ""){//if id is NOT empty
              newScore +=1
          }
          if(element.image !== ""){
              newScore +=1
          }
          element.score = newScore; //atribui os pontos ao key score
  }
  
  return contentsFiltered;
  
  });

 
//faz o sorting e ordena por score e ano
contentsFiltered.sort(function (rank1, rank2) {
    if (rank1.score > rank2.score) return -1;
    if (rank1.score < rank2.score) return 1;

     
    if (rank1.score === rank2.score && rank1.year < rank2.year) return 1;
    if (rank1.score === rank2.score && rank1.year > rank2.year) return -1;
    return contentsFiltered
});

console.log(contentsFiltered, '')



//DEMO EXAMPLE - MOCK (apenas para visualizacao nesse mock )

var d1 = document.getElementById('teste');
contents.forEach(el => {

  switch (el.type) {//case type of content
  case 1:
    el.type = 'MOVIE'
    break;
  case 2:
    el.type = 'TV SHOW'
    break;
  case 16:
    el.type = 'BOOKS'
    break;
  case 4:
    el.type = 'BOOKS'
    break;
  case 8:
    el.type = 'PODCAST' 
}



d1.insertAdjacentHTML('beforeend', 

'<div class="content-movies"><p class="label">NAME: <span>'+el.name+'</span></p><p class="label">DESCRIPTION: <span>'+el.description+'</span></p><p class="label">YEAR: <span>'+el.year+'</span></p><p class="label">AUTHOR: <span>'+el.author+'</span></p><p class="label">IMAGE: <span>'+el.image+'</span></p><p class="label">TYPE: <span>'+el.type+'</span></p><p class="label">SCORE: <span>'+el.score+'</span></p></div>'
); 
    
}); 
