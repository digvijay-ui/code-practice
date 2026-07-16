//check the last number without using %(remainder)

const n = 57;

let m = 0;

for (let i = 0; i < 1000; i++) {
    if (i * 10 > n) {
        break;
    } else {
        m++;
    }
}

const remain = n - m * 10;

console.log(remain);


