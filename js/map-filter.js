var marks=[10, 50, 25, 67, 23, 113];

document.getElementById('demo').innerHTML='Array : '+marks;

function mapArray() {
    document.getElementById('result').innerHTML='Marks : <br>';
    var mapped=marks.map(function(mark) {
        return mark+10;
    });
    for(var mp of mapped)
        document.getElementById('result').innerHTML+=mp + "<br>";
}

function filterArray() {
    document.getElementById('result1').innerHTML='Marks : <br>';
    var filtered=marks.filter(function(mark) {
        return mark>30;
    });
    for(var filter of filtered)
        document.getElementById('result1').innerHTML+=filter + "<br>";
}