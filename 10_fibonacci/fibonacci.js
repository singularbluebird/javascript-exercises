const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if (typeof num === "string") num = parseInt(num);

    let fib1 = 1
    let fib2 = 1;
    let bucket = 0;
    let list = [];
    list.push(fib1, fib2)

    for (let i = 0; i < num; i++) {
        bucket = fib2;
        fib2 += fib1;
        fib1 = bucket;
        list.push(fib2);
    }

    return list[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
