function checkCode() {
  const input = document.getElementById('codeInput').value;
  const container = document.getElementById('container');

  // Define the codes and the corresponding messages
  const correctCode1 = 'Magnolia';
  const correctCode2 = 'Forget me not';
  const message1 = `
      <div class="message">
          <img src="image.png" alt="Magnolia">
          <h1>Magnolia</h1>
          <p>In the bloom, it’s pure and bright,<br>
          Reflects your courage, a guiding light.<br>
          Stand tall with grace and embrace each test,<br>
          Just like Magnolia, you shine at your best.</p>
      </div>
  `;
  const message2 = `
      <div class="message">
          <h1>Congratulations!</h1>
          <p>At last, you've arrived at the journey's end,<br>
          Yet this is but a chapter, not the final bend.<br>
          The path you’ve walked, through twilight and gleam,<br>
          Is a whisper of what lies in your grander dream.<br>
          With every challenge, let your strength declare.</p>
      </div>
  `;
  const message3 = `
      <div class="message">
          <img src="image1.png" alt="Magnolia">
          <h1>Forget me not</h1>
          <p>In tiny blooms of blue so true,<br>
          This flower’s message is clear and new.<br>
          It asks to be remembered, cherished, and dear,<br>
          A symbol of friendship that’s always near.<br>
          Togetherness blooms where hearts unite,<br>
      </div>
  `;
  const message4 = `
      <div class="message">
          <h1>Congratulations!</h1>
          <p>You’ve reached the final phase of today’s quest,<br>
          Yet remember, this is not the end, but a new adventure’s crest.<br>
          Levels of life await, as they did this time,<br>
          Believe in yourself always, as you did, solving riddles so fine.<br>
          Togetherness is the key, hearts sing in unity's chime.<br>
          In this flower’s embrace, friendship shines bright.</p>
      </div>
  `;

  if (input === correctCode1) {
      // Clear the container and display the first message
      container.innerHTML = message1;

      // Fade out the first message after 5 seconds, then display the second message
      setTimeout(() => {
          container.classList.add('fade-out');
          setTimeout(() => {
              container.innerHTML = message2;
              container.classList.remove('fade-out');
              container.classList.add('fade-in');
          }, 1000); // Delay to allow the fade-out animation to complete
      }, 5000);

  } else if (input === correctCode2) {
      // Clear the container and display the third message
      container.innerHTML = message3;

      // Fade out the third message after 5 seconds, then display the fourth message
      setTimeout(() => {
          container.classList.add('fade-out');
          setTimeout(() => {
              container.innerHTML = message4;
              container.classList.remove('fade-out');
              container.classList.add('fade-in');
          }, 1000); // Delay to allow the fade-out animation to complete
      }, 5000);

  } else {
      const result = document.getElementById('result');
      result.textContent = 'Incorrect code. Please try again.';
      result.style.color = 'red';
  }
}
