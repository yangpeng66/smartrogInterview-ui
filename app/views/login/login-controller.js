/**
 * Created by yangpeng on 3/16/18.
 */
angular.module('smartorg.interviewChallenge.login', [
    'ngRoute'
]).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: '/interviewFront/app/views/login/login-template.html',
            controller: 'LoginCtrl'
        });
    }]).controller('LoginCtrl', [
    '$scope', '$location', 'callApiService', '$timeout', function ($scope, $location, callApiService, $timeout) {
        $scope.emailAddress = "";
        $scope.submitEmail = function (email) {
            console.log("submit" + email);
            callApiService.login(email, function (response) {
                console.log("success", response);
                var data = response.data;
                if (data.canProceed == true) {
                    $location.path('/main');
                }
                else {
                    alert(response.data.message);
                }
            }, function (response) {
                console.log("error", response);
                alert(response);
            });
        };
    }
]);
