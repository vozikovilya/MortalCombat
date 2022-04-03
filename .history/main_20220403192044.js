const $arenas = document.querySelector('.arenas');

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
    weapon: ['nunchaku', 'sword', 'mace'],
    attack: function(name) { {
        console.log(name + ' ' + 'Fight...')
    }
};

function createPlayer(classPlayer, playerObj) {
    const $player = document.createElement('div');
    const $progressbar = document.createElement('div');
    const $character = document.createElement('div');
    const $name = document.createElement('div');
    const $life = document.createElement('div');
    const $img = document.createElement('img')
    
    $player.classList.add(classPlayer)
    $progressbar.classList.add('progressbar');
    $character.classList.add('character');
    $name.classList.add('name');
    $life.classList.add('life');
    $img.classList.add('character')

    $player.appendChild($progressbar);
    $player.appendChild($character);
    
    $name.innerText = elName;

    $life.style.width = String(elLife + '%');

    $progressbar.appendChild($name);
    $progressbar.appendChild($life);
    
    $img.src = elScr;
    $character.appendChild($img);
}

createPlayer('player1', player1.name, player1.hp, player1.img);
createPlayer('player2', player2.name, player2.hp, player2.img);