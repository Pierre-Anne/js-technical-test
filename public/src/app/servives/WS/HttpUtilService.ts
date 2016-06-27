'use strict';
/**
 * This class is used to make the http request
 */
class HttpUtilService {


    private apiUrl : string = 'http://api.github.com/repos';

    //http://api.github.com/repos/nodejs/node/issues/6867

    static $inject = ['$http'];

    constructor(private $http:ng.IHttpService) {
        // Retrieve the content of the HomePage
    }


    public requestComment(issue: string, owner: string, repo: string): any {
        var issueUrl = this.apiUrl + '/' + owner + '/' + repo + '/issues/' + issue + '/comments';
        return this.$http.get(issueUrl);
    }

    public requestIssue(issue: string, owner: string, repo: string): any {
        var issueUrl = this.apiUrl + '/' + owner + '/' + repo + '/issues/' + issue;
        return this.$http.get(issueUrl);
    }

}

jsTechnicalTestApp.service('HttpUtilService', HttpUtilService);
