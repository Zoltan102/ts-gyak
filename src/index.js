"use strict";
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('szoveg').addEventListener('input', (e) => {
        // let elem = document.getElementById('szoveg') as HTMLInputElement;
        // document.body.style.backgroundColor = elem.value;
        let elem = e.currentTarget;
        document.body.style.backgroundColor = elem.value;
    });
});
