class e{constructor(e,t,i){try{this.oldOfficer=document.querySelector(e),this.newOfficer=document.querySelector(t),this.newItems=this.newOfficer.querySelectorAll(i),this.oldItems=this.oldOfficer.querySelectorAll(i),this.items=i,this.oldCounter=0,this.newCounter=0}catch(e){}}bindTriggers(e,t,i){e.querySelector(".plus").addEventListener("click",()=>{i!==t.length-2?(t[i].style.display="flex",i++):(t[i].style.display="flex",t[t.length-1].remove())})}hideItems(e){e.forEach((e,t,i)=>{t!==i.length-1&&(e.style.display="none")})}init(){try{this.hideItems(this.oldItems),this.hideItems(this.newItems),this.bindTriggers(this.oldOfficer,this.oldItems,this.oldCounter),this.bindTriggers(this.newOfficer,this.newItems,this.newCounter)}catch(e){}}}class t{constructor(e){this.btn=document.querySelectorAll(e),this.path="assets/img/mainbg.jpg"}downloadItem(e){let t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download","nice_picture"),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}init(){this.btn.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),this.downloadItem(this.path)})})}}class i{constructor(e){this.forms=document.querySelectorAll(e),this.inputs=document.querySelectorAll("input"),this.message={loading:"Loading....",success:"Thanks!",failure:"Error....."},this.path="assets/question.php"}checkMailInputs(){let e=document.querySelectorAll('[type="email"]');e.forEach(e=>{e.addEventListener("keypress",function(e){e.key.match(/[^a-z 0-9 @ \.]/gi)&&e.preventDefault()})})}clearInputs(){this.inputs.forEach(e=>{e.value=""})}async postData(e,t){let i=await fetch(e,{method:"POST",body:t});return await i.text()}initMask(){let e=(e,t)=>{if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){let i=t.createTextRange();i.collapse(!0),i.moveEnd("character",e),i.moveStart("character",e),i.select()}};function t(t){let i="+1 (___) ___-____",s=0,n=i.replace(/\D/g,""),l=this.value.replace(/\D/g,"");n.length>=l.length&&(l=n),this.value=i.replace(/./g,function(e){return/[_\d]/.test(e)&&s<l.length?l.charAt(s++):s>=l.length?"":e}),"blur"===t.type?2==this.value.length&&(this.value=""):e(this.value.length,this)}document.querySelectorAll('[name="phone"]').forEach(e=>{e.addEventListener("input",t),e.addEventListener("keypress",t),e.addEventListener("focus",t),e.addEventListener("blur",t)})}init(){this.initMask(),this.checkMailInputs(),this.forms.forEach(e=>{e.addEventListener("submit",t=>{t.preventDefault();let i=document.createElement("div");i.style.cssText=`
         margin-top:15px;
         font-size:18px;
         color:gray;`,e.parentNode.appendChild(i),i.textContent=this.message.loading;let s=new FormData(e);this.postData(this.path,s).then(e=>{console.log(e),i.textContent=this.message.success}).catch(()=>{i.textContent=this.message.failure}).finally(()=>{this.clearInputs(),setTimeout(()=>{i.remove()},6e3)})})})}}class s{constructor(e,t){this.btn=document.querySelectorAll(e),this.overlay=document.querySelector(t),this.close=this.overlay.querySelector(".close"),this.onPlayerStateChange=this.onPlayerStateChange.bind(this)}bindTriggers(){this.btn.forEach((e,t)=>{try{let i=e.closest(".module__video-item").nextElementSibling;t%2==0&&i.setAttribute("data-disabled","true")}catch(e){}e.addEventListener("click",()=>{e.closest(".module__video-item")&&"true"===e.closest(".module__video-item").getAttribute("data-disabled")||(this.activeBtn=e,document.querySelector("iframe#frame")?(this.overlay.style.display="flex",this.path!==e.getAttribute("data-url")&&(this.path=e.getAttribute("data-url"),this.player.loadVideoById({videoId:this.path}))):(this.path=e.getAttribute("data-url"),this.createPlayer(this.path)))})})}bindCloseBtn(){this.close.addEventListener("click",()=>{this.overlay.style.display="none",this.player.stopVideo()})}createPlayer(e){this.player=new YT.Player("frame",{height:"100%",width:"100%",videoId:`${e}`,events:{onStateChange:this.onPlayerStateChange}}),this.overlay.style.display="flex"}onPlayerStateChange(e){try{let t=this.activeBtn.closest(".module__video-item").nextElementSibling,i=this.activeBtn.querySelector("svg").cloneNode(!0);0===e.data&&t.querySelector(".play__circle").classList.contains("closed")&&(t.querySelector(".play__circle").classList.remove("closed"),t.querySelector("svg").remove(),t.querySelector(".play__circle").appendChild(i),t.querySelector(".play__text").textContent="play video",t.querySelector(".play__text").classList.remove("attention"),t.style.opacity=1,t.style.filter="none",t.setAttribute("data-disabled","false"))}catch(e){}}init(){if(this.btn.length>0){let e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";let t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),this.bindTriggers(),this.bindCloseBtn()}}}class n{constructor(e){this.btns=document.querySelectorAll(e)}init(){this.btns.forEach(e=>{e.addEventListener("click",()=>{let t=e.closest(".module__info-show").nextElementSibling;t.classList.toggle("msg"),t.style.marginTop="20px"})})}}class l{constructor({container:e=null,btns:t=null,next:i=null,prev:s=null,activeClass:n="",animate:l,autoplay:a}={}){this.container=document.querySelector(e);try{this.slides=this.container.children}catch(e){}this.btns=document.querySelectorAll(t),this.prev=document.querySelector(s),this.next=document.querySelector(i),this.activeClass=n,this.animate=l,this.autoplay=a,this.slideIndex=1}}class a extends l{constructor(e){super(e)}showSlides(e){let t=Array.from(this.slides);e>t.length&&(this.slideIndex=1),e<1&&(this.slideIndex=t.length);try{this.hanson.style.opacity="0",3===e?(this.hanson.classList.add("animated"),setTimeout(()=>{this.hanson.style.opacity="1",this.hanson.classList.add("animated","slideInUp")},3e3)):this.hanson.classList.remove("slideInUp")}catch(e){}t.forEach(e=>{e.style.display="none",e.classList.remove("animated","fadeIn")}),t[this.slideIndex-1].style.display="block",t[this.slideIndex-1].classList.add("animated","fadeIn")}plusSlides(e){this.showSlides(this.slideIndex+=e)}bindTriggers(){this.btns.forEach(e=>{e.addEventListener("click",()=>{this.plusSlides(1)}),e.parentNode.previousElementSibling.addEventListener("click",e=>{e.preventDefault(),this.slideIndex=1})}),this.showSlides(this.slideIndex),document.querySelectorAll(".prevmodule").forEach(e=>{e.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault(),this.plusSlides(-1)})}),document.querySelectorAll(".nextmodule").forEach(e=>{e.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault(),this.plusSlides(1)})})}render(){if(this.container){try{this.hanson=document.querySelector(".hanson")}catch(e){}this.showSlides(this.slideIndex),this.bindTriggers()}}}class r extends l{constructor(e,t,i,s,n,l){super(e,t,i,s,n,l),this.paused=!1}decoratingSlides(){let{activeClass:e,animate:t}=this,i=Array.from(this.slides);i.forEach(i=>{i.classList.remove(e),t&&(i.querySelector(".card__title").style.opacity="0.4",i.querySelector(".card__controls-arrow").style.opacity="0")}),i[0].classList.add(e),t&&(i[0].querySelector(".card__title").style.opacity="1",i[0].querySelector(".card__controls-arrow").style.opacity="1")}nextSlide(){let{container:e,slides:t,prev:i}=this,s=Array.from(t);i.parentNode===e?e.insertBefore(s[0],i):e.appendChild(s[0]),this.decoratingSlides()}prevSlide(){let{container:e,slides:t}=this;for(let i=t.length-1;i>0;i--)if("BUTTON"!==t[i].tagName){let s=t[i];e.insertBefore(s,t[0]),this.decoratingSlides();break}}bindTriggers(){let{next:e,prev:t}=this;e.addEventListener("click",()=>{this.nextSlide()}),t.addEventListener("click",()=>{this.prevSlide()})}activateAnimation(){this.paused=setInterval(()=>this.nextSlide(),3e3)}init(){try{this.container.style.cssText=`
     display:flex;
     flex-wrap:wrap;
     overflow:hidden;
     align-items:flex-start;
     `,this.bindTriggers(),this.decoratingSlides(),this.autoplay&&(this.container.addEventListener("mouseenter",()=>clearInterval(this.paused)),this.next.addEventListener("mouseenter",()=>clearInterval(this.paused)),this.prev.addEventListener("mouseenter",()=>clearInterval(this.paused)),this.container.addEventListener("mouseleave",()=>this.activateAnimation()),this.next.addEventListener("mouseleave",()=>this.activateAnimation()),this.prev.addEventListener("mouseleave",()=>this.activateAnimation()),this.activateAnimation())}catch(e){}}}window.addEventListener("DOMContentLoaded",()=>{let l=new a({container:".moduleapp",btns:".next"});l.render();let o=new a({btns:".next",container:".page"});o.render(),new s(".showup .play",".overlay").init(),new s(".module__video-item .play",".overlay").init();let c=new r({container:".showup__content-slider",prev:".showup__prev",next:".showup__next",activeClass:"card-active",animate:!0,autoplay:!0});c.init();let d=new r({container:".modules__content-slider",prev:".modules__info-btns .slick-prev",next:".modules__info-btns .slick-next",activeClass:"card-active",animate:!0,autoplay:!0});d.init();let h=new r({container:".feed__slider",prev:".feed__slider .slick-prev",next:".feed__slider .slick-next",activeClass:"feed__item-active",autoplay:!0,animate:!1});h.init(),new e(".officerold",".officernew",".officer__card-item").init(),new i(".form").init(),new n(".plus__content").init(),new t(".download").init()});//# sourceMappingURL=index.6f485979.js.map

//# sourceMappingURL=index.6f485979.js.map
