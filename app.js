'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')
    if(document.body.className == "light-theme"){
        document.getElementById("text").textContent = "Brasil Ganhou!";
        document.getElementById("image").src = "Brasil.webp";
        var elements = document.getElementsByClassName("img");
        for(var a = 0; a < elements.length; a++){
            elements[a].src = "Felicitad.webp";
        }
    }
    else{
        document.getElementById("text").textContent = "Coreia Chorou!"
        document.getElementById("image").src = "Coreia.jpg";
        var elements = document.getElementsByClassName("img");
        for(var a = 0; a < elements.length; a++){
            elements[a].src = "Trist.jpg";
        }
    }
    console.log('current class name: ' + document.body.className);
});
