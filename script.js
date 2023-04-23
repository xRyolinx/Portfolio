let i = 0;
document.addEventListener('DOMContentLoaded', function() {
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
});