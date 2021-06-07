	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [

	{
		name: "Apple",
		price: 0.99,
		organic: false,
		lactose: true,
		nut: true,
		veg: true,
		pesc: true
		
	},
	{
		name: "Apple - Organic",
		price: 1.50,
		organic: true,
		lactose: true,
		nut: true,
		veg: true,
		pesc: true
		
	},

	{
		name: "Brocoli",
		price: 1.60,
		organic: false,
		lactose: true,
		nut: true,
		veg: true,
		pesc: true
	},
	{
		name: "Brocoli - Organic",
		price: 1.90,
		organic: true,
		lactose: true,
		nut: true,
		veg: true,
		pesc: true
	},


	{
		name: "Macadamia cookies",
		price: 1.96,
		organic: false,
		lactose: true,
		nut: false,
		veg: true,
		pesc: true
	},

	{
		name: "Spinach",
		price: 1.99,
		organic: false,
		lactose: true,
		nut: true,
		veg: true,
		pesc: true
	},

	{
		name: "Peaches",
		price: 2.31,
		organic: false,
		lactose: true,
		nut: true,
		veg: true,
		pesc: true
	},
	{
		name: "Grapes",
		price: 2.35,
		organic: false,
		lactose: true,
		nut: true,
		veg: true,
		pesc: true
	},

	{
		name: "Cherries",
		price: 2.40,
		organic: false,
		lactose: true,
		nut: true,
		veg: true,
		pesc: true
	},
	{
		name: "Pear",
		price: 2.44,
		organic: false,
		lactose: true,
		nut: true,
		veg: true,
		pesc: true
	},

	{
		name: "Blueberries",
		price: 2.65,
		organic: false,
		lactose: true,
		nut: true,
		veg: true,
		pesc: true
	},
	{
		name: "Blueberries - Organic",
		price: 2.75,
		organic: true,
		lactose: true,
		nut: true,
		veg: true,
		pesc: true
		
	},
	{
		name: "Bell Peppers",
		price: 2.99,
		organic: false,
		lactose: true,
		nut: true,
		veg: true,
		pesc: true
	},

	{
		name: "Bread",
		price: 3.25,
		organic: false,
		lactose: true,
		nut: true,
		veg: true,
		pesc: true
	},

	{
		name: "Bread - Organic",
		price: 3.55,
		organic: true,
		lactose: true,
		nut: true,
		pesc: true
	},
	
	{
		name: "Strawberries",
		price: 3.60,
		organic: false,
		lactose: true,
		nut: true,
		veg: true,
		pesc: true
	},
	{
		name: "Strawberries - Organic",
		price: 3.75,
		organic: true,
		lactose: true,
		nut: true,
		veg: true,
		pesc: true
	},
	
	

	{
		name: "Almond-Milk",
		price: 4.44,
		organic: false,
		lactose: true,
		nut: false,
		veg: true,
		pesc: true
	},

	{
		name: "Milk",
		price: 5.53,
		organic: false,
		lactose: false,
		nut: true,
		veg: true,
		pesc: true
	},

	{
		name: "Ice-Cream Sandwich",
		price: 5.78,
		organic: false,
		lactose: false,
		nut: true,
		veg: true,
		pesc: true
	},
	{
		name: "Parmesan Cheese",
		price: 5.99,
		organic: false,
		lactose: false,
		nut: true,
		veg: true,
		pesc: true
	},
	{
		name: "Nutty Chocolate Bar",
		price: 6.29,
		organic: false,
		lactose: false,
		nut: false,
		veg: true,
		pesc: true
	},
	{
		name: "Granola Cereal",
		price: 7.30,
		organic: false,
		lactose: true,
		nut: false,
		veg: true,
		pesc: true
	},

	{
		name: "Beef",
		price: 7.45,
		organic: false,
		lactose: true,
		nut: true,
		veg: false,
		pesc: false
	},
	{
		name: "Chicken",
		price: 7.95,
		organic: false,
		lactose: true,
		nut: true,
		veg: false,
		pesc: false
	},

	{
		name: "salmon",
		price: 10.00,
		organic: false,
		lactose: true,
		nut: true,
		veg: false,
		pesc: true
	},

	{
		name: "Tuna",
		price: 11.00,
		organic: false,
		lactose: true,
		nut: true,
		veg: false,
		pesc: true
	},

	{
		name: "Cod Fish",
		price: 12.00,
		organic: false,
		lactose: true,
		nut: true,
		veg: false,
		pesc: true
	},

	{
		name: "Canned sardines",
		price: 12.50,
		organic: false,
		lactose: true,
		nut: true,
		veg: false,
		pesc: true
	}

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods) {
	var Nutfree = document.getElementById("Nutfree");
	var Lactosefree = document.getElementById("Lactosefree");
	var organic = document.getElementById("organic-op");
	var Nonveg = document.getElementById("Non-Vegetarian");
	var pesc = document.getElementById("Pescatarian");

	let product_names = [];

	var restrictions = [];

	if (Nutfree.checked){
		restrictions.push("Nutfree");
	}

	if (Lactosefree.checked){
		restrictions.push("Lactosefree");
	}

	if (organic.checked){
		restrictions.push("Organic");
	}

	if (Nonveg.checked){
		restrictions.push("Non-Vegetarian");
	}
	if (pesc.checked){
		restrictions.push("Pescatarian");
	}


	//need to see if Organic Option is selected.

	for (let i=0; i<prods.length; i+=1) {


		if (restrictions.includes("Organic")){
			if (prods[i].organic==true){
				if (( !restrictions.includes("Nutfree") || prods[i].nut== true )
					&& ( !restrictions.includes("Lactosefree") || prods[i].lactose == true )
					&& ( !restrictions.includes("Non-Vegetarian") || prods[i].veg==false )
					&& ( !restrictions.includes("Pescatarian") || prods[i].pesc==true ))
				{
					product_names.push(prods[i]);
				}
			}
		}
		else{
			if (prods[i].organic==false){
				if (( !restrictions.includes("Nutfree") || prods[i].nut== true )
					&& ( !restrictions.includes("Lactosefree") || prods[i].lactose == true )
					&& ( !restrictions.includes("Non-Vegetarian") || prods[i].veg==false )
					&& ( !restrictions.includes("Pescatarian") || prods[i].pesc==true ))
				{
					product_names.push(prods[i]);
				}
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
