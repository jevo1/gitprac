let x = 0;
let y = 1;


let sum = 0;

for(let i=0; i<10; i++)
{
    sum = x + y;
    console.log("seq " + (i+1) + " is: " + sum);
    x = y;
    y = sum;
}