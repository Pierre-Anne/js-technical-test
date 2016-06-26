'use strict';
/**
 * IssueController is used as controller of the issueView
 */
class IssueController {

    public issue: Issue;
    public comments: Array<Comment>;
    public users: Array<User>;

    static $inject = ['IssueService', 'HeaderService', 'HiddenService'];

    constructor(private issueService: IssueService, private headerService: HeaderService, private hiddenService: HiddenService) {
        this.issue = issueService.getIssue();
        this.comments = issueService.getIssueComment();
        this.users = issueService.getIssueUser();
        headerService.setHeaderTitle(this.issue.title);
    }

    //public addHiddenUser(id: number): void {
    //    if(!this.hiddenService.isHiddenUser(id)){
    //        this.hiddenService.addHiddenService(id);
    //    } else {
    //        this.hiddenService.removeHiddenUser(id);
    //    }
    //}

}

jsTechnicalTestApp.controller('IssueController', IssueController);
