let input = document.querySelector("#message")
let articleEl1 = document.querySelector(".art1")
let articleEl2 = document.querySelector(".art2")

input.addEventListener ("keyup", function (event) {
    articleEl1.innerHTML = event.target.value
    articleEl2.innerHTML = event.target.value
})