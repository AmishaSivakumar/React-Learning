// Closure >> writing of nested functions
// Scope Chaining
// lexical scope

function parent() {
    let username
    function child() {
        username = "amisha"
        function grandChild() {
            console.log(username);
        }
        grandChild()
    }
    child()
}
parent()