// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

restrictListProducts(products)

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

//sorting functions 
function sortPrice(a, b) {
    return a.price < b.price ? 1 : -1
}
function sortCategory(a, b) {
    return a.category > b.category ? 1 : -1
}
	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById('displayProduct');
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
	s2.innerHTML = "";
	if (restrictionSet.has(s1.value)) {
		restrictionSet.delete(s1.value)
	} else {
		restrictionSet.add(s1.value)
	}	
	// obtain a reduced list of products based on restrictions
	var optionArray = restrictListProducts(products, s1.value);
	restrictedItems = optionArray
	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
    // <label for="Bread">Bread/label><br>
}

function displayAllProducts(optionArray) {
	var s2 = document.getElementById('displayProduct');
	prevSetCategory = "";
	s2.innerHTML = "";
	const sortOptionArray = optionArray.sort(sortPrice)
	const sortCategoryArray = sortOptionArray.sort(sortCategory)
		
	for (i = 0; i < optionArray.length; i++) {
		if (sortCategoryArray[i].category !== prevSetCategory) {
			var heading = document.createElement("h3");
			heading.innerHTML = sortCategoryArray[i].category
			s2.appendChild(heading)
			prevSetCategory = sortCategoryArray[i].category
		  }
			
        var productName = sortOptionArray[i].name;
        var productPrice = sortOptionArray[i].price;
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName + " - $" + productPrice));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}

const activeCategory = new Set()
let restrictedItems = []
function displayCategory(evt, category) {
	if (activeCategory.has(category)) {
	  activeCategory.delete(category)
	  evt.currentTarget.className += "tablink";
	} else {
	  activeCategory.add(category)
	  evt.currentTarget.className += " active";
	}
	const newItems = []
	const items = restrictedItems.length === 0 ? products : restrictedItems 
	for (let i = 0 ; i < items.length; i+=1) {
	  if (activeCategory.has(items[i].category)) {
		newItems.push(items[i])
	  }
	}
	displayAllProducts(newItems)
  }

	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + (getTotalPrice(chosenProducts)).toFixed(2)));	
	document.getElementById("myBtn").click();
	
}

function openCity(evt, tabName) {
	// Declare all variables
	var i, tabcontent, tablinks;
  
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
  
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
  
	// Show the current tab, and add an "active" class to the link that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
  }
document.getElementById("defaultOpen").click();

// modal code from http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/howto/howto_css_modals.asp.html
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}