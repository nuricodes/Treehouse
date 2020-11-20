let html = '';
const randomRGB = () => {
    return Math.floor(Math.random() * 256);
}
for (let i = 1; i <= 10; i++) {
    html += `<div style="background-color: ${`rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`}">${i}</div>`;
}
document.querySelector('main').innerHTML = html;

