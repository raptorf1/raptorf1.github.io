function messageMET() {
    var weight = document.getElementById("metweight").value;
    var height = document.getElementById("metheight").value;
    var w = Number(weight);
    var h = Number(height);
      
    if (w < 0 || h < 0 || w == 0 || h == 0) {
      alert("Please put numbers greater than 0 in both fields!");
    }

    if (w > 0 && h > 0) {
      var bmimet = w / (h / 100 * h / 100);
      var finalbmimet = parseFloat(bmimet.toFixed(2));
      ifmessagemetric();
    }

    function ifmessagemetric() {
    if (finalbmimet == 0) {alert ("Please put realistic numbers!");}
    if (finalbmimet > 0 && finalbmimet < 18.5) {alert ("Your BMI is " + finalbmimet + " and your status is Underweight. Pay regular visits to your fridge.");}
    if (finalbmimet == 18.5) {alert("Your BMI is " + finalbmimet + " and your status is Healthy. Right on! Kudos my friend!");}
    if (finalbmimet > 18.5 && finalbmimet < 25) {alert("Your BMI is " + finalbmimet + " and your status is Healthy. Right on! Kudos my friend!");}
    if (finalbmimet == 25) {alert("Your BMI is " + finalbmimet + " and your status is Overweight. Time for the gym subscription you always talked about.");}
    if (finalbmimet > 25 && finalbmimet < 30) {alert("Your BMI is " + finalbmimet + " and your status is Overweight. Time for the gym subscription you always talked about.");}
    if (finalbmimet == 30) {alert("Your BMI is " + finalbmimet + " and your status is Obese. Go spend one year at the nearest monastery.");}
    if (finalbmimet > 30) {alert("Your BMI is " + finalbmimet + " and your status is Obese. Go spend one year at the nearest monastery.");}
    }

    window.location.reload(true);
  }

function messageIMP() {
    var weightimp = document.getElementById("impweight").value;
    var heightimpf = document.getElementById("impheightf").value;
    var heightimpi = document.getElementById("impheighti").value;
    var wimp = Number(weightimp);
    var himpf = Number(heightimpf);
    var himpi = Number(heightimpi);
      
    if (wimp < 0 || himpf < 0 || wimp == 0 || himpf == 0 || himpi < 0) {
      alert("Please put numbers greater than 0 in the weight and feet height fields!");
    }

    if (wimp > 0 && himpf > 0) {
      var finalimpheightinches = himpf * 12 + himpi;
      var finalimpweightpounds = wimp * 703;
      var bmiimp = finalimpweightpounds / (finalimpheightinches * finalimpheightinches);
      var finalbmiimp = parseFloat(bmiimp.toFixed(2));
      ifmessageimperial();
    }

    function ifmessageimperial() {
    if (finalbmiimp == 0) {alert ("Please put realistic numbers!");}
    if (finalbmiimp > 0 && finalbmiimp < 18.5) {alert ("Your BMI is " + finalbmiimp + " and your status is Underweight. Pay regular visits to your fridge.");}
    if (finalbmiimp == 18.5) {alert("Your BMI is " + finalbmiimp + " and your status is Healthy. Right on! Kudos my friend!");}
    if (finalbmiimp > 18.5 && finalbmiimp < 25) {alert("Your BMI is " + finalbmiimp + " and your status is Healthy. Right on! Kudos my friend!");}
    if (finalbmiimp == 25) {alert("Your BMI is " + finalbmiimp + " and your status is Overweight. Time for the gym subscription you always talked about.");}
    if (finalbmiimp > 25 && finalbmiimp < 30) {alert("Your BMI is " + finalbmiimp + " and your status is Overweight. Time for the gym subscription you always talked about.");}
    if (finalbmiimp == 30) {alert("Your BMI is " + finalbmiimp + " and your status is Obese. Go spend one year at the nearest monastery.");}
    if (finalbmiimp > 30) {alert("Your BMI is " + finalbmiimp + " and your status is Obese. Go spend one year at the nearest monastery.");}
    }

    window.location.reload(true);
  }
