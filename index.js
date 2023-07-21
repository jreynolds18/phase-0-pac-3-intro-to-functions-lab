function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    let uppercaseString = string.toUpperCase();
    console.log(uppercaseString);
}

function logWhisper(string) {
    let lowercaseString = string.toLowerCase();
    console.log(lowercaseString);
}

function sayHiToHeadphonedRoommate(string) {

    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }
    if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }
    if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}