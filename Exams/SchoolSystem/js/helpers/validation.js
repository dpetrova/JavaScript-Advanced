function isValidString(str) {
    var regex = /^[a-zA-Z\s]*$/g;
    return regex.test(str);
}

function isNumeric(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

