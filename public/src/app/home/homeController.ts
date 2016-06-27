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
        this.httpUtilService.requestIssue(this.issue, this.owner, this.repo).then(function(comments: any){
            this.issueService.setIssue(comments.data);

            this.httpUtilService.requestComment(this.issue, this.owner, this.repo).then(function(issue: any){
                this.issueService.setIssueComment(issue.data);
                this.$state.go('root.issue');
            }.bind(this));

        }.bind(this));
    }
}

jsTechnicalTestApp.controller('HomeController', HomeController);
