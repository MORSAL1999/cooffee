let navber = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
  navber.classList.toggle('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  navber.classList.remove('active');
  cartItem.classList.remove('active');
}


let cartItem = document.querySelector('.cart-items-container')

document.querySelector('#cart-btn').onclick = () =>{
  cartItem.classList.toggle('active');
  navber.classList.remove('active');
  searchForm.classList.remove('active');
}



window.onabort =() =>{
  navber.classList.remove('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');

}