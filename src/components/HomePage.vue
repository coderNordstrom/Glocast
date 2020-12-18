<template>
  <div> 
    <!-- <input type="button" value="Get temp" @click="getTemp">-->
   <h1>{{message}}</h1>
  <p>- Your global weather forecast provider -</p>

  <div class="gridcontainer">

    <div id="griditem">
      <p>Washington</p>
    <img src="../assets/cloudy2.png">
    <p>{{$store.state.Washington}}</p></div>
  
    <div id="griditem">
      <p>London</p>
      <img src="../assets/overcast.png">
      <p>{{$store.state.London}}</p></div>

    <div id="griditem">
      <p>Stockholm</p>
      <img src="../assets/shower3.png">
      <p>{{$store.state.Stockholm}}</p></div>

    <div id="griditem">
      <p>Bryssel</p><img src="../assets/tstorm1.png">
    <p>{{$store.state.Bryssel}}</p></div>

    <div id="griditem">
      <p>Helsinki</p><img src="../assets/snow4.png">
    <p>{{$store.state.Helsinki}}</p></div>

    <div id="griditem">
      <p>Oslo</p><img src="../assets/sunny.png">
    <p>{{$store.state.Oslo}}</p></div>

    <div id="griditem">
      <p>Paris</p><img src="../assets/overcast.png">
    <p>{{$store.state.Paris}}</p></div>

    <div id="griditem">
      <p>Berlin</p><img src="../assets/sunny.png">
    <p>{{$store.state.Berlin}}</p></div>

    <div id="griditem">
      <p>Dublin</p><img src="../assets/tstorm3.png">
    <p>{{$store.state.Dublin}}</p></div>

    <div id="griditem">
      <p>Tokyo</p><img src="../assets/shower3.png">
    <p>{{$store.state.Tokyo}}</p></div>

    <div id="griditem">
      <p>Toronto</p><img src="../assets/sunny.png">
    <p>{{$store.state.Toronto}}</p></div>

     <div id="griditem">
      <p>Prag</p><img src="../assets/sunny.png">
    <p>{{$store.state.Prag}}</p></div>
    
    </div>
    </div>
</template>

<script>

export default {
  name: 'HomePage',
  
    created() {
      
      fetch("http://api.openweathermap.org/data/2.5/weather?APPID=49e3c78de260e13518211b8dc15d7c0e&q=Washington&units=metric")
        .then(response => response.json())
        .then(result => {
          console.log(result);
          this.$store.commit("setWashington", result.main.temp);
        })
        fetch("http://api.openweathermap.org/data/2.5/weather?APPID=49e3c78de260e13518211b8dc15d7c0e&q=London&units=metric")
        .then(response => response.json())
        .then(result => {
          this.$store.commit("setLondon", result.main.temp);
        })
        fetch("http://api.openweathermap.org/data/2.5/weather?APPID=49e3c78de260e13518211b8dc15d7c0e&q=Stockholm&units=metric")
        .then(response => response.json())
        .then(result => {
          this.$store.commit("setStockholm", result.main.temp);
        })
        fetch("http://api.openweathermap.org/data/2.5/weather?APPID=49e3c78de260e13518211b8dc15d7c0e&q=Bryssel&units=metric")
        .then(response => response.json())
        .then(result => {
          this.$store.commit("setBryssel", result.main.temp);
        })
        fetch("http://api.openweathermap.org/data/2.5/weather?APPID=49e3c78de260e13518211b8dc15d7c0e&q=Helsinki&units=metric")
        .then(response => response.json())
        .then(result => {
          this.$store.commit("setHelsinki", result.main.temp);
        })
          fetch("http://api.openweathermap.org/data/2.5/weather?APPID=49e3c78de260e13518211b8dc15d7c0e&q=Oslo&units=metric")
        .then(response => response.json())
        .then(result => {
          this.$store.commit("setOslo", result.main.temp);
        })
           fetch("http://api.openweathermap.org/data/2.5/weather?APPID=49e3c78de260e13518211b8dc15d7c0e&q=Paris&units=metric")
        .then(response => response.json())
        .then(result => {
          this.$store.commit("setParis", result.main.temp);
        })

        fetch("http://api.openweathermap.org/data/2.5/weather?APPID=49e3c78de260e13518211b8dc15d7c0e&q=Berlin&units=metric")
        .then(response => response.json())
        .then(result => {
          this.$store.commit("setBerlin", result.main.temp);
        })

        fetch("http://api.openweathermap.org/data/2.5/weather?APPID=49e3c78de260e13518211b8dc15d7c0e&q=Dublin&units=metric")
        .then(response => response.json())
        .then(result => {
          this.$store.commit("setDublin", result.main.temp); 
        
        })
        fetch("http://api.openweathermap.org/data/2.5/weather?APPID=49e3c78de260e13518211b8dc15d7c0e&q=Tokyo&units=metric")
        .then(response => response.json())
        .then(result => {
          this.$store.commit("setTokyo", result.main.temp);
        })
          fetch("http://api.openweathermap.org/data/2.5/weather?APPID=49e3c78de260e13518211b8dc15d7c0e&q=Toronto&units=metric")
        .then(response => response.json())
        .then(result => {
          this.$store.commit("setToronto", result.main.temp); 
        })
         fetch("http://api.openweathermap.org/data/2.5/weather?APPID=49e3c78de260e13518211b8dc15d7c0e&q=Prag&units=metric")
        .then(response => response.json())
        .then(result => {
          this.$store.commit("setPrag", result.main.temp);
        })
        },
        data() {
          return {
            message: this.title
          }
        },
     props: {
    title: String
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.gridcontainer {
    color: black;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    grid-gap: 1em;
    grid-auto-rows:minmax(100px, auto);
}

p {
  font-size: x-large;
  color: darkblue;
  font-weight: bolder;
}

h1 {
  color:darkblue;
  font-size:xx-large;
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
  color: blue;
}
</style>