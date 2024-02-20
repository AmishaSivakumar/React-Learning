// Recursion >> function call by itself
// Stack overflow >> Maximum call size (call stack)
function recursion(num) {
    
    if (num > 0) {
        recursion(num - 1)
    }
    console.log('Loading.....' + num);
}
recursion(5)