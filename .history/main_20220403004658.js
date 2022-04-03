// Task #0

const Scorpion = {
    name: 'Scorpion',
    hp: 1,
    img: '',
    weapon: ['knife', 'pistol', 'machine'],
    attack() {
        console.log($player1.name + ' ' + 'Fight...')
    }
};
const Kitana = {
    name: 'Kitana',
    hp: 2,
    img: '',
    weapon: ['nunchaku', 'sword', 'mace'],
    attack() {
        console.log($player2.name + ' ' + 'Fight...')
    }
};

// Task #1


function createPlayer(player) {
    const player = document.createElement('div').classList.add('player1');
    
    const $progressbar = player.createElement('div').classList.add('progressbar');
    const $character = player.createElement('div').classList.add('character');
    
    const life = $progressbar.createElement('div').classList.add('life').style.width = '100%';
    const name = $progressbar.createElement('div').classList.add('name').Scorpion[name];

    const characterImg = $character.createElement('img').classList.add('character');
}