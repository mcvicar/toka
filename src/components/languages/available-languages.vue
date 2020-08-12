<template>
<div>
  <input :list="listId" :id="id" :name="id" :value="value" />
  <datalist :id="listId">
      <option v-for="language in languages" v-bind:key="language.spec">{{language.spec}} - {{language.name}}</option>
  </datalist>
</div>
</template>

<script>
import languageData from './languages.json';

export default {
    props: {
        value: String,
        id: String,
        listId: String
    },

    data () {
        return {
          languages: languageData
        };
    },
}
</script>
