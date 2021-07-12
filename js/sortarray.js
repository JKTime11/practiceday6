var cars=['BMW', 'Scorpio', 'Fortuner', 'Wagon R', 'Ferrari'];

document.getElementById('demo').innerHTML= 'Original Array : '+cars;

function sortArray() {
    cars.sort();
    document.getElementById('result').innerHTML= 'Sorted Array : '+cars;
}

var marks=[10, 50, 25, 67, 23, 113];

document.getElementById('demo1').innerHTML='Original Array : '+marks;

function sortArray1() {
    marks.sort((a, b)=>{
        return a<=b?-1:1;
    });
    document.getElementById('result1').innerHTML='Sorted Marks : '+marks;
}