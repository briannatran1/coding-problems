/*You are given an array of objects representing a collection of products, each with a name, price, and category. Your task is to use 
map, filter, and reduce to calculate the average price of products in each category, and then return an array of objects containing 
only the categories that have an average price above 50.*/

//use reduce to create an object that has categories as keys
  //declare var for each product category
  //if category doesn't exist as a key in acc,
    //assign empty arr
  //else
    //push product to category key
  //return acc
//get all keys in productsByCat as an arr and use map to iterate over each category
  //declare sum var and calculate the sum of the prices of all products in that category
  //divide sum by length of category arr to calculate avergae price
  //return formatted obj
//filter out categories that only have an average price above 50 and return as arr

function productCat(products){
  let productsByCat = products.reduce(function(acc, product){
    let category = product.category;
    if(!acc[category]){
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});
  let avgPriceByCat = Object.keys(productsByCat).map(category => {
    let sum = productsByCat[category].reduce((acc, product) => acc + product.price, 0);
    return {category: category, average: sum / productsByCat[category].length};
  });
  return avgPriceByCat.filter(category => category.average > 50);
}

let products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];

/* [ 
  { category: 'Clothes', average: 55 },
  { category: 'Electronics', average: 55 }
] */
