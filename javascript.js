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

// tests

displayLibrary();