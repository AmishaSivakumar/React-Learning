var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow", "Black"];
var o = ["th", "st", "nd", "rd"];

for (var i = 0; i < color.length; i++) {
    var suffix = (i + 1 > 3) ? o[0] : o[i + 1];
    console.log((i + 1) + suffix + " choice is " + color[i] + ".");
}