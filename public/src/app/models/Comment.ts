'use strict';
/**
 * Comment class is used for the whole Comment information
 */
class Comment {

    public url: string;
    public htmlUrl: string;
    public issueUrl: string;
    public id: number;
    public user: User;
    public createdAt: string;
    public updatedAt: string;
    public body: string;

    /**
     * Initialize the Comment information with the data of the WS response
     * @param {} The WS response
     */
    public initCommentFromWSResponse(comment: IResponseComment) {
        this.url = comment.url;
        this.htmlUrl = comment.html_url;
        this.issueUrl = comment.issue_url;
        this.id = comment.id;
        this.user = new User();
        this.user.initUserFromWSResponse(comment.user);
        this.createdAt = comment.created_at;
        this.updatedAt= comment.updated_at;
        this.body= comment.body;
    }
}
