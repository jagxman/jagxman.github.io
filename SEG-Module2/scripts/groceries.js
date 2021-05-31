	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [

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
		name: "Brocoli",
		price: 1.60,
		organic: false,
		lactose: true,
		nut: true
	},
	{
		name: "Brocoli - Organic",
		price: 1.90,
		organic: true,
		lactose: true,
		nut: true
	},


	{
		name: "Macadamia cookies",
		price: 1.96,
		organic: false,
		lactose: true,
		nut: false
	},

	{
		name: "Spinach",
		price: 1.99,
		organic: false,
		lactose: true,
		nut: true
	},

	{
		name: "Peaches",
		price: 2.31,
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
		name: "Cherries",
		price: 2.40,
		organic: false,
		lactose: true,
		nut: true
	},
	{
		name: "Pear",
		price: 2.44,
		organic: false,
		lactose: true,
		nut: true
	},

	{
		name: "Blueberries",
		price: 2.65,
		organic: false,
		lactose: true,
		nut: true
	},
	{
		name: "Blueberries - Organic",
		price: 2.75,
		organic: true,
		lactose: true,
		nut: true
	},
	{
		name: "Bell Peppers",
		price: 2.99,
		organic: false,
		lactose: true,
		nut: true
	},

	{
		name: "Bread",
		price: 3.25,
		organic: false,
		lactose: true,
		nut: true
	},

	{
		name: "Bread - Organic",
		price: 3.55,
		organic: true,
		lactose: true,
		nut: true
	},
	
	{
		name: "Strawberries",
		price: 3.60,
		organic: false,
		lactose: true,
		nut: true
	},
	{
		name: "Strawberries - Organic",
		price: 3.75,
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
		price: 5.53,
		organic: false,
		lactose: false,
		nut: true
	},

	{
		name: "Ice-Cream Sandwich",
		price: 5.78,
		organic: false,
		lactose: false,
		nut: true
	},
	{
		name: "Parmesan Cheese",
		price: 5.99,
		organic: false,
		lactose: false,
		nut: true
	},
	{
		name: "Nutty Chocolate Bar",
		price: 6.29,
		organic: false,
		lactose: false,
		nut: false
	},
	{
		name: "Granola Cereal",
		price: 7.30,
		organic: false,
		lactose: true,
		nut: false
	},

	{
		name: "Beef",
		price: 7.45,
		organic: false,
		lactose: true,
		nut: true
	},
	{
		name: "Chicken",
		price: 7.95,
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

function restrictListProducts(prods, restriction,) {
	let product_names = [];

	//need to see if Organic Option is selected.

	var org_yes = document.getElementById("organic-yes");
	var org_no = document.getElementById("organic-no");
	for (let i=0; i<prods.length; i+=1) {


		if ( org_yes.checked){

			if ((restriction == "LactoseFree") && (prods[i].lactose == true) && (prods[i].organic == true)){
				product_names.push(prods[i]);
			}
	
	
			else if ((restriction == "NutFree") && (prods[i].nut == true) && (prods[i].organic == true)){
				product_names.push(prods[i]);
			}

			else if ((restriction == "NutLacFree") && (prods[i].nut == true) && (prods[i].lactose == true) && (prods[i].organic == true)){
				product_names.push(prods[i]);
			}

			else if((restriction == "None") && (prods[i].organic == true)){
				product_names.push(prods[i]);
			}



		}

		else if (org_no.checked){

			if ((restriction == "LactoseFree") && (prods[i].lactose == true) && (prods[i].organic == false)){
				product_names.push(prods[i]);
			}
			else if ((restriction == "NutFree") && (prods[i].nut == true) && (prods[i].organic == false)){
				product_names.push(prods[i]);
			}

			else if ((restriction == "NutLacFree") && (prods[i].nut == true) && (prods[i].lactose == true) && (prods[i].organic == false)){
				product_names.push(prods[i]);
			}


			else if ((restriction == "None") && (prods[i].organic == false)){
				product_names.push(prods[i]);
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
