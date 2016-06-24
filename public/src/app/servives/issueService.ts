'use strict';
/**
 * AccountService is used to manage the account
 */
class IssueService {

    public issueModel: any;
    public issueCommentModel: any;
    public issueUser: Array<any> = [];


    //static $inject = [];
    //
    //constructor() {
    //}

    /**
     * Getters and Setters
     */

    public getIssue(): any {
        return this.issueModel;
    }

    public setIssue(issueModel: any): void {
        this.issueModel = issueModel;
        this.issueUser.push(issueModel.user);
    }

    public getIssueComment(): any {
        return this.issueCommentModel;
    }

    public setIssueComment(issueCommentModel: any): void {
        this.issueCommentModel = issueCommentModel;
        this.setIssueUser();
    }

    public setIssueUser(): void{
        _.each(this.issueCommentModel, function(comment: any){
            if(_.isUndefined(_.find(this.issueUser, {id: comment.user.id}))){
                this.issueUser.push(comment.user);
            }
        }.bind(this));
    }

    public getIssueUser(): any {
        return this.issueUser;
    }
}

jsTechnicalTestApp.service('IssueService', IssueService);
