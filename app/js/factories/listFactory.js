app.factory('listFactory', function () {
  var service = {};

  var lists = [
    {
      listName: 'Todo',
      cards: [
        {
          description: 'Fix bug in player'
        }
      ]
    },
    {
      listName: 'Doing',
      cards: [
        {
          description: 'choosing a new TV'
        },
        {
          description: 'buy some delicatessen for cats'
        }
      ]
    },
    {
      listName: 'Done',
      cards: []
    }
  ];

  service.getLists = function () {
    return lists;
  };
  
  service.getListsNames = function () {
    var names = [];

    lists.forEach(function (list) {
      names.push(list.listName);
    });
    return names;
  };

  service.addList = function (listName) {
    lists.push({
      listName: listName,
      cards: []
    });
  };

  service.removeList = function (listIndex) {
    lists.splice(listIndex, 1);
  };

  service.addCard = function (listIndex, description) {
    lists[listIndex].cards.push({ description: description })
  };

  service.deleteCard = function (listIndex, cardIndex) {
    lists[listIndex].cards.splice(cardIndex, 1);
  };

  return service;
});
