function ListController(listFactory) {
  var ctrl = this;

  ctrl.removeList = removeList;

  ctrl.data = {
    listsNames: getListsNames()
  };

  function removeList() {
    listFactory.removeList(ctrl.listIndex);
  }

  function getListsNames() {
    return listFactory.getListsNames();
  }
}
ListController.$inject = ['listFactory', '$scope'];
app.component('trelloList', {
  templateUrl: 'js/components/list/list.html',
  controller: ListController,
  bindings: {
    list: '=',
    listIndex: '<'
  }
});