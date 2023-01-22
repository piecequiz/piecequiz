const form = document.querySelector("form");
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

    result.innerText = `Du svarade rätt på ${numberOfCorrectAnswers} av 4 frågor!`;
    form.hidden = true
    event.preventDefault();
  },
  false
);