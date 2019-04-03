function triagle(a, b, c) {

    let arr = [];
    arr.push(a, b, c)
    arr.sort(function(x, y) {
        return x - y;
    })

    if ((arr[0] + arr[1]) > arr[2] && (arr[0] + arr[1]) !== arr[2]) {
        return ((arr[0] ^ 2 + arr[1] ^ 2) > arr[2]) ? ('остроугольный') : ('тупоугольный');
    } else {
        return 'не существует'
    }

}
alert(`Этот треугольник ${triagle(8,3,4)}`)