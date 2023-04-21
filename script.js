let i = 0;
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', function() {
        let decal = document.querySelector('#decal');
        if (i % 2 == 0)
        {
            decal.style.height = '20vh';
            i++;
        }
        else
        {
            decal.style.height = '0';
            i++;
        }
    });
});