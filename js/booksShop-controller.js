'use strict'
var gRateCounter = 0

function onInit() {
    renderBooks()

}


function renderBooks() {
    var books = getBooksForDispaly()
    var strHTML = ` <tr> <td><span class="title-book-id">id</span></td><td> <span class="title-book-name">name</span></td><td><span class="title-book-price">price</span></td> </tr>`
    strHTML += `<tr> `
    books.forEach(function (book) {
        strHTML += `<td class ="book-id">${book.id} </td> <td>${book.name}</td> <td>${book.price}$</td>  <td > <span class="buttons"> <button class="read-button" onclick="onReadBook('${book.id}')"> read</button> <button class="update-button" onclick="onUpdateBook('${book.id}')">update</button> <button class="remove-button" onclick="onRemoveBook('${book.id}')">remove</button> </span> </td>`
        strHTML += `</tr> `
    })
    var elTable = document.querySelector('.table')
    elTable.innerHTML = strHTML
}


function onAddBook() {
    var bookName = prompt('enter a book name')
    var bookPrice = +prompt('enter a price')
    addBook(bookName, bookPrice)
    renderBooks()


}

function onRemoveBook(bookId) {
    console.log(bookId)
    removeBook(bookId)
    renderBooks()

}

function onUpdateBook(bookId) {
    var newPrice = +prompt('update the price')
    updateBookPrice(bookId, newPrice)
    renderBooks()
}

function onReadBook(bookId) {
    var book = showReadBook(bookId)
    var elModal = document.querySelector('.modal')
    elModal.querySelector('h3').innerText = `the book name is: ${book.name.toUpperCase()}`
    elModal.querySelector('h4').innerText = `this book price is: ${book.price}$`
    elModal.querySelector('h5').innerText = `this book rated: ${book.rate}`
    elModal.querySelector('.img').innerHTML = `<img src="${book.imgUrl}" >`
    elModal.style.display='inline'
    renderRating(book)
}

function renderRating(book) {
    var strHTML = ''
    strHTML += `
        <span class="plus-button" onclick="onPlusClick()">+</span> 
            <input type="text" placeholder="0"  name ="rating">
            <span class="minus-button" onclick="onMinusClick()">-</span> <button onclick="onUpdateRating('${book.id}')" class="rating-button">update rating</button>`
    var elRating = document.querySelector('.rating')
    elRating.innerHTML = strHTML
}

function onUpdateRating(bookId) {
    var book = UpdateRateing(bookId)
    var elRating = document.querySelector('input[name=rating]')
    var newRating = elRating.value
    book.rate = newRating
    var elModal = document.querySelector('.modal')
    elModal.querySelector('h5').innerText = `this book rated: ${book.rate}`
    elRating.value = 0
    gRateCounter=0
    saveBooksToStorage()

}


function onPlusClick() {
    gRateCounter++
    if (gRateCounter > 10) {
        alert(' 10 is the limit my friend')
        gRateCounter = 10
    }
    var elRating = document.querySelector('input[name=rating]')
    elRating.value = gRateCounter
}

function onMinusClick() {
    gRateCounter--
    if (gRateCounter < 0) {
        alert('you to hard with him')
        gRateCounter = 0
    }
    var elRating = document.querySelector('input[name=rating]')
    elRating.value = gRateCounter
}

function onCloseModal() {
    var elModal = document.querySelector('.modal')
    elModal.style.display='none' 
}

