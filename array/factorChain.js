function test(nums) {
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] % nums[i] != 0) {
            return false;
        }
    }
    return true;
}
nums = [2, 4, 8, 16, 32]
console.log("Original array: ", nums)
console.log(test(nums));