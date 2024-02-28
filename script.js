function firstWord(s) {
    // Split the string by whitespace characters and return the first word
    return s.split(' ')[0];
}

// Example usage:
const s = prompt("Enter String:");
alert(firstWord(s));