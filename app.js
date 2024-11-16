// Get elements by their IDsd
// div1
const mainContentDiv = document.getElementById("main-content");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");

// 1. Display all children of mainContentDiv
// div2
for (const child of mainContentDiv.children) {
  console.log(child.innerHTML); // Show the content of each child
}
// div2
// 2. Fill input values
firstNameInput.value = "Alex";
lastNameInput.value = "bank";
emailInput.value = "Alexbank@example.com";

// use html code of question 1 and show the result on browser
// 3. Get the node type of the "form-content" element
console.log(document.getElementById("form-content").nodeType);

// 4. Get the node type of the "lastName" element and its child
const lastNameElement = document.getElementById("lastName");
console.log(lastNameElement.nodeType);
console.log(lastNameElement.firstChild.nodeType);

// 5. Update the child node of "lastName"
lastNameElement.firstChild.textContent = "Updated Last Name";

// 6. Get the first and last child of "main-content"
console.log(mainContentDiv.firstChild);
console.log(mainContentDiv.lastChild);

// 7. Get next and previous siblings of "lastName"
console.log(lastNameElement.nextSibling);
console.log(lastNameElement.previousSibling);

// 8. Get the parent node and node type of "email"
const emailElement = document.getElementById("email");
console.log(emailElement.parentNode);
console.log(emailElement.parentNode.nodeType);



