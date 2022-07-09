const sumAll = function(k, n) {

    if (typeof (n+k) !== 'number') return 'ERROR';
    else if (n < 0 || k < 0) return 'ERROR';

    let answer = ((n + k) * (Math.abs(n - k) + 1) / 2);

    return answer;

};

// Do not edit below this line
module.exports = sumAll;
