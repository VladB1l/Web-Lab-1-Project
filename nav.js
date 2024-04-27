let navArr = ['Free-To-Play', 'Latest Games', 'Coming Soon'];
let linkArr = ['', '', '']
let nav = document.querySelectorAll('.nav');

let burger = document.querySelector('.burger');
let horizontalMenu = document.querySelector('.horizontalMenu');
let closeBtn = document.querySelector('.closeBtn');

nav.forEach(element => {
    MenuInsert(element)
});

burger.addEventListener('click', MenuToggler);
closeBtn.addEventListener('click', MenuToggler);

function MenuToggler() {
    if (horizontalMenu.hidden) {
        horizontalMenu.hidden = !horizontalMenu.hidden
        setTimeout(() => {
            horizontalMenu.style.transform = "translate(-200px, 0px)"
        }, 0)
    } else {
        horizontalMenu.style.transform = "translate(0px, 0px)"
        setTimeout(() => {
            horizontalMenu.hidden = !horizontalMenu.hidden
        }, 400)
    }
}

function MenuInsert(nav) {
    for (let i = 0; i < navArr.length; i++) {
        let navItem = document.createElement('li');
        navItem.innerHTML = `<a href ='${linkArr[i]}'> ${navArr[i]} </a>`;
        nav.append(navItem)
    }
}
