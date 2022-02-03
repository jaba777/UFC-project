const container1 = document.getElementById('container1');
const Password=document.getElementById('password');
const CONtainer2=document.getElementById('container2');
const Icon=document.querySelector('i');

Password.addEventListener('click',function(){
    container1.style.display="none";
    CONtainer2.style.display="block";
})

Icon.addEventListener('click', function(){
    container1.style.display="block";
    CONtainer2.style.display="none";
})