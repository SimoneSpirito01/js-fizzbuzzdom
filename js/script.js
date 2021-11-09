
const row = document.querySelector('.row');

for (let i = 1; i <= 100; i++){
    const box = `<div class="box">${i}</div>`;
    row.innerHTML += box;

}