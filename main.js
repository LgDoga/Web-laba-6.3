function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  const resultElement = document.getElementById('result');

  if (selectedAnswer) {
      const answer = selectedAnswer.value;
      if (answer === '9') {
          resultElement.textContent = 'Правильно!';
          resultElement.style.color = 'green';
      } else {
          resultElement.textContent = 'Неправильно. Спробуйте ще раз!';
          resultElement.style.color = 'red';
      }
  } else {
      resultElement.textContent = 'Виберіть відповідь!';
      resultElement.style.color = 'orange';
  }
}
