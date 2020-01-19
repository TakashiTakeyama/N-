var myBirthTime = new Date(1985, 1, 15, 11, 11);
//new Date()は月のみ0始まり。
// console.log(myBirthTime);

function updatePargraph() {
  var now = new Date();
  var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
  document.getElementById('birth-time').innerText = 'うまれてから' + seconds;
}

// setInterval(() => {
//   updatePargraph()
//   //1000ミリ秒 = 1秒
// }, 1000);

// console.log(Math.PI);

// function circle(r) {
//   console.log(r * r * Math.PI);
//   var area = r * r * 3.14;
//   return area;
// }

// circle(5)
// document.write('<p>半径5の円の面積は' + circle(5) + 'になります。');

var counter = {
  number: 0,
  print: function() {
    counter.number++;
    console.log(counter.number);
  }
  // if (number <= 10) {
  //   false
  // }
};

counter.print();
counter.print();
counter.print();