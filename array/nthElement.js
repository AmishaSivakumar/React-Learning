const array = [12, 45, 7, 21, 56, 89, 3];
const n =5;
function largest(arr, n) {
    if (n > 0 && n <= arr.length) {
        arr.sort(function(a, b) {
            return b - a;
        });
        return arr[n - 1];
    } else {
        return "Invalid value of n";
    }
}
console.log(largest(array,n));