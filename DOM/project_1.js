const Rand = Number((Math.random() * 100 + 1).toFixed());
console.log(Rand);
const Result = document.querySelector('.lowOrHi');
let guesses = document.querySelector('.guesses');
console.log(guesses);

let arr = [];

function some_funtion() {
  const form = document.querySelector('.form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = Number(document.querySelector('#guessField').value);
    console.log(input);
    if (input === Rand) {
      Result.innerHTML = 'Perfect you Guessed the Right Number';
      arr.push(input);
      guesses.innerHTML = arr.join();
      ending();
    } else if (input < Rand) {
      Result.innerHTML = 'Guessed number is smaller ';
      arr.push(input);
      guesses.innerHTML = arr.join();
      ending();
    } else {
      Result.innerHTML = 'Guesed number is Bigger';
      arr.push(input);
      guesses.innerHTML = arr.join();
      ending();
    }
  });
}
some_funtion();

function ending() {
  let remains = document.querySelector('.lastResult');
  console.log(remains);
  const remains_2 = Number(remains.innerHTML);
  let numb = remains_2 - 1;
  remains.innerHTML = String(numb);
  console.log(remains);
  console.log(arr);
}
