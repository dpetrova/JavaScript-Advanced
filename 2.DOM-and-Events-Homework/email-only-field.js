function checkEmail(){
    var input,
        output,
        pattern;
    input = document.getElementById('input').value;
    output = document.getElementById('output');
    output.innerHTML = input;
    pattern = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;
    if(!pattern.test(input)){
        output.style.backgroundColor = "red";
    } else {
        output.style.backgroundColor = "lightgreen";
    }
}