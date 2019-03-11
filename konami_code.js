const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(e) {
  // Write your JavaScript code inside the init() function
  const key = parseInt(e.detail || e.location); 
  
    if (key === code[index]) {
      index++; 
      
      if (index === code.length) {
        alert("You did it!");
      }
    }
}