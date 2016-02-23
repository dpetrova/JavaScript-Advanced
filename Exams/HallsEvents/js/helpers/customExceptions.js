function isValidString(str) {
    var regex = /^[a-zA-Z\s]*$/;
    return regex.test(str);
}

function isNumeric(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

function isDate(date) {
    return date instanceof Date;
}
