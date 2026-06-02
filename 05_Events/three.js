let setInterval_1;
const changeColor = function () {
  let  Rand = (Math.random() * 1000000).toFixed();
  console.log(`Changing the color to ${Rand}`)
  document.querySelector('body').style.backgroundColor =`#${Rand}` ;
 // Rand=null;          isko null kar ke run karana hai or sahi output lana hai  
};

document.querySelector('#start').addEventListener('click', function () {
  setInterval_1 = setInterval(changeColor, 2000);
});

document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(setInterval_1);
  console.log("The Color had been choosen ")
});
