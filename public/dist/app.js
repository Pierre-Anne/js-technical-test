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
'use strict';
/**
 * IssueController is used as controller of the issueView
 */
var HeaderController = (function () {
    function HeaderController(headerService, $state) {
        this.headerService = headerService;
        this.$state = $state;
        headerService.setHeaderTitle('choose your issue');
        this.$state.go('root.home');
    }
    HeaderController.$inject = ['HeaderService', '$state'];
    return HeaderController;
}());
jsTechnicalTestApp.controller('HeaderController', HeaderController);
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
        this.test1 = [
            {
                "url": "https://api.github.com/repos/nodejs/node/issues/comments/220158121",
                "html_url": "https://github.com/nodejs/node/issues/6867#issuecomment-220158121",
                "issue_url": "https://api.github.com/repos/nodejs/node/issues/6867",
                "id": 220158121,
                "user": {
                    "login": "kzc",
                    "id": 11593452,
                    "avatar_url": "https://avatars.githubusercontent.com/u/11593452?v=3",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/kzc",
                    "html_url": "https://github.com/kzc",
                    "followers_url": "https://api.github.com/users/kzc/followers",
                    "following_url": "https://api.github.com/users/kzc/following{/other_user}",
                    "gists_url": "https://api.github.com/users/kzc/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/kzc/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/kzc/subscriptions",
                    "organizations_url": "https://api.github.com/users/kzc/orgs",
                    "repos_url": "https://api.github.com/users/kzc/repos",
                    "events_url": "https://api.github.com/users/kzc/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/kzc/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "created_at": "2016-05-18T21:06:17Z",
                "updated_at": "2016-05-18T21:06:17Z",
                "body": "So you're experiencing a dropped data to console with normal exiting JS? i.e., without calling `process.exit()`? If so, that's a different issue to #6456.\r\n\r\nOn which platform are you experiencing this issue?"
            },
            {
                "url": "https://api.github.com/repos/nodejs/node/issues/comments/220159462",
                "html_url": "https://github.com/nodejs/node/issues/6867#issuecomment-220159462",
                "issue_url": "https://api.github.com/repos/nodejs/node/issues/6867",
                "id": 220159462,
                "user": {
                    "login": "indutny",
                    "id": 238531,
                    "avatar_url": "https://avatars.githubusercontent.com/u/238531?v=3",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/indutny",
                    "html_url": "https://github.com/indutny",
                    "followers_url": "https://api.github.com/users/indutny/followers",
                    "following_url": "https://api.github.com/users/indutny/following{/other_user}",
                    "gists_url": "https://api.github.com/users/indutny/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/indutny/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/indutny/subscriptions",
                    "organizations_url": "https://api.github.com/users/indutny/orgs",
                    "repos_url": "https://api.github.com/users/indutny/repos",
                    "events_url": "https://api.github.com/users/indutny/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/indutny/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "created_at": "2016-05-18T21:11:19Z",
                "updated_at": "2016-05-18T21:11:19Z",
                "body": "That happens because of `libc` buffer size limit. In fact `vfprintf` returns `-1`."
            },
            {
                "url": "https://api.github.com/repos/nodejs/node/issues/comments/220169696",
                "html_url": "https://github.com/nodejs/node/issues/6867#issuecomment-220169696",
                "issue_url": "https://api.github.com/repos/nodejs/node/issues/6867",
                "id": 220169696,
                "user": {
                    "login": "kzc",
                    "id": 11593452,
                    "avatar_url": "https://avatars.githubusercontent.com/u/11593452?v=3",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/kzc",
                    "html_url": "https://github.com/kzc",
                    "followers_url": "https://api.github.com/users/kzc/followers",
                    "following_url": "https://api.github.com/users/kzc/following{/other_user}",
                    "gists_url": "https://api.github.com/users/kzc/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/kzc/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/kzc/subscriptions",
                    "organizations_url": "https://api.github.com/users/kzc/orgs",
                    "repos_url": "https://api.github.com/users/kzc/repos",
                    "events_url": "https://api.github.com/users/kzc/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/kzc/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "created_at": "2016-05-18T21:53:36Z",
                "updated_at": "2016-05-18T21:53:36Z",
                "body": "src/node.cc:\r\n```\r\n    vfprintf(stderr, format, ap);\r\n```\r\nThat's technically not correct without flushing libuv and node write queues to `process.stderr` first - and having stderr fd block."
            },
            {
                "url": "https://api.github.com/repos/nodejs/node/issues/comments/220170972",
                "html_url": "https://github.com/nodejs/node/issues/6867#issuecomment-220170972",
                "issue_url": "https://api.github.com/repos/nodejs/node/issues/6867",
                "id": 220170972,
                "user": {
                    "login": "indutny",
                    "id": 238531,
                    "avatar_url": "https://avatars.githubusercontent.com/u/238531?v=3",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/indutny",
                    "html_url": "https://github.com/indutny",
                    "followers_url": "https://api.github.com/users/indutny/followers",
                    "following_url": "https://api.github.com/users/indutny/following{/other_user}",
                    "gists_url": "https://api.github.com/users/indutny/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/indutny/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/indutny/subscriptions",
                    "organizations_url": "https://api.github.com/users/indutny/orgs",
                    "repos_url": "https://api.github.com/users/indutny/repos",
                    "events_url": "https://api.github.com/users/indutny/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/indutny/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "created_at": "2016-05-18T21:59:13Z",
                "updated_at": "2016-05-18T21:59:13Z",
                "body": "@kzc this is a separate issue, IMO"
            },
            {
                "url": "https://api.github.com/repos/nodejs/node/issues/comments/220174747",
                "html_url": "https://github.com/nodejs/node/issues/6867#issuecomment-220174747",
                "issue_url": "https://api.github.com/repos/nodejs/node/issues/6867",
                "id": 220174747,
                "user": {
                    "login": "kzc",
                    "id": 11593452,
                    "avatar_url": "https://avatars.githubusercontent.com/u/11593452?v=3",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/kzc",
                    "html_url": "https://github.com/kzc",
                    "followers_url": "https://api.github.com/users/kzc/followers",
                    "following_url": "https://api.github.com/users/kzc/following{/other_user}",
                    "gists_url": "https://api.github.com/users/kzc/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/kzc/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/kzc/subscriptions",
                    "organizations_url": "https://api.github.com/users/kzc/orgs",
                    "repos_url": "https://api.github.com/users/kzc/repos",
                    "events_url": "https://api.github.com/users/kzc/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/kzc/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "created_at": "2016-05-18T22:16:17Z",
                "updated_at": "2016-05-24T15:15:26Z",
                "body": "It's a different take on the same issue actually.\r\n```\r\n$ node -v\r\nv6.0.0\r\n\r\n$ node -e 'for(var i=0;i<9999;++i){process.stderr.write(i + \": The quick brown fox jumps.\\n\")}throw new Error(\"Fin.\");'\r\n0: The quick brown fox jumps.\r\n1: The quick brown fox jumps.\r\n2: The quick brown fox jumps.\r\n3: The quick brown fox jumps.\r\n...\r\n1595: The quick brown fox jumps.\r\n1596: The quick brown fox jumps.\r\n1597: The quick brown fox jumps.\r\n1598[eval]:1\r\nfor(var i=0;i<9999;++i){process.stderr.write(i + \": The quick brown fox jumps.\\n\")}throw new Error(\"Fin.\");\r\n                                                                                   ^\r\nError: Fin.\r\n    at [eval]:1:90\r\n    at Object.exports.runInThisContext (vm.js:54:17)\r\n    at Object.<anonymous> ([eval]-wrapper:6:22)\r\n    at Module._compile (module.js:541:32)\r\n    at node.js:328:29\r\n    at _combinedTickCallback (internal/process/next_tick.js:67:7)\r\n    at process._tickCallback (internal/process/next_tick.js:98:9)\r\n```\r\n`vfprintf(stderr)` and libuv/node writes shouldn't be mixed.\r\n\r\nEdit: the test run above was with node 6.0.0 on Mac. **Issue was reproduced with node 5.10.1 on Linux** - it outputs between 2400 and 2900 rows before showing the exception on my machine."
            },
            {
                "url": "https://api.github.com/repos/nodejs/node/issues/comments/220177074",
                "html_url": "https://github.com/nodejs/node/issues/6867#issuecomment-220177074",
                "issue_url": "https://api.github.com/repos/nodejs/node/issues/6867",
                "id": 220177074,
                "user": {
                    "login": "kzc",
                    "id": 11593452,
                    "avatar_url": "https://avatars.githubusercontent.com/u/11593452?v=3",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/kzc",
                    "html_url": "https://github.com/kzc",
                    "followers_url": "https://api.github.com/users/kzc/followers",
                    "following_url": "https://api.github.com/users/kzc/following{/other_user}",
                    "gists_url": "https://api.github.com/users/kzc/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/kzc/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/kzc/subscriptions",
                    "organizations_url": "https://api.github.com/users/kzc/orgs",
                    "repos_url": "https://api.github.com/users/kzc/repos",
                    "events_url": "https://api.github.com/users/kzc/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/kzc/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "created_at": "2016-05-18T22:27:53Z",
                "updated_at": "2016-05-19T01:44:45Z",
                "body": "Using a locally [patched](https://github.com/kzc/node/commit/29997921800e00a22d9f92d24704a0021be03bbf) version of node with a flushSync method on stream it produces the expected result - outputting all rows prior to the exception.\r\n```\r\nfor (var i = 0; i <= 9999; ++i) {\r\n    process.stdout.write(i + \": stdout - The quick brown fox jumps.\\n\");\r\n    process.stderr.write(i + \": stderr - The quick brown fox jumps.\\n\");\r\n}\r\nprocess.stdout.flushSync && process.stdout.flushSync();\r\nprocess.stderr.flushSync && process.stderr.flushSync();\r\nthrow new Error(\"Fin.\");\r\n```\r\nEdit: code sample was edited to work with the [patched](https://github.com/kzc/node/commit/29997921800e00a22d9f92d24704a0021be03bbf) version of node as well as unmodified node releases. Note: this is a different patch than seen in PR https://github.com/nodejs/node/pull/6773 which does not have flushSync method on stream (Writable actually). This patch is for demonstrative purposes only."
            },
            {
                "url": "https://api.github.com/repos/nodejs/node/issues/comments/220299297",
                "html_url": "https://github.com/nodejs/node/issues/6867#issuecomment-220299297",
                "issue_url": "https://api.github.com/repos/nodejs/node/issues/6867",
                "id": 220299297,
                "user": {
                    "login": "kzc",
                    "id": 11593452,
                    "avatar_url": "https://avatars.githubusercontent.com/u/11593452?v=3",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/kzc",
                    "html_url": "https://github.com/kzc",
                    "followers_url": "https://api.github.com/users/kzc/followers",
                    "following_url": "https://api.github.com/users/kzc/following{/other_user}",
                    "gists_url": "https://api.github.com/users/kzc/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/kzc/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/kzc/subscriptions",
                    "organizations_url": "https://api.github.com/users/kzc/orgs",
                    "repos_url": "https://api.github.com/users/kzc/repos",
                    "events_url": "https://api.github.com/users/kzc/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/kzc/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "created_at": "2016-05-19T11:36:16Z",
                "updated_at": "2016-05-19T11:36:16Z",
                "body": "As [noted above](https://github.com/nodejs/node/issues/6867#issuecomment-220174747) this issue is present in node 5.x on Linux (and presumably on node 4.x) so it's not a recent regression.\r\n\r\nNot sure what's the best way to fix this mixing of different stdio mechanisms. PR #6773 will not fix it alone. It's only similar to that issue in that the event loop has ceased and stdio is unflushed.\r\n\r\nIn light of this exception/stdio issue, the documentation to `process.exit` is not correct:\r\n\r\n> If it is necessary to terminate the Node.js process due to an error condition, throwing an *uncaught* error and allowing the process to terminate accordingly is safer than calling `process.exit()`.\r\n> https://github.com/nodejs/node/blob/master/doc/api/process.md#processexitcode\r\n\r\nInstead of calling `vfprintf(stderr,...)` could v8 be re-entered at this point so that `process.stderr.write()` be called with the exception error string and `process.exit()` called to initiate the stdio flush as in #6773?\r\n\r\n/cc @jasnell "
            },
            {
                "url": "https://api.github.com/repos/nodejs/node/issues/comments/220310414",
                "html_url": "https://github.com/nodejs/node/issues/6867#issuecomment-220310414",
                "issue_url": "https://api.github.com/repos/nodejs/node/issues/6867",
                "id": 220310414,
                "user": {
                    "login": "kzc",
                    "id": 11593452,
                    "avatar_url": "https://avatars.githubusercontent.com/u/11593452?v=3",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/kzc",
                    "html_url": "https://github.com/kzc",
                    "followers_url": "https://api.github.com/users/kzc/followers",
                    "following_url": "https://api.github.com/users/kzc/following{/other_user}",
                    "gists_url": "https://api.github.com/users/kzc/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/kzc/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/kzc/subscriptions",
                    "organizations_url": "https://api.github.com/users/kzc/orgs",
                    "repos_url": "https://api.github.com/users/kzc/repos",
                    "events_url": "https://api.github.com/users/kzc/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/kzc/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "created_at": "2016-05-19T12:32:15Z",
                "updated_at": "2016-05-19T12:32:15Z",
                "body": "Another way: invoke `uv_flush_sync()` on stdout and stderr uv streams, re-enter v8 just to obtain the outstanding buffered write data for stdout and stderr node streams, return to C++ and flush this data, and then call `vfprintf(stderr,...)`."
            },
            {
                "url": "https://api.github.com/repos/nodejs/node/issues/comments/223731848",
                "html_url": "https://github.com/nodejs/node/issues/6867#issuecomment-223731848",
                "issue_url": "https://api.github.com/repos/nodejs/node/issues/6867",
                "id": 223731848,
                "user": {
                    "login": "kzc",
                    "id": 11593452,
                    "avatar_url": "https://avatars.githubusercontent.com/u/11593452?v=3",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/kzc",
                    "html_url": "https://github.com/kzc",
                    "followers_url": "https://api.github.com/users/kzc/followers",
                    "following_url": "https://api.github.com/users/kzc/following{/other_user}",
                    "gists_url": "https://api.github.com/users/kzc/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/kzc/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/kzc/subscriptions",
                    "organizations_url": "https://api.github.com/users/kzc/orgs",
                    "repos_url": "https://api.github.com/users/kzc/repos",
                    "events_url": "https://api.github.com/users/kzc/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/kzc/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "created_at": "2016-06-04T02:45:48Z",
                "updated_at": "2016-06-04T02:45:48Z",
                "body": "Reproduced bug with node 4.x on Linux:\r\n```\r\n$ node -v\r\nv4.4.5\r\n\r\n$ node -p process.platform\r\nlinux\r\n\r\n$ node -e 'for(var i=0;i<9999;++i){process.stderr.write(i+\": The quick brown fox jumps.\\n\")}throw new Error(\"Fin.\");'\r\n0: The quick brown fox jumps.\r\n1: The quick brown fox jumps.\r\n2: The quick brown fox jumps.\r\n...\r\n2399: The quick brown fox jumps.\r\n2400: The quick brown fox jumps.\r\n2401: The quick brown fox jumps.$ \r\n```\r\nNumber of lines outputted is variable on repeated runs - 2281 to 2407. Sometimes the uncaught exception is printed, and sometimes it is not (as seen above)."
            },
            {
                "url": "https://api.github.com/repos/nodejs/node/issues/comments/227634557",
                "html_url": "https://github.com/nodejs/node/issues/6867#issuecomment-227634557",
                "issue_url": "https://api.github.com/repos/nodejs/node/issues/6867",
                "id": 227634557,
                "user": {
                    "login": "kzc",
                    "id": 11593452,
                    "avatar_url": "https://avatars.githubusercontent.com/u/11593452?v=3",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/kzc",
                    "html_url": "https://github.com/kzc",
                    "followers_url": "https://api.github.com/users/kzc/followers",
                    "following_url": "https://api.github.com/users/kzc/following{/other_user}",
                    "gists_url": "https://api.github.com/users/kzc/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/kzc/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/kzc/subscriptions",
                    "organizations_url": "https://api.github.com/users/kzc/orgs",
                    "repos_url": "https://api.github.com/users/kzc/repos",
                    "events_url": "https://api.github.com/users/kzc/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/kzc/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "created_at": "2016-06-22T03:37:22Z",
                "updated_at": "2016-06-22T03:37:22Z",
                "body": "Could someone please add a `confirmed-bug` tag to this issue to raise the profile of this bug?"
            }
        ];
        this.test2 = {
            "url": "https://api.github.com/repos/nodejs/node/issues/6867",
            "repository_url": "https://api.github.com/repos/nodejs/node",
            "labels_url": "https://api.github.com/repos/nodejs/node/issues/6867/labels{/name}",
            "comments_url": "https://api.github.com/repos/nodejs/node/issues/6867/comments",
            "events_url": "https://api.github.com/repos/nodejs/node/issues/6867/events",
            "html_url": "https://github.com/nodejs/node/issues/6867",
            "id": 155600407,
            "number": 6867,
            "title": "Missing or truncated error message",
            "user": {
                "login": "ChALkeR",
                "id": 291301,
                "avatar_url": "https://avatars.githubusercontent.com/u/291301?v=3",
                "gravatar_id": "",
                "url": "https://api.github.com/users/ChALkeR",
                "html_url": "https://github.com/ChALkeR",
                "followers_url": "https://api.github.com/users/ChALkeR/followers",
                "following_url": "https://api.github.com/users/ChALkeR/following{/other_user}",
                "gists_url": "https://api.github.com/users/ChALkeR/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/ChALkeR/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/ChALkeR/subscriptions",
                "organizations_url": "https://api.github.com/users/ChALkeR/orgs",
                "repos_url": "https://api.github.com/users/ChALkeR/repos",
                "events_url": "https://api.github.com/users/ChALkeR/events{/privacy}",
                "received_events_url": "https://api.github.com/users/ChALkeR/received_events",
                "type": "User",
                "site_admin": false
            },
            "labels": [
                {
                    "url": "https://api.github.com/repos/nodejs/node/labels/process",
                    "name": "process",
                    "color": "00aaff"
                }
            ],
            "state": "open",
            "locked": false,
            "assignee": null,
            "assignees": [],
            "milestone": null,
            "comments": 10,
            "created_at": "2016-05-18T21:00:16Z",
            "updated_at": "2016-06-22T03:37:22Z",
            "closed_at": null,
            "body": "This looks close to #6456, and I thought it was just another case of that issue, but @indutny mentioned that the errors are printed from c++, so #6456 alone shouldn't have caused this, this is why I'm opening a separate issue.\r\n\r\nA harder to reproduce example where the error is missing (it reproduces with about 10% chance for me):\r\n```js\r\nfor (var i = 0; i < 10000; i++) {\r\n  console.log('HelloHelloHelloHelloHelloHelelloHelloHelloHelloHelloHelloHello ' + i);\r\n}\r\na();\r\n```\r\n\r\nA simplier to reproduce example (the error gets truncated here most of the times, and sometimes is missing as in the previous example):\r\n```js\r\nfor (var i = 0; i < 10000; i++) {\r\n  console.log('HelloHelloHelloHelloHelloHelelloHelloHelloHelloHelloHelloHello ' + i);\r\n}\r\nthrow new Error(Array(100000 + 1).join('x') + '!');\r\n```",
            "closed_by": null
        };
    }
    HomeController.prototype.getIssue = function () {
        //this.httpUtilService.requestIssue(this.issue, this.owner, this.repo).then(function(comments: any){
        //    this.issueService.setIssue(comments.data);
        this.issueService.setIssue(this.test2);
        //this.httpUtilService.requestComment(this.issue, this.owner, this.repo).then(function(issue: any){
        //    this.issueService.setIssueComment(issue.data);
        this.issueService.setIssueComment(this.test1);
        this.$state.go('root.issue');
        //}.bind(this));
        //}.bind(this));
    };
    HomeController.$inject = ['$state', 'HttpUtilService', 'IssueService'];
    return HomeController;
}());
jsTechnicalTestApp.controller('HomeController', HomeController);
'use strict';
/**
 * IssueController is used as controller of the issueView
 */
var IssueController = (function () {
    function IssueController(issueService, headerService, hiddenService) {
        this.issueService = issueService;
        this.headerService = headerService;
        this.hiddenService = hiddenService;
        this.issue = issueService.getIssue();
        this.comments = issueService.getIssueComment();
        this.users = issueService.getIssueUser();
        headerService.setHeaderTitle(this.issue.title);
    }
    IssueController.prototype.addHiddenUser = function (id) {
        if (!this.hiddenService.isHiddenUser(id)) {
            this.hiddenService.addHiddenService(id);
        }
        else {
            this.hiddenService.removeHiddenUser(id);
        }
    };
    IssueController.$inject = ['IssueService', 'HeaderService', 'HiddenService'];
    return IssueController;
}());
jsTechnicalTestApp.controller('IssueController', IssueController);
'use strict';
/**
 * Comment class is used for the whole Comment information
 */
var Comment = (function () {
    function Comment() {
    }
    /**
     * Initialize the Comment information with the data of the WS response
     * @param {} The WS response
     */
    Comment.prototype.initCommentFromWSResponse = function (comment) {
        this.url = comment.url;
        this.htmlUrl = comment.html_url;
        this.issueUrl = comment.issue_url;
        this.id = comment.id;
        this.user = new User();
        this.user.initUserFromWSResponse(comment.user);
        this.createdAt = comment.created_at;
        this.updatedAt = comment.updated_at;
        this.body = comment.body;
    };
    return Comment;
}());
'use strict';
/**
 * Issue class is used for the whole Issue information
 */
var Issue = (function () {
    function Issue() {
    }
    /**
     * Initialize the Issue information with the data of the WS response
     * @param {} The WS response
     */
    Issue.prototype.initIssueFromWSResponse = function (issue) {
        var labels = new Array();
        this.url = issue.url;
        this.repositoryUrl = issue.repository_url;
        this.labelsUrl = issue.labels_url;
        this.commentsUrl = issue.comments_url;
        this.eventsUrl = issue.events_url;
        this.htmlUrl = issue.html_url;
        this.id = issue.id;
        this.number = issue.number;
        this.title = issue.title;
        this.user = new User();
        this.user.initUserFromWSResponse(issue.user);
        _.each(issue.labels, function (oneLabel) {
            var label = new Label();
            label.initLabelFromWSResponse(oneLabel);
            labels.push(label);
        });
        this.labels = labels;
        this.state = issue.state;
        this.locked = issue.locked;
        this.assignee = issue.assignee;
        this.assignees = issue.assignees;
        this.milestone = issue.milestone;
        this.comments = issue.comments;
        this.createdAt = issue.created_at;
        this.updatedAt = issue.updated_at;
        this.closedAt = issue.closed_at;
        this.body = issue.body;
        this.closedBy = issue.closed_by;
    };
    return Issue;
}());
'use strict';
/**
 * Label class is used for the whole Issue information
 */
var Label = (function () {
    function Label() {
    }
    /**
     * Initialize the Label information with the data of the WS response
     * @param {} The WS response
     */
    Label.prototype.initLabelFromWSResponse = function (label) {
        this.url = label.url;
        this.name = label.name;
        this.color = label.color;
    };
    return Label;
}());
'use strict';
/**
 * User class is used for the whole User information
 */
var User = (function () {
    function User() {
    }
    /**
     * Initialize the User information with the data of the WS response
     * @param {} The WS response
     */
    User.prototype.initUserFromWSResponse = function (user) {
        this.login = user.login;
        this.id = user.id;
        this.avatarUrl = user.avatar_url;
        this.gravatarId = user.gravatar_id;
        this.url = user.url;
        this.htmlUrl = user.html_url;
        this.followersUrl = user.followers_url;
        this.followingUrl = user.following_url;
        this.gistsUrl = user.gists_url;
        this.starredUrl = user.starred_url;
        this.subscriptionsUrl = user.subscriptions_url;
        this.organizationsUrl = user.organizations_url;
        this.reposUrl = user.repos_url;
        this.eventsUrl = user.events_url;
        this.receivedEventsUrl = user.received_events_url;
        this.type = user.type;
        this.siteAdmin = user.site_admin;
    };
    return User;
}());
'use strict';
/**
 * TitleService is used to manage the header
 */
var HeaderService = (function () {
    function HeaderService() {
    }
    //static $inject = [];
    //
    //constructor() {
    //}
    /**
     * Getters and Setters
     */
    HeaderService.prototype.setHeaderTitle = function (headerTitle) {
        this.headerTitle = headerTitle;
    };
    HeaderService.prototype.getHeaderTitle = function () {
        return this.headerTitle;
    };
    return HeaderService;
}());
jsTechnicalTestApp.service('HeaderService', HeaderService);
'use strict';
/**
 * HiddenService is used to manage the HiddenService
 */
var HiddenService = (function () {
    function HiddenService() {
        this.hiddenUsers = [];
    }
    //static $inject = [];
    //
    //constructor() {
    //}
    /**
     * Getters and Setters
     */
    HiddenService.prototype.addHiddenService = function (hiddenUser) {
        this.hiddenUsers.push(hiddenUser);
    };
    HiddenService.prototype.getHiddenService = function () {
        return this.hiddenUsers;
    };
    HiddenService.prototype.isHiddenUser = function (id) {
        var index = _.indexOf(this.hiddenUsers, id);
        if (index === -1) {
            return false;
        }
        else {
            return true;
        }
    };
    HiddenService.prototype.removeHiddenUser = function (id) {
        var index = _.indexOf(this.hiddenUsers, id);
        this.hiddenUsers.splice(index, 1);
    };
    return HiddenService;
}());
jsTechnicalTestApp.service('HiddenService', HiddenService);
'use strict';
/**
 * AccountService is used to manage the account
 */
var IssueService = (function () {
    function IssueService() {
        this.issueCommentModel = new Array();
        this.issueUser = new Array();
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
        this.issueModel = new Issue();
        this.issueModel.initIssueFromWSResponse(issueModel);
        var user = new User();
        user.initUserFromWSResponse(issueModel.user);
        this.issueUser.push(user);
    };
    IssueService.prototype.getIssueComment = function () {
        return this.issueCommentModel;
    };
    IssueService.prototype.setIssueComment = function (issueCommentModel) {
        var comments = Array();
        _.each(issueCommentModel, function (oneComment) {
            var comment = new Comment();
            comment.initCommentFromWSResponse(oneComment);
            comments.push(comment);
        });
        this.issueCommentModel = comments;
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
'use strict';
'use strict';
'use strict';
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
'use strict';
/**
 * IssueController is used as controller of the issueView
 */
var CommentController = (function () {
    function CommentController(hiddenService) {
        this.hiddenService = hiddenService;
    }
    CommentController.prototype.isHidden = function (id) {
        return this.hiddenService.isHiddenUser(id);
    };
    CommentController.$inject = ['HiddenService'];
    return CommentController;
}());
jsTechnicalTestApp.controller('CommentController', CommentController);
'use strict';
/**
 * commentDirective is a directive used to display comment
 */
var CommentDirective = (function () {
    function CommentDirective() {
        this.restrict = 'A';
        this.templateUrl = 'src/app/util/comment/commentView.html';
        this.scope = {
            // The banner to display
            comment: '='
        };
        this.link = this._link.bind(this);
    }
    CommentDirective.prototype._link = function (scope, element, attrs, controller, transclude) {
        scope.comment = scope.comment;
    };
    CommentDirective.factory = function () {
        return new CommentDirective();
    };
    return CommentDirective;
}());
jsTechnicalTestApp.directive('ngComment', CommentDirective.factory);
angular.module("app.templates", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("app-templates/app/header/headerView.html", "<div class=\"header\">{{vm.headerService.getHeaderTitle()}}</div>");
        $templateCache.put("app-templates/app/home/homeView.html", "<!-- main-content -->\n\n<form class=\"\" id=\"get_issue\" ng-submit=\"vm.getIssue()\">\n    <div class=\"col-md-4 col-md-offset-4\">\n\n        <h6>Get Issue</h6>\n\n        <div class=\"row\">\n            <div class=\"col-sm-4 col-xs-4\">\n                <div class=\"\">\n                    <input ng-model=\"vm.issue\" class=\"\" id=\"issue\" name=\"issue\" required>\n                    <label for=\"issue\">Your issue</label>\n                </div>\n            </div>\n\n            <div class=\"col-sm-4 col-xs-4\">\n                <div class=\"\">\n                    <input ng-model=\"vm.owner\" class=\"\" id=\"owner\" name=\"owner\" required>\n                    <label for=\"owner\">Your issue</label>\n                </div>\n            </div>\n\n            <div class=\"col-sm-4 col-xs-4\">\n                <div class=\"\">\n                    <input ng-model=\"vm.repo\" class=\"\" id=\"repo\" name=\"repo\" required>\n                    <label for=\"repo\">Your issue</label>\n                </div>\n            </div>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-default btn-large\">Validate</button>\n\n    </div>\n</form>");
        $templateCache.put("app-templates/app/issue/IssueView.html", "<div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4 col-xs-4\">\r\n            <div ng-repeat=\"user in vm.users\" class=\"user\">\r\n                <span ng-click=\"vm.addHiddenUser(user.id)\">{{user.login}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-8 col-xs-8 issue\">\r\n            <h4>Convesation with {{vm.issue.user.login}}</h4>\r\n\r\n            <div ng-comment comment=\"vm.issue\"></div>\r\n\r\n            <div ng-repeat=\"comment in vm.comments\">\r\n                <div ng-comment comment=\"comment\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
        $templateCache.put("app-templates/app/util/comment/commentView.html", "<div ng-controller=\"CommentController as vm\">\r\n    <div class=\"row\">\r\n        <div ng-hide=\"vm.isHidden(comment.user.id)\">\r\n            <div class=\"col-sm-2 col-xs-2\">\r\n                <img src=\"comment.user.avatarUrl\" alt=\"avatar\">\r\n            </div>\r\n            <div class=\"col-sm-10 col-xs-10 comment\" ng-bind=\"comment.body\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
    }]);
