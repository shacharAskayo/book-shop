'use strict'
var KEY = 'books'

var gBooks = [
    {
        id: makeId(),
        name: 'kung fu panda',
        price: '25',
        imgUrl: 'img/img2.jpg',
        rate: '2',
    },
    {
        id: makeId(),
        name: 'avatar',
        price: '20',
        imgUrl: 'img/img1.jpg',
        rate: '3',
    },
    {
        id: makeId(),
        name: 'the great escape',
        price: '17',
        imgUrl: 'img/img3.jpg',
        rate: '3',
    }
];

_createBooks()

function _createBooks() {
    var books = loadFromStorage(KEY)
    if (!books || !books.length) {
        books = gBooks;
        saveBooksToStorage()
    }
    gBooks = books
    saveBooksToStorage()
    return gBooks

}

function getBooksForDispaly() {
    var books = gBooks
    return books
}


function addBook(name, price) {
    var book = {
        id: makeId(),
        name: name,
        price: price,
        imgUrl: `img/cover.jpg`,
        rate: 0
    }
    gBooks.unshift(book)
    saveBooksToStorage()
}

function removeBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    gBooks.splice(bookIdx, 1)
    saveBooksToStorage()
}

function updateBookPrice(bookIdx, bookPrice) {
    var book = gBooks.find(function (book) {
        return bookIdx === book.id
    })
    book.price = bookPrice
    saveBooksToStorage()
}

function showReadBook(bookId) {
    var book = gBooks.find(function (book) {
        return bookId === book.id
    })
    return book

}

function UpdateRateing(bookId){
    var book = gBooks.find(function(book){
        return bookId===book.id
    })

    return book
}
function saveBooksToStorage() {
    saveToStorage(KEY, gBooks)
}

