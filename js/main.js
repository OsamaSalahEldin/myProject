
/* header fixed start */
var landing = document.getElementById('landing');
var headerFirst  = document.getElementById('header-first');
const company = document.getElementById('company');
const logo = document.querySelector(".logo");

window.onscroll=function(){
	 if(window.pageYOffset > (company.offsetHeight + 150)){
   //
			let md = window.matchMedia('(max-width: 600px)');
			let lg = window.matchMedia('(min-width: 601px)');
			
				headerFirst.style.backgroundColor='#0000004b';

		
				
	
		}else{
			headerFirst.style.backgroundColor='transparent';
			//logo.style.marginTop= 5 + "px";
		}
}


/* header fixed start */

/* start prevent select */
function disableselect(e) {
	return false;
}

function reEnable() {
	return true;
}

document.onselectstart = new Function ("return false");

if (window.sidebar) {
	document.onmousedown = disableselect;
	document.onclick = reEnable;
}
/* end prevent select */


/* start prevent right click */

//document.addEventListener('contextmenu', event => event.preventDefault());


/* end prevent right click */

