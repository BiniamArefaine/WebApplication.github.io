(function(){

    "use strict"
    
    window.onload = function(){
        document.getElementById("animation").onchange = getAnimationPage;
        document.getElementById("sizeable").onchange = setAnimationSize;
        document.getElementById("start").onclick = animationLooper;
        document.getElementById("stop").onclick = animationStopper;
    };
    
    function getAnimationPage(){
        let movements = document.getElementById("animation");
        let viewa = document.getElementById("viewarea")
        if(movements.value === "blank"){
            viewa.innerHTML = BLANK;
        }else if(movements.value === "exercise"){
            viewa.innerHTML = EXERCISE;
        }else if(movements.value === "juggler"){
            viewa.innerHTML = JUGGLER;
        }else if(movements.value === "bike"){
            viewa.innerHTML = BIKE;
        }else if(movements.value === "dive"){
            viewa.innerHTML = DIVE;
        }else if(movements.value === "custom"){
            viewa.innerHTML = CUSTOM;
            viewa.readOnly = false;
        }
    }
    
    function setAnimationSize(){
        let movements = document.getElementById("sizeable");
        let viewa = document.getElementById("viewarea");
        if(movements.value === "tiny"){
            viewa.style.fontSize = "7pt";
        }else if(movements.value === "small"){
            viewa.style.fontSize = "10pt";
        }else if(movements.value === "medium"){
            viewa.style.fontSize = "12pt";
        }else if(movements.value === "large"){
            viewa.style.fontSize = "16pt";
        }else if(movements.value === "extra large"){
            viewa.style.fontSize = "24pt";
        }else if(movements.value === "xxl"){
            viewa.style.fontSize = "42pt";
        }
    }
    
    var x = null;
    var i;
    
    function animationLooper(){
        let v = document.getElementById("viewarea");
        let arr = v.innerHTML.split("=====");
        let speed;
        if(document.getElementById("turbo").checked){
            speed = 50;
        }else{
            speed = 250;
        }
        x = setInterval(myAnimate, speed);
    
        function myAnimate(){
            if(i === undefined){
                i = 0;
            }else if(i < (arr.length - 1)){
                i = i + 1;
            }else if(i === (arr.length - 1)){
                i = 0;
            }
            v.innerHTML = arr[i];
            document.getElementById("start").disabled = true;
            document.getElementById("animation").disabled = true;
        }
    }
    
    function animationStopper(){
        clearInterval(x);
        getAnimationPage();
        document.getElementById("start").disabled = false;
        document.getElementById("animation").disabled = false;
    }
    
    })();