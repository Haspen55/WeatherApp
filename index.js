


//façon n°1----------->
function inserer(data) {


celcius = (data.main.temp) -273,15;
 celcius = Math.round(celcius);
 console.log(celcius);
 temp_ville = "The temperature at  "+ data.name+" is  "+ celcius+ " °C";

     $('#span2').html(temp_ville)
    $('#span2').css('display','inline')

 }
 /*
   function chuckNorris(data) {
    // i = un chiffre random entre 0 et 619
    i = Math.floor(Math.random() * 619) + 0;
    console.log(i);
       chukeJoke = data.value[i].joke;
       console.log(chukeJoke)

       $('div').html(chukeJoke)
   }

  */

document.addEventListener("keydown",function presseBoutton(e) {
key = e.keyCode;
if(key==13){
    entree = $('.entreeVille').val();


  url =  'https://api.openweathermap.org/data/2.5/weather?q='+entree+'&APPID=d8ed4c7a0349166691c6629ab7798b9b'
  $.get(url).done(function (data) {
celcius = (data.main.temp) -273,15;
 celcius = Math.round(celcius);
 console.log(celcius);
 temp_ville = "The temperature at "+ data.name+" is  "+ celcius+ " °C";

     $('#span2').html(temp_ville)
    $('#span2').css('display','inline')

  }).fail(function () {

  }).always(function () {

  })
}
})

function ville() {
    entree = $('.entreeVille').val();
url =  url =  'https://api.openweathermap.org/data/2.5/weather?q='+entree+'&APPID=d8ed4c7a0349166691c6629ab7798b9b'


    $('#soumettre').click(function () {
  $.get(url,inserer).done(function () {

  }).fail(function () {
$('#span1').text('desolé cette ville n\'existe pas  ')
  }).always(function () {

  })


})
    /*
    $('#soumettre').click(function () {
      url2 = 'http://api.icndb.com/jokes/';
      $.get(url2,chuckNorris).done(function () {

      }).fail(function () {
         console.log('qquechose a plante ')
      }).always(function () {

      })
    })

     */
}
/*
 façon n°2 ----------->
function succes(data) {

celcius = (data.main.temp) -273,15;
 celcius = Math.round(celcius);
 console.log(celcius)
    $('#span1').text(celcius)
    $('#span2').css('display','inline')
}

function meteo() {

    url = 'http://api.openweathermap.org/data/2.5/weather?q=`${entree}`&appid=cbbe6f5286309c6a3ee3978b56e55a0f'
$.get(url,succes).done(function () {

}).fail(function () {
      $('#span1').text('Erreur veuillez choisir une autre ville merci')
}).always(function () {

})
}

 */


