// Task #0

const player1 = {
    name: 'SCORPION',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'pistol', 'machine'],
    attack() {
        console.log(player1.name + ' ' + 'Fight...')
    }
};
const player2 = {
    name: 'SUB-ZERO',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['nunchaku', 'sword', 'mace'],
    attack() {
        console.log(player2.name + ' ' + 'Fight...')
    }
};

// Task #1


function createPlayer(elClass, elName, elLife, elScr) {
    const $player = document.createElement('div');
    $player.classList.add(elClass)
    
    const $root = document.querySelector('.root');
    $root.appendChild($player);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    
    const $character = document.createElement('div');
    $character.classList.add('character');

    $player.appendChild($progressbar);
    $player.appendChild($character);
    
    const name = document.createElement('div');
    name.classList.add('name');
    name.innerText = elName;

    const life = document.createElement('div');
    life.classList.add('life');
    life.style.width = String(elLife);

    $progressbar.appendChild(name);
    $progressbar.appendChild(life);
    
    const characterImg = document.createElement('img')
    characterImg.classList.add('character')
    characterImg.src = elScr;
    $character.appendChild(characterImg);
    
}

createPlayer('player1', player1.name, player1.hp, player1.src);