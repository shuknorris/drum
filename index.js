let audios = {
    w: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    a: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    s: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    d: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    j: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    k: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    l: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
};
let audio = new Audio();

window.addEventListener('load', function() {
    // Function to handle clicks
    let handleClick = function(e) {
        let value = e.target.innerText;
        console.log(audios[value]);
        audio = new Audio(audios[value]);
        audio.play();
    };
    let buttons = document.querySelectorAll('.drum');
    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });
});