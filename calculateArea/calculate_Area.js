let length;
let width;


function calculateArea()
{
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
    document.getElementById('result').innerText = `The Area of Rectangle is: ${area}`;

}



