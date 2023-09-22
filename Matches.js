"use strict";

let n = +prompt("Input start count of matches:");
if (isNaN(n)) 
{
    alert("Incorrect count of matches. Game over!");
}
else 
{
    while (n > 0) 
    {

        alert("Your turn!");
        let m = +prompt("Get the matches (1-3)!");

        if (isNaN(m) || m < 1 || m > 3) 
        {
            alert("Incorrect count of matches, try again!");
            continue;
        }

        if (m > n) 
        {
            alert("You can't take more matches than you have left, try again!");
            continue;
        }

        n -= m;
        const match = '|';
        let str = "";

        for (let i = n; i != 0; i--) 
        {
            str += match;
        }

        if (n <= 0) 
        {
            alert("You win!");
            break;
        }

        alert(str);
        str = "";

        alert("Computer turn!");
        if (n % 4 !== 0) 
        {
            n -= n % 4;
        }
        else 
        {
            n -= 3;
        }

        for (let i = n; i > 0; i--) 
        {
            str += match;
        }

        if (n <= 0) 
        {
            alert("Computer win!");
            break;
        }

        alert(str);
    }
}
