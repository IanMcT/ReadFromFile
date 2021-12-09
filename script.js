function readFile(input) {
    var file = input.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        processContents(reader.result);
    reader.close;
    }
}

function processContents(contents){
    var lines = contents.split('\n');
    var output = "";
    for (line of lines){
        console.log(line);
        output += line + "<br />";
    }
    document.getElementById("output").innerHTML += output;
}