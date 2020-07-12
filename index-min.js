document.addEventListener("keydown",function(e){audioToPlay(e.key),buttonAnimation(e.key)});var audio,numberOfDrums=document.querySelectorAll(".drum");for(let e=0;e<numberOfDrums.length;e++)numberOfDrums[e].addEventListener("click",function(){audioToPlay(this.innerHTML),buttonAnimation(this.innerHTML)});function audioToPlay(e){switch(e){case"w":audio=new Audio("sounds/tom-1.mp3");break;case"a":audio=new Audio("sounds/tom-2.mp3");break;case"s":audio=new Audio("sounds/tom-3.mp3");break;case"d":audio=new Audio("sounds/tom-4.mp3");break;case"j":audio=new Audio("sounds/snare.mp3");break;case"k":audio=new Audio("sounds/crash.mp3");break;case"l":audio=new Audio("sounds/kick-bass.mp3");break;default:alert("Wrong Key Pressed!!")}audio.play()}function buttonAnimation(e){var o=document.querySelector("."+e);o.classList.add("pressed"),setTimeout(function(){o.classList.remove("pressed")},100)}