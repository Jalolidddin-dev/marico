let burger = document.querySelector("#navbar_burger")
let menu = document.querySelector("#menu_list")

burger.addEventListener("click", () =>{
  menu.classList.toggle("res_menu")
})