function CardController(listFactory) {
  var ctrl = this;
  
  ctrl.data = {
    editingCard: null,
    isEditing: false,
    editingValue: ctrl.card.description,
    selectedOption: ctrl.mapListNames[ctrl.listIndex]
  };

  ctrl.onKeyUp = onKeyUp;
  ctrl.updateCard = updateCard;
  ctrl.deleteCard = deleteCard;
  ctrl.cancelEdit = cancelEdit;

  ctrl.editCard = function () {
    ctrl.data.isEditing = true;
    ctrl.data.editingCard = angular.copy(ctrl.card);
  };

  function onKeyUp(e) {
    if (e.keyCode == 27) { // 27 - ESCAPE: cancel editing
      cancelEdit();
    }
  }
  
  function cancelEdit() {
    ctrl.data.editingValue = ctrl.card.description;
    ctrl.data.isEditing = false;
  }

  function updateCard() {
    var destIndex = ctrl.data.selectedOption.id;
    ctrl.card.description = ctrl.data.editingValue;
    
    if (destIndex != ctrl.listIndex) {
      listFactory.transferCard(ctrl.listIndex, destIndex, ctrl.cardIndex);
    }
    ctrl.data.isEditing = false;
  }

  function deleteCard() {
    listFactory.deleteCard(ctrl.listIndex, ctrl.cardIndex);
  }

}
CardController.$inject = ['listFactory'];
app.component('trelloCard', {
  templateUrl: 'js/components/card/card.html',
  controller: CardController,
  bindings: {
    card: '=',
    listIndex: '<',
    cardIndex: '<',
    mapListNames: '<'
  }
});