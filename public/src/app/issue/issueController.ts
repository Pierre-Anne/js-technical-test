'use strict';
/**
 * HomeController is used as controller of the homeView
 */
class IssueController {

    public issue: any;
    public comments: any;
    public users: any;

    static $inject = ['IssueService'];

    constructor(private issueService: IssueService) {
        this.issue = issueService.getIssue();
        this.comments = issueService.getIssueComment();
        this.users = issueService.getIssueUser();
    }

}

jsTechnicalTestApp.controller('IssueController', IssueController);
