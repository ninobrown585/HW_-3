  var generateBtn = document.getElementById('generate');
  
  // Array of uppercase characters to be included in password
  var capLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  // Array of lowercase characters to be included in password
  var lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  // Array of special characters to be included in password
  var specialChar = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',', ')','(','}','{',']','[','~','-','_','.'];
  // Array of numeric characters to be included in password
  var numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  function btnClicked() {
    // ask user for input length and store input into passwordLen//
      var passwordLen = parseInt(
          prompt("Please enter your desired password length with a minimum of eight characters and max 128")
      );

      while (passwordLen > 128 || passwordLen < 8) {
        var passwordLen = parseInt(
          prompt("Please enter your desired password length with a minimum of eight characters and max 128")
        );
      };
      // Users choice being stored in variables //
      alert('please choose atleast one ' )
      var capLet = confirm('WOuld you like capital letters included?');      
      var lowerLet = confirm('WOuld you like lowercase letters included?');
      var specialPwdChar = confirm('WOuld you like Special Characters included?');
      var pwdNum = confirm('WOuld you like numbers included?');


      /*detects if the user doesn't make an input */
      if (capLet===false && lowerLet=== false && specialPwdChar=== false && pwdNum=== false) {
        alert('no input detected');
      };

      /*stores chosen options with the values of those options*/
      var passwordPool =  {
        capLet: capLet,
        lowerLet: lowerLet,
        specialPwdChar: specialPwdChar,
        pwdNum: pwdNum,
        passwordLen: passwordLen
      };
      /* random function generator */
      function chooseRandom(getRand) {
        var indexContained = Math.floor(Math.random() * getRand.length);
        var ranIndex = getRand[indexContained];
        return ranIndex;
      }

      function passwordSearch () {
        var searchChoices = [];

        var finalRandomChosen = [];

        if(passwordPool.capLet) {
          finalRandomChosen.push(chooseRandom(capLetters));
        };

        if(passwordPool.lowerLet) {
          finalRandomChosen.push(chooseRandom(lowerLetters));
        };

        if(passwordPool.specialPwdChar) {
          finalRandomChosen.push(chooseRandom(specialChar));
        };

        if(passwordPool.pwdNum) {
          finalRandomChosen.push(chooseRandom(numberList));
        };
        
      };
      console.log(finalRandomChosen);
    };
  
    



