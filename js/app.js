(function(){
    let cart = document.getElementById('cart');
    const cartInfo = document.getElementById('cart-info');
    const cards = document.querySelectorAll('.card');
    const total = cart.querySelector('.cart-total-container');
    const totalCostSmall = document.querySelector('.item-total');
    const totalCostCart = document.querySelector('#cart-total');
    const itemCount = document.querySelector('#item-count');
    
    

    
    cards.forEach((card)=>{
        card.addEventListener('click',(e)=>{
            
            let container = createContainer();
            let fullPath = card.querySelector('.store-img').src;
            let pos = fullPath.indexOf('img') + 3;
            let img = fullPath.slice(pos);
            let name = card.querySelector('#store-item-name').textContent;
            let price = card.querySelector('#store-item-price').textContent;

            let cartImg = container.querySelector('#item-img');
            let cartName = container.querySelector('#cart-item-title');
            let cartPrice = container.querySelector('#cart-item-price');
            if(e.target.classList.contains('store-item-icon') || e.target.classList.contains('fa-shopping-cart')){
                totalCostSmall.textContent = Number(totalCostSmall.textContent) + Number(price);
                totalCostCart.textContent = Number(totalCostCart.textContent) + Number(price);
                cartImg.setAttribute('src',`img-cart${img}`);
                cartName.textContent = name;
                cartPrice.textContent = price;
                
                itemCount.textContent = Number(itemCount.textContent) + 1;
                console.log(container);
                deleteBtn(container);
                cart.insertBefore(container,total);
            }
        })
    })
    cartInfo.addEventListener('click',()=>{
        console.log('click');
        cart.classList.toggle('show-cart');
    })

    //Create container for the cart item

    function createContainer(){
        let container = document.createElement('div');
        container.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize' ,'my-3');
        container.innerHTML = `<img src="img-cart/doughnut-2.jpeg" class="img-fluid rounded-circle" id="item-img" alt="">
        <div class="cart-item-text">

        <p id="cart-item-title" class="font-weight-bold mb-0">cart item</p>
        <span>$</span>
        <span id="cart-item-price" class="cart-item-price" class="mb-0">10.99</span>
        </div>
        <a href="#" id='cart-item-remove' class="cart-item-remove">
        <i class="fas fa-trash"></i>
        </a>`;
        return container;
    }

    //Hook up the delete button

    const deleteBtn = function(item){
        const button = item.querySelector('#cart-item-remove');
        button.addEventListener('click',()=>{
            totalCostSmall.textContent = Number(totalCostSmall.textContent) - Number(item.querySelector('#cart-item-price').textContent);
            totalCostCart.textContent = Number(totalCostCart.textContent) - Number(item.querySelector('#cart-item-price').textContent);
            
            itemCount.textContent = Number(itemCount.textContent) - 1;
            cart.removeChild(item);
        })

    }
})();