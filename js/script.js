function init(){
  //add your javascrip between these two lines of code
  const inputField = document.querySelector('input[type="text"]');
  const alertButton = document.getElementById('entrybutton') || document.querySelector('.alert-me') || document.querySelector('button');
  const heading = document.querySelector('h2');

  const studentName = 'Zackery Smith';

  alertButton.addEventListener('click', () => {
    const inputValue = inputField.value;

    // Requirement 1: Show alert box with "Zackery Smith: <text>"
    alert(`${studentName}: ${inputValue}`);

    // Requirement 2: Update <h2> text content with exact input value (no name appended)
    heading.textContent = inputValue;
  });
}

window.addEventListener('load', init);