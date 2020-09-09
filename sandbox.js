// Book Class : Representing the books

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }
}

// UI Class : Handling the Display

class UI {

    static displaybooks() {
        const storedbooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '0123456789',
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '0987654321',
            }
        ];

        const books = storedbooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const listview = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td> ${book.title}</td>
            <td> ${book.author}</td>
            <td> ${book.isbn}</td>
            <td><a href="#" class= " btn btn-danger btn-sm delete">X </a> </td>
            `
        listview.appendChild(row);
    };

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    };

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    };

}

// Storage Class : To store the added books


// Event-1 : Display the books
document.addEventListener('DOMContentLoaded', UI.displaybooks);

// Event-2 : Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {

    // prevent default submission
    e.preventDefault();

    // Get Form Values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Instanciate the book 
    const book = new Book(title, author, isbn);


    // Add book to UI 
    UI.addBookToList(book);

    // Clear Fields
    UI.clearFields();

});



// Event-3 : Delete the book

document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target)

});