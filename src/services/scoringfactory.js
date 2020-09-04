import rs from 'text-readability';
import ke from 'keyword-extractor';

export const ScoringFactory = {
  blockToText: function(blocks) {
    var content = "";
    blocks.forEach(function(element) {
      content += element.data.text + " ";
    });
    return content;
  },

  getReadingScore: function(content) {
    var tempContent = this.blockToText(content.blocks);
    var score = Math.round(rs.fleschKincaidGrade(tempContent));
    if(Math.sign(score) > 0) {
      return score;
    } else {
      return 0;
    }

  },

  getEstimatedReadingTime: function(content) {
    var tempContent = this.blockToText(content.blocks);
    const wordsPerMinute = 200; // Average case.
    let estimate = 1;

    let textLength = tempContent.length;
    if(textLength > 0){
      estimate = Math.ceil(textLength / wordsPerMinute);
    }
    return estimate;
  },

  getKeywords: function(content) {
    var keywords = {};
    var tempContent = this.blockToText(content.blocks);
    var extraction_result = ke.extract(tempContent,{
      language:"english",
      remove_digits: true,
      return_changed_case:true,
      remove_duplicates: false
    });

    extraction_result.forEach(function(x) { keywords[x] = (keywords[x] || 0)+1; });

    return keywords;
  }

};
