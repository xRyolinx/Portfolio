//----------functions-----------//

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
}
//-----------------------------//


//Global starting elements
let nb_elements = 8;

//Start
document.addEventListener('DOMContentLoaded', function() {
    //Starting element of global
    if ((window.matchMedia("(max-width: 1024px)").matches))
    {
        nb_elements = 4;
    }

    //Clone object
    add_el(nb_elements);

    //Voir plus
    document.querySelector('#plus').addEventListener('click', function(event){
        add_el(nb_elements);
        nb_elements += 4;
        event.preventDefault();
    });
});