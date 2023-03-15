var Point = 0;
//QUIZ 1
function quiz1() {
  document.getElementById("startBtn").style.display = "none";
  var choose = Math.floor(Math.random() * 100 + 1);
  if (choose < 25) {
    var a = prompt(
      "Question 1: What is the capitol of The U.S.A? \n A.Berlin \n B.Paris \n C.Hanoi \n D.Washinhton DC"
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
      "Question 1: What is the capitol of The U.S.A? \n A.Las Vegas \n B.Berlin \n C.Washinhton DC \n D.London"
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
      "Question 1: What is the capitol of The U.S.A? \n A.Jarkata \n B.Washinhton DC \n C.Paris \n D.Manila"
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
      "Question 1: What is the capitol of The U.S.A? \n A.Washinhton DC \n B.Berlin \n C.Paris \n D.London"
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
      "Question 2: Where is the biggest desert in the world? \n A.Sahara \n B.Amazon \n C.Syria \n D.Southern Pole"
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
      "Question 2: Where is the biggest desert in the world? \n A.Arab \n B.Xinai \n C.Southern Pole \n D.Sahara"
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
      "Question 2: Where is the biggest desert in the world? \n A.Gobi \n B.Southern Pole \n C.Sahara \n D.Patagonia"
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
      "Question 2: Where is the biggest desert in the world? \n A.Southern Pole \n B.Sahara \n C.Great Victoria \n D.Kalaha"
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
      "Question 3: The highest mountain in the world \n A.Tibet \n B.Himalaya \n C.Phansipan \n D.Everest"
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
      "Question 3: The highest mountain in the world \n A.Hoang Lien Son \n B.Fuji \n C.Everest \n D.Himalaya"
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
      "Question 3: The highest mountain in the world \n A.K2 \n B.Everest \n C. Annapurna \n D.Makalu"
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
      "Question 3: The highest mountain in the world \n A.Everest \n B.	Kanchenjunga \n C.Tuk \n D.All False"
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
      "Question 4: The longest river in South East Asia \n A.Vonga \n B.Amazon \n C.Nile \n D.Mekong "
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
      "Question 4: The longest river in South East Asia \n A.Xen \n B.Amazon\n C.Mekong  \n D.Nile"
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
      "Question 4: The longest river in South East Asia \n A.Vonga \n B.Mekong \n C.Nile \n D.Pua"
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
      "Question 4: The longest river in South East Asia \n A.Mekong  \n B.Vonga \n C.Amazon \n D.Nile"
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
      "Question 5: The biggest lake in the world \n A.Baikal \n B.Victoria \n C.Superior \n D.Caspian"
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
      "Question 5: The biggest lake in the world  \n A.Hoa Binh \n B.Victoria  \n C.Caspian \n D.Baikal"
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
      "Question 5: The biggest lake in the world \n A.Superior \n B.Caspian \n C.Baikal \n D.Dead Sea"
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
      "Question 5: The biggest lake in the world  \n A.Caspian \n B.Superior \n C.Ba Be \n D.All False"
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
      "Question 6: What is the biggest island in the world? \n A.Phu Quoc \n B.Hai Nam \n C.Okinawa \n D.Greenland"
    );
    const AnswerOneA = ["D", "d"];
    if (AnswerOneA.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz7();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 25 && choose < 50) {
    var a = prompt(
      "Question 6: What is the biggest island in the world? \n A.Madagascar \n B.Whale \n C.Greenland\n D.Ireland"
    );
    const AnswerOneB = ["C", "c"];
    if (AnswerOneB.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz7();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 50 && choose < 75) {
    var a = prompt(
      "Question 6: What is the biggest island in the world? \n A.All False \n B.Greenland \n C.New Zealand \n D.Madagascar"
    );
    const AnswerOneC = ["B", "b"];
    if (AnswerOneC.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz7();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else {
    var a = prompt(
      "Question 6: What is the biggest island in the world? \n A.Greenland \n B.Paris \n C.Hanoi \n D.Madagascar"
    );
    const AnswerOneD = ["A", "a"];
    if (AnswerOneD.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz7();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  }
}
//QUIZ 7
function quiz7() {
  document.getElementById("startBtn").style.display = "none";
  var choose = Math.floor(Math.random() * 100 + 1);
  if (choose < 25) {
    var a = prompt(
      "Question 7: Which country has the longest coastline in the world? \n A.Italy \n B.Russia \n C.China \n D.Canada"
    );
    const AnswerOneA = ["D", "d"];
    if (AnswerOneA.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz8();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 25 && choose < 50) {
    var a = prompt(
      "Question 7: Which country has the longest coastline in the world? \n A.Spain \n B.England \n C.Canada \n D.China"
    );
    const AnswerOneB = ["C", "c"];
    if (AnswerOneB.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz8();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 50 && choose < 75) {
    var a = prompt(
      "Question 7: Which country has the longest coastline in the world? \n A.All False \n B.Canada \n C.Laos \n D.Indonesia"
    );
    const AnswerOneC = ["B", "b"];
    if (AnswerOneC.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz8();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else {
    var a = prompt(
      "Question 7: Which country has the longest coastline in the world? \n A.Canada \n B.United States \n C.China \n D.UAE"
    );
    const AnswerOneD = ["A", "a"];
    if (AnswerOneD.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz8();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  }
}
//QUIZ 8
function quiz8() {
  document.getElementById("startBtn").style.display = "none";
  var choose = Math.floor(Math.random() * 100 + 1);
  if (choose < 25) {
    var a = prompt(
      "Question 8: How many states are there in America? \n A.100 \n B.49 \n C.54 \n D.50"
    );
    const AnswerOneA = ["D", "d"];
    if (AnswerOneA.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz9();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 25 && choose < 50) {
    var a = prompt(
      "Question 8: How many states are there in America? \n A.64 \n B.48 \n C.50 \n D.100"
    );
    const AnswerOneB = ["C", "c"];
    if (AnswerOneB.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz9();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 50 && choose < 75) {
    var a = prompt(
      "Question 8: How many states are there in America? \n A.51 \n B.50 \n C.All False \n D.49"
    );
    const AnswerOneC = ["B", "b"];
    if (AnswerOneC.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz9();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else {
    var a = prompt(
      "Question 8: How many states are there in America? \n A.All False \n B.33 \n C.48 \n D.51"
    );
    const AnswerOneD = ["A", "a"];
    if (AnswerOneD.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz9();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  }
}
//QUIZ 9
function quiz9() {
  document.getElementById("startBtn").style.display = "none";
  var choose = Math.floor(Math.random() * 100 + 1);
  if (choose < 25) {
    var a = prompt(
      "Question 9: Which city currently has the highest population in the world? \n A.Hanoi \n B.Tel Aviv \n C.Osaka\n D.Tokyo"
    );
    const AnswerOneA = ["D", "d"];
    if (AnswerOneA.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz10();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 25 && choose < 50) {
    var a = prompt(
      "Question 9: Which city currently has the highest population in the world? \n A.Benjing \n B.Florence \n C.Tokyo \n D.All False"
    );
    const AnswerOneB = ["C", "c"];
    if (AnswerOneB.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz10();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 50 && choose < 75) {
    var a = prompt(
      "Question 9: Which city currently has the highest population in the world? \n A.Berlin \n B.Tokyo \n C.Paris \n D.London"
    );
    const AnswerOneC = ["B", "b"];
    if (AnswerOneC.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz10();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else {
    var a = prompt(
      "Question 9: Which city currently has the highest population in the world? \n A.Tokyo \n B.Jarkata \n C.Shanghai \n D.Moscow"
    );
    const AnswerOneD = ["A", "a"];
    if (AnswerOneD.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      quiz10();
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      var Point = 0;
      document.getElementById("startBtn").style.display = "block"
    }
  }
}
//QUIZ 10
function quiz10() {
  document.getElementById("startBtn").style.display = "none";
  var choose = Math.floor(Math.random() * 100 + 1);
  if (choose < 25) {
    var a = prompt(
      "Question 10: What is the highest peak in Africa? \n A.Berlin \n B.Paris \n C.Kenya \n D.Kilimanjaro"
    );
    const AnswerOneA = ["D", "d"];
    if (AnswerOneA.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      alert("You Win!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 25 && choose < 50) {
    var a = prompt(
      "Question 10: What is the highest peak in Africa? \n A.Kenya \n B.Uhuru \n C.Kilimanjaro \n D.Kibo"
    );
    const AnswerOneB = ["C", "c"];
    if (AnswerOneB.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      alert("You Win!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  } else if (choose >= 50 && choose < 75) {
    var a = prompt(
      "Question 10: What is the highest peak in Africa? \n A.Uhuru \n B.Kilimanjaro \n C.Kenya\n D.Kibo"
    );
    const AnswerOneC = ["B", "b"];
    if (AnswerOneC.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      alert("You Win!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
      
    }
  } else {
    var a = prompt(
      "Question 10: What is the highest peak in Africa? \n A.Kilimanjaro \n B.Kenya \n C.All False \n D.Kibo"
    );
    const AnswerOneD = ["A", "a"];
    if (AnswerOneD.includes(a)) {
      alert("Correct!");
      Point = Point + 10;
      alert("You Win!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    } else {
      alert("Incorrect! You lose!");
      alert("Your point is " + Point);
      Point = Point-Point
      document.getElementById("startBtn").style.display = "block"
    }
  }
}
