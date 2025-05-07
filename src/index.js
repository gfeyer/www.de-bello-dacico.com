/* Theme Script */

const accordion_btns = document.querySelectorAll("a.itu_accordion_btn");

accordion_btns.forEach(element => {
  element.addEventListener('click', e=>{
    e.preventDefault();

    e.target.closest('.itu_accordion_box').classList.toggle('open')
  })
});

/* add event on menu link click -> hide author info txt
================================================================================= */

const menuLinks = document.querySelectorAll("ul.main-top-nav a.main_link");
const authorInfoTxt = document.querySelector(".middle_header_sidebar p.author-info");

menuLinks.forEach(element => {

  element.addEventListener('shown.bs.dropdown', function () {

    setTimeout(function(){
      authorInfoTxt.classList.add("close")
    }, 300)
    
  })

  element.addEventListener('hidden.bs.dropdown', function () {

    setTimeout(function(){

      // check if dropdown object contain show
      var dropObj = document.querySelectorAll('ul.main-top-nav .dropdown-menu');
      var uls = [];
      dropObj.forEach(el => {
        if(el.classList.contains('show')){
          uls.push(el);
        } else {
          
        }

      });

      if(uls.length > 0){
        authorInfoTxt.classList.add("close")
      } else {
        authorInfoTxt.classList.remove("close")
      }

    }, 300)

    

  })

});


/* mobile nav
================================================================================= */

const navDiv = document.querySelector(".middle_header .nav");
const ulMenu = navDiv.querySelector("ul.main-top-nav");
const mbody = document.querySelector("body");

/*
values:
"afterbegin" - After the beginning of the element (as the first child)
"afterend" - After the element
"beforebegin" - Before the element
"beforeend" - Before the end of the element (as the last child)
*/

/* Variables *************************************************/

let menuimg = `
	<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="45" viewBox="0 0 512 512"><path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"/></svg>
`;

let closeimg = `
	<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="45" viewBox="0 0 512 512"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"/></svg>
`;

let mobheader = `
	<div id="mob-header" class="mob">
		<a onclick="" href="javascript:void(0)" class="mob_button">${menuimg}</a>
	</div>
`;

let closenav = `
	<li id="closenav" class="mob">
		<a onclick="" href="javascript:void(0)" class="close_button">${closeimg}</a>
	</li>
`;

if(navDiv){
  navDiv.insertAdjacentHTML('afterbegin', mobheader);
  ulMenu.insertAdjacentHTML('afterbegin', closenav);

  const mobOpen = navDiv.querySelector("a.mob_button");
  if(mobOpen){
    mobOpen.addEventListener("click", e=>{
      e.preventDefault();
      ulMenu.classList.add("open");
      mbody.classList.add("open_menu");
    })
  }

  const mobClose = navDiv.querySelector("a.close_button");
  if(mobClose){
    mobClose.addEventListener("click", e=>{
      e.preventDefault();
      ulMenu.classList.remove("open");
      setTimeout(function(){
        mbody.classList.remove("open_menu");
      }, 350)
    })
  }


  // submenu ****************************************

  const menuLinks = ulMenu.querySelectorAll("a.main_link");

  const menuLinksSvg = `
  <span class="mob nav_icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
  </svg></span>
  `;

  menuLinks.forEach(e => {
    e.insertAdjacentHTML('beforeend', menuLinksSvg);
  });



}

