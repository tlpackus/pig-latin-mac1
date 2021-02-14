  // let vowels = ['A', 'E', 'I', 'O', 'U'];
  // let consonants = [
  //   'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 
  //   'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 
  //   'X', 'Z', 'Y'];


$(document).ready(function() {
  $("#pig-form").submit(function(event) {
    event.preventDefault();

    let input = $("#word").val();
    let inputArray = input.split("");
    consol

    function pigLatin(array) {
      for(let i =0; i < array.length; i++) {
        let firstLetter = array.indexOf(0);
        console.log(firstLetter);
      }
    }
  });
});
