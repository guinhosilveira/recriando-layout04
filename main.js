const btIMG    = document.querySelector('#imgID');
const btAgain  = document.querySelector('#btAgain');
const content1 = document.querySelector('.firstContent');
const content2 = document.querySelector('.secondContent');
const messages = [
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
    'Um pássaro sentado em uma árvore nunca terá medo do galho quebrar, porque sua confiança não está no galho, mas em suas próprias asas. Sempre acredite em você mesmo.',
    'Viver é acalentar sonhos e esperanças, fazendo da fé a nossa inspiração maior. É buscar nas pequenas coisas, um grande motivo para ser feliz!'
];

function impressMessages() {
    toggleScreen();

    content2.querySelector('p').innerText = messages[Math.floor(Math.random() * messages.length)];
}

function toggleScreen(event) {
    content1.classList.toggle('hide');
    content2.classList.toggle('hide');
}

function pressEnter(e) {
    if (e.key == 'Enter' && content1.classList.contains('hide')) {
        toggleScreen();
    }
}

btIMG.addEventListener('click', impressMessages);
btAgain.addEventListener('click', toggleScreen);
document.addEventListener('keypress', pressEnter)