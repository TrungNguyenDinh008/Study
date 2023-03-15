var Point = 0;
//QUIZ 1
function quiz1() {
  document.getElementById("startBtn").style.display = "none";
  var choose = Math.floor(Math.random() * 100 + 1);
  if (choose < 25) {
    var a = prompt(
      "Question 1: Which one is Pytago's theorem? \n A.Thales Theorem \n B.Pascal Theorem \n C.Paul Theorem \n D.Pythagorean Theorem"
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
      "Question 1:  Which one is Pytago's theorem? \n A.Albert Theorem \n B.Pythago Theory \n C.Pythagorean Theorem \n D.Pythago Theorem"
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
      "Question 1:  Which one is Pytago's theorem? \n A.Thales Theorem \n B.Pythagorean Theorem \n C.Pythago Theore\n D.Pythagorean Theory"
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
      "Question 1:  Which one is Pytago's theorem? \n A.All False \n B.Triangle Theorem \n C.Paul Theorem \n D.Pythagorean Theory"
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
      "Question 2: The Thales Theorem's statement is \n A. If a hexagon is inscribed in a conic, then the three points at which the pairs of opposite sides meet, lie on a straight line \n B.If two triangles have the two sides and included angle of one respectively equal to two sides and included angle of the other, then the triangles are congruent in all respect\n C.The sum of the squares on the legs of a right triangle is equal to the square on the hypotenuse (the side opposite the right angle) \n D.If a line is drawn parallel to one side of a triangle intersecting the other two sides in distinct points, then the different sides are divided in the same ratio."
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
      "Question 2: The Thales Theorem's statement is \n A.If two triangles have the two sides and included angle of one respectively equal to two sides and included angle of the other, then the triangles are congruent in all respect \n B.the sum of the squares on the legs of a right triangle is equal to the square on the hypotenuse (the side opposite the right angle) \n C.If a line is drawn parallel to one side of a triangle intersecting the other two sides in distinct points, then the different sides are divided in the same ratio \n D. If a hexagon is inscribed in a conic, then the three points at which the pairs of opposite sides meet, lie on a straight line"
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
      "Question 2: The Thales Theorem's statement is \n A.All False \n B.If a line is drawn parallel to one side of a triangle intersecting the other two sides in distinct points, then the different sides are divided in the same ratio \n C. If a hexagon is inscribed in a conic, then the three points at which the pairs of opposite sides meet, lie on a straight line \n D.The sum of the squares on the legs of a right triangle is equal to the square on the hypotenuse (the side opposite the right angle)"
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
      "Question 2: The Thales Theorem's statement is \n A.If a line is drawn parallel to one side of a triangle intersecting the other two sides in distinct points, then the different sides are divided in the same ratio \n B. If a hexagon is inscribed in a conic, then the three points at which the pairs of opposite sides meet, lie on a straight line \n C.The sum of the squares on the legs of a right triangle is equal to the square on the hypotenuse (the side opposite the right angle) \n D.If two triangles have the two sides and included angle of one respectively equal to two sides and included angle of the other, then the triangles are congruent in all respect"
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
      "Question 3: How many decimal number does Pi have? \n A.44.16 trillion \n B.9 trillion \n C.31.4 trillion \n D.100 trillion"
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
      "Question 3: How many decimal number does Pi have? \n A.78 trillion \n B.31.4 trillion \n C.100 trillion \n D.1 million"
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
      "Question 3: How many decimal number does Pi have? \n A.31.4 trillion \n B.100 trillion \n C.200 trillion \n D.9.418 trillion"
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
      "Question 3: How many decimal number does Pi have? \n A.100 trillion \n B.62.8 trillion \n C.11.4 trillion \n D.8 million"
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
      "Question 4: When Albert Einstein was born? \n A.June 08, 1989 \n B.November 30, 1879 \n C.January 21, 1955 \n D.March 14, 1879"
    );
    const AnswerOneA = ["D", "d"];
    if (AnswerOneA.includes(a)) {
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
  } else if (choose >= 25 && choose < 50) {
    var a = prompt(
      "Question 1: What is the capitol of The U.S.A? \n A.July 31, 1789 \n B.October 24, 1989 \n C.March 14, 1879 \n D.August 19, 1989"
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
      "Question 1: What is the capitol of The U.S.A? \n A.March 13, 1879 \n B.March 14, 1879 \n C.October 14, 1089 \n D.All False"
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
      "Question 1: What is the capitol of The U.S.A? \n A.March 14, 1879 \n B.Febuary 18, 1889 \n C.July 29, 1879 \n D.March 13, 1879"
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

