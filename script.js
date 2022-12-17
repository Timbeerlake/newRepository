const allBooks = document.querySelectorAll(".books")
const book = document.querySelectorAll(".book")
const google = document.querySelectorAll(".adv")

const book2 = document.querySelectorAll(".book")[5]
const ul = book2.querySelectorAll('li')
const book3 = document.querySelectorAll(".book")[2]
const ul2 = book3.querySelectorAll('li')
const book1 = document.querySelectorAll(".book")[0]
const ul3 = book1.querySelectorAll("li")

const newLi = document.createElement("li")
newLi.textContent = "Глава 8: За пределами ES6";


const bookClone = book[4].cloneNode(true)
const h2 = bookClone.querySelector("a")
h2.textContent = "Книга 3. this и Прототипы Объектов";

google[0].remove()
const bgi = document.querySelector('body')
console.log(bgi)
bgi.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";

console.log(allBooks);
console.log(book);
console.dir(bookClone)
console.dir(h2)
console.dir(book2)
console.dir(ul2)
console.log(newLi)

console.log(ul3)


book[0].replaceWith(book[1])
book[2].replaceWith(book[0])
book[3].replaceWith(book[4])
book[5].before(book[3])
book[5].after(book[2])
book[4].replaceWith(bookClone)
ul[2].before(ul[9])
ul[5].before(ul[2])
ul[8].before(ul[5])
ul2[8].append(newLi)

ul3[9].append(ul3[2])
ul3[8].append(ul3[4])
ul3[8].append(ul3[5])
ul3[8].append(ul3[7])




