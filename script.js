const form = document.querySelector("form");
const correct = document.querySelector("#correct");
const result = document.querySelector("#result");
const correctAnswers = ["1", "1", "3", "4"]

form.addEventListener(
  "submit",
  (event) => {
    const data = new FormData(form);
    let numberOfCorrectAnswers = 0

    data.forEach((answer, idx) => {
      console.log(idx)
        if (answer == correctAnswers[idx-1]) {
          numberOfCorrectAnswers += 1
        }
    })

    correct.innerText = `Du svarade rätt på ${numberOfCorrectAnswers} av 4 frågor!`;
    form.hidden = true
    result.hidden = false
    event.preventDefault();
  },
  false
);