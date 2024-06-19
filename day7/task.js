function dummy (...x){
    let sum = 0;
    for (let e of x) {
        sum += e ;
    }
    console.log(sum);
}
dummy(1,2,3,4,5)
