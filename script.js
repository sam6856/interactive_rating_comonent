var selection
var submit = document.querySelector(".submit")
var links = document.querySelectorAll(".num")

function select(link){
    links.forEach((item) => {
        item.classList.remove("active")
    })
    const parent = link.closest('.num')
    parent.classList.add('active')
    console.log(parent)
    selection = link.innerText
    console.log(selection)

    const number = selection.toString()
    localStorage.setItem('rating', number)
}

function open(){
    const rating = document.querySelector(".rating")
    const num = localStorage.getItem('rating')
    rating.innerText = num
    console.log(num);
}


