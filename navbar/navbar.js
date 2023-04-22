//Initialize navbar en fonction de window
function show_hide_nav()
{
    //Hide - Show
    let nav_add = document.querySelector('#nav_add');
    let nav_button = document.querySelector('#nav_button');

    // Hide add on mobile
    if (window.matchMedia("(max-width: 992px)").matches)
    {
        nav_add.style.display = 'none';
        nav_button.style.display = 'block';
    }
    // Hide button on pc
    else
    {
        nav_button.before(nav_add);
        nav_add.style.display = 'flex';
        nav_button.style.display = 'none';
    }
}

let nav_bar_counter = 0;
document.addEventListener('DOMContentLoaded', function() {
    //nav_Button in mobile
    let nav_button = document.querySelector('#nav_button');
    nav_button.addEventListener('click', function() {
        let nav = document.querySelector('nav');
        let nav_add = document.querySelector('#nav_add');
        //Show
        if (nav_bar_counter % 2 == 0)
        {
            //Suite de navbar
            nav.after(nav_add);
            nav_add.style.display = 'flex';
            nav_bar_counter++;
        }
        // Hide
        else
        {
            nav_add.style.display = 'none';
            nav_bar_counter++;
        }
    });

    //Initialize navbar
    show_hide_nav();

    //Resize
    window.addEventListener('resize', show_hide_nav);

});