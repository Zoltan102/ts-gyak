"use strict";
let t = [1, 2, 3];
t.filter(e => e > 2);
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('szoveg').addEventListener('input', (e) => {
        //  Option #1
        // let elem = document.getElementById('szoveg') as HTMLInputElement;
        // document.body.style.backgroundColor = elem.value;
        //  Option #2
        let elem = e.currentTarget;
        document.body.style.backgroundColor = elem.value;
    });
});
