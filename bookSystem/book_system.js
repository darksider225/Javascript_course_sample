let books = [];

function addBook()
{
    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;
    const bookDescription = document.getElementById("bookDescription").value;
    const pagesNumber = parseInt(document.getElementById("pagesNumber").value);

    if(bookName && authorName && bookDescription && !isNaN(pagesNumber))
    {
        const book = {
            bookName: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showBooks();
        clearInputs();
    }
    else
    {
        alert("Please fill in all fields correctly.");
    }
}

function showBooks()
{
    const booksDiv = books.map((book, index) => `<h1>Book Number: ${index + 1}</h1>
    <p><strong>Book Name: </strong>${book.bookName}</p>
    <p><strong>Author Name: </strong>${book.authorName}</p>
    <p><strong>Book Description: </strong>${book.bookDescription}</p>
    <p><strong>Number of Pages: </strong>${book.pagesNumber} page(s)</p>
    <button onclick="editbook(${index})">Edit</button>
    <button onclick="deleteBook(${index})">Delete</button>`);
    
    document.getElementById("books").innerHTML = booksDiv.join('');
}

function editbook(index)
{
    const book = books[index];
    document.getElementById("bookName").value = book.bookName;
    document.getElementById("authorName").value = book.authorName;
    document.getElementById("bookDescription").value = book.bookDescription;
    document.getElementById("pagesNumber").value = book.pagesNumber;
    books.splice(index, 1); // remove old entry
    showBooks(); // refresh list
}

function clearInputs()
{
    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
    document.getElementById("bookDescription").value = "";
    document.getElementById("pagesNumber").value = "";
}

function deleteBook(index)
{
    books.splice(index, 1); // Delete Book
    showBooks(); // Refresh books
}