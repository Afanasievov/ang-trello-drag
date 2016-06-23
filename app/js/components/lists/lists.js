function ListsController(listFactory) {
  var ctrl = this;

  ctrl.data = {
    lists: listFactory.getLists(),
    mapListNames: []
  };
  
  ctrl.getMapListNames = getMapListNames;

  getMapListNames();

  function getMapListNames() {
    ctrl.data.mapListNames = listFactory.getMapListNames(); 
  }
}
ListsController.$inject = ['listFactory'];
app.component('trelloLists', {
  templateUrl: 'js/components/lists/lists.html',
  controller: ListsController
});