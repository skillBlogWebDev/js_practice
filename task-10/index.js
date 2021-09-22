const h2 = document.createElement('h2');
const input = document.createElement('input');
let interval;

document.body.append(h2, input);

h2.style.height = '50px';
h2.textContent = 'Text';

input.addEventListener('keypress', () => {
    clearTimeout(interval);

    interval = setTimeout(() => {
        h2.textContent = input.value;
    }, 3000);
});