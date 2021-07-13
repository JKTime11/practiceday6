var paraElements=document.getElementsByTagName('p');

for(var para of paraElements) {
    document.getElementById('result').innerHTML+=para.innerHTML+'<br>';
}
