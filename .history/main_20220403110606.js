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
    
    const $progressbar = $player.createElement('div').classList.add('progressbar');
    const $character = $player.createElement('div').classList.add('character');
    
    const name = $progressbar.createElement('div').classList.add('name').innerText = elName;
    const life = $progressbar.createElement('div').classList.add('life').style.width = elLife;

    const characterImg = $character.createElement('img').classList.add('character').src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
    
    const $root = document.querySelector('.root');
    $root.appendChild($player);
}

createPlayer('player1', 'Scorpion', 50)

// function createPlayer(elClass) {
//     const $player = document.createElement('div');
//     $player.classList.add(elClass);

//     const $root = document.querySelector('.root');
//     $root.appendChild($player);
// }

// createPlayer('player1');