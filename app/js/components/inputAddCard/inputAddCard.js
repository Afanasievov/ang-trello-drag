function AddCardController(listFactory) {
  var ctrl = this;

  ctrl.data = {
    cardDescription: null
  };

  ctrl.createCard = createCard;
  
  function createCard() {
    listFactory.addCard(ctrl.listIndex, ctrl.data.cardDescription);
    ctrl.data.cardDescription = null;
  }
}
AddCardController.$inject = ['listFactory'];
app.component('inputAddCard', {
  templateUrl: 'js/components/inputAddCard/inputAddCard.html',
  controller: AddCardController,
  bindings: {
    listIndex: '<'
   }
});
