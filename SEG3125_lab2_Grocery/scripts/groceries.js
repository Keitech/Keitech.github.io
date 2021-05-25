	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
        name: "butter",
        organic: false,
		lactose: true,
		nuts: false,
		price: 4.99
	},
	{
        name: "cheese",
        organic: true,
		lactose: true,
		nuts: false,
		price: 2.99
	},
	{
        name: "milk",
        organic: true,
		lactose: true,
		nuts: false,
		price: 7.99
    },
    {
        name: "yogurt",
        organic: false,
		lactose: true,
		nuts: false,
		price: 1.69
    },
    {
        name: "IceCream",
        organic: true,
		lactose: true,
		nuts: true,
		price: 1.99
    },
    {
        name: "Peanuts",
        organic: true,
		lactose: true,
		nuts: true,
		price: 0.99
    },
    {
        name: "IceCream with nuts",
        organic: true,
		lactose: true,
		nuts: true,
		price: 5.99
    },
    {
        name: "almondBar",
        organic: false,
		lactose: false,
		nuts: true,
		price: 3.99
    },
    {
        name: "cookies",
        organic: false,
		lactose: true,
		nuts: true,
		price: 5.99
    },
    {
        name: "Bread",
        organic: true,
		lactose: false,
		nuts: false,
		price: 2.59
    },
    
];
	

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Lactose") && (prods[i].lactose == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Nut Allergy") && (prods[i].nuts == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}