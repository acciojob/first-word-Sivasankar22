function firstWord(s) {
    // Trim the input string to remove leading and trailing whitespace
    s = s.trim();
    
    // Split the trimmed string by whitespace characters and return the first word
    return s.split(' ')[0];
}

// Example usage:
const s = prompt("Enter String:");
alert(firstWord(s));