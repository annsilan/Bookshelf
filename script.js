
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
    },
    
      
    

]

  
    
const myshelf = document.getElementById("shelf")
const bookF = document.getElementById("Form")
const bookNew = document.getElementById("FormNew")
const mydel = document.getElementById("del${i}")



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



/*function change(){

  bookNew.style.display = "flex"

}*/

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

function del(i){
  
  if (confirm("Вы действительно хотите удалить книгу?")) {
    books.splice (i,1)
  }else{
    return false
  }
  renderBooks()
  saveTo()

}


const booksJSON = localStorage.getItem('books')
const sBooks = JSON.parse(booksJSON)

if (booksJSON) {
  books = sBooks
}
renderBooks()

function renderBooks(){

  shelf.innerHTML = ""
  books.forEach((book, i) => {
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
            <button onclick="change(${i})"  class="b b1" >Изменить</button>
            
            <button onclick="del(${i}) " class="b">Удалить</button>
          </div>
        </div>
    
    `
   
  })


}

function clearForm() {
  document.getElementById("nameB").value = ""
  document.getElementById("nameA").value = ""
  document.getElementById("nameY").value = ""
  document.getElementById("link").value = ""
}


function saveBook() {
  
  const nameBValue = document.getElementById("nameB").value
  const nameAValue = document.getElementById("nameA").value
  const nameYValue = document.getElementById("nameY").value
  const linkValue = document.getElementById("link").value
  
  
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



function change (i){

  bookNew.style.display = "flex"

document.getElementById("nameUpDate").value =   books[i].title 
document.getElementById("authorUpDate").value = books[i].authors 
document.getElementById("yearUpDate").value = books[i].year
document.getElementById("LinkUpDate").value = books[i].image 



const myupdate = () => change(i, myupdate)
document.getElementById('edit').addEventListener('click', myupdate)



}

const myedit = document.getElementById('edit')
myedit.removeEventListener('click',edite)


function edite(i, myupdate){  


    let title = document.getElementById("nameUpDate").value
    let authors = document.getElementById("authorUpDate").value
    let year = document.getElementById("yearUpDate").value
    let image = document.getElementById("LinkUpDate").value

    const newBook = {

      title,
      authors,
      year,
      image
      }
  

  
  if (title.length === 0) {
    document.getElementById('nameUpDate').focus()
    document.getElementById('nameUpDate').setAttribute('nameUpDate',value)
  } else if (title.length > 0) {
    books.splice(i, 1, newBook) 
    document.getElementById('edit').removeEventListener('click', myupdate) 
  
  }



  
  // input.myupdate = function() {
  //   document.getElementById('edit').innerHTML = input.value;
  // }
  

  // value = document.getElementById("nameUpDate")
  // value = document.getElementById("authorUpDate")
  // value = document.getElementById("yearUpDate")
  // value = document.getElementById("LinkUpDate")
  bookNew.style.display = "none"
  renderBooks() 
  saveTo()
  clearForm()
  
  

}


function saveTo() {
  const booksJSON = JSON.stringify(books)
  localStorage.setItem('books', booksJSON)

}






