let s = 'Revert string';
console.log(s);
console.log(revert_s(s));

function revert_s(s) {
  var str = '';
  for (i = s.length - 1; i >= 0; i--) {
    str += s[i];
  }
  return str;
}
