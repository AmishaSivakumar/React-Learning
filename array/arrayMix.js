function test(mix) {
    var total = 0;
    for (var i = 0; i <= mix.length; i++) {
        if (typeof mix[i] === "number")
            total = total + arr_mix[i];
    }
    return total;
}

arr= [2, "11", 3, "a2", false, 5, 7, 1]
// arr = [2, 3, 0, 5, 7, 8, true, false]
console.log(test(arr));
