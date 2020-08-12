<template>
  <div id="app">
    <header>
        <nav>
            <div><a href="/">Toka</a></div>
            <ul>
                <li><a href="#">Tenant Sites</a></li> <!-- Display as modal -->
                <li><a href="#">Available Countries</a></li> <!-- Display as modal -->
            <ul>
        </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/**
 * Picked colours from https://coolors.co/78c0a8-a72608-090c02-ffc07f-ffcf99
**/
:root {
  --amplify-primary-color: #78c0a8;
  --amplify-primary-tint: #FFCF99;
  --amplify-primary-shade: #FFC07F;
  --amplify-secondary-color: #2c3e50;
  --amplify-red: #A72608;
}

header {
  height: 60px;
  z-index: 10;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #78c0a8;
  postion: fixed;
  z-index: 10;
}

nav div {
  color: white;
  font-size: 2rem;
  line-height: 60px;
  position: absolute;
  top: 0;
  left: 2%;
}

nav div a {
  text-decoration: none;
  color:#fff;
}

nav ul {
  list-style-type: none;
  margin: 0 2% auto 0;
  padding-left: 0;
  text-align: right;
  max-width: 100%;
}
nav ul li {
  display: inline-block;
  line-height: 60px;
  margin-left: 10px;
}
nav ul li a {
  text-decoration: none;
  color: #2c3e50;
}

input[list="*"],
input[type="text"],
input[type="date"],
input[type="datetime"],
input[type="email"],
input[type="number"],
input[type="search"],
input[type="time"],
input[type="url"],
textarea,
select
{
  -webkit-transition: all 0.30s ease-in-out;
  -moz-transition: all 0.30s ease-in-out;
  -ms-transition: all 0.30s ease-in-out;
  -o-transition: all 0.30s ease-in-out;
  outline: none;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 100%;
  background: #fff;
  margin-bottom: 4%;
  border: 1px solid #ccc;
  padding: 3%;
  color: #555;
  font: 95% Arial, Helvetica, sans-serif;
}
input[list="*"],
input[type="text"]:focus,
input[type="date"]:focus,
input[type="datetime"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
input[type="search"]:focus,
input[type="time"]:focus,
input[type="url"]:focus,
textarea:focus,
select:focus
{
  box-shadow: 0 0 5px #43D1AF;
  padding: 3%;
  border: 1px solid #43D1AF;
}

input[type="submit"],
input[type="button"]{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 1.5%;
  background: #43D1AF;
  border-bottom: 2px solid #30C29E;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  color: #fff;
  text-transform: uppercase;
  margin-left:20px;
}
input[type="submit"]:hover,
input[type="button"]:hover{
  background: #2EBC99;
}

#crud-bar {
  border-top:8px solid #78C0A8;
  text-align: right;
  margin-top: 40px;
  padding-top: 40px;
  padding-right: 40px;
}
</style>
