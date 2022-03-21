function halvingSum(n) {
    // let result = Math.round(Math.ceil(n + (n/2) + (n/4) + (n/8)));
    let total = 0;
    if (n <= 1) {
        return n
    }
    for (let i=n; i>1; i/=2) {
        total += Math.round(Math.floor(i));
    }

    return total;
}

// 25 + 12.5 + 6.25 + 3.125 + 1.5625 = 48.4375 (which means we should round down be on each n/2)
// 25 + 12 + 6 + 3 + 1 = 47
//
// 127 + 63.5 + 31.75 + 15.875 + 7.9375 + 3.96875 + 1.984375 =
// 127 + 63 + 31 + 15 + 7 + 3 + 1 = 247


module.exports = halvingSum;