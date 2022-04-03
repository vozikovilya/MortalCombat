// Task #0

const player1 = {
    name: 'SCORPION',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'pistol', 'machine'],
    attack: function(name) {
        console.log(name + ' ' + 'Fight...')
    }
};
const player2 = {
    name: 'SUB-ZERO',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['nunchaku', 'classPlayerr playerObj: function(name) {
        console.log(name + ' ' + 'Fight...')
    }
};

// Task #1, Task #2, Task #3*


const $arenas = document.querySelector('.arenas');
$arenas.appendChild($player);
function createPlayer(classPlayer, playerObj) {
    const $player = document.createElement('div');
    const $progressbar = document.createElement('div');
    const $character = document.createElement('div');
    const $name = document.createElement('div');
    const $life = document.createElement('div');
    const $img = document.createElement('img')
    
    $player.classList.add(elClass)

    $progressbar.classList.add('progressbar');
    
    $character.classList.add('character');

    $player.appendChild($progressbar);
    $player.appendChild($character);
    
    name.classList.add('name');
    name.innerText = elName;

    life.classList.add('life');
    life.style.width = String(elLife + '%');

    $progressbar.appendChild(name);
    $progressbar.appendChild(life);
    
    characterImg.classList.add('character')
    characterImg.src = elScr;
    $character.appendChild(characterImg);
}

createPlayer('player1', player1.name, player1.hp, player1.img);
createPlayer('player2', player2.name, player2.hp, player2.img);