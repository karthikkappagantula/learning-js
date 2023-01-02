// for loops
for (let i = 0; i < 3; i++) {
    console.log(i);
}

// while loops
let count = 1;
while (count < 5) {
    console.log(count);
    count++;
}

// do-while loops
let count1 = 1;
do {
    console.log(count1);
    count1++;
} while (count1 < 5);


// for loops with break..exits the loop
for (let i = 0; i < 3; i++) {
    if (i == 1) break;
    console.log(i);
}

// for loops with break..exits the current loop iteration
for (let i = 0; i < 3; i++) {
    if (i == 1) continue;
    console.log(i);
}

//labelled statements are like GOTO statement. Not a best practice.
