"use strict";

const poems = [
    ["В темноте ночной, звезды яркие светят,", "Словно маленькие огоньки вдали мерцают."],
    ["На берегу моря, где волны шумят,", "Я встретил восход солнца, который меня вдохновляет."],
    ["В лесу глубоком, где тишина царит,", "Пение птиц слышится, как волшебный рассвет."],
    ["На вершине горы, в вышине небес,", "Я ощущаю себя свободным, как птица в полете."],
  ];
  
  while (true) 
  {
    let question = prompt("Задайте вопрос гадалке (или 'exit' для выхода):");
    
    if (question.toLowerCase() === "exit") 
    {
      alert("До свидания!");
      break;
    } 
    else 
    {
      let rndPoemIndex = Math.floor(Math.random() * poems.length);
      let rndLineIndex = Math.floor(Math.random() * poems[rndPoemIndex].length);
      let answer = poems[rndPoemIndex][rndLineIndex];
      alert(answer);
    }
  }