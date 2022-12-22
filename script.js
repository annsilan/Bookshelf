
const books = [
    {
      
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software ',
      authors: 'Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm',
      year: '1994',
      /*genre: 'Образование',*/
      image: 'https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg'
    },
    {
      
      title: 
      'JavaScript: The Good Parts ',
      authors: 'Douglas Crockford',
      year: '2008',
      /*genre: 'Образование',*/
      image: 'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg'
    },
    {
      
      title:
      'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
      authors: 'Stoyan Stefanov',
      year: 2008,
      /*genre: 'Образование',*/
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51%2BSiphz7AL._SX377_BO1,204,203,200_.jpg'
    },
    {
      
      title:
      'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      authors: 'David Flanagan',
      year: 2011,
      /*genre: 'Образование',*/
      image: 'https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg'
    },
    {
      
      title:
      'Соловей',
      authors: 'Кристин Ханна',
      year: 2015,
      /*genre: 'Художественная литература',*/
      image: 'Foto/hanna.jpg'
      
    }
]

  
    
const myshelf = document.getElementById("shelf")
const bookF = document.getElementById("Form")
const bookNew = document.getElementById("FormNew")
const mychange = document.getElementById("change")
const mydel = document.getElementById("del")


const booksJSON = localStorage.setItem('books')
const saveJSON = JSON.parse(booksJSON)

if (booksJSON){
  books = JSON.parse(booksJSON)
}
renderBooks()


function add(){
  Form.style.display = "flex"

}

function closeMod(){
  Form.style.display = "none"

}

function myChenge(){
  FormNew.style.display = "flex"
}


function closeNew(){
  FormNew.style.display = "none"

}

function mydelete(i){
  books.splice (i,1)
  renderBooks()
  saveTo()
  
}

function renderBooks(){

  shelf.innerHTML = ""
  books.forEach((book, i) => {
    shelf.innerHTML += `
    
        <div  class="books" >
          <div class="conteiner" >
            <img src=${book.image} class="box img"/>
            <p class="titBook box"> ${book.title} </p>
            <p  class="box authors"> ${book.authors} </p>
            <p  class="box"> ${book.year} </p>
          </div>
          <div class="but">
            <button  onclick='myChenge()' class="b b1" id="change">Изменить</button>
            <button onclick='mydelete(${i})' id="del" class="b">Удалить</button>
          </div>
        </div>
    
    `
  })
}



function saveBook() {
  const linkValue = document.getElementById('link').value
  const nameBValue = document.getElementById('nameB').value
  const nameAValue = document.getElementById('nameA').value
  const nameYValue = document.getElementById('nameY').value

  const book = {
    image: linkValue,
    title: nameBValue,
    book: nameAValue,
    year: nameYValue

  }
  books.push(book)
  renderBooks() 
  saveTo()
  
  Form.style.display = "none"

}

function saveTo(){
  const booksJSON = JSON.stringify(books)
  localStorage.setItem('books',booksJSON)
}





