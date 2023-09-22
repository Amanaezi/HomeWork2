"use strict";

let Names = ["ни", "буль", "коль", "то", "ро", "паль", "ми", "ма"];
let count = +prompt("Введите количество слогов в кличке собаки (не больше 7!):");

if (!isNaN(count) && count > 0 && count < Names.length) 
{
    let dogName = "";
    for (let i = 0; i < count; i++) 
    {
        let rnd = Math.floor(Math.random() * Names.length);
        dogName += Names[rnd];
    }
    alert(`Сгенерированное имя собаки: ${dogName}`);
} 
else 
{
    alert("Введите корректное количество слогов.");
}