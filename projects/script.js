//-----------------------------//
function reset(nb) {
    let element = document.querySelector('.element');
    let main_style = document.querySelector('main').style;

    if ((window.matchMedia("(max-width: 600px)").matches))
    {
        main_style.gridTemplateColumns = '60vw';
        element.style.width = '60vw';
        element.style.height = '100vw';
    }
    else if ((window.matchMedia("(max-width: 830px)").matches))
    {
        main_style.gridTemplateColumns = '30vw 30vw';
        element.style.width = '30vw';
        element.style.height = '50vw';
    }
    else if ((window.matchMedia("(max-width: 1024px)").matches))
    {
        main_style.gridTemplateColumns = '25vw 25vw 25vw';
        element.style.width = '25vw';
        element.style.height = '40vw';

    }
    else
    {
        main_style.gridTemplateColumns = '20vw 20vw 20vw 20vw';
        element.style.width = '20vw';
        element.style.height = '32vw';

    }
    
    for(let i = 0; i < nb - 1 ; i++)
    {
        let del = document.getElementById('n' + i);
        if (del !== null)
        {
            del.remove();
        }

        let new_element = element.cloneNode(true);
        new_element.id = 'n' + i;
        element.after(new_element);
    }
}

// Ajouter elements
function add_el(nb) {
    let main = document.querySelector('main');
    let element = document.querySelector('.element');
    for(let i = 1; i < 5 ; i++)
    {
        let new_element = element.cloneNode(true);
        new_element.id = 'n' + (i + nb);
        main.append(new_element);
    }
    return 4;
}
//-----------------------------//
let nb_elements = 8;
document.addEventListener('DOMContentLoaded', function() {
    //Clone object
    reset(nb_elements);

    //Resize
    window.addEventListener('resize', function(){reset(nb_elements);});

    //Voir plus
    document.querySelector('#plus').addEventListener('click', function(event){
        nb_elements += add_el(nb_elements);
        event.preventDefault();
    });
});