    //Mobile Menu Button
    var nav = document.querySelector('.topnav')
    var mobileMenu = document.querySelector('#mobile-menu')
    var navHeight = nav.clientHeight;
    mobileMenu.onclick = function () { 
        var isClosed = nav.clientHeight === navHeight;
        if (isClosed) {
            nav.style.height = 'auto';
        }
        else {
            nav.style.height = null;
        }
}

    
    
    // Hide/show auth-form
        const modal_overlay = document.getElementsByClassName("modal__overlay")[0];
        const modal = document.getElementsByClassName("modal")[0];
        const form_login = document.getElementById("login");
        const form_register = document.getElementById("register");

        const toggle_login = document.getElementsByClassName("toggle-btn-login");
        const toggle_register = document.getElementsByClassName("toggle-btn-register");
        // function onToggle() {
        //     form_register.style.display = form_register.style.display == "none" ? "inline" : "none";
        //     form_login.style.display = form_login.style.display == "inline" ? "none" : "inline";
        // }
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
const buyBtns = document.querySelectorAll('.buying-btn');
const cart = document.querySelector('.cart-modal');
const closeCart = document.querySelector('.cart-close');
function showCart() {
    cart.classList.add('open')
}
function hideCart() {
    cart.classList.remove('open')
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showCart)
}
closeCart.addEventListener('click', hideCart)