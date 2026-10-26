document.getElementById('sk').innerHTML=S.map(function(g){return '<div><h3>'+g[0]+'</h3><ul>'+g[1].map(function(r){var d='';for(var i=0;i<10;i++)d+='<i'+(i<r[1]?' class="on"':'')+'></i>';return '<li><em>'+r[0]+'</em><span class="dots" role="img" aria-label="'+r[1]+' out of 10">'+d+'</span><b class="sc" data-n="'+r[1]+'">'+r[1]+'</b></li>'}).join('')+'</ul></div>'}).join('');
document.querySelector('.hero').style.backgroundImage='linear-gradient(rgba(26,26,26,.15),rgba(26,26,26,.6)),url('+I.hero2+')';
var P=document.getElementById('panel'),T=document.querySelectorAll('.tabs button');
function show(k){P.innerHTML=D[k].map(function(p,n){
return '<article class="proj"><div class="ph"><div><p class="k">'+p.k.replace(/^Flagship/,'<span class="fl">Flagship</span>')+'</p><h3>'+p.t+'</h3></div><p class="d">'+p.d+'</p></div><div class="ctl"><div>'+p.g.split(' · ').map(function(t){return '<span class="tag">'+t+'</span>'}).join('')+'</div><div><button class="ar" data-d="-1" aria-label="Previous photos">&#8592;</button><button class="ar" data-d="1" aria-label="Next photos">&#8594;</button></div></div><div class="rail" tabindex="0" role="group" aria-label="'+p.t+' photos">'+p.i.map(function(i){return '<figure><img loading="lazy" alt="'+i[1]+'" src="'+I[i[0]]+'"><figcaption>'+i[1]+'</figcaption></figure>'}).join('')+'</div></article>'}).join('');
P.querySelectorAll('.ar').forEach(function(b){b.onclick=function(){var r=b.closest('.proj').querySelector('.rail');r.scrollBy({left:r.clientWidth*.8*b.dataset.d,behavior:'smooth'})}})}
T.forEach(function(b){b.onclick=function(){T.forEach(function(x){x.setAttribute('aria-selected',x==b)});show(b.dataset.k);lbTab();fx()}});
document.querySelectorAll('#certificates .ar').forEach(function(b){b.onclick=function(){var r=b.closest('.proj').querySelector('.rail');r.scrollBy({left:r.clientWidth*.8*b.dataset.d,behavior:'smooth'})}});
(function(){var lb=document.getElementById('lb'),im=document.getElementById('lbi'),st=document.getElementById('lbs'),cap=document.getElementById('lbc'),num=document.getElementById('lbn'),L=[],k=0,last=null;
function go(n){k=(n+L.length)%L.length;im.src=L[k].s;im.alt=L[k].c;cap.textContent=L[k].c;num.textContent=(k+1)+' / '+L.length;st.classList.remove('z');st.scrollTo(0,0)}
function open(img){var r=img.closest('.rail');L=[].map.call(r.querySelectorAll('img'),function(i){var f=i.closest('figure').querySelector('figcaption');return{s:i.src,c:f?f.textContent.replace(/\s+/g,' ').trim():i.alt}});go([].indexOf.call(r.querySelectorAll('img'),img));last=img;lb.classList.add('on');document.body.style.overflow='hidden';document.getElementById('lbx').focus()}
function close(){lb.classList.remove('on');document.body.style.overflow='';if(last)last.focus()}
document.addEventListener('click',function(e){var i=e.target.closest('.rail img');if(i)open(i)});
document.addEventListener('keydown',function(e){var i=e.target;if((e.key==='Enter'||e.key===' ')&&i.matches&&i.matches('.rail img')){e.preventDefault();open(i);return}if(!lb.classList.contains('on'))return;if(e.key==='Escape')close();if(e.key==='ArrowRight')go(k+1);if(e.key==='ArrowLeft')go(k-1)});
document.getElementById('lbx').onclick=close;document.getElementById('lbp').onclick=function(){go(k-1)};document.getElementById('lbnx').onclick=function(){go(k+1)};
im.onclick=function(){st.classList.toggle('z')};
var x0=null;st.addEventListener('touchstart',function(e){x0=e.touches.length===1&&!st.classList.contains('z')?e.touches[0].clientX:null},{passive:true});
st.addEventListener('touchend',function(e){if(x0===null)return;var d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>60)go(d<0?k+1:k-1);x0=null},{passive:true});
window.lbTab=function(){document.querySelectorAll('.rail img').forEach(function(i){i.tabIndex=0;i.setAttribute('role','button');i.setAttribute('aria-label','Open full screen: '+i.alt)})};
})();
(function(){var d=document,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;d.documentElement.classList.add('js');
var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);if(e.target.id==='sk')cnt(e.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'}):null;
function cnt(s){if(rm)return;s.querySelectorAll('.sc').forEach(function(b,k){var n=parseInt(b.dataset.n,10);var t0=null;function f(ts){if(!t0)t0=ts;var p=Math.min((ts-t0-k*40)/1000,1);if(p<0){requestAnimationFrame(f);return}b.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)}b.textContent='0';requestAnimationFrame(f)})}
window.fx=function(){d.querySelectorAll('.sk>div').forEach(function(el){if(el.dataset.rv)return;el.dataset.rv=1;el.classList.add('rv');if(io)io.observe(el);else el.classList.add('in')});
d.querySelectorAll('#sk').forEach(function(el){if(el.dataset.ob)return;el.dataset.ob=1;if(io)io.observe(el);else el.classList.add('in')});
d.querySelectorAll('.dots').forEach(function(x){if(x.dataset.dl)return;x.dataset.dl=1;x.querySelectorAll('i').forEach(function(i,n){i.style.transitionDelay=(n*50)+'ms';i.style.animationDelay=(n*140)+'ms'})});
d.querySelectorAll('.rail').forEach(function(r){if(r.dataset.pg)return;r.dataset.pg=1;var p=d.createElement('div');p.className='prog';p.innerHTML='<i></i>';r.after(p);function u(){p.firstChild.style.width=Math.min(100,(r.scrollLeft+r.clientWidth)/r.scrollWidth*100)+'%'}r.addEventListener('scroll',u,{passive:true});u();setTimeout(u,600)})};
})();
show('arch');lbTab();fx();
