var app = angular.module("freshmex",["ngRoute"]);

// The service grabs the data from the json file.
app.factory('recipeService', function($http) {
    return {
        getRecipes: function(rid, callback) {
            $http.get('/recipes/' + rid + '.json').success(callback);
        }
    }
});

app.controller("RecipeCtrl",function($scope, $routeParams, recipeService) {
    recipeService.getRecipes($routeParams.rid, function(data) {
        $scope.recipe = data;
        console.log(data);
    });
});


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/recipe/:rid",{
            templateUrl : "/templates/recipe.html" ,
            controller : "RecipeCtrl"
        });
    $locationProvider.html5Mode(true);
});