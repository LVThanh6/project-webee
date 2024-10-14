// load header
document.querySelector('header').innerHTML += `
            <div class="wrapper">
            <div class="header--left">
                <svg class = "btn_menu" width="41" height="26" viewBox="0 0 41 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 20C3.79565 20 4.55871 20.3161 5.12132 20.8787C5.68393 21.4413 6 22.2044 6 23C6 23.7956 5.68393 24.5587 5.12132 25.1213C4.55871 25.6839 3.79565 26 3 26C2.20435 26 1.44129 25.6839 0.87868 25.1213C0.316071 24.5587 0 23.7956 0 23C0 22.2044 0.316071 21.4413 0.87868 20.8787C1.44129 20.3161 2.20435 20 3 20ZM38.998 21C40.104 21 41 21.888 41 23C41 24.105 40.11 25 38.998 25H11.002C10.739 25.0008 10.4785 24.9496 10.2354 24.8494C9.99228 24.7492 9.77135 24.6019 9.58532 24.4161C9.39928 24.2303 9.25181 24.0095 9.15136 23.7665C9.05091 23.5234 8.99947 23.263 9 23C9 21.895 9.89 21 11.002 21H38.998ZM3 10C3.79565 10 4.55871 10.3161 5.12132 10.8787C5.68393 11.4413 6 12.2044 6 13C6 13.7956 5.68393 14.5587 5.12132 15.1213C4.55871 15.6839 3.79565 16 3 16C2.20435 16 1.44129 15.6839 0.87868 15.1213C0.316071 14.5587 0 13.7956 0 13C0 12.2044 0.316071 11.4413 0.87868 10.8787C1.44129 10.3161 2.20435 10 3 10ZM38.998 11C40.104 11 41 11.888 41 13C41 14.105 40.11 15 38.998 15H11.002C10.739 15.0008 10.4785 14.9496 10.2354 14.8494C9.99228 14.7492 9.77135 14.6019 9.58532 14.4161C9.39928 14.2303 9.25181 14.0095 9.15136 13.7665C9.05091 13.5234 8.99947 13.263 9 13C9 11.895 9.89 11 11.002 11H38.998ZM3 0C3.79565 0 4.55871 0.31607 5.12132 0.878679C5.68393 1.44129 6 2.20435 6 3C6 3.79565 5.68393 4.55871 5.12132 5.12132C4.55871 5.68393 3.79565 6 3 6C2.20435 6 1.44129 5.68393 0.87868 5.12132C0.316071 4.55871 0 3.79565 0 3C0 2.20435 0.316071 1.44129 0.87868 0.878679C1.44129 0.31607 2.20435 0 3 0ZM38.998 1C40.104 1 41 1.888 41 3C41 4.105 40.11 5 38.998 5H11.002C10.739 5.00079 10.4785 4.94961 10.2354 4.84941C9.99228 4.7492 9.77135 4.60195 9.58532 4.4161C9.39928 4.23025 9.25181 4.00947 9.15136 3.76645C9.05091 3.52343 8.99947 3.26296 9 3C9 1.895 9.89 1 11.002 1H38.998Z" fill="black"/>
                </svg>
                <img class="header--logo logo" onclick ="document.location.href = '../../index.html'" src="../../assets/img/header/Logo.png" alt="Website Logo">
            </div>
            <div class="header--right">
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class = "searchbtn" d="M39.0534 19.9933C39.0534 30.4815 30.5364 38.9867 20.0267 38.9867C9.51698 38.9867 1 30.4815 1 19.9933C1 9.50518 9.51698 1 20.0267 1C30.5364 1 39.0534 9.50518 39.0534 19.9933Z" fill="white" stroke="black" stroke-width="2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9712 22.8477C20.8088 23.7749 19.335 24.2226 17.8524 24.0988C16.3698 23.975 14.9909 23.2891 13.999 22.182C13.0071 21.0749 12.4775 19.6306 12.5189 18.1458C12.5602 16.661 13.1695 15.2484 14.2215 14.198C15.2735 13.1477 16.6885 12.5394 18.1757 12.4981C19.6629 12.4568 21.1095 12.9856 22.2184 13.9759C23.3273 14.9662 24.0143 16.3428 24.1383 17.8231C24.2623 19.3033 23.8138 20.7747 22.8851 21.9352L27.3308 26.3729C27.3943 26.432 27.4453 26.5032 27.4807 26.5824C27.516 26.6616 27.535 26.7471 27.5365 26.8338C27.5381 26.9205 27.5221 27.0066 27.4896 27.087C27.457 27.1674 27.4086 27.2404 27.3472 27.3017C27.2858 27.3631 27.2127 27.4114 27.1322 27.4439C27.0516 27.4763 26.9654 27.4923 26.8786 27.4907C26.7917 27.4892 26.7061 27.4702 26.6268 27.435C26.5474 27.3997 26.476 27.3488 26.4168 27.2854L21.9712 22.8477ZM15.1379 21.503C14.5051 20.8712 14.0741 20.0661 13.8994 19.1897C13.7246 18.3134 13.814 17.4049 14.1563 16.5793C14.4986 15.7536 15.0783 15.0477 15.8222 14.5509C16.5662 14.0541 17.4409 13.7886 18.3359 13.788C19.231 13.7874 20.1061 14.0517 20.8507 14.5475C21.5953 15.0434 22.176 15.7484 22.5194 16.5736C22.8627 17.3988 22.9534 18.3072 22.7798 19.1838C22.6063 20.0604 22.1763 20.866 21.5444 21.4987L21.54 21.503L21.5357 21.5065C20.6865 22.3524 19.5357 22.8271 18.3361 22.8265C17.1365 22.8258 15.9862 22.3498 15.1379 21.503Z" fill="black"/>
                </svg>
                <div class = "search_bar">
                    <input class="search_input" type="text" name="name" id="name" placeholder ="Tìm kiếm">
                </div>
                <ul class="header__nav nav" id = "nav">
                    <li class="nav__link" id = "link1"><a href="../../index.html">Trang chủ</a></li>
                    <li class="nav__link" id = "link2"><a href="../../pages/club/club.html">Clubs</a></li>
                    <li class="nav__link" id = "link3"><a href="../../pages/blogs/blogs.html">Blog</a></li>
                    <li class="nav__link" id = "link4"><a href="../../pages/contact/contact.html">Liên hệ</a></li>
                </ul>
                <div class="header__input">
                    <div class="header__searchbox">
                        <div class="searchbox__button">
                            <img class="searchbox__img" src="../../assets/img/header/icons8-search-144.png" alt="Search Icon">
                        </div>
                        <input class="searchbox__input" type="text" placeholder="Tìm kiếm">
                    </div>
                    <button class="header__login" popovertarget = "sign-in__form">
                            <img class="login__img1" src="../../assets/img/header/Property 1=Login_Default.png" alt="Login Button">
                            <img class="login__img2" src="../../assets/img/header/Property 1=Login_hover.png" alt="Login Button">
                    </button>
                </div>
            </div>
        </div>
        <style>
            .searchbox__input::placeholder {
            color: var(--placeholder-color, black);
            }
        </style>
  `




// load header.css
document.querySelector('head').innerHTML += `
        <link rel="stylesheet" href="../../share/css/basic.css">
        <link rel="stylesheet" href="../../share/css/header.css">
        `

// hover searchbox
let focus = false;
const heaeder__right = document.querySelector(".header--right")
const searchbox__input = document.querySelector(".searchbox__input")
const header__searchbox = document.querySelector(".header__searchbox")
searchbox__input.addEventListener('mouseenter', function () {
    searchbox__input.style.background = "linear-gradient(to right, #FE7F00 10%,#C4000C 90%)"
    header__searchbox.style.width = "246px"
    searchbox__input.style.width = "100%"
    // searchbox__input.placeholder = "_______________________"
    searchbox__input.placeholder = "Từ khoá tìm kiếm"
    searchbox__input.style.paddingLeft = "35px";
    searchbox__input.style.paddingRight = "13px";
    searchbox__input.style.right = "0px"
    searchbox__input.style.color = "white"
    searchbox__input.style.left = "0px";
});
searchbox__input.addEventListener('mouseleave', function () {
    let value = document.querySelector(".searchbox__input").value
    if (value == "" && focus == false) {
        header__searchbox.style.width = "103px"
        searchbox__input.style.width = "100%"
        searchbox__input.style.paddingLeft = "33px";
        searchbox__input.style.paddingRight = "0";
        setTimeout(() => {
            searchbox__input.placeholder = "Tìm kiếm"
        }, 100);
        searchbox__input.style.right = "initial"
        setTimeout(() => {
            console.log("run")
            document.querySelector(".searchbox__input").style.background = "linear-gradient(to right, #FFFFFF 10%,#FFFFFF 80%)"
            searchbox__input.style.setProperty('--placeholder-color', 'black');

        }, 1);
    }
    if (value == "" && focus == true) {
        searchbox__input.style.setProperty('--placeholder-color', 'white');
    }
});


// focus searchbox
setTimeout(() => {
    document.querySelector(".searchbox__input").style.transition = "all 0.2s linear";
}, 100);
searchbox__input.addEventListener('focus', function () {
    focus = true;
    searchbox__input.style.background = "linear-gradient(to right, #FE7F00 10%,#C4000C 90%)"
    header__searchbox.style.width = "246px"
    searchbox__input.style.width = "100%"
    searchbox__input.placeholder = "Từ khoá tìm kiếm"
    searchbox__input.style.paddingLeft = "35px";
    searchbox__input.style.paddingRight = "13px";
    searchbox__input.style.right = "0px"
    searchbox__input.style.color = "white"
    searchbox__input.style.left = "0px";
});
searchbox__input.addEventListener('blur', function () {
    focus = false;
    let value = document.querySelector(".searchbox__input").value
    if (value == "") {
        header__searchbox.style.width = "103px"
        searchbox__input.style.width = "100%"
        searchbox__input.style.paddingLeft = "33px";
        searchbox__input.style.paddingRight = "0";
        setTimeout(() => {
            searchbox__input.placeholder = "Tìm kiếm"
        }, 100);
        searchbox__input.style.right = "initial"
        setTimeout(() => {
            console.log("run")
            document.querySelector(".searchbox__input").style.background = "linear-gradient(to right, #FFFFFF 10%,#FFFFFF 80%)"
            searchbox__input.style.setProperty('--placeholder-color', 'black');
        }, 1);
    }
});

const searchbtn = document.querySelector(".searchbtn");
const search_bar = document.querySelector(".search_bar");
search_bar.style.display = "none";
let show_search_input = false;

searchbtn.addEventListener('click', function () {
    if (show_search_input) {
        show_search_input = false;
        search_bar.style.opacity = "0";
        setTimeout(() => {
            search_bar.style.display = "none";
        }, 100);
    } else {
        show_search_input = true;
        search_bar.style.display = "initial";
        setTimeout(() => {
            search_bar.style.transition = "0.05s";
            search_bar.style.opacity = "1";
        }, 100);
    }
    console.log(show_search_input);
});