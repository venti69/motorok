document.getElementById('kuldes').addEventListener('click', function(){
    const marka = document.getElementById('marka').value;
    get_leiras(marka);
});

function get_leiras(marka){
    xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        const p = document.getElementById('szoveg');
        let img = document.getElementById('kep');
        img.src = marka + '.jpg';
        p.innerHTML = xhttp.responseText;
    }
    
    xhttp.open('GET', marka+'.txt');
    xhttp.send();
}