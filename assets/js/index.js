const colores = {
    azul: '#0089cc',
    rosa: '#f590b2',
    naranja: '#e75227'
}

const poolColores = [colores.azul, colores.rosa, colores.naranja];


const contactBtn = document.getElementsByClassName('contact')[0];
    contactBtn.addEventListener('mouseover', function(){
        const random = parseInt(Math.random() * 3) + 1;
        contactBtn.classList.add('hover' + random);
        contactBtn.classList.remove('bg-[#232323]');

    contactBtn.addEventListener('mouseout', function(){
            contactBtn.classList.remove('hover' + random);
            contactBtn.classList.add('hover');
        });
    });

const instaLogo = document.querySelectorAll('.insta')[0];
    instaLogo.addEventListener('mouseover', function(){
        const random = parseInt(Math.random() * 3);
        instaLogo.setAttribute("fill", poolColores[random]);

    instaLogo.addEventListener('mouseout', function(){
        instaLogo.setAttribute("fill", '#232323');
    })
})




