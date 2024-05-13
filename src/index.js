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

const options = document.querySelectorAll('.option');

options.forEach((option, index) => {
    const backImg = document.getElementById('backImage');
    const textMenu = document.getElementById('textMenu');
    const blueInfo = document.getElementById('blue-info');
    option.addEventListener('click', () => {
        textMenu.classList.add('appear');
        switch(index){
            case 0:
                backImg.classList.remove('bg-orangey');
                backImg.classList.remove('bg-pinky');

    
                blueInfo.classList.toggle('appearBlue');

                if(!blueInfo.className.includes('appearBlue')){
                    setTimeout(() =>
                        backImg.classList.add('bg-bluey'),
                100 );
                } else {
                        backImg.classList.remove('bg-bluey')
                        textMenu.classList.remove('appear');
                }

                
                
                break;
            case 1: 
                backImg.classList.remove('bg-orangey');
                backImg.classList.remove('bg-bluey');
                setTimeout(() => backImg.classList.add('bg-pinky'),
            100 );
                break;
            case 2:
                backImg.classList.remove('bg-bluey');
                backImg.classList.remove('bg-pinky');
                setTimeout(() => backImg.classList.add('bg-orangey'),
            100 );
                break;
            default:
                break;
        }
    })
    })



    




