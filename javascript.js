// variables:

let library = [

];

// functions

function ConstLibrary(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addToLibrary(args) {
    let newBook = new ConstLibrary(...args);
    library.push(newBook);
    displayCard.call(newBook);
};

function displayLibrary() {
    for (let book of library) {
        displayCard.call(book);
    }
};

function displayCard() {
    let newCard = document.createElement("div");
        newCard.setAttribute('class', 'card');

    let newTitle = document.createElement('h2');
        newTitle.setAttribute('class', 'title');
        newTitle.textContent = this.title;

    let newAuthor = document.createElement('p');
        newAuthor.setAttribute('class', 'author');
        newAuthor.textContent = 'by ' + this.author;

    let newPages = document.createElement('p');
        newPages.setAttribute('class', 'pages');
        newPages.textContent = 'pages: ' + this.pages;

    let ifRead = document.createElement('button');
        ifRead.setAttribute('class', 'isreadButton');
        if (this.read === true) {
            ifRead.textContent = 'Read';
            ifRead.setAttribute('id', 'read');
        } else {
            ifRead.textContent = 'Not read';
            ifRead.setAttribute('id', 'notread');
        };
        ifRead.addEventListener('click', () => {
            if (ifRead.textContent == 'Read') {
                ifRead.textContent = 'No read';
                ifRead.setAttribute('id', 'notread');
            } else {
                ifRead.textContent = 'Read';
                ifRead.setAttribute('id', 'read');
            }
        });
    let removeButton = document.createElement('button');
        removeButton.setAttribute('class', 'removeButton');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        });
        
        mainDisplay.appendChild(newCard);
        newCard.appendChild(newTitle);
        newCard.appendChild(newAuthor);
        newCard.appendChild(newPages);
        newCard.appendChild(ifRead);
        newCard.appendChild(removeButton);
};

function addNewBook(e, ...args) {
    if (args.includes('')) {
        console.log('todo');
    };
    addToLibrary(args);
};

// DOM manipulation

const mainDisplay = document.querySelector('.mainDisplay');
const sideDisplay = document.querySelector('.sideDisplay');
const form = document.querySelector('.cardForm');
const formTitle = document.querySelector('#title');
const formAuthor = document.querySelector('#author');
const formPages = document.querySelector('#pages');
const formIsRead = document.querySelector('#isread');
const formSubmit = document.querySelector('#submitButton');
const addBookButton = document.querySelector('.addBookButton');
const addBookDescription = document.querySelector('.addBookDescription');

addBookButton.addEventListener('click', () => {
    addBookButton.style.zIndex = '-1';
    addBookDescription.style.zIndex = '-1';
    form.style.zIndex = '1';
});

form.style.zIndex = '-1';

formSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    let newBookTitle = formTitle.value;
    let newBookAuthor = formAuthor.value;
    let newBookPages = formPages.value;
    let newBookIsRead = formIsRead.checked;
    addNewBook(e, newBookTitle, newBookAuthor, newBookPages, newBookIsRead);
    addBookButton.style.zIndex = '1';
    addBookDescription.style.zIndex = '1';
    form.style.zIndex = '-1';
    form.reset();
})

//

displayLibrary();