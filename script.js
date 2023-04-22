let i = 0;
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', function() {
        let main = document.querySelector('main');
        let home = document.querySelector('#home');

        if (i % 2 == 0)
        {
            main.style.marginTop = '30vh';
            home.style.paddingTop = '2vh';
            
            i++;
        }
        else
        {
            main.style.marginTop = '0';
            home.style.paddingTop = '0';
            
            i++;
        }
    });

    // Inverser bouttons et image
    if ((window.matchMedia("(max-width: 992px)").matches) && (window.innerWidth != '992'))
    {
        let bouttons = document.querySelector('#bouttons');
        let image = document.querySelector('#photo');
        image.after(bouttons);
    }
    window.addEventListener('resize' ,function() {
        if ((window.matchMedia("(max-width: 992px)").matches) && (window.innerWidth != '992'))
        {
            let bouttons = document.querySelector('#bouttons');
            let image = document.querySelector('#photo');
            image.after(bouttons);
        }
        else
        {
            let bouttons = document.querySelector('#bouttons');
            let enjoy = document.querySelector('#enjoy');
            enjoy.after(bouttons);
        }
    });

    // Couleur de marge sur nav
    if (window.matchMedia("(min-width: 992px)").matches)
    {
        let nom = window.location.pathname;
        if (nom == '/')
        {
            home = document.querySelector('#home');
            home.style.borderTop = '2px #264653 solid';
            home.style.borderBottom = '2px #264653 solid';
            home.style.color = '#FFFFFF !important'

        }
        pages = document.querySelectorAll('li');
        pages.forEach(page => {
            if (nom.includes(page.firstChild.innerHTML))
            {
                alert('h');
            }
    
        });
    }
});