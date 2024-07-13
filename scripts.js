const checkboxes = document.querySelectorAll('.cell:last-child');

checkboxes.forEach(checkbox => {
  const input = document.createElement('input');
  input.type = 'checkbox';
  checkbox.appendChild(input);
});
