'use strict';
var jsTechnicalTestApp = angular.module('jsTechnicalTestApp', [
    'ui.router'
]);
'use strict';
jsTechnicalTestApp.config(function ($locationProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
    // Make a trailing slash optional for all routes
    $urlMatcherFactoryProvider.strictMode(false);
    $stateProvider
        .state('root', {
        url: '/',
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
                templateUrl: 'src/app/issue/issueView.html',
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
'use strict';
/**
 * HomeController is used as controller of the homeView
 */
var HomeController = (function () {
    function HomeController($state, httpUtilService, issueService) {
        this.$state = $state;
        this.httpUtilService = httpUtilService;
        this.issueService = issueService;
        this.issue = '6867';
        this.owner = 'nodejs';
        this.repo = 'node';
    }
    HomeController.prototype.getIssue = function () {
        this.httpUtilService.requestIssue(this.issue, this.owner, this.repo).then(function (comments) {
            this.issueService.setIssue(comments.data);
            this.httpUtilService.requestComment(this.issue, this.owner, this.repo).then(function (issue) {
                this.issueService.setIssueComment(issue.data);
                this.$state.go('root.issue');
            }.bind(this));
        }.bind(this));
    };
    HomeController.$inject = ['$state', 'HttpUtilService', 'IssueService'];
    return HomeController;
}());
jsTechnicalTestApp.controller('HomeController', HomeController);
'use strict';
/**
 * HomeController is used as controller of the homeView
 */
var IssueController = (function () {
    function IssueController(issueService) {
        this.issueService = issueService;
        this.issue = issueService.getIssue();
        this.comments = issueService.getIssueComment();
        this.users = issueService.getIssueUser();
    }
    IssueController.$inject = ['IssueService'];
    return IssueController;
}());
jsTechnicalTestApp.controller('IssueController', IssueController);
'use strict';
/**
 * AccountService is used to manage the account
 */
var IssueService = (function () {
    function IssueService() {
        this.issueUser = [];
    }
    //static $inject = [];
    //
    //constructor() {
    //}
    /**
     * Getters and Setters
     */
    IssueService.prototype.getIssue = function () {
        return this.issueModel;
    };
    IssueService.prototype.setIssue = function (issueModel) {
        this.issueModel = issueModel;
        this.issueUser.push(issueModel.user);
    };
    IssueService.prototype.getIssueComment = function () {
        return this.issueCommentModel;
    };
    IssueService.prototype.setIssueComment = function (issueCommentModel) {
        this.issueCommentModel = issueCommentModel;
        this.setIssueUser();
    };
    IssueService.prototype.setIssueUser = function () {
        _.each(this.issueCommentModel, function (comment) {
            if (_.isUndefined(_.find(this.issueUser, { id: comment.user.id }))) {
                this.issueUser.push(comment.user);
            }
        }.bind(this));
    };
    IssueService.prototype.getIssueUser = function () {
        return this.issueUser;
    };
    return IssueService;
}());
jsTechnicalTestApp.service('IssueService', IssueService);
'use strict';
/**
 * This class is used to make the http request
 */
var HttpUtilService = (function () {
    function HttpUtilService($http) {
        this.$http = $http;
        this.apiUrl = 'http://api.github.com/repos';
        // Retrieve the content of the HomePage
    }
    HttpUtilService.prototype.requestComment = function (issue, owner, repo) {
        var issueUrl = this.apiUrl + '/' + owner + '/' + repo + '/issues/' + issue + '/comments';
        return this.$http.get(issueUrl);
    };
    HttpUtilService.prototype.requestIssue = function (issue, owner, repo) {
        var issueUrl = this.apiUrl + '/' + owner + '/' + repo + '/issues/' + issue;
        return this.$http.get(issueUrl);
    };
    //http://api.github.com/repos/nodejs/node/issues/6867
    HttpUtilService.$inject = ['$http'];
    return HttpUtilService;
}());
jsTechnicalTestApp.service('HttpUtilService', HttpUtilService);
angular.module("app.templates", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("app-templates/app/home/homeView.html", "<!-- main-content -->\n\n<form class=\"\" id=\"get_issue\" ng-submit=\"vm.getIssue()\">\n    <div class=\"col-md-4 col-md-offset-4\">\n\n        <h6>Get Issue</h6>\n\n        <div class=\"row\">\n            <div class=\"col-sm-4 col-xs-4\">\n                <div class=\"\">\n                    <input ng-model=\"vm.issue\" class=\"\" id=\"issue\" name=\"issue\" required>\n                    <label for=\"issue\">Your issue</label>\n                </div>\n            </div>\n\n            <div class=\"col-sm-4 col-xs-4\">\n                <div class=\"\">\n                    <input ng-model=\"vm.owner\" class=\"\" id=\"owner\" name=\"owner\" required>\n                    <label for=\"owner\">Your issue</label>\n                </div>\n            </div>\n\n            <div class=\"col-sm-4 col-xs-4\">\n                <div class=\"\">\n                    <input ng-model=\"vm.repo\" class=\"\" id=\"repo\" name=\"repo\" required>\n                    <label for=\"repo\">Your issue</label>\n                </div>\n            </div>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-default btn-large\">Validate</button>\n\n    </div>\n</form>");
        $templateCache.put("app-templates/app/issue/issueView.html", "<div>\r\n    <h1>Comments</h1>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4 col-xs-4\">\r\n            <div ng-repeat=\"user in vm.users\" class=\"comment\">\r\n                {{user.login}}\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-8 col-xs-8\">\r\n            <div class=\"comment\">\r\n                {{vm.issue.body}}\r\n            </div>\r\n            <div ng-repeat=\"comment in vm.comments\" class=\"comment\">\r\n                {{comment.body}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
    }]);
