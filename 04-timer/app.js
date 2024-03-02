const time = document.querySelector('#time');
const timerForm = document.querySelector('#timer-form');
const timerInput = document.querySelector('#timer-input');
const startButton = document.querySelector('#start-button');

let timerInterval

const startTimer = () => {
  clearInterval(timerInterval);

  const totalTime = parseInt(timerInput.value) * 60;
  let remainingTime = totalTime;

  const updateTimer = () => {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    time.textContent = formattedTime;

    if (remainingTime <= 0) clearInterval(timerInterval);
    else remainingTime--
  }

  updateTimer()

  timerInterval = setInterval(updateTimer, 1000);
}

timerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  startTimer();
  timerInput.value = '';
});