  // let vowels = ['A', 'E', 'I', 'O', 'U'];
  // let consonants = [
  //   'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 
  //   'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 
  //   'X', 'Z', 'Y'];
  function pigLatin(inputArray) {
    let isConsonant = true;

    for(let i =0; i < inputArray.length; i++) {
      let firstLetter = inputArray[0];
      console.log(firstLetter);

      // if(vowels.indexOf(firstLetter.toUpperCase()) )
    }
  }

  $(document).ready(function() {
    $("#pig-form").submit(function(event) {
      event.preventDefault();
  
      let input = $("#word").val();
      let inputArray = input.split("");
      console.log(inputArray);
      pigLatin(inputArray);
    });
  });
  

  