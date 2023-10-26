function decryptSentence() {
    var sentence = document.getElementById("sentence").value;
    var decryptedSentence = "";
    var mm;
    for (var i = 0; i < sentence.length; i++) {
        var charCode = sentence.charCodeAt(i);
        var a = charCode - 65;
        var t= a-25;
        var modt = t%26;
        if(t<0){
            x=Math.abs(t);
           modt = 26- (x % 26);
            mm= modt +65;
        }
        else{
           
         mm = ((a-25)%26)+65;
        }
       


        decryptedSentence += String.fromCharCode(mm);
    }

    document.getElementById("result").value = decryptedSentence.toLowerCase();
}