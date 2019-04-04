function triagle(a, b, c) {

    let arr = [a, b, c];
    arr.sort(function(x, y) {
        return x - y;
    })

    if ((arr[0] + arr[1]) > arr[2] && (arr[0] + arr[1]) !== arr[2]) {
        if((arr[0] ^ 2 + arr[1] ^ 2) > arr[2]){
            return 'остроугольный'
        }
        else if((arr[0] ^ 2 + arr[1] ^ 2) == arr[2] ^2){
        return 'прямоугольный'
}
        else {
            return 'тупоугольный'
        }
    }
        else {
        return 'не существует'
    }
}
alert(`Этот треугольник ${triagle(5,4,4)}`)
