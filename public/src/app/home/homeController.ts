'use strict';
/**
 * HomeController is used as controller of the homeView
 */
class HomeController {

    public issue: string = '6867';
    public owner: string = 'nodejs';
    public repo: string = 'node';

    static $inject = ['$state', 'HttpUtilService', 'IssueService'];

    constructor(private $state: ng.ui.IStateService, private httpUtilService: HttpUtilService, private issueService: IssueService) {

    }

    public getIssue(): void {
        //this.httpUtilService.requestIssue(this.issue, this.owner, this.repo).then(function(comments: any){
        //    this.issueService.setIssue(comments.data);
            this.issueService.setIssue(this.test2);

            //this.httpUtilService.requestComment(this.issue, this.owner, this.repo).then(function(issue: any){
            //    this.issueService.setIssueComment(issue.data);
                this.issueService.setIssueComment(this.test1);
                this.$state.go('root.issue');
            //}.bind(this));

        //}.bind(this));
    }

    public test1 = [
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
]
    public test2 = {
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
    }

}

jsTechnicalTestApp.controller('HomeController', HomeController);
