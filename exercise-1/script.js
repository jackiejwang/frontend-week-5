function addTodoItem(event) {
  	event.preventDefault();
  	// necessary to prevent the submitting of a form
	var inputItem = document.getElementById("inputItem");
	// console.log(inputItem.value);
	var toDoList=document.getElementById("toDoList");
	var listItem = document.createElement("label");

	// add checkbox here
	var checkBox =document.createElement("input");
	checkBox.setAttribute("type","checkbox");
	listItem.appendChild(checkBox);
	var text=document.createTextNode(inputItem.value);
	listItem.appendChild(text);
	
	
	var addBreak = document.createElement("br");
	listItem.appendChild(addBreak);

	toDoList.appendChild(listItem);

	inputItem.value="";
	// inputItem.innerText="";
}

var form = document.getElementById("form");
form.addEventListener("submit",addTodoItem);


// var appendItem = document.createElement("li");
// appendItem.innerText = "inputItem";
