function ListController(listFactory) {
  var ctrl = this;

  ctrl.removeList = removeList;

  ctrl.data = {
    listsNames: {}
  };

  _getListsNames();

  function removeList() {
    listFactory.removeList(ctrl.listIndex);
    _getListsNames();
  }

  function _getListsNames() {
    ctrl.data.listsNames = listFactory.getListsNames();
  }
}
ListController.$inject = ['listFactory'];
app.component('trelloList', {
  templateUrl: 'js/components/list/list.html',
  controller: ListController,
  bindings: {
    list: '=',
    listIndex: '<'
  }
});