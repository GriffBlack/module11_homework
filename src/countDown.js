function countDown(n) {
    let str = '';
    if (typeof n != 'number') {
       return str = "Это не число!";
    } else if (n != n) {
    return str = "it's NaN";
    } else {
    let arr = [];
        if (n > 0) {
        while (n) {
            arr.push(n)
            n--;
            }
        } else if (n < 0) {
            while (n) {
                arr.push(n);
                n++;
            }
        } else { arr.push(n); }
        str = arr.join(' ');
        return str;
    }
}
module.exports = {countDown}