const $arenas = document.querySelector('.arenas');

const player1 = {
    name: 'SCORPION',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'pistol', 'machine'],
    attack: function(name) {
        console.log(name + ' ' + 'Fight...');
    },
}
const player2 = {
    name: 'SUB-ZERO',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['nunchaku', 'sword', 'mace'],
    attack: function(name) {
        console.log(name + ' ' + 'Fight...');
    },
}

function createElement(tag, className) {
    $tag = document.createElement(tag);

    if (className) {
        $tag.classList.add(className);
    }


    return $tag
}

function createPlayer(classPlayer, playerObj) {
    const $player = createElement('div', classPlayer);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $name = createElement('div', 'name');
    const $life = createElement('div', 'life');
    const $img = createElement('img')
    
    $player.classList.add(classPlayer)
    $progressbar.classList.add('progressbar');
    $character.classList.add('character');
    $name.classList.add('name');
    $life.classList.add('life');
    $img.classList.add('img')

    $life.style.width = playerObj + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $progressbar.appendChild($name);
    $progressbar.appendChild($life);

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    $arenas.appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);