function createRandomTwoDArray(w, h) {
     var randomTwoDArray = [];
     for (let i = 0; i < h; i++) {
          var randomOneDArray = [];
          for (let i = 0; i < w; i++) {
               randomOneDArray.push(Math.round(Math.random()) ? "█" : "░");
          }                   
          randomTwoDArray.push(randomOneDArray)
     }
     return randomTwoDArray;
}

console.log(createRandomTwoDArray(80, 24))