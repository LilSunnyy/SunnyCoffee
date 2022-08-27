    //Mobile Menu Button
    var nav = document.getElementById('header');
    var mobileMenu = document.getElementById('mobile-menu')
    var navHeight = nav.clientHeight;
    mobileMenu.onclick = function () { 
        var isClosed = nav.clientHeight === 50;
        if (isClosed) {
            nav.style.height = 'auto';
        }
        else {
            nav.style.height = '50px';
        }
}
    // Hide/show auth-form
        const modal_overlay = document.getElementsByClassName("modal__overlay")[0];
        const modal = document.getElementsByClassName("modal")[0];
        const form_login = document.getElementById("login");
        const form_register = document.getElementById("register");

        const toggle_login = document.getElementsByClassName("toggle-btn-login");
        const toggle_register = document.getElementsByClassName("toggle-btn-register");
        
        function login() {
            form_register.style.display = "none";
            form_login.style.display = "inline";
            toggle_login[0].style.background = "#ff105f"
            toggle_register[0].style.background = "#fff"
        }
        function register() {
            form_register.style.display = "inline";
            form_login.style.display = "none";
            toggle_login[0].style.background = "#fff"
            toggle_register[0].style.background = "#ff105f"
        }
        function hideModal() {
            modal_overlay.style.display = "none"
            modal.style.display = "none"
        }

        function showModal() {
            modal_overlay.style.display = "inline"
            modal.style.display = "inline"
        }
    //Hide/show cart
const openCart = document.querySelector('.shopping-cart');
const cart = document.querySelector('.cart-modal');
const closeCart = document.querySelector('.cart-close');
function showCart() {
    cart.classList.add('open') //thêm class vào thẻ html
}
function hideCart() {
    cart.classList.remove('open')
}
openCart && openCart.addEventListener('click', showCart)
closeCart && closeCart.addEventListener('click', hideCart)
//Flying Item
$(document).on('click', '.buying-btn', function (e) { //.on( events [, selector ] [, data ], handler )
    e.preventDefault();
    var parent = $(this).parents('.itemProducts');
    var shopCart = $(document).find('.shopping-cart');
    var src = parent.find('img').css('background-image');
    var parTop = parent.offset().top;
    var parLeft = parent.offset().left;
    $('<img />', {
        class: 'flying-img-product',
        src: src.slice(5,src.length-2)
    }).appendTo('body').css({
        'top': parTop,
        'left': parLeft
    });
    setTimeout(function () {
        $(document).find('.flying-img-product').css({
            'top': shopCart.offset().top,
            'left': shopCart.offset().left
        });
        setTimeout(function () {
            $(document).find('.flying-img-product').remove();
            var countItem = parseInt(shopCart.find('#count-item').data('count')) + 1;
            shopCart.find('#count-item').text( countItem+ '').data('count',countItem);
        }, 1000);
    }, 500);
});
//Slider
var indexValue = 1;
function btm_slide(e) { showImg(indexValue = e); }
function showImg(e){
    var i;
    const img = document.querySelectorAll('.slider-images img');
    const sliders = document.querySelectorAll('.slider-btm span');
    if (e > img.length){e=1}
    if (e < 1) { e = img.length }
    for (i = 0; i < img.length; i++)
    {
        img[i].style.display = "none";
    } 
    for (i = 0; i < sliders.length; i++)
    {
        sliders[i].style.background= "rgba(255, 255, 255, 0.1)";
    } 
    img[e-1].style.display = "block";
    sliders[e-1].style.background= "white";
};