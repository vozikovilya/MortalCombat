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


// function createPlayer(player) {
//     const el = document.createElement('div').classList.add(player);
    
//     const $progressbar = player.createElement('div').classList.add('progressbar');
//     const $character = player.createElement('div').classList.add('character');
    
//     const life = $progressbar.createElement('div').classList.add('life').style.width = '100%';
//     const name = $progressbar.createElement('div').classList.add('name').innerText = Scorpion[name];

//     const characterImg = $character.createElement('img').classList.add('character').src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
// }

// createPlayer('player1')

function createPlayer(elClass) {
    const $player = document.createElement('div');
    $player.classList.add(elClass);

    const $root = document.querySelector('.root');
    $root.appendChild($player);
}

createPlayer('player1');