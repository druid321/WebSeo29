"use strict"

{
const arr = new Array(10);
    console.log(arr);
    console.log(arr.length);
    const summ = arr.reduce((acc, item, i, brr) => {
        console.log(summ.length);
        return acc+item;
    }, [])
    console.log(summ);
}

