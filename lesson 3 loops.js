 //for 
for (let i = 0; i < 5; i++) {
    console.log("The number is "+i);
}


//while
let i = 0;
while (i < 5) {
    console.log("The number is "+i);
    i++;
}

//do..while
let i = 0;
do {
    console.log("The number is "+i);
    i++;
} while (i < 5);

//break & continue
for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        continue; // skip 3
    }

    if (i === 5) {
        break; //  stop when 5
    }

    console.log("The Number is:", i);
}
