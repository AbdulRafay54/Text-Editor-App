const input = document.getElementById("editor")

function boldText(){
    if (input.style.fontWeight === 'bold') {
        input.style.fontWeight = 'normal';
    } else {
        input.style.fontWeight = 'bold';
    }
}
function italicText(){
    if (input.style.fontStyle === 'italic') {
        input.style.fontStyle = 'normal';
    } else {
        input.style.fontStyle = 'italic';
    }}
function underlineText(){
    if (input.style.textDecoration === 'underline') {
        input.style.textDecoration = 'none';
    } else {
        input.style.textDecoration = 'underline';
    }}
function changeFont(){
    const newFont = prompt("Enter font family: ", "Arial" );
    input.style.fontFamily= newFont;
}
function changeText(){
    const newSize = prompt("Enter Font Size: ", "16" );
    input.style.fontSize= newSize + 'px';
}
