import rs from 'text-readability'; 

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
    return rs.fleschKincaidGrade(tempContent); 
  },
  
  getEstimatedReadingTime: function(content) {
    var tempContent = this.blockToText(content.blocks); 
    const wordsPerMinute = 200; // Average case.
    let estimate;

    let textLength = tempContent.length; // Split by words
    if(textLength > 0){
      estimate = Math.ceil(textLength / wordsPerMinute);
    }  
    return estimate;
  }

};