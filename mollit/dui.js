document.querySelector('button').addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Button clicked');
});
