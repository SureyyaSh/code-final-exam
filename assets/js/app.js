var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function () {
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})



// let names = [
//     "Kosmetologiya",
//     "Çistka",
//     "Makiyaj",
//     "Gəlin bəzəyi",
//     "Manikur",
//     "Pedikur",
//     "Gellak",
//     "Şellak",
//     "Tipsi",
//     "Formagel",
//     "Ombre",
//     "Balyaj",
//     "Mezoterapiya",
//     "Laminasiya",
//     "Botoks",
//     "Dolğu",
//     "Kontur plastika",
//     "Keratin",
//     "Mikroblading",
// ]
// let sortedNames = names.sort();
// let input = document.getElementById("input");
// input.addEventListener("keyup", (e) => {
//     for (let i of sortedNames) {
//         if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != "") {
//             let listItem = document.createElement("li");
//             listItem.classList.add("list-items");
//             listItem.style.cursor = "pointer";
//             listItem.setAttribute("onclick", "displayNames('" + i + "')");
//             let word = "<b>" + i.substr(0, input.value.length)
//         }
//     }
// });

// function displayNames(value) {
//     input.value = value;
// }

// const people = [
//     { name: 'Kosmetologiya' },
//     { name: 'Makyaj' },
//     { name: 'Manikur' },
//     { name: 'Pedikur' },
//     { name: 'Ombre' },
//     { name: 'Baljay' },
//     { name: 'Mezoterapiya' },
//     { name: 'Epilyasiya' },
//     { name: 'Qaynaq' },
//     { name: 'Saç kəsimi' },
//     { name: 'Gəlin bəzəyi' },
//     { name: 'Laminasiya' },
//     { name: 'Botoks' },
//     { name: 'Kontur plastika' },
//     { name: 'Çistka' },
//     { name: 'Ziyafət makyajı' },
//     { name: 'Keratin' },
//     { name: 'Üz masajı' },
//     { name: 'Şellak' },
//     { name: 'Gellak' },
//     { name: 'Tipsi' },
//     { name: 'Formagel' },
//     { name: 'Mikroblading' },
// ]
// whateverElement.addEventListener("event type", () => {

// })
// const searchInput = document.querySelector('.input')
// searchInput.addEventListener("input", (e) => {
//     let value = e.target.value

//     if (value && value.trim().length > 0) {
//         value = value.trim().toLowerCase()

//     } else {

//     }

// })
// const clearButton = document.getElementById('clear')

// clearButton.addEventListener("click", () => {
// })
// function setList(results) {

//     for (const person of results) {
//         const resultItem = document.createElement('li')

//         resultItem.classList.add('result-item')

//         const text = document.createTextNode(person.name)

//         resultItem.appendChild(text)

//         list.appendChild(resultItem)
//     }
// }
// searchInput.addEventListener("input", (e) => {
//     let value = e.target.value

//     if (value && value.trim().length > 0) {
//         value = value.trim().toLowerCase()

//         setList(people.filter(person => {
//             return person.name.includes(value)
//         }))
//         function clearList() {
//             while (list.firstChild) {
//                 list.removeChild(list.firstChild)
//             }
//         }
//     }
//     })
//         searchInput.addEventListener("input", (e) => {
//             let value = e.target.value

//             if (value && value.trim().length > 0) {
//                 value = value.trim().toLowerCase()
//             } else {
//                 clearList()

//             }

//         })
//         clearButton.addEventListener("click", () => {
//             clearList()
//         })
//         function noResults(){
//             const error = document.createElement('li')
//             error.classList.add('error-message')
        
//             const text = document.createTextNode('No results found. Sorry!')
//             error.appendChild(text)
//             list.appendChild(error)
//         }
//         function setList(results){
//             clearList()
//             for (const person of results){
//                 const resultItem = document.createElement('li')
//                 resultItem.classList.add('result-item')
//                 const text = document.createTextNode(person.name)
//                 resultItem.appendChild(text)
//                 list.appendChild(resultItem)
//             }
        
//             if (results.length === 0 ){
//                 noResults()
//             }
// }