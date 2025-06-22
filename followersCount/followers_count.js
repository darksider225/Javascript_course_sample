let count = 0; // Initialize count to 0

function increaseCount()
{
    count++; // Increment the count by one
    displayCount(); //Display the count
    checkCountValue(); // Check count value and display messages

}
function resetCount()
{
    count = 0; // Reset Followers to Zero
    displayCount(); //Display the count
    alert("Your Instagram post followers is reset to zero");
}

function displayCount()
{
    document.getElementById("countDisplay").innerHTML = count; // display the cpont in HTML.
}

function checkCountValue() {
    if (count === 10) 
    {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    }
    else if (count === 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
  }