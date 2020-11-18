const main = document.querySelector('main');
let html = '';

for (let i = 5; i <= 100; i+= 5) {
  html += `<div>${i}</div>`;
}

main.innerHTML = html;