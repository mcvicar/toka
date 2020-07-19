<template>
<div class="edit">
  <div id="contentType">
    <h2>Content Type</h2>
    <p>
    <label>Content type title</label>
    <input placeholder="Title" type="text">
    </p>
    <p>
    <label>Content type description</label>
    <textarea placeholder="Add description"></textarea>
    </p>
    <h3>Enable content blocks</h3>
    <ul>
      <li>
        <label>
        <toggle-button v-model="header"/> Header
        </label>
      </li>
      <li>
        <label>
        <toggle-button v-model="list"/> List
        </label>
      </li>
      <li>
        <label>
        <toggle-button v-model="embed"/> Embed
        </label>
      </li>
      <li>
        <label>
        <toggle-button v-model="quote"/> Quote
        </label>
      </li>
    </ul>
  </div>
  <div id="helper">
    <h2>Help text</h2>
  </div>
</div>
</template>

<script>
import { ToggleButton } from 'vue-js-toggle-button'

export default {
  components: {
    ToggleButton
  },
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
#contentType, #helper {
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
</style>
