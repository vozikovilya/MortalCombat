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
    const player = document.createPlayer('div');
    player.style.add('player1')
}