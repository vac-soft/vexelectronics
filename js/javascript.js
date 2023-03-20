const nav = document.querySelector('.navbar');
fetch('./asset/navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data   
})

const nav1 = document.querySelector('.navbar');
fetch('../asset/productnav.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data   
})

