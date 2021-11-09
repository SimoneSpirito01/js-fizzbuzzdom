
const row = document.querySelector('.row');

for (let i = 1; i <= 100; i++){
    
    if (i % 3 == 0){
        if (i % 5 == 0){
            const box = `<div class="box red">fizzbuzz</div>`;
            row.innerHTML += box;
        }
        else {
            const box = `<div class="box green">fizz</div>`;
            row.innerHTML += box;
        }
    }
    else if (i % 5 == 0){
        const box = `<div class="box yellow">buzz</div>`;
        row.innerHTML += box;
    }
    else {
        const box = `<div class="box">${i}</div>`;
        row.innerHTML += box;
    }
}