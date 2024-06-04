let run = document.getElementById('imgRun');
let bodybuilding = document.getElementById('imgBodybuilding');
let crossfit = document.getElementById('imgCrossfit');
let phraseHelp = document.getElementById('phraseHelp');

function opacityZero() {
    run.style.opacity = 0.3;
    bodybuilding.style.opacity = 0.3;
    crossfit.style.opacity = 0.3;
}

function imgsAnimation() {
    let phrases = [
        { text: "Melhore sua performance na corrida ", element: run },
        { text: "Melhore sua performance na musculação", element: bodybuilding },
        { text: "Melhore sua performance no Cross Training", element: crossfit }
    ];

    let index = 0;

    function updateAnimation() {
        opacityZero();
        phraseHelp.innerText = phrases[index].text;
        phrases[index].element.style.opacity = 1;
        phrases[index].element.style.transition = "opacity 1s";
        

        index = (index + 1) % phrases.length;
    }

    updateAnimation(); 
    setInterval(updateAnimation, 2500); 
}

function eventInit() {
    imgsAnimation();
}

eventInit();
