function ListController(listFactory) {
  var ctrl = this;

  ctrl.removeList = removeList;
  
  function removeList() {
    listFactory.removeList(ctrl.listIndex);
    ctrl.getMapListNames();
  }
  
}
ListController.$inject = ['listFactory'];
app.component('trelloList', {
  templateUrl: 'js/components/list/list.html',
  controller: ListController,
  bindings: {
    list: '=',
    listIndex: '<',
    mapListNames: '<',
    getMapListNames: '&'
  }
});