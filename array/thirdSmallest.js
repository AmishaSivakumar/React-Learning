function test(arr_nums) 
 {
  return arr_nums.sort((x,y) => y - x)[arr_nums.length-3]
}

// nums = [2, 3, 5, 7, 1]
nums = [2, 3, 0, 5, 7, 8, -2, -4]
console.log(+test(nums));
