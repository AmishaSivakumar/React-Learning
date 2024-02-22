// Recursion >> function call by itself
// Stack overflow >> Maximum call size (call stack)
// The call stack stores the currently executing function or functions. When there are too many functions being executed, the call stack might exceed its size and then throw an error. This usually occurs in cases of recursions that do not have base cases.
function recursion(num) {

    if (num > 0) {
        recursion(num - 1)
    }
    console.log('Loading.....' + num);
}
recursion(5)