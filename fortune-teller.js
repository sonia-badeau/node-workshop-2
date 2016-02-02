var fortune = require("./library/fortune.js"); //fait appel à fortune.js
/*console.log("This will loop " + process.argv[2] + " times.");*/
for (var i = 0; i < process.argv[2]; i++) {
  console.log(fortune());  
}