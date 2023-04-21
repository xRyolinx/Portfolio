let i = 0;
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', function() {
        let main = document.querySelector('main');
        let home = document.querySelector('#home');

        if (i % 2 == 0)
        {
            main.style.marginTop = '25vh';
            home.style.marginTop = '2vh';
            
            i++;
        }
        else
        {
            main.style.marginTop = '0';
            home.style.marginTop = '0';
            
            i++;
        }
    });
});