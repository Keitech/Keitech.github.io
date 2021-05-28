	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
        name: "Butter [L]",
        organic: false,
		lactose: true,
		nuts: false,
		price: 2.99
	},
	{
        name: "Cheese [O]",
        organic: true,
		lactose: false,
		nuts: false,
		price: 11.99
	},
	{
        name: "Milk [L, O]",
        organic: true,
		lactose: true,
		nuts: false,
		price: 7.99
    },
    {
        name: "Greek Yogurt [L]",
        organic: false,
		lactose: true,
		nuts: false,
		price: 4.99
    },
    {
        name: "Ice Cream [L, O]",
        organic: true,
		lactose: true,
		nuts: false,
		price: 2.79
    },
    {
        name: "Peanuts [N, O]",
        organic: true,
		lactose: false,
		nuts: true,
		price: 1.59
    },
    {
        name: "Ice Cream with Nuts [L, N]",
        organic: false,
		lactose: true,
		nuts: true,
		price: 3.29
    },
    {
        name: "Energy Bar [N]",
        organic: false,
		lactose: false,
		nuts: true,
		price: 6.49
    },
    {
        name: "Cookies [L, N, O]",
        organic: true,
		lactose: true,
		nuts: true,
		price: 1.25
    },
    {
        name: "Bread []",
        organic: false,
		lactose: false,
		nuts: false,
		price: 2.59
    },
    
];	

const restrictionSet = new Set()
function getSelectedCheckboxValues() {
    const checkboxes = document.querySelectorAll(`input[name="diet"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox);
    });
    console.log(values)
    return values;
}

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods) {
    let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restrictionSet.has("Lactose")) && (prods[i].lactose)){
            continue;
		}
		else if ((restrictionSet.has("Nut Allergy")) && (prods[i].nuts)){
            continue;
        }
        else if ((restrictionSet.has("Organic")) && (prods[i].organic)){
            continue;
        }
        product_names.push(prods[i]);
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