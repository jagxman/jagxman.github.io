	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		price: 1.99,
		organic: false,
		lactose: true,
		nut: true
	},
	{
		name: "Brocoli - Organic",
		price: 2.99,
		organic: true,
		lactose: true,
		nut: true
	},

	{
		name: "Almond-Milk",
		price: 4.44,
		organic: false,
		lactose: true,
		nut: false
	},

	{
		name: "Milk",
		price: 2.53,
		organic: false,
		lactose: false,
		nut: true
	},

	{
		name: "Ice-Cream Sandwich",
		price: 2.60,
		organic: false,
		lactose: false,
		nut: true
	},
	{
		name: "Parmesan Cheese",
		price: 0.60,
		organic: false,
		lactose: false,
		nut: true
	},
	{
		name: "Nutty Chocolate Bar",
		price: 1.25,
		organic: false,
		lactose: false,
		nut: false
	},
	{
		name: "Granola Cereal",
		price: 3.25,
		organic: false,
		lactose: true,
		nut: false
	},

	{
		name: "Macadamia cookies",
		price: 6.25,
		organic: false,
		lactose: true,
		nut: false
	},

	{
		name: "Bread",
		price: 2.35,
		organic: false,
		lactose: true,
		nut: true
	},

	{
		name: "Bread - Organic",
		price: 4.35,
		organic: true,
		lactose: true,
		nut: true
	},
	{
		name: "Apple",
		price: 0.99,
		organic: false,
		lactose: true,
		nut: true
	},

	{
		name: "Apple - Organic",
		price: 1.50,
		organic: true,
		lactose: true,
		nut: true
	},
	{
		name: "Strawberries",
		price: 2.50,
		organic: false,
		lactose: true,
		nut: true
	},
	{
		name: "Strawberries - Organic",
		price: 3.00,
		organic: true,
		lactose: true,
		nut: true
	},
	{
		name: "Spinach",
		price: 2.35,
		organic: false,
		lactose: true,
		nut: true
	},
	{
		name: "Grapes",
		price: 2.35,
		organic: false,
		lactose: true,
		nut: true
	},
	{
		name: "Blueberries",
		price: 3.10,
		organic: false,
		lactose: true,
		nut: true
	},
	{
		name: "Blueberries - Organic",
		price: 3.50,
		organic: true,
		lactose: true,
		nut: true
	},
	{
		name: "Bell Peppers",
		price: 2.35,
		organic: false,
		lactose: true,
		nut: true
	},
	{
		name: "Peaches",
		price: 2.35,
		organic: false,
		lactose: true,
		nut: true
	},
	{
		name: "Beef",
		price: 2.35,
		organic: false,
		lactose: true,
		nut: true
	},
	{
		name: "Chicken",
		price: 2.35,
		organic: false,
		lactose: false,
		nut: false
	},
	{
		name: "Cherries",
		price: 2.35,
		organic: false,
		lactose: true,
		nut: true
	},
	{
		name: "Pear",
		price: 2.35,
		organic: false,
		lactose: true,
		nut: true
	},
	{
		name: "salmon",
		price: 10.00,
		organic: false,
		lactose: true,
		nut: true
	}

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];

	//need to see if Organic Option is selected.
	var org = document.getElementById("organic-option").value;


	for (let i=0; i<prods.length; i+=1) {


		if (org == "yes"){

			if ((restriction == "LactoseFree") && (prods[i].lactose == true) && (prods[i].organic == true)){
				product_names.push(prods[i].name);
			}
	
	
			else if ((restriction == "Nutfree") && (prods[i].nut == true) && (prods[i].organic == true)){
				product_names.push(prods[i].name);
	
			}

			else if((restriction == "None") && (prods[i].organic == true)){
				product_names.push(prods[i].name);
			}



		}

		else if (org == "no"){

			if ((restriction == "LactoseFree") && (prods[i].lactose == true) && (prods[i].organic == false)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "Nutfree") && (prods[i].nut == true) && (prods[i].organic == false)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "None") && (prods[i].organic == false)){
				product_names.push(prods[i].name);
			}

		}
	}


	//
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
