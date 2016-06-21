function AddListController(listFactory) {
  var ctrl = this;

  ctrl.addList = function () {
    listFactory.addList(ctrl.listName);
    ctrl.listName = '';
  };
}
AddListController.$inject = ['listFactory'];
app.component('inputAddList', {
  templateUrl: 'js/components/inputAddList/inputAddList.html',
  controller: AddListController
});