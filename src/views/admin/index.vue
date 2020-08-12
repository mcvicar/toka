<template>
<div>
  <div id="banner">
    <router-link to="/admin/sites/new">Add a new site</router-link>
  </div>
  <div class="edit">
    <div id="types">
    <h2>Content Types</h2>
    <ul>
      <li>A list of content types</li>
      <li>goes here...</li>
    </ul>
    </div>
    <div id="blocks">
    <h2>Content Blocks</h2>
    <ul>
      <li>A list of content blocks</li>
      <li>goes here...</li>
    </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.edit {
  background-color: #fff;
  margin-left:0;
  margin-right:0;
  max-width:none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#types, #blocks {
  width:40%;
  margin:10px 5%;
  color: #555555;
  padding:1.2em 30px 1.2em 25px;
  border-left:8px solid #78C0A8;
  line-height:1.6;
  position: relative;
  float:left;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}
#banner a {
  display:block;
  background: #78C0A8;
  padding: 20px;
  color: #fff;
  text-transform:capitalize;
  text-decoration: none;
  font-weight: bold;
}
</style>
