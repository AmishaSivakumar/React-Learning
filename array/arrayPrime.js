function test(arr_nums) {
    for (n of arr_nums) {
        if (n == 1 | n > 2 & n % 2 == 0)
            return false;
    }
    return true;
}

// nums = [2, 3, 5, 7]
nums = [2, 3, 5, 7, 8]
console.log(test(nums));