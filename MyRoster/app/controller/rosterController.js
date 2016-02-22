app.controller("rosterController", function ($scope, DataService) {
    $scope.players = [];
    $scope.addPlayer = function () {
        var player = {
            name: $scope.newplayer.name,
            number: $scope.newplayer.number,
            position: $scope.newplayer.position

        }
        $scope.players.push(player)
        console.log($scope.players);
    };
    $scope.removePlayer = function () {

    };

});