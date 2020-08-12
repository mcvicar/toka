<template>
<div>
  <div class="edit">
    <div id="basics">
      <p>
      <label>Site Name</label>
      <input v-model="sitename" placeholder="Site Name" type="text">
      </p>

      <p>
      <label>Default URL</label>
      <input v-model="url" placeholder="Your URL" type="text">
      </p>

      <p>
      <label for="default-language-choice">Default language</label>
      <available-languages v-model="languageDefault" id="default-language-choice" listId="available-language-choices"></available-languages>
      </p>
    </div>
    <div id="favicon">
      <p>Favicon stuff should go here</p>
    </div>
  </div>
  <div class="edit">
    <!-- Really should make the SEO stuff a component -->
    <div id="seo">
      <h2>Default SEO content</h2>
      <p>
      <label>Content title</label>
      <input v-model="seo.title" placeholder="Title" type="text">
      <span class="seo-title-counter">{{ seoTitleCount }}</span>
      </p>
      <p>
      <label>Content description</label>
      <textarea v-model="seo.description" placeholder="Add description"></textarea>
      <span class="seo-description-counter">{{ seoDescriptionCount }}</span>
      </p>
      <p>
    </div>
    <div id="socialmedia">
      <h2>Default Social Media profiles</h2>
      <ul>
        <li>Facebook:</li>
        <li>Twitter:</li>
        <li>Instagram:</li>
        <li>WhatsApp:</li>
        <li>Pinterest:</li>
        <li>Snapchat:</li>
        <li>LinkedIn:</li>
        <li>Add another...</li>
      </ul>
    </div>
  </div>

  <div id="crud-bar">
    <input type="button" value="Cancel"> <input type="button" value="Create" >
  </div>

</div>
</template>

<script>
import availableLanguages from '../../components/languages/available-languages.vue'

export default {
  components: {
    "available-languages": availableLanguages
  },
  data: function () {
    return {
      sitename: null,
      url: "http://www.example.com",
      languageDefault: null,
      languages: [],
      socialmedia: {
        facebook: null,
        twitter: null,
        instagram: null,
        whatsapp: null,
        pinterest: null,
        snapchat: null,
        linkedin: null,
      },
      seo: {
        title: "",
        description: "",
        slug: "",
        max: {
          slug: 255,
          title: 60,
          description: 160
        },
        min: {
          slug: 1,
          title: 20,
          description: 50
        }
      },
    }
  },
  computed: {
    seoTitleCount() {
      return this.charactersLeft("title");
    },
    seoDescriptionCount() {
      return this.charactersLeft("description");
    }
  },
  methods: {
    charactersLeft(counter) {
      var char = this.seo[counter].length,
      limit = this.seo.max[counter];
      return (limit - char) + " / " + limit + " recommended characters remaining";
    },
  }
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
#basics, #socialmedia, #seo, #favicon {
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
#seo .seo-title-counter, #seo .seo-description-counter, #seo .seo-slug-preview {
  display: block;
}
</style>
