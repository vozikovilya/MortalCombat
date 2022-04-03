// Task #0

const player1 = {
    name: 'Scorpion',
    hp: 1,
    img: '',
    weapon: ['knife', 'pistol', 'machine'],
    attack() {
        console.log(player1.name + ' ' + 'Fight...')
    }
};
const player2 = {
    name: 'Kitana',
    hp: 2,
    img: '',
    weapon: ['nunchaku', 'sword', 'mace'],
    attack() {
        console.log(player2.name + ' ' + 'Fight...')
    }
};

// Task #1


function createPlayer(elClass, elName, elLife) {
    const $player = document.createElement('div').classList.add(elClass);
    
    const $progressbar = document.createElement('div').classList.add('progressbar');
    const $character = document.createElement('div').classList.add('character');
    $player.appendChild($progressbar, $character);
    
    const name = document.createElement('div').classList.add('name').innerText = elName;
    const life = document.createElement('div').classList.add('life').style.width = elLife;
    $progressbar.appendChild(name, life);
    
    const characterImg = document.createElement('img').classList.add('character').src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
    $character.appendChild(characterImg);
    
    const $root = document.querySelector('.root');
    $root.appendChild($player);
}

createPlayer('player1', 'Scorpion', 50);

// function createPlayer(elClass) {
//     const $player = document.createElement('div');
//     $player.classList.add(elClass);

//     const $root = document.querySelector('.root');
//     $root.appendChild($player);
// }

// createPlayer('player1');