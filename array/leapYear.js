const yearsArray = [2000, 2004, 2010, 2020, 2024, 2100]
function isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
function Leap(year) {
    const leapYears = [];

    for (let i = 0; i < year.length; i++) {
        if (isLeap(year[i])) {
            leapYears.push(year[i]);
        }
    }

    return leapYears;
}

console.log(Leap(yearsArray));