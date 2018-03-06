'use strict';

// IF/ELSE

//PSEUDOCODE
// if(some condition is met) {
//   do this
// } else {
//   do something different
// }

// var petQuestion = parseInt(prompt('How any pets do you think I have?'));

// if(petQuestion === 2) {
//   alert('correct!');
// } else {
//   alert('nope!');
// }

// var myAge = prompt('Do you think I\'m older than 30? Please enter "Y" for yes or "N" for no').toUpperCase();

// 'yes', 'YES', 'Y', 'y', YeS, NO, no, No, nO, n, N, nope, nah, yep

// if (myAge === 'Y' || myAge === 'N') {
//   alert ('That is hurtful. No, I am younger than 30.');
// } else {
//   alert ('Yep, I am 28! (29 this Saturday)');
// }

//5 Questions

//Statement 0
alert('For each of the following questions, answer with a "Y" for Yes or "N" for No');

//Question 1
var ImprovQuestion = prompt('Do I like improv?').toUpperCase();
if (ImprovQuestion === 'Y' || ImprovQuestion === 'Yes') {
  alert ('Yes! I have been practicing and performing for almost 5 years. I volunteer at The Pocket Theater.')
  console.log('Q1: CORRECT! User has chosen Wisely');
} else {
  alert ('Sad pandas.');
  console.log('Q1: WRONG! User has chosen Unwisely');
}

//Question 2
var VolunteerQuestion = prompt('Do I like volunteering?').toUpperCase();
if (VolunteerQuestion === 'Y' || VolunteerQuestion === 'Yes') {
  alert ('Yes!');
  console.log('Q2: CORRECT! User has chosen Wisely');
} else {
  alert ('Lots of sad pandas.');
  console.log('Q2: WRONG! User has chosen Unwisely');
}

//Question 3
var BrokenBones = prompt('Have I broken any bones?').toUpperCase();
if (BrokenBones === 'Y' || BrokenBones === 'Yes') {
  alert ('No! I am tanky.');
  console.log('Q3: WRONG! User has chosen Unwisely');
} else {
  alert ('Right! I have not. Lots of close calls but miraculously, no dice.');
  console.log('Q3: CORRECT! User has chosen Wisely');
}

//Question 4
var MushroomQuestion = prompt('Do I like eating mushrooms?').toUpperCase();
if (MushroomQuestion === 'Y' || MushroomQuestion === 'Yes') {
  alert ('Yes! I used to hate them when I was younger but I eat them more often.');
  console.log('Q4: CORRECT! User has chosen Wisely');
} else {
  alert ('Oodles of sad panda noodles.');
  console.log('Q4: WRONG! User has chosen Unwisely');
}

// Question 5
var CoffeeQuestion = prompt('Do I like coffee?').toUpperCase();
if (CoffeeQuestion === 'Y' || CoffeeQuestion === 'Yes') {
  alert ('Nope. I do not know why but caffeine (which coffee has a lot of) does not bode well with me. But I love herbal tea!')
  console.log('Q5: WRONG! User has chosen Unwisely');
} else {
  alert ('You\'re right! I have not figured out why but caffeine does not go well with me anymore.');
  console.log('Q5: CORRECT! User has chosen Wisely');
}

// if(first condition) {
//   do this;
// } else if(second condition) {
//   do this;
// } else {
//   do this;
// }