'use strict';
/**
 * AccountService is used to manage the account
 */
class IssueService {

    public issueModel: Issue;
    public issueCommentModel: Array<Comment> = new Array<Comment>();
    public issueUser: Array<User> = new Array<User>();


    //static $inject = [];
    //
    //constructor() {
    //}

    /**
     * Getters and Setters
     */

    public getIssue(): Issue {
        return this.issueModel;
    }

    public setIssue(issueModel: any): void {
        this.issueModel = new Issue();
        this.issueModel.initIssueFromWSResponse(issueModel);
        var user: User = new User();
        user.initUserFromWSResponse(issueModel.user);
        this.issueUser.push(user);
    }

    public getIssueComment(): Array<Comment> {
        return this.issueCommentModel;
    }

    public setIssueComment(issueCommentModel: any): void {
        var comments: Array<Comment> = Array<Comment>();
        _.each(issueCommentModel, function(oneComment){
            var comment: Comment = new Comment();
            comment.initCommentFromWSResponse(oneComment);
            comments.push(comment);
        });
        this.issueCommentModel = comments;
        this.setIssueUser();
    }

    public setIssueUser(): void{
        _.each(this.issueCommentModel, function(comment: Comment){
            if(_.isUndefined(_.find(this.issueUser, {id: comment.user.id}))){
                this.issueUser.push(comment.user);
            }
        }.bind(this));
    }

    public getIssueUser(): Array<User> {
        return this.issueUser;
    }
}

jsTechnicalTestApp.service('IssueService', IssueService);
