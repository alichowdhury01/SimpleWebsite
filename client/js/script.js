let basculerVisibilteModal = (idModal, etatFR) => {
  let idModalJQ = "#"+idModal;
  let etatEN = (etatFR == 'montrer')?'show':'hide';
  $(idModalJQ).modal(etatEN);  
}

// let montrerModalEnregistrer = () => {
//    $("#modalEnreg").modal('show');
// }

// let montrerModalConnexion = () => {
//    $("#modalConnexion").modal('show');
// }

// let cacherModalEnregistrer = () => {
//    $("#modalEnreg").modal('hide');
// }

// let cacherModalConnexion = () => {
//    $("#modalConnexion").modal('hide');
// }



window.addEventListener('scroll', () => {
    let menuArea = document.getElementById('menu-area');

    if (window.pageYOffset > 10) {
        menuArea.classList.add('menu_fixed', 'animated', 'fadeInDown');
    } else {
        menuArea.classList.remove('menu_fixed', 'animated', 'fadeInDown');
    }
});


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });