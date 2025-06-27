let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest()
{
    //Set the test text
    document.getElementById("inputText").value = testText;

    // Reset previous input and re-enable it
    const userInput = document.getElementById("userInput")
    userInput.value = "";
    userInput.readonly = false;

    // Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    // Change button text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

function endTest()
{
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readonly = true;

    // Calculate time elapsed and words per minute (wpm)
    var timeElapsed = (endTime - startTime) / 1000; //in seconds
    var userTypedText = document.getElementById("userInput").value;
    var totalLength = userTypedText.length;

    // Split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word)
    {
        return word !== "";
    }).length;

    var wpm = 0; // default

    if(timeElapsed !== 0 && !isNaN(typedWords))
    {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    //Display the Result 
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Result:</h2>" +
    "<p>Total Length: "+ totalLength + "</p>" +
    "<p>Words Typed: "+ typedWords + "</p>" +
    "<p>Time Elapsed: "+ timeElapsed.toFixed(2) + "</p>" +
    "<p> Words Per Minute "+ wpm + "</p>";

    // Reset the button
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}