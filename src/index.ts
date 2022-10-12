document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('szoveg')!.addEventListener('input', (e) => {
        // let elem = document.getElementById('szoveg') as HTMLInputElement;
        // document.body.style.backgroundColor = elem.value;

        let elem = e.currentTarget as HTMLInputElement;
        document.body.style.backgroundColor = elem.value;
    });
});