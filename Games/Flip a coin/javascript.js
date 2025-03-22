




document.getElementById('flipButton').addEventListener('click', flipCoin);

function flipCoin() {
  const coin = document.getElementById('coin');
  const resultText = document.getElementById('result');

  // Start coin flip animation
  coin.classList.add('flipping');

  // Wait for the animation to complete, then show the result
  setTimeout(() => {
    // Remove the animation class
    coin.classList.remove('flipping');

    // Randomly choose "Heads" or "Tails"
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';

    // Set the result on the coin
    coin.innerHTML = result;

    // Display the result below the coin
    resultText.innerHTML = `It's ${result}!`;
  }, 1000); // 1 second (animation duration)
}





