function performOperation()
{
    // Get user inputs
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);

    // Check if inputs are valid
    if(!isNaN(num1) && !isNaN(num2))
    {
        // Perform Operation
        let result = multiply(num1, num2);

        // Display the result
        displayResult(result);
    }
    else
    {
        displayResult("Please enter valid numbers.");
    }
}

function multiply(a, b)
{
    // Introduce a debugger statement to pause execution
    debugger;

    // Perform Arithmetic operations
    let operationsArr = [a+b, a-b, a*b, a/b];
    return operationsArr;
}

function displayResult(result)
{
    // Display the result in the paragraph element
    const resulElement = document.getElementById("result").innerHTML = ` The result is: ${"<br>"} ${result.join("<br>")}`;
    //resulElement.textContent = `The result is: ${result}`;
}