'use strict';

jsTechnicalTestApp.config(function($locationProvider: ng.ILocationProvider,
                                  $stateProvider: ng.ui.IStateProvider,
                                  $urlRouterProvider: ng.ui.IUrlRouterProvider,
                                  $urlMatcherFactoryProvider: ng.ui.IUrlMatcherFactory) {

    // Make a trailing slash optional for all routes
    $urlMatcherFactoryProvider.strictMode(false);

    $stateProvider
        .state('root', {
            url: '/',
            views: {
                'header': {
                    templateUrl: 'src/app/header/headerView.html',
                    controller: 'HeaderController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('root.home', {
            url: '',
            views: {
                'container@': {
                    templateUrl: 'src/app/home/homeView.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('root.issue', {
            url: 'issue',
            views: {
                'container@': {
                    templateUrl: 'src/app/issue/IssueView.html',
                    controller: 'IssueController',
                    controllerAs: 'vm'
                }
            }
        });

    $urlRouterProvider.otherwise('/');

    // html5 removes the need for # in URL
    $locationProvider.html5Mode({
        enabled: true
    });

});
