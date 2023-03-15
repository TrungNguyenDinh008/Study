var Point = 0;
//QUIZ 1
function quiz1() {
  document.getElementById("startBtn").style.display = "none";
  var choose = Math.floor(Math.random() * 100 + 1);
  if (choose < 25) {
    var a = prompt(
      "Question 1: What is the most poisonous spider in the world? \n A.Brazilian wandering spider \n B.Black widow \n C.Redback spider \n D.Funnel web spider"
    );
    const AnswerOneA = ["D", "d"];
    if (AnswerOneA.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz2();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
    Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 25 && choose < 50) {
    var a = prompt(
      "Question 1: What is the most poisonous spider in the world? \n A.Black widow \n B.Brazilian wandering spider \n C.Funnel web spider \n D.Redback spider"
    );
    const AnswerOneB = ["C", "c"];
    if (AnswerOneB.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz2();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 50 && choose < 75) {
    var a = prompt(
      "Question 1: What is the most poisonous spider in the world? \n A.Redback spider \n B.Funnel web spider \n C.Black widow \n D.Brazilian wandering spider"
    );
    const AnswerOneC = ["B", "b"];
    if (AnswerOneC.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz2();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else {
    var a = prompt(
      "Question 1: What is the most poisonous spider in the world? \n A.Funnel web spider \n B.Redback spider \n C.Black widow \n D.Brazilian wandering spider"
    );
    const AnswerOneD = ["A", "a"];
    if (AnswerOneD.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz2();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  }
}
//QUIZ 2
function quiz2() {
  document.getElementById("startBtn").style.display = "none";
  var choose = Math.floor(Math.random() * 100 + 1);
  if (choose < 25) {
    var a = prompt(
      "Question 2: The fastest animals \n A.Lion \n B.Pronghorn \n C.Hare \n D.Cheetah"
    );
    const AnswerOneA = ["D", "d"];
    if (AnswerOneA.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz3();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 25 && choose < 50) {
    var a = prompt(
      "Question 2: The fastest animals \n A.All Correct \n B.Pronghorn \n C.Cheetah \n D.Lion"
    );
    const AnswerOneB = ["C", "c"];
    if (AnswerOneB.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz3();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 50 && choose < 75) {
    var a = prompt(
      "Question 2: The fastest animals \n A.Lion \n B.Cheetah \n C.All False \n D.Pronghorn"
    );
    const AnswerOneC = ["B", "b"];
    if (AnswerOneC.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz3();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else {
    var a = prompt(
      "Question 2: The fastest animals \n A.Cheetah \n B.Ant \n C.Lion \n D.Pronghorn"
    );
    const AnswerOneD = ["A", "a"];
    if (AnswerOneD.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz3();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  }
}
//QUIZ 3
function quiz3() {
  document.getElementById("startBtn").style.display = "none";
  var choose = Math.floor(Math.random() * 100 + 1);
  if (choose < 25) {
    var a = prompt(
      "Question 3: The biggest animal in the world \n A.Colossal Squid \n B.Giraffe \n C.All False \n D.Blue Whale"
    );
    const AnswerOneA = ["D", "d"];
    if (AnswerOneA.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz4();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 25 && choose < 50) {
    var a = prompt(
      "Question 3: The biggest animal in the world \n A.Colossal Squid \n B.Elephant \n C.Blue Whale \n D.Giraffe"
    );
    const AnswerOneB = ["C", "c"];
    if (AnswerOneB.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz4();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 50 && choose < 75) {
    var a = prompt(
      "Question 3: The biggest animal in the world  \n A.Giraffe \n B.Blue Whale \n C.Colossal Squid \n D.Elephant"
    );
    const AnswerOneC = ["B", "b"];
    if (AnswerOneC.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz4();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else {
    var a = prompt(
      "Question 3: The biggest animal in the world  \n A.Blue Whale \n B.Brown Bear \n C.Giraffe \n D.Colossal Squid"
    );
    const AnswerOneD = ["A", "a"];
    if (AnswerOneD.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz4();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  }
}
//QUIZ 4
function quiz4() {
  document.getElementById("startBtn").style.display = "none";
  var choose = Math.floor(Math.random() * 100 + 1);
  if (choose < 25) {
    var a = prompt(
      "Question 4: The longest living animals \n A.Greenland Shark \n B.Koi \n C.Pig \n D.Ocean Quahog"
    );
    const AnswerOneA = ["D", "d"];
    if (AnswerOneA.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz5();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 25 && choose < 50) {
    var a = prompt(
      "Question 4: The longest living animals  \n A.Rat \n B.Koi \n C.Ocean Quahog \n D.Greenland Shark"
    );
    const AnswerOneB = ["C", "c"];
    if (AnswerOneB.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz5();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 50 && choose < 75) {
    var a = prompt(
      "Question 4: The longest living animals  \n A.All False \n B.Ocean Quahog \n C.Greenland Shark \n D.Koi"
    );
    const AnswerOneC = ["B", "b"];
    if (AnswerOneC.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz5();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else {
    var a = prompt(
      "Question 4: The longest living animals  \n A.Ocean Quahog \n B.Greenland Shark \n C.Koi \n D.Human"
    );
    const AnswerOneD = ["A", "a"];
    if (AnswerOneD.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz5();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  }
}
//QUIZ 5
function quiz5() {
  document.getElementById("startBtn").style.display = "none";
  var choose = Math.floor(Math.random() * 100 + 1);
  if (choose < 25) {
    var a = prompt(
      "Question 5: Which animals sleep the most? \n A.Sloth \n B.Owl monkey \n C.All False \n D.Koala"
    );
    const AnswerOneA = ["D", "d"];
    if (AnswerOneA.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz6();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 25 && choose < 50) {
    var a = prompt(
      "Question 5: Which animals sleep the most? \n A.Owl monkey \n B.Brown bat \n C.Koala \n D.Sloth"
    );
    const AnswerOneB = ["C", "c"];
    if (AnswerOneB.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz6();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 50 && choose < 75) {
    var a = prompt(
      "Question 5: Which animals sleep the most? \n A.Owl monkey \n B.Koala \n C.Sloth \n D.Lion"
    );
    const AnswerOneC = ["B", "b"];
    if (AnswerOneC.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz6();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else {
    var a = prompt(
      "Question 5: Which animals sleep the most? \n A.Koala \n B.Sloth \n C.Tiger \n D.Owl monkey"
    );
    const AnswerOneD = ["A", "a"];
    if (AnswerOneD.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz6();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  }
}
//QUIZ 6
function quiz6() {
  document.getElementById("startBtn").style.display = "none";
  var choose = Math.floor(Math.random() * 100 + 1);
  if (choose < 25) {
    var a = prompt(
      "Question 6: The dangerous dog \n A.Siberian Huskies \n B.German Shepherd \n C.Rottweiler \n D.Pit Bull "
    );
    const AnswerOneA = ["D", "d"];
    if (AnswerOneA.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      alert("You Win!");
      alert("Your point is " + Point);
      document.getElementById("startBtn").style.display = "block"
      quiz7();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 25 && choose < 50) {
    var a = prompt(
      "Question 6: The dangerous dog \n A.Rottweiler  \n B.German Shepherd \n C.Pit Bull \n D.Siberian Huskies"
    );
    const AnswerOneB = ["C", "c"];
    if (AnswerOneB.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      alert("You Win!");
      alert("Your point is " + Point);
      document.getElementById("startBtn").style.display = "block"
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 50 && choose < 75) {
    var a = prompt(
      "Question 6: The dangerous dog \n A.Shiba Inu \n B.All False \n C.Rottweiler  \n D.Siberian Huskies"
    );
    const AnswerOneC = ["B", "b"];
    if (AnswerOneC.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      alert("You Win!");
      alert("Your point is " + Point);
      document.getElementById("startBtn").style.display = "block"
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else {
    var a = prompt(
      "Question 6: The dangerous dog \n A.Pit Bull \n B.Siberian Huskies \n C.German Shepherd \n D.Rottweiler "
    );
    const AnswerOneD = ["A", "a"];
    if (AnswerOneD.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      alert("You Win!");
      alert("Your point is " + Point);
      document.getElementById("startBtn").style.display = "block"
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  }
}

