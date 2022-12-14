//navbar btn menu

const navbarBtn = document.getElementById('navbarBtn')
const navbarNav = document.querySelector('.navbar__nav')

navbarBtn.addEventListener('click', function (e){
    console.log(navbarNav)
    navbarNav.classList.toggle('active')
})



const products = [
    {
      id: 1,
      name: 'cherry sweatshirt',
      price: 14.00,
      amount: 35,
      image: './assets/images/featured1.png',
      description: 'Beautiful cherry color sweatshirt, for men and women.'
    },
    {
      id: 2,
      name: 'black sweatshirt',
      price: 20.00,
      amount: 25,
      image: './assets/images/featured2.png',
      description: 'Beautiful black color sweatshirt, for men and women.'
    },
    {
      id: 3,
      name: 'White sweatshirt',
      price: 18.00,
      amount: 40,
      image: './assets/images/featured3.png',
      description: 'Beautiful white sweatshirt, for men and women'
    },
    {
      id: 4,
      name: 'cherry sweatshirt',
      price: 220,
      amount: 16,
      image: './assets/images/featured1.png',
      description: 'Beautiful cherry color sweatshirt, for men and women.'
    }
]
  
  
  
const wrapperProducts = document.getElementById('wrapper-products')
  
let productsHTML = ''
  
for (let product of products) {
    productsHTML += `
    <div class="wrapper__product">
      <div class="wrapper__product-img">
        <img src="${product.image}" alt="${product.name}" class="wrapper__product-img-item">
      </div>
      <div class="wrapper__product-content">
        <h3 class="wrapper__product-title">${product.name}</h3>
        <p class="wrapper__product-text">
        ${product.description}
        </p>
        <div class="wrapper__product-btn">
        <span class="wrapper__product-btn-text">$ ${product.price}</span>
        <div class="wrapper__quantity">
        <span class="wrapper__product-btn-text2">${product.amount}</span>   
        </div>
          <button class="wrapper__product-btn-item" data-id="${product.id}">
            <i class='bx bx-shopping-bag'></i>
            <span class="wrapper__product-btn-text">Add to Cart</span>
          </button>
        </div>
      </div>
      </div>
    `
}
  
wrapperProducts.insertAdjacentHTML('beforeend', productsHTML)
let cart = []

function find(id) {
  for (let product of products) {
    if (product.id === id) {
      return product
    }
  }
}

function addToCart(id) {
  const product = find(id)
  cart.push(product)
}

wrapperProducts.addEventListener('click', e => {
    if (e.target.closest('.wrapper__product-btn-item')) {
      const id = e.target.closest('.wrapper__product-btn-item').dataset.id
      addToCart(+id)
      renderCart()
    }
})

const wrapperCart = document.getElementById('wrapper-cart')

function renderCart() {
  let cartHTML = ''

  for (let product of cart) {
    cartHTML += `
    <div class="cart__item">
    <div class="cart__item-img">
    <img src="${product?.image}" alt="${product.name}" class="cart__item-img-item">
    </div>
    <div class="cart__item-content">
    <h3 class="cart__item-title">${product.name}</h3>
    <div class="cart__item-btn">
    <span class="cart__item-btn-text2"> 1 </span>
    <span class="cart__item-btn-text">$ ${product.price}</span>
    <button class="cart__item-btn-item" data-id="${product.id}">
    <i class='bx bx-x'></i>
    </button>
    </div>
    </div>
    </div>
    `
  }
  const cartTotal = document.getElementById('cart-total')

  wrapperCart.innerHTML = cartHTML.length > 0 ? cartHTML : '<p>No hay productos</p>'
  cartTotal.innerHTML = `$ ${sumTotal()}`
}

renderCart()

function sumTotal() {
  let sum = 0
  for (let product of cart) {
    sum += product.price
  }
  return sum
}

function removeFromCart(id) {
  let newArr = []
  for (let product of cart) {
    if (product.id !== id) {
      newArr.push(product)
    }
  }
  cart = newArr
}

// function quantity1(){
//   for (let product of cart) {
//      rest= product.quantity-1
//   }
//   return sum
// }

let removeCart = e => {
  if (e.target.closest('.cart__item-btn-item')) {
    const id = e.target.closest('.cart__item-btn-item').dataset.id
    removeFromCart(+id)
    renderCart()
  }
}
wrapperCart.addEventListener('click', removeCart)

const checkout = document.getElementById('checkout')

let check = e => {
  if (e.target.closest('.wrapper__sidebar-cart-btn-link')) {
    alert('Gracias por tu compra')
    cart = []
    renderCart()
  }
}
checkout.addEventListener('click', check)


const switchButton = document.getElementById('switch');
switchButton.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    switchButton.classList.toggle('active')
})