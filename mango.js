/*There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), 
calculate the total cost of the mangoes.*/

function mango(count, price){
    let freeMangoes = Math.floor(count / 3);
    let totalCost = (count - freeMangoes) * price;
    return totalCost;
}

//input: numbers
//output: number

//determine how many free mangoes are given
//calculate the cost of mangos without the free mangos
//return totalCost

console.log(mango(2, 3)) // 6    # 2 mangoes for $3 per unit = $6; no mango for free
console.log(mango(3, 3)) // 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
console.log(mango(9, 5)) // 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free
