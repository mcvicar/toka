<template>
<div>
  <div class="edit">
    <div id="editor">
      <h1>You're the writer...</h1>
      <div id="editorjs"></div>
    </div>
    <div id="statistics">
     <h2>Readability</h2>
     <p>{{ statistics.readability }} Grade<br>
     <span>Ideally it should be at 9</span>
     </p>
     <p>{{ statistics.readingTime }} min <br>
     Estimated reading time</p>
     <div id="keywords">
       <h2>Keywords</h2>
         <ul>
           <li v-for="(index, keyword) in statistics.keywords" v-bind:key="index"><span v-bind:style="{ fontSize: '1.'+index+'rem' }">{{ keyword }}</span></li>
         </ul>
     </div>
    </div>
  </div>
  <div class="edit">
    <div id="seo">
      <h2>SEO content</h2>
      <div class="og_image"></div>
      <p>
      <label>Content title</label>
      <input v-model="seo.title" placeholder="Title" type="text" @change="setSlug">
      <span class="seo-title-counter">{{ seoTitleCount }}</span>
      </p>
      <p>
      <label>Content description</label>
      <textarea v-model="seo.description" placeholder="Add description"></textarea>
      <span class="seo-description-counter">{{ seoDescriptionCount }}</span>
      </p>
      <p>
      <label>Content slug</label>
      <input v-model="seo.slug" placeholder="Add a slug" type="text">
      <span class="seo-slug-preview">{{url}}/{{ seo.slug }}</span>
      </p>
    </div>
    <div id="metapreview">
      <h2>SEO Preview</h2>
      <h3><span>Google</span></h3>
        <div class="card-seo-google">
          <span class="title">{{ title }}</span>
          <div class="url">
            <span class="url-title">{{ url }}/{{ seo.slug }}</span>
            <span class="url-arrow"></span>
          </div>
          <span class="description">
            {{ description }}
          </span>
        </div>
      <h3><span>Facebook</span></h3>
      <div class="card-seo-facebook">
        <div class="image" style="background-image: url(/placeholder.png)"></div>
        <div class="text">
          <span class="link">{{ url }}/{{ seo.slug }}</span>
          <div class="content">
            <div style="margin-top:5px">
              <div class="title">{{ title }}</div>
            </div>
            <span class="description">{{ description }}</span>
          </div>
        </div>
      </div>
      <h3><span>Twitter</span></h3>
        <div class="card-seo-twitter">
          <div class="image" style="background-image: url(/placeholder.png)"></div>
          <div class="text">
            <span class="title">{{ title }}</span>
            <span class="description">{{ description }}</span>
            <span class="link">{{ url }}/{{ seo.slug }}</span>
          </div>
        </div>
      <h3><span>Pinterest</span></h3>
      <div class="card-seo-pinterest">
        <div class="image">
          <img src="placeholder.png">
        </div>
      <div class="content">
        <div class="title">{{ seo.slug }}</div>
          <div class="dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
      </div>
      <h3><span>LinkedIn</span></h3>
        <div class="card-seo-linkedin">
            <div class="image" style="background-image: url(/placeholder.png);"></div>
            <div class="text">
              <div class="content">
                <div class="title">{{ title }}</div>
                <span class="link">{{ url }}/{{ seo.slug }}</span>
              </div>
            </div>
        </div>
      <h3><span>Slack</span></h3>
        <div class="card-seo-slack">
          <div class="bar"></div>
          <div class="content">
            <div class="flex">
              <img class="favicon js-preview-favicon" src="favicon.ico"> <span class="link">{{ url }}/{{ seo.slug }}</span>
            </div>
            <div class="title">{{ title }}</div>
              <span class="description">{{ description }}</span>
              <div class="image" style="background-image: url(placeholder.png); height: 187.2px;"></div>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import EditorJS from '@editorjs/editorjs'; 
import Header from '@editorjs/header'; 
import List from '@editorjs/list'; 
import Embed from '@editorjs/embed'; 
import Quote from '@editorjs/quote'; 
import { ScoringFactory } from '../../services/scoringfactory'

export default {
  data: function () {
    return {
      content: {},
      url: "http://www.example.com",
      editor: null,
      statistics: {
        readability: 0,
        readingTime: 0,
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
      }
    }
  },
  mounted() {
    this.editor = new EditorJS({
      holder: 'editorjs',
      placeholder: 'Let`s write an awesome story together!',
      logLevel: 'ERROR',
      tools: { 
        header: Header, 
        list: List,
        embed: Embed,
        quote: Quote
      },
      onChange: () => this.setStats()
    });
  },
  computed: {
    seoSlugCount() {
      return this.charactersLeft("slug");
    },
    seoTitleCount() {
      return this.charactersLeft("title");
    },
    seoDescriptionCount() {
      return this.charactersLeft("description");
    }
  },
  methods: {
    save() {
      this.save().then(saved => this.content = saved)
    },
    setStats() {
      var context = this;
      this.editor.save().then(function(saved) {
      context.statistics.readability = ScoringFactory.getReadingScore(saved);
      context.statistics.readingTime = ScoringFactory.getEstimatedReadingTime(saved);
      context.statistics.keywords = ScoringFactory.getKeywords(saved);
      });
    },
    setSlug(evt) {
      this.seo.slug = this.slugify(evt.target.value);
    },
    charactersLeft(counter) {
      var char = this.seo[counter].length,
      limit = this.seo.max[counter];
      return (limit - char) + " / " + limit + " recommended characters remaining";
    },
    slugify(title) {
      const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
      const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
      const p = new RegExp(a.split('').join('|'), 'g');

      return title.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(p, c => b.charAt(a.indexOf(c)))
        .replace(/&/g, '-and-')
        .replace(/^-+/, '')
        .replace(/-+$/, '')
}
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
#editor, #statistics, #metapreview, #seo {
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
#seo label {
  display: block;
}, 
#seo .seo-title-counter, #seo .seo-description-counter, #seo .seo-slug-preview {
  display: block;
},
.og_image {
    background-image: url("/placeholder.png");
    background-color:#63696c;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 140px;
    border: 1px solid #dde5e8;
    border-radius: 8px;
    margin-bottom: 1em;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
#metapreview h3{
    position: relative;
    margin: 1.75em 0 1em;
}
#metapreview h3 span{
    position: relative;
    background: #fff;
    padding-right: 12px;
}
#metapreview h3:before {
    content: '';
    position: absolute;
    top: 15px;
    right: 0;
    width: 100%;
    height: 1px;
    background: #E0E7F1;
}
.card-seo-google {
    position: relative;
    display: block;
    border-radius: 8px;
    font-size: 14px;
    line-height: 20px;
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: subpixel-antialiased;
}
.card-seo-google .title {
    display: block;
    letter-spacing: normal;
    color: #1a0dab;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.card-seo-google .url {
    display: block;
    height: 17px;
    white-space: nowrap;
}
.card-seo-google .url-title {
    position: relative;
    top: -2px;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: normal;
    color: #006621;
}
.card-seo-google .url-arrow {
    display: inline-block;
    vertical-align: middle;
    margin-top: -4px;
    margin-left: 3px;
    border-width: 5px 4px 0 4px;
    border-style: solid;
    border-color: #006621 transparent;
}
.card-seo-google .description {
    color: #545454;
    font-size: 13px;
    line-height: 1.4;
    word-wrap: break-word;
}
.card-seo-facebook {
    cursor: pointer;
    position: relative;
    display: block;
    background-color: #ffffff;
    margin: 0;
    overflow: hidden;
    font-size: 14px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', sans-serif;
    -webkit-font-smoothing: subpixel-antialiased;
    transition: background-color .15s ease-in-out,border-color .15s ease-in-out;
    width: 500px;
}
.card-seo-facebook .image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: 1px solid #dadde1;
    width: 500px;
    height: 261px;
}
.card-seo-facebook .text {
    padding: 10px 12px;
    color: #1d2129;
    border: 1px solid #dadde1;
    border-top: none;
    background: #f2f3f5;
}

.card-seo-facebook .link {
    border-collapse: separate;
    color: #606770;
    direction: ltr;
    display: block;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 12px;
    height: 11px;
    line-height: 11px;
    overflow-x: hidden;
    overflow-y: hidden;
    text-align: left;
    text-overflow: ellipsis;
    text-transform: uppercase;
    user-select: none;
    white-space: nowrap;
    width: 501px;
    word-wrap: break-word;
    -webkit-border-horizontal-spacing: 0px;
    -webkit-border-vertical-spacing: 0px;
    -webkit-font-smoothing: antialiased;
}
.card-seo-facebook .content {
    border-collapse: separate;
    color: #4b4f56;
    direction: ltr;
    display: block;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 12px;
    height: 46px;
    line-height: 14.4px;
    max-height: 46px;
    overflow-x: hidden;
    overflow-y: hidden;
    text-align: left;
    user-select: none;
    word-wrap: break-word;
    -webkit-border-horizontal-spacing: 0px;
    -webkit-border-vertical-spacing: 0px;
    -webkit-font-smoothing: antialiased;
}
.card-seo-facebook .title {
    margin-top: 5px;
    border-collapse: separate;
    color: #1d2129;
    cursor: pointer;
    direction: ltr;
    display: inline;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 600;
    height: auto;
    letter-spacing: normal;
    line-height: 18px;
    text-align: left;
    text-decoration-color: #1d2129;
    text-decoration-line: none;
    text-decoration-style: solid;
    transition-delay: 0s;
    transition-duration: 0.1s;
    transition-property: color;
    transition-timing-function: ease-in-out;
    user-select: none;
    white-space: normal;
    width: auto;
    word-wrap: break-word;
    -webkit-border-horizontal-spacing: 0px;
    -webkit-border-vertical-spacing: 0px;
    -webkit-font-smoothing: antialiased;
}
.card-seo-facebook .description {
    border-collapse: separate;
    color: #606770;
    direction: ltr;
    display: -webkit-box;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 14px;
    height: 18px;
    line-height: 20px;
    margin-top: 3px;
    max-height: 80px;
    overflow-x: hidden;
    overflow-y: hidden;
    text-align: left;
    text-overflow: ellipsis;
    user-select: none;
    white-space: normal;
    word-break: break-word;
    word-wrap: break-word;
    -webkit-border-horizontal-spacing: 0px;
    -webkit-border-vertical-spacing: 0px;
    -webkit-box-orient: vertical;
    -webkit-font-smoothing: antialiased;
    -webkit-line-clamp: 1;
}
.card-seo-twitter {
    cursor: pointer;
    position: relative;
    display: block;
    background-color: #ffffff;
    border-style: solid;
    border-color: #E1E8ED;
    border-width: 1px;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    transition: background-color .15s ease-in-out,border-color .15s ease-in-out;
    width: 506px;
    border-radius: 0.42857em;
    margin-left: 0;
    overflow: hidden;
}
.card-seo-twitter .image {
    width: 504px;
    height: 252px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    overflow: hidden;
    background-size: cover;
    background-color: #E1E8ED;
    background-repeat: no-repeat;
    background-position: center;
    border-style: solid;
    border-color: inherit;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 1px;
}
.card-seo-twitter .text {
    padding: 0.75em 1em;
}
.card-seo-twitter .title {
    display: block;
    margin: 0 0 0.15em;
    letter-spacing: normal;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 1em;
    font-weight: bold;
    line-height: 1.3em;
    max-height: 1.3em;
}
.card-seo-twitter .description {
    height: 2.6em;
    max-height: 2.6em;
    margin-top: 0.32333em;
    line-height: 1.3em;
    letter-spacing: normal;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    display: -webkit-box;
}
.card-seo-twitter .link {
    display: block;
    text-transform: lowercase;
    line-height: 1.3125;
    letter-spacing: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 0.32333em;
    color: #8899A6;
}
.card-seo-linkedin {
    width: 552px;
    cursor: pointer;
    position: relative;
    display: block;
    background-color: #ffffff;
    overflow: hidden;
    font-size: 14px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', sans-serif;
    -webkit-font-smoothing: subpixel-antialiased;
    transition: background-color .15s ease-in-out,border-color .15s ease-in-out;
}
.card-seo-linkedin .image {
    width: 552px;
    height: 288px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: 1px solid #dadde1;
}
.card-seo-linkedin .text {
    padding: 8px 16px;
    color: #1d2129;
    border: 1px solid #e6e9ec;
    border-top: none;
    background: #f3f6f8;
    display: flex;
    flex-grow: 1;
}
.card-seo-linkedin__title {
    display: block;
    direction: ltr;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: rgba(0,0,0,0.9);
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-height: 40px;
}
.card-seo-linkedin .link {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: rgba(0,0,0,0.6);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 16px;
}
.card-seo-pinterest {
    color: #211922;
    width: 236px;
    column-rule-color: #211922;
    perspective-origin: 130px 166px;
    transform-origin: 130px 166px;
    caret-color: #211922;
    cursor: zoom-in;
    border: 0px none #211922;
    font: normal normal 400 normal 12px / normal "Helvetica Neue", Helvetica, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ Ｐゴシック", arial, sans-serif;
    outline: #211922 none 0px;
    transition: transform 0.2s ease 0s, -webkit-transform 0.2s ease 0s;
}
.card-seo-pinterest .image {
    position: relative;
    width: 236px;
    border-radius: 8px;
    overflow: hidden;
    background-color:#63696c;
}
card-seo-pinterest .image img {
    max-width: 100%;
    vertical-align: middle;
}
.card-seo-pinterest .image img:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.05);
}

.card-seo-pinterest .content {
    display: flex;
    padding: 4px 8px;
}
.card-seo-pinterest .title {
    color: #333333;
    letter-spacing: -0.4px;
    text-align: left;
    text-decoration: none solid #333333;
    text-size-adjust: 100%;
    word-wrap: break-word;
    column-rule-color: #333333;
    hyphens: auto;
    perspective-origin: 0px 0px;
    transform-origin: 0px 0px;
    caret-color: #333333;
    border: 0px none #333333;
    font: normal normal 700 normal 14px / 16.8px -apple-system, system-ui, "Segoe UI", "Roboto Oxygen-Sans", Ubuntu, Cantarell, "“Fira Sans”", "“Droid Sans”", "Helvetica Neue", Helvetica, "\\30D2ラギノ角ゴPro W3", "Hiragino Kaku Gothic Pro", "\\30E1イリオ", Meiryo, "ＭＳ Ｐゴシック", Arial, sans-serif;
    outline: #333333 none 0px;
}
.card-seo-pinterest .dots {
    display: flex;
    margin-top: 6px;
}
.card-seo-pinterest .dot {
    width: 3px;
    height: 3px;
    border-radius: 1.5px;
    background: #8e8e8e;
    margin-left: 2px;
}
.card-seo-slack {
    display: flex;
    font-family: 'Noto Sans', 'NotoSansJP','Slack-Lato', 'Lato','appleLogo', sans-serif;
    font-size: 15px;
    line-height: 1.46666667;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
}
.card-seo-slack .bar {
    flex-shrink: 0;
    width: 4px;
    background-color: #e8e8e8;
    border-radius: 8px;
}
.card-seo-slack .content {
    padding: 0 12px;
    max-width: 520px;
}
.card-seo-slack .favicon {
    border-radius: 2px;
    box-sizing: content-box;
    height: 16px;
    margin-right: 6px;
    overflow: hidden;
    vertical-align: middle;
    width: 16px;
}
.card-seo-slack .link {
    color: #717274;
    flex: 1;
    overflow: hidden;
}
.card-seo-slack .title {
    color: #0576b9;
    font-weight: 700;
    font-variant-ligatures: common-ligatures;
}
.card-seo-slack .description {
    color: #2c2d30;
}
.card-seo-slack .image {
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1);
    margin-top: 5px;
    max-width: 360px;
    height: 189px;
    background-size: cover;
    background-position: 50%;
}
#keywords ul {
    padding: 0;
}
#keywords li {
    display: inline;
}
#keywords li:after {
    content: " "
}
</style>