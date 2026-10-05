const products=[
{id:1,name:'Hamburguesa Clásica',price:35,icon:'🍔'},
{id:2,name:'Hamburguesa BBQ',price:40,icon:'🍔'},
{id:3,name:'Pizza Pepperoni',price:55,icon:'🍕'},
{id:4,name:'Pizza Vegetariana',price:50,icon:'🍕'},
{id:5,name:'Bebida Natural',price:10,icon:'🥤'},
{id:6,name:'Papas Fritas',price:18,icon:'🍟'}];
let cart={}; let paid=false;
const $=s=>document.querySelector(s);
function money(n){return 'Q'+n.toFixed(2)}
function renderProducts(){ $('#products').innerHTML=products.map(p=>`<article class="card"><div class="food">${p.icon}</div><h3>${p.name}</h3><div class="price">${money(p.price)}</div><p>Producto preparado especialmente por QuickBite.</p><div class="qty"><button data-minus="${p.id}">−</button><span id="q${p.id}">1</span><button data-plus="${p.id}">+</button><button class="add" data-add="${p.id}">Agregar</button></div></article>`).join(''); }
function subtotal(){return Object.entries(cart).reduce((s,[id,q])=>s+products.find(p=>p.id==id).price*q,0)}
function calc(){let sub=subtotal(); /* BUG INTENCIONAL: descuento incorrecto cuando hay 3+ unidades totales */ let units=Object.values(cart).reduce((a,b)=>a+b,0); let discount=units>=3?sub*.12:sub*.10; /* BUG INTENCIONAL: promoción rompe regla previa de envío gratis >= Q100 */ let shipping=sub?15:0; return {sub,discount,shipping,total:sub-discount+shipping};}
function renderCart(){let rows=Object.entries(cart); $('#cart').innerHTML=rows.length?rows.map(([id,q])=>{let p=products.find(x=>x.id==id);return `<div class="cartrow"><div><b>${p.name}</b><br><small>${money(p.price)} × ${q}</small></div><div><button data-cminus="${id}">−</button> ${q} <button data-cplus="${id}">+</button> <button data-remove="${id}">🗑️</button></div></div>`}).join(''):'<p>Tu carrito está vacío.</p>';let c=calc();$('#summary').innerHTML=`<div class="sumrow"><span>Subtotal</span><b>${money(c.sub)}</b></div><div class="sumrow"><span>Descuento (10%)</span><b>-${money(c.discount)}</b></div><div class="sumrow"><span>Envío</span><b>${money(c.shipping)}</b></div><div class="sumrow total"><span>Total</span><span>${money(c.total)}</span></div>`;}
document.addEventListener('click',e=>{let id;if(id=e.target.dataset.plus){let el=$('#q'+id);el.textContent=+el.textContent+1}if(id=e.target.dataset.minus){let el=$('#q'+id); /* BUG INTENCIONAL: permite llegar a 0 */ el.textContent=Math.max(0,+el.textContent-1)}if(id=e.target.dataset.add){let q=+$('#q'+id).textContent;cart[id]=(cart[id]||0)+q;renderCart()}if(id=e.target.dataset.cplus){cart[id]++;renderCart()}if(id=e.target.dataset.cminus){cart[id]=Math.max(0,cart[id]-1);renderCart()}if(id=e.target.dataset.remove){ /* BUG INTENCIONAL: visualmente elimina, pero conserva valor fantasma en cálculo */ let old=cart[id];delete cart[id];renderCart();cart[id]=old; }});
$('#clear').onclick=()=>{cart={};renderCart()};
$('#continue').onclick=()=>{if(!subtotal())return alert('Agrega al menos un producto.');$('.layout').classList.add('hidden');$('#checkout').classList.remove('hidden')};
$('#backCart').onclick=()=>{$('#checkout').classList.add('hidden');$('.layout').classList.remove('hidden')};
$('#toPay').onclick=()=>{ /* BUG INTENCIONAL: no valida dirección */ $('#checkout').classList.add('hidden');$('#payment').classList.remove('hidden')};
$('#backAddress').onclick=()=>{$('#payment').classList.add('hidden');$('#checkout').classList.remove('hidden')};
$('#pay').onclick=()=>{paid=true;$('#paymsg').className='ok';$('#paymsg').innerHTML='<b>✓ ¡Pago aprobado!</b><br>Tu pago ha sido procesado correctamente.<br><button id="confirmBtn">Ir a confirmación →</button>';$('#confirmBtn').onclick=confirmOrder};
function confirmOrder(){let c=calc();$('#payment').classList.add('hidden');$('#confirmation').classList.remove('hidden'); /* BUG INTENCIONAL: integración pago→pedido deja estado pendiente */ $('#confirmationText').innerHTML=`<p><b>Pedido #QB-${Math.floor(Math.random()*9000+1000)}</b></p><p>Pago: <b style="color:#16833a">APROBADO</b></p><p>Estado del pedido: <b style="color:#b56b00">PENDIENTE DE PAGO</b></p><p>Total: ${money(c.total)}</p>`;}
$('#newOrder').onclick=()=>location.reload();renderProducts();renderCart();
