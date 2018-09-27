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