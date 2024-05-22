const $ = document

const titleInput = $.querySelector("#title")
const authorInput = $.querySelector("#author")
const yearInput = $.querySelector("#year")

const submitBtn = $.querySelector(".btn")

const tableElem = $.querySelector("#book-list")

let booksArray = []

function addBook (event) {

    event.preventDefault()

    let titleValue = titleInput.value
    let authorValue = authorInput.value
    let yearValue = yearInput.value

    if (!titleValue || !authorValue || !yearValue) {
        alert("Please Input Your Information !")
    } 
    else if (isNaN(yearValue)) {
        alert("Please Enter The Carrect Year Information !")
    } else {
        let bookObj = {
            id: booksArray.length + 1,
            title: titleValue,
            author: authorValue,
                year: yearValue
        }
    
        booksArray.push(bookObj)
    
        setLocal(booksArray)
    }

}

function setLocal (allBooksArray) {

    localStorage.setItem("books", JSON.stringify(allBooksArray))

    makeEmpityInputs()
    BooksGenerator(allBooksArray)

}

function makeEmpityInputs () {

    titleInput.value = ""
    authorInput.value = ""
    yearInput.value = ""

    submitBtn.blur()

}

function BooksGenerator (allBooksArray) {

    tableElem.innerHTML = ""

    allBooksArray.forEach(function (book) {
        let tr = $.createElement("tr")
            
        let thTitle1 = $.createElement("th")
        thTitle1.innerHTML = book.title
            
        let thTitle2 = $.createElement("th")
        thTitle2.innerHTML = book.author
            
        let thTitle3 = $.createElement("th")
        thTitle3.innerHTML = book.year
            
        tr.append(thTitle1, thTitle2, thTitle3)
        tableElem.append(tr)
        console.log(tableElem)
    })

}

function getloadStorage () {
    
    let localStoragebooks =  JSON.parse(localStorage.getItem("books"))
    
    if (localStoragebooks) {
        books = localStoragebooks
        BooksGenerator(books)
    } else {
        booksArray = []
    }

}

submitBtn.addEventListener("click", addBook)
window.addEventListener("load", getloadStorage)