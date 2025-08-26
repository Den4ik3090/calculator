

    function play(playerChoice) {
      const choices = ['Камень', 'Ножницы', 'Бумага'];
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      let result = '';
      if (playerChoice === computerChoice) {
        result = `Ничья! Вы оба выбрали ${playerChoice}. 🤝`;
      } else if (
        (playerChoice === 'Камень' && computerChoice === 'Ножницы') ||
        (playerChoice === 'Ножницы' && computerChoice === 'Бумага') ||
        (playerChoice === 'Бумага' && computerChoice === 'Камень')
      ) {
        result = `Вы выиграли! 🎉 ${playerChoice} побеждает ${computerChoice}`;
      } else {
        result = `Вы проиграли! 😢 ${computerChoice} побеждает ${playerChoice}`;
      }

      document.getElementById('result').innerText = result;
    }
