searchButton.addEventListener('click',searchWeather);

function searchWeather(){
 //api-keys f3e6781a4057895487d2d9557c23ce4f

 const cityName=searchCity.value;
 if (cityName.length===0){
 return alert('please enter a valid city');
 }
 
 const http = new XMLHttpRequest();
 const apiKey ='f3e6781a4057895487d2d9557c23ce4f';
 const url ='api.openweathermap.org/data/2.5/forecast?q= + cityName' 

}