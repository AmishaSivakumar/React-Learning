const roll = [7,8,1,3,6,7,0,7]
let temp
for (let i = 0; i < roll.length-1; i++) {
    for (let j = i; j < roll.length; j++) {
        if (roll[i] > roll[j]) {
            temp = roll[i]
            roll[i]= roll[j]
            roll[j] =temp
        }
    }
}
console.log(...roll);