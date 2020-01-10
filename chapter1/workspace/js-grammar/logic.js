var age = 16;
var result = null;
if (age < 20) {
  result = '未成年';
} else {
  result = '成人';
}
document.write(result);
//複雑な論理表現におけるカッコ
// false || !(false && true);

var age = 65;
var isMember = true;
var result = null;

if (age >= 60 && isMember) {
  result = 'シニア会員の割引の対象です。';
} else {
  result = 'シニア会員割引の対象ではありません';
}

document.write(result);

var age = 16;
var pointMember = true;
var result = null;

if (age <= 15) {
  result = '800円になります。';
} else if (age > 15 && pointMember) {
  result = '1000円になります。';
} else {
  result = '1800円になります。';
}
document.write(result);