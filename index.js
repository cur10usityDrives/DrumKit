
// Detecting button press
for (var i=0; i<document.querySelectorAll("button.drum").length; i++){
    document.querySelectorAll("button.drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

// Detecting key press
document.addEventListener("keydown", function (natty){
    makeSound(natty.key);
    buttonAnimation(natty.key);
})

function makeSound (key){
    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            break;
    }
}

function buttonAnimation(key){
    document.querySelector("button."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("button."+key).classList.remove("pressed")
    }, 100);
}