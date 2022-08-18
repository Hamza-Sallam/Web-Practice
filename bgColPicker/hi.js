var btn = document.getElementById("btn");
 var txtvalue= document.getElementById("Textbox").value;

console.log(txtvalue);
function colorPick(){
    txtvalue = document.getElementById("Textbox").value;
    document.getElementById("body").style.background=txtvalue;
}
btn.addEventListener('click' , colorPick);