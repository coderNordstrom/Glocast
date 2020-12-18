<template>
  <div>
    <p>Glocast</p>
        <div class=search-bar>
    <input type="text" size="40" v-on:keyup.enter="fetchCityData" v-model="city" placeholder="search city..." 
                >
    <!-- <p>{{city}}</p>>-->
   <br>
    <!-- <input type="button" value="Search!">>-->
    <p>{{name}}</p>
    <p>{{temp}}</p>
    <p>{{humidity}}</p>
    <p>{{windspeed}}</p>
    

  </div>
  </div>
</template>

<script>
export default {
  name: 'SearchPage',
 data() {
   return {
     city: null,
     temp: null,
     humidity:null,
     windspeed:null,
     name:null

   }
 },
 methods: {
   fetchCityData() { 
     let url = "http://api.openweathermap.org/data/2.5/weather?APPID=49e3c78de260e13518211b8dc15d7c0e&q=";
fetch(url+this.city+"&units=metric")
        .then(response => response.json())
        .then(result => {
          this.temp = "Temprature " + result.main.temp + "c";
          this.name = "Current weather conditions for " + result.name
          this.humidity = "Humidity " + result.main.humidity
          this.windspeed = "Wind speed " + result.wind.speed
        })
      } 
    }
  }
</script>


<style scoped>


p {
  font-size: x-large;
  color: darkblue;
  font-weight: bolder;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>