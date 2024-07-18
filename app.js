const input = document.getElementById("editor")

function boldText(){
    input.style.fontWeight = 'bold';
}
function italicText(){
    input.style.fontStyle = 'italic';
}
function underlineText(){
    input.style.textDecoration = 'underline';
}
function changeFont(){
    const newFont = prompt("Enter font family: ", "Arial" );
    input.style.fontFamily= newFont;
}
function changeText(){
    const newSize = prompt("Enter Font Size: ", "16" );
    input.style.fontSize= newSize + 'px';
}
