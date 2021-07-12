'use strict';
//Getting the modal class.
const modal = document.querySelector('.modal');
//Getting the overlay
const overlay = document.querySelector('.overlay');
//Getting the close button
const btnCloseModal = document.querySelector('.close-modal');
//Getting the opening buttons
const btns = document.querySelectorAll('.show-modal');
//This method hides the modal
const hideModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
//This method opens the modal
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
//Iterating throungh the buttons.
for(let x of btns){
    //Adding the event listener.
    x.addEventListener('click', openModal);
}
//Adding the functionallity to the close button
btnCloseModal.addEventListener('click', hideModal);
//Closing the modal window when we press outside the window
overlay.addEventListener('click', hideModal);
//Adding the button events
document.addEventListener('keydown', function(event) {
    //If we have pressed the ESC button.
    if (event.key === "Escape") {
        //In an element contains the class
        if (!modal.classList.contains('hidden')){
            hideModal();
        }
    }
});