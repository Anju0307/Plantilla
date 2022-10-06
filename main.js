addEventListener("DOMContentLoaded",(e)=>{
    let toggle = document.querySelector("#toggle");
    toggle.addEventListener("click",(e)=>{
        e.preventDefault();
        let navegacion = document.querySelector("#navegacion");
        toggle.classList.toggle('active');
        navegacion.classList.toggle('active');
    })
})