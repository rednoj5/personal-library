let library = [
    {
        title: 'Nice book',
        author: 'Guy',
        pages: 123,
        read: 1
    },
    {
        title: 'Nice book 2',
        author: 'Guy 2',
        pages: 321,
        read: 0
    }
];

function ConstLibrary(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addToLibrary() {
    let newBook = ConstLibrary();
    library.push(newBook);
};

function displayLibrary() {
    for (let book of library) {
        addNewCard.call(book);
    }
};

function addNewCard() {
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
        if (this.read === 1) {
            ifRead.textContent = 'Read';
        } else {
            ifRead.textContent = 'Not read';
        };
        
        mainDisplay.appendChild(newCard);
        newCard.appendChild(newTitle);
        newCard.appendChild(newAuthor);
        newCard.appendChild(newPages);
        newCard.appendChild(ifRead);
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

formSubmit.addEventListener('click', () => formSubmit.preventDefault());

// tests

console.log(form.zIndex);

displayLibrary();