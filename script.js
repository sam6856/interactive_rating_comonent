var selection
var number = document.querySelector(".number")
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

    number.value = selection.toString()
    localStorage.setItem('rating', number.value)
}

function open(){
    const num = localStorage.getItem('rating')
    rating.innerText = num
    console.log(num);
}


