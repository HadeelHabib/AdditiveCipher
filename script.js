function encryptSentence() {
    var sentence = document.getElementById("sentence").value;
    var encryptedSentence = "";

    for (var i = 0; i < sentence.length; i++) {
        var charCode = sentence.charCodeAt(i);
        var a = charCode - 97;
        var mm = ((a+25)%26)+97;
        // var encryptedCharCode = charCode + 3; // Shift each character by 3 positions

        encryptedSentence += String.fromCharCode(mm);
    }

    document.getElementById("result").value = encryptedSentence.toUpperCase();
}