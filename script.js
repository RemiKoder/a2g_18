// TASK
// 1. Create aconstant variable that retrives the HTML element with ID inputData
// 

// 
// 5. Add the method .value to retrive the value from the input instead of the element itself
// 
const inputData = document.querySelector ('#inputData');
// 
// 2. Create a constant variable that retrieves the HTML element with ID submitData
// 
const submitData = document.querySelector ('#submitData')
console.log(submitData);
// 
// 3. Create a function with name displayData and log a string saying "Im working" to the console
// 

// 
// 6. Create a variable called inputDataValue that uses the variable inputData with the .value method
// Add a log logging out the variable inputData inside of the function
// 

// 
// 7. Create a constant variable called displayedData that retrives the HTML element with the ID displayed data
// And log out the variable to verify that it is correct
// 

// 
// 8. Create a constant variable called listData with the .createEelement method
// And log out the newly created variable to verify that it is made
// 

// 
// 9. Give the variable listData conent from inputDataValue with the .textContent method
// 

// 
// 10. Add the new element listData to the element displayedDate with the appendChild() method
// 
function displayData() {
    console.log("Im working")
    
    const inputDataValue = inputData.value;
    console.log(inputDataValue)

    const displayedData = document.querySelector("#displayedData")
    console.log(displayedData)

    const listData = document.createElement("li")
    console.log(listData)

    listData.textContent = inputDataValue

    displayedData.appendChild(listData)
};
// 
// 4. Use the variable submitData and add an event listener, listening for a click and activating the function displayData
// 
submitData.addEventListener("click", displayData);
