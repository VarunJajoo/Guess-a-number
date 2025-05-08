let message;
function randomNumberGen() {
  message = Math.floor(Math.random() * 10);
  let header = document.getElementById("header");
  header.innerHTML = message;
}
let sco = 0;
let score = document.getElementById('score');
score.innerHTML = sco;
let inp;
document.getElementById('submit').addEventListener('click', () => {
  let inp = document.getElementById('random').value;
  inp = Number(inp);
  if (!isNaN(inp) && inp > -1 && inp < 10) {
    if (message == inp) {
      sco++;
      score.innerHTML = sco;

    } else {
      if (sco != 0) {
        sco--;
        score.innerHTML = sco;
      }
    }
    randomNumberGen();
  } else {
    let promp;
    while (true) {
      promp = prompt('Say sorry');
      if (promp == 'sorry') {
        break
      }
    }
  }

})
randomNumberGen();
// console.log(11);

