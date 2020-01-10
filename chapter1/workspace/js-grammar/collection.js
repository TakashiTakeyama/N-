var classes = ['A組', 'B組', 'C組', 'D組'];

for (var grade = 1; grade < 4; grade ++) {
  for(var i = 0; i <classes.length; i++) {
    document.write('<p>' + grade + '年' + classes[i] + '</p>');
  }
}

var a = ['あ', 'い', 'う', 'え', 'お'];
var b = ['か', 'き', 'く', 'け', 'こ'];
for (var i = 0; i < a.length; i++) {
  for (var i = 0; i < b.length; i++) {
    document.write(a[i], b[i]);
  }
}

var char = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'け', 'こ'];
for (var i = 0; i < char.length; i++) {
  for (var j = 0; j < char.length; j++) {
    document.write('<p>' + char[i] + char[j] + '</p>');
  }
}
//外側のループが開始されると内側のループが続けて始まる内側のループの処理が終わると
//次の外側のループが始まる。