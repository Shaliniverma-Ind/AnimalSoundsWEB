for(var i=0;i<document.querySelectorAll(".animal").length;i++ ){
    document.querySelectorAll(".animal")[i].addEventListener("click",function(){
        var button = this.innerHTML;
        switch (button) {
            case "Cat":
                var cat = new Audio("animalSounds/cat.mp3");
                cat.play();
                break;
            case "Horse":
                var horse = new Audio("animalSounds/horse.mp3");
                horse.play();
                break;
            case "Lion":
                var lion = new Audio("animalSounds/lion.mp3");
                lion.play();
                break;
            case "Dog":
                var dog = new Audio("animalSounds/dog.mp3");
                dog.play();
                break;
            case "Elephant":
                var elephant = new Audio("animalSounds/elephant.mp3");
                elephant.play();
                break;
            
            default: console.log(button);
                
        }

    });
} 
