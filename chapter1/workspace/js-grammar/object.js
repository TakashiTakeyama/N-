/**
 * confirm: alert()と同様に引数で渡した文字列をダイアログで表示させる。
 * ただしbuttonはOKとキャンセルに別れる。
 * さらに返り値に真偽値が返される。
 **/ 
// console.log('スタートしました。');s

var game = {
  startTime: null,
  displayArea: document.getElementById('displayArea'),
  start: function() {
    startTime = new Date();
    document.body.onkeypress = stop;
    //html上で何かキーが押されたらstop()を呼び出すと言うこと。
    console.log('スタートしました。');
    // return 'スタートしました。';
  }
}


function stop() {
  // return 'ストップしました。';
  var currentTime = new Date();
  var seconds = (currentTime - startTime) / 1000;
  if (9.5 <= seconds && seconds <= 10.5) {
    game.displayArea.innerText = seconds + '秒でした。すごい！！';
  } else {
    game.displayArea.innerText = seconds + '秒でした。残念！！';
  }
  console.log('ストップしました。');
}
// console.log(start());

if (confirm('OKを押して10秒だと思ったら何かキーを押してください')) {
  console.log(game.start());
}