
let books = [
    {
     
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software ',
      authors: 'Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm',
      year: '1994',
      
      image: 'https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg'
    },
    {
      
      title: 
      'JavaScript: The Good Parts ',
      authors: 'Douglas Crockford',
      year: '2008',
      
      image: 'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg'
    },
    {
      title:
      'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
      authors: 'Stoyan Stefanov',
      year: 2008,
     
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51%2BSiphz7AL._SX377_BO1,204,203,200_.jpg'
    },
    { 
     
      title:
      'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      authors: 'David Flanagan',
      year: 2011,
      
      image: 'https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg'
    },
    {
   
      title:
      'Соловей',
      authors: 'Кристин Ханна',
      year: 2015,
      
      image: 'Foto/hanna.jpg'
      
    },
    {
      
      title:
      'Шантарам',
      authors: 'Грегори Дэвид Робертс',
      year: 2003,
      
      image: 'Foto/roberts.jpg'
    }
    
      
    

]

  
    
const myshelf = document.getElementById("shelf")
const bookF = document.getElementById("Form")
const bookNew = document.getElementById("FormNew")
const mydel = document.getElementById("del${index}")



renderBooks()



const myadd = document.getElementById("add")
myadd.addEventListener('click',add)

function add(){
  bookF.style.display = "flex"

}

const myclose = document.getElementById("closeModal")
myclose.addEventListener('click',close)

function close(){
  bookF.style.display = "none"
  

}

const mysav = document.getElementById("saveBook")
mysav.addEventListener('click',Sav)

function Sav(){
  bookF.style.display = "none"
  saveBook()  
}



function change(){

  bookNew.style.display = "flex"

}

const newclose = document.getElementById("closeNew")
newclose.addEventListener('click',closeNew)

function closeNew(){
  bookNew.style.display = "none"

}

const mycancellation = document.getElementById("cancellation")
mycancellation.addEventListener('click',cancellation)

function cancellation(){
  bookNew.style.display = "none"

}

function del(index){
  
  books.splice (index,1)
  renderBooks()
  saveTo()


  if (confirm("Вы действительно хотите удалить книгу?")) {
    return true
  }else{
    return false
  }

}


const booksJSON = localStorage.getItem('books')
const sBooks = JSON.parse(booksJSON)

if (booksJSON) {
  books = sBooks
}
renderBooks()

function renderBooks(){

  shelf.innerHTML = ""
  books.forEach((book, index) => {
    shelf.innerHTML += `
    
        <div  class="books" >
          <div class="conteiner" >
            <div class="boxb">
              <img class="box img" src="${book.image}" />
            </div>
            <div class="boxb">
              <p class="titBook box"> ${book.title} </p>
              <p  class="box authors"> ${book.authors} </p>
              <p  class="box year"> ${book.year} </p>
            </div>

            
            
          </div>
          <div class="but">
            <button onclick="change()"  class="b b1" >Изменить</button>
            
            <button onclick="del(${index}) " class="b">Удалить</button>
          </div>
        </div>
    
    `
  })


}

function clearForm() {
  document.getElementById('nameB').value = ""
  document.getElementById('nameA').value = ""
  document.getElementById('nameY').value = ""
  document.getElementById('link').value = ""
}

function saveBook() {
  
  const nameBValue = document.getElementById('nameB').value
  const nameAValue = document.getElementById('nameA').value
  const nameYValue = document.getElementById('nameY').value
  const linkValue = document.getElementById('link').value
  
  
  if (nameBValue.length === 0) {
    alert('Укажите название книги')
    bookF.style.display = "flex"
    return
  }
  if (nameAValue.length === 0) {
    alert('Укажите автора')
    bookF.style.display = "flex"
    return
  }
  if (nameYValue.length === 0) {
    alert('Укажите год издания')
    bookF.style.display = "flex"
    return
  }
  
  const book = {
    title: nameBValue,
    authors: nameAValue,
    year: nameYValue,
    image: linkValue,

  }
  books.push(book)
  renderBooks() 
  saveTo()
  clearForm()
  
  Form.style.display = "none"
}

const myedit = document.getElementById('edit-${index}')
myedit.addEventListener('click',edit)


function edit(index){

  let book = books.find((b) => {
    return b.index === index
  })
  
  /*const index = books.indexOf*/

  document.getElementById("nameUpDate").value = book[index].title 
  document.getElementById("authorUpDate").value = book[index].authors,
  document.getElementById("yearUpDate").value = book[index].year,
  document.getElementById("LinkUpDate").value = book[index].image,




  bookNew.style.display = "none"

}

const myEditBook = document.getElementById('editBook')

function upDate(index){

  const newBook = {
    title: nameBedit,
    authors: nameAedit,
    year: nameYedit,
    image: linkEdit,
  }

  /*const index = books.indexOf(book) */

  let nameBedit = document.getElementById("nameUpDate").value
  let nameAedit = document.getElementById("authorUpDate").value
  let nameYedit = document.getElementById("yearUpDate").value
  let linkEdit = document.getElementById("LinkUpDate").value 

  const book = books.find((b) =>{
    return b.index === index
  })

  
  if (nameBValue.length == 0) {
    document.getElementById('nameUpDate').focus()
    document.getElementById('nameUpDate').setAttribute('placeholder')
  } else if (nameBValue.length > 0) {
    books.splice(index, 1, newBook) 
    document.getElementById('edit-${index}').removeEventListener('click', upDate) 

}

}

function saveTo() {
  const booksJSON = JSON.stringify(books)
  localStorage.setItem('books', booksJSON)

}






