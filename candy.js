const candy = new Map ([['purple', 'grape'],
  ['pink', 'strawberry'],
  ['green', 'avocado'],
  ['orange', 'orange'],
  ['red', 'apple' ]]);

function candyColor(color,candy) {
 if (candy.has(color)) {
 console.log(candy.get(color));
 }
else {
 console.log('Sorry, that color doesn’t have a flavor');
 }
 }
candyColor('purple', candy);


function swap(arry) {
... let x = 0;
... let y = 0;
... let temp = null;
... for (x = arry.length- 1; x> 0;  x -= 1) {
..... y = Math.floor(Math.random() * (x + 1));
..... temp = arry[x];
..... arry[x] = arry[y];
..... arry[y] = temp;
..... }
... }
undefined
> console.log(swap(arry));
undefined
undefined
> console.log(swap(arry));
undefined
