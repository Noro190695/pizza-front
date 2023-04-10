const swiper = new Swiper('.slider', {
    direction: 'vertical',
    allowTouchMove: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: true,
});
const mobileSwiper = new Swiper('.mobile-slider__container', {
    mousewheel: false,
    pagination: {
        el: '.mobile-slider__pagination',
        clickable: true,
    },
    loop: true,
    navigation: {
        prevEl: '.mobile-slider__navigation_prev',
        nextEl: '.mobile-slider__navigation_next'
    },
    mousewheel: false,
});

function cart(selector) {
    const cart = document.querySelector(selector);
    if (!cart) return;

    const button = cart.querySelector('.cart__button');
    const closeButtons = cart.querySelectorAll('.cart__close');
    button.addEventListener('click', (e) => {
        if (!document.querySelector('.cart__overlay')) {
            const overlay = document.createElement('div');
            overlay.classList.add('cart__overlay');
            document.body.appendChild(overlay);
            overlay.addEventListener('click', hideCart);
        }

        cart.classList.add('cart__open');
    });
    closeButtons.forEach((btn) => {
        btn.addEventListener('click', hideCart);
    });
    function hideCart() {
        cart.classList.remove('cart__open');
        const overlay = document.querySelector('.cart__overlay');
        overlay.remove();
    }
}

cart('.cart');

function customRadioButtons(buttonsClass) {
    const buttons = document.querySelectorAll(buttonsClass);
    buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            buttons.forEach((btn) =>
                btn.classList.remove('product__size_active')
            );
            btn.classList.add('product__size_active');
        });
    });
}
customRadioButtons('.product__size');

function countInputs(selector) {
    const selectors = document.querySelectorAll(selector);
    selectors.forEach((item) => {
        const buttons = item.querySelectorAll('button');
        const input = item.querySelector('input');
        buttons[0].addEventListener('click', () => {
            if (+input.value > 1) {
                input.value = +input.value - 1;
            }
        });
        buttons[1].addEventListener(
            'click',
            () => (input.value = +input.value + 1)
        );
        input.addEventListener('change', () => {
            if (input.value < 1) {
                input.value = 1;
            }
        });
    });
}

countInputs('.product__count');

function dropDown(selector) {
    const items = document.querySelectorAll(selector);
    items.forEach((item, i) => {
        const btn = item.querySelector('.dropdown__title');
        btn.dataset.id = i;
        btn.dataset.dropdown = 1;
        const content = item.querySelector('.dropdown__content');
        btn.addEventListener('click', () => {
            const contents = document.querySelectorAll('.dropdown__content');
            const buttons = document.querySelectorAll('.dropdown__title');
            contents.forEach((c, i) => {
                if (i != btn.dataset.id) {
                    c.classList.remove('dropdown__content-active');
                    buttons[i].classList.remove('dropdown__title-active');
                }
            });
            btn.classList.toggle('dropdown__title-active');
            content.classList.toggle('dropdown__content-active');
            document.addEventListener('click', (e) => {
                if(!e.target.dataset.dropdown){
                    contents.forEach((c, i) => {
                            c.classList.remove('dropdown__content-active');
                            buttons[i].classList.remove('dropdown__title-active');
                    });
                }
            })
        });
    });
}

dropDown('.dropdown');

function openMobileMenu(){
    const burger = document.querySelector('.mobile-header__burger');
 
    burger.addEventListener('click', () =>{
        
        const menu = document.querySelector('.mobile-header__menu_items');
        const close = menu.querySelector('.mobile-header__menu_items-close');
        burger.computedStyleMap.display = 'none'
        menu.classList.add('mobile-header__menu_items-active');
        close.addEventListener('click', () => {
            menu.classList.remove('mobile-header__menu_items-active');
            burger.computedStyleMap.display = 'flex'
        })
    })
}
openMobileMenu()

function mobileScroll() {
    let swiper = new Swiper('.mobile-content-slider', {
        direction: 'vertical',
        slidesPerColumn: '1',
        freeMode: false,
        mousewheel: true,
      });
}
if (window.innerWidth < 1024) {
    mobileScroll()
}