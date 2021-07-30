let roadMines = [false, false, false, false, true, false, false, true, false, false];
let step = 2;

for (let i = 0; i < roadMines.length; i++) {
    if (roadMines[i] == true ) {
        step -= 1;
        if (step == 1) {
            console.log(`Танк переместился на позицию ${i + 1}, танк поврежден`);
        } else if (step == 0) {
            console.log(`Танк переместился на позицию ${i + 1}, танк уничтожен`);
            break;
        } else {
            console.log(`Танк переместился на позицию ${i + 1}`);
        }
    } else {
        console.log(`Танк переместился на позицию ${i + 1}`);
    }
}