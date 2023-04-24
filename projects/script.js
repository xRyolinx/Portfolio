//----------functions-----------//

// Ajouter elements
function add_el(nb_total, add) {
    let main = document.querySelector('main');
    let element = document.querySelector('.element');
    for(let i = 0; i < add ; i++)
    {
        let new_element = element.cloneNode(true);
        new_element.id = 'n' + (i + nb_total + 1);
        main.append(new_element);
    }
}
//-----------------------------//


//Global starting elements
let nb_elements = 7;
let add_element = 4;

//Start
document.addEventListener('DOMContentLoaded', function() {
    //Starting element of global
    if ((window.matchMedia("(max-width: 1024px)").matches))
    {
        nb_elements = 2;
        add_element = 3;
    }

    //Clone object
    add_el(0, nb_elements);

    //Voir plus
    document.querySelector('#plus').addEventListener('click', function(event){
        add_el(nb_elements, add_element);
        nb_elements += add_element;
        event.preventDefault();
    });
});