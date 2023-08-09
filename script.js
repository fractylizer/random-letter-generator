function stringGen(len) {
    var text = " ";
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}
function getletter() {
   var letter = stringGen(1);
   document.getElementById('output').innerHTML = letter;
}
