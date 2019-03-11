const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init() {
  function onKeyDownHandler(e) {
    const key = parseInt(e.which || e.detail || e.location); 
  
    if (key === code[index]) {
      index++; 

      if (index === code.length) {
        alert("You did it!");
        
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}

init()