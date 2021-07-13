var marks=[10, 50, 25, 67, 23, 113];

document.getElementById('demo').innerHTML='Array : '+marks;

function iterateArray() {
    document.getElementById('result').innerHTML='Marks : <br>';
    marks.forEach(function(mark) {
        document.getElementById('result').innerHTML+=mark + "<br>";
    });
}

function iterateArray1() {
    document.getElementById('result1').innerHTML='Marks : <br>';
    // for of gives values & for in gives index
    for(var mark of marks) {
        document.getElementById('result1').innerHTML+=mark + "<br>";
    }
}