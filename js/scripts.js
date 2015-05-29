
function wordCount(sent) {
    var arr = sent.split(" ");
    var a = [], b = [], prev;

    arr.sort();

    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }
   
    var answer = [a, b];
    var result = answer;
 
    var words = result[0];
    var counts = result[1];
    var empty = [];
 for (var i = 0; i < words.length; i ++) {
    empty.push(counts[i] + ":" + words[i]);
    empty.sort().reverse();
 
   } 
   return empty;
}

$(document).ready(function(){
$("form#words").submit(function(event){
var userSent = $("input#sent").val();
var worder =  wordCount(userSent);
$(".word-list").text(worder);

event.preventDefault();
});

});