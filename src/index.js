const mapping = [
    ['', "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
    ['', '', "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
    ['hundred'],
    ['zero']
];

module.exports = function toReadable(number) {
    const numberString = number.toString();
    const result = `${getHundreds(numberString)}${getDecades(numberString)} ${getSingleNumber(numberString)}`;
    return result.trim().length > 0 ? result.trim() : mapping[3][0];
}

const getHundreds = number => number.length > 2 ? `${mapping[0][number[0]]} ${mapping[2]}` : '';

const getDecades = number => {
    const decade = number.length > 2 ? number.slice(number.length - 2, number.length) : number;
    const decadeInt = Number(decade);

    if (decadeInt < 20) {
        return '';
    }

    return ` ${decade < 20 ? mapping[0][Number(decade)] : mapping[1][decade[0]]}`;
}

const getSingleNumber = number => {
    const decade = number.slice(number.length - 2, number.length);
    const decadeInt = Number(decade);
    const single = number.slice(number.length - 1, number.length);
    return decadeInt >= 20 ? `${mapping[0][single]}` : `${mapping[0][decadeInt]}`;
}