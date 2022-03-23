function showPhrase9(value) {
    var rangeInput = document.getElementById("range9");
    var value = rangeInput.value;

    if (value == 0) {
        document.getElementById("phrase9feat").innerHTML="0 Absent during observation";
    }
    if (value == 1) {
        document.getElementById("phrase9feat").innerHTML="1 Very low amount of this feature during observation";
    }

    if (value == 2) {
        document.getElementById("phrase9feat").innerHTML="2 Low amount of this feature during observation";
    }

    if (value == 3) {
        document.getElementById("phrase9feat").innerHTML="3 Average amount of this feature during observation";
    }

    if (value == 4) {
        document.getElementById("phrase9feat").innerHTML="4 More than average amount of this feature during observation";
    }

    if (value == 5) {
        document.getElementById("phrase9feat").innerHTML="5 Much more than average amount of this feature during observation";
    }
    if (value == 6) {
        document.getElementById("phrase9feat").innerHTML="6 Very high amount of this feature during observation";
    }

  }


  function showPhrase9a(value) {
      var rangeInput = document.getElementById("range9a");
      var value = rangeInput.value;

      if (value == 0) {
          document.getElementById("phrase9part").innerHTML="-3 I am so focused on this feature that it completely interferes with my participation";
      }
      if (value == 1) {
          document.getElementById("phrase9part").innerHTML="-2 This feature moderately interferes with my participation";
      }

      if (value == 2) {
          document.getElementById("phrase9part").innerHTML="-1 This feature mildly interferes with my participation";
      }

      if (value == 3) {
          document.getElementById("phrase9part").innerHTML="0 It does not seem to affect my participation";
      }

      if (value == 4) {
          document.getElementById("phrase9part").innerHTML="1 This feature mildly supports my participation";
      }

      if (value == 5) {
          document.getElementById("phrase9part").innerHTML="2 This feature moderately supports my participation";
      }
      if (value == 6) {
          document.getElementById("phrase9part").innerHTML="3 This feature completely supports my participation";
      }

    }
