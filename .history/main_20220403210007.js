const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'pistol', 'machine'],
    attack: function(name) {
        console.log(name + ' ' + 'Fight...');
    },
}
const player2 = {
    player: 2,
    name: 'SUB-ZERO',
    hp: 100,
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

function createPlayer(playerObj) {
    const $player = createElement('div', 'player'+ playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $name = createElement('div', 'name');
    const $life = createElement('div', 'life');
    const $img = createElement('img');

    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $progressbar.appendChild($name);
    $progressbar.appendChild($life);

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player;
}

function chengeHP(player) {
    const $playerLife = document.querySelector('.player'+ player.player +' .life');
    const $random = Math.ceil(Math.random() * 20);
    player.hp -= $random;
    $playerLife.style.width = player.hp + '%';

    if (player.hp <= 0) {
        $arenas.appendChild(playerLose(player.name));
        player.hp = 0 + '%';
    }

    console.log($playerLife.style.width)
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' lose';

    return $loseTitle;
}

$randomButton.addEventListener('click', function() {
    chengeHP(player1);
    chengeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));