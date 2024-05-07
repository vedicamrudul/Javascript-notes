for(let i=0; i<10; i++){
    console.log(`the value of i is ${i}`);
    if(i==5){
        break;
    }
}

for(let i=0; i<10; i++){
    if(i==5){
        console.log(`damn 5 got paused mahn`);
        continue;
    }
    console.log(`the value of i is ${i}`);
}

// clearly break exists the loop and continue kinda breaks the loop for one iteration
// and then continues it.
