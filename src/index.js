module.exports = function toReadable(number) {
    const textArray = [
        [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', ],
        [ 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', ],
    ];

    let text = '';
    let twoDigit = number.toString().slice(-2);

    if (number == 0) return textArray[0][number];

    if (number >= 100) text = `${textArray[0][number.toString()[0]]} hundred `;

    if (twoDigit < 20) {
        text += +twoDigit ? `${textArray[0][+twoDigit]}` : ''
    } else {
        text += textArray[1][twoDigit[0] - 2];
        text += +twoDigit[1] ? ` ${textArray[0][twoDigit[1]]}` : '';
    }

    return text.trim();
};
