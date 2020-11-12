(function(){
    const cart = document.getElementById('cart')
    const numberItems = document.getElementById('item-count')
    const totalPrice = document.querySelector('.item-total')
    const cartBtn = document.getElementById('cart-info')
    const addBtns = document.querySelectorAll('.card')
    const total = document.querySelector('.cart-total-container')

    cartBtn.addEventListener('click',()=>{
        cart.classList.toggle('show-cart')
        
    })

    addBtns.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
            console.log(e.target)
            if( e.target.classList.contains('fa-shopping-cart') || e.target.classList.contains('store-item-icon' )){
                const itemName = btn.querySelector('#store-item-name').textContent
                const itemPrice = btn.querySelector('#store-item-price').textContent
                const imgPath = btn.querySelector('img').src
                const imgPosition = imgPath.indexOf('i')+3
                const img = imgPath.slice(imgPosition)
                const div = document.createElement('div')
                div.classList.add('cart-item', 'd-flex' ,'justify-content-between' ,'text-capitalize' ,'my-3')
                div.innerHTML = `
                
                <img src="img-cart${img}" height="50px" class="img-fluid rounded-circle" id="item-img" alt="">
                <div class="item-text">

                    <p id="cart-item-title" class="font-weight-bold mb-0">${itemName}</p>
                    <span>$</span>
                    <span id="cart-item-price" class="cart-item-price" class="mb-0">${itemPrice}</span>
                </div>
                <a href="#" id='cart-item-remove' class="cart-item-remove">
                    <i class="fas fa-trash"></i>
                </a>
                `

                cart.insertBefore(div,total)
                deleteBtn(div,itemPrice)

                const originalTotal = total.querySelector('#cart-total').textContent
                const priceAfterAdd = (Number(originalTotal) + Number(itemPrice)).toFixed(2)
                total.querySelector('#cart-total').textContent = priceAfterAdd
                totalPrice.textContent = priceAfterAdd
                numberItems.textContent = Number(numberItems.textContent) + 1
            }
        })
    })

    const deleteBtn = (item,price)=>{
        item.querySelector('#cart-item-remove').addEventListener('click',()=>{
            cart.removeChild(item)
            const originalTotal = total.querySelector('#cart-total').textContent
            const priceAfterAdd= (Number(originalTotal) - Number(price))
            total.querySelector('#cart-total').textContent = priceAfterAdd
            totalPrice.textContent = priceAfterAdd
            numberItems.textContent = Number(numberItems.textContent) - 1
        })
    }

    
})()