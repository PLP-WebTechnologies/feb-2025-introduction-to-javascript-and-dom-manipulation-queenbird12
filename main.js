// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const description = document.getElementById('description');

changeTextBtn.addEventListener('click', () => {
    description.textContent = "The text has been changed dynamically!";
    // Modify CSS style dynamically
    description.style.color = 'blue';
    description.style.fontWeight = 'bold';
});

// Add or remove an element when button clicked
const toggleBoxBtn = document.getElementById('toggle-box-btn');
const boxContainer = document.getElementById('box-container');

toggleBoxBtn.addEventListener('click', () => {
    let box = document.getElementById('dynamic-box');
    if (box) {
        // Remove the box if it exists
        box.remove();
    } else {
        // Create and add a new box element
        box = document.createElement('div');
        box.id = 'dynamic-box';
        box.textContent = 'I am a dynamically added box!';
        box.style.width = '200px';
        box.style.height = '100px';
        box.style.backgroundColor = '#f39c12';
        box.style.color = '#fff';
        box.style.display = 'flex';
        box.style.justifyContent = 'center';
        box.style.alignItems = 'center';
        box.style.marginTop = '10px';
        box.style.borderRadius = '5px';

        boxContainer.appendChild(box);
    }
});
