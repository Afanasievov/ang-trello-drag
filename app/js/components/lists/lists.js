function ListsController(listFactory) {
  var ctrl = this;

  ctrl.lists = listFactory.getLists();

}
ListsController.$inject = ['listFactory'];
app.component('trelloLists', {
  templateUrl: 'js/components/lists/lists.html',
  controller: ListsController
});