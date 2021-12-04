
var riad = [], begin = 0, end = 100, fdigit = 49;

for (i = begin; i < end + 1; i++){
  riad[i] = i;
}

let find = binary_search(riad);
if (find) console.log('<p>Надено число '+fdigit+' в массиве riad['+find+']'+' за '+i+' итераций</p>');
else console.log('<p>Число '+fdigit+' не найдено.</p>');
//+' begin='+begin+' end='+end+'</p>');

function binary_search (riad) {

  var med, iter = Math.floor(Math.log2(end)) + 1;
  i = 0;
  while (begin <= end) {
    med = begin + Math.floor((end-begin)/2);
    console.log('<p>medium='+med+' begin='+begin+' end='+end+'</p>');
    if (riad[med] == fdigit) return med;
    if (riad[med] < fdigit) begin = med+1;
    else end = med-1;

    if (i++ > iter) {
      console.log('<p>i='+i+' > iter='+iter+'</p>'); break;
    }
  }
  return NaN;
}