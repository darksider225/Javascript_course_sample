let grocery1, grocery2, grocery3;

function calculateTotal()
{
    grocery1 = parseFloat(document.getElementById("grocery1").value);
    grocery2 = parseFloat(document.getElementById("grocery2").value);
    grocery3 = parseFloat(document.getElementById("grocery3").value);

    let sum = grocery1 + grocery2 + grocery3;

    document.getElementById("total").innerText = `Total Amount is ${sum}`;
}