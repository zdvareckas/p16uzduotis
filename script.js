let plr1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
    name: 'Pirmasis žaidėjas'
}
let plr2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
    name: 'Antrasis žaidėjas'
}

let resetButton = document.querySelector('#reset');
let scoreSelect = document.querySelector('#playto');
let text = document.getElementById('title')
let select = document.getElementById('select')
let gameOver = false;

function scores(player, player2) {
    if (!gameOver && scoreSelect.value > 0) {
        player.score += 1;
        let winningScore = parseInt(scoreSelect.value)
        player.display.innerText = player.score;

        if (player.score === winningScore) {
            gameOver = true;
            player.display.classList.add('green');
            player2.display.classList.add('red');
            player.button.disabled = true;
            player2.button.disabled = true;
            text.innerText = `Laimėtojas: ${player.name}`;
            player.button.classList.add('remove');
            player2.button.classList.add('remove');
            select.style.display = 'none'

            setTimeout(function () {
                player.button.style.display = 'none';
                player2.button.style.display = 'none';
            }, 500)
        }
    } else {
        alert('Iveskite taškų kiekį!')
    }
}

plr1.button.addEventListener('click', function () {
    scores(plr1, plr2)
})
plr2.button.addEventListener('click', function () {
    scores(plr2, plr1)
})

resetButton.addEventListener('click', () => {
    gameOver = false;
    for (let p of [plr1, plr2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove('green', 'red');
        p.button.classList.remove('remove')
        p.button.disabled = false;
        p.button.style.display = '';
        select.style.display = ''

    }
    text.innerText = 'Naudokitės mygtukais, kad žaisti žaidimą';
    playto.value = '';
})
