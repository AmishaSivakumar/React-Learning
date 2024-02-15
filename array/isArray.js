const arr4 =[2,3,6,7,9]
function isArray(arr4){
    if(toString.call(arr4)==="[object Array]"){
        return true
    }
    else return false
}
console.log(isArray(arr4));