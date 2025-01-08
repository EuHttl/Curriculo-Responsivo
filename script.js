let header = document.getElementById('header')
const ctaproject = document.createElement("cta-project-site")

window.addEventListener('scroll', () => {
    if(window.scrollY >= 200){
        header.style.background = '#191919'
    } else {
        header.style.background = 'transparent'
    }
})

if(ctaproject == ''){
    Toastify({
        text: "Ops, O site está indisponivel no momento",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #0000CD, #0000FF)",
        },
    }).showToast();

return;

 }

