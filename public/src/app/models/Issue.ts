'use strict';
/**
 * Issue class is used for the whole Issue information
 */
class Issue {
    public url: string;
    public repositoryUrl: string;
    public labelsUrl: string;
    public commentsUrl: string;
    public eventsUrl: string;
    public htmlUrl: string;
    public id: number;
    public number: number;
    public title: string;
    public user: User;
    public labels: Array<Label>;
    public state: string;
    public locked: boolean;
    public assignee: any;
    public assignees: any;
    public milestone: any;
    public comments: number;
    public createdAt: string;
    public updatedAt: string;
    public closedAt: any;
    public body: string;
    public closedBy: any;

    /**
     * Initialize the Issue information with the data of the WS response
     * @param {} The WS response
     */
    public initIssueFromWSResponse(issue: IResponseIssue) {
        var labels: Array<Label> = new Array<Label>();
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

        _.each(issue.labels, function(oneLabel: IResponseLabel){
            var label: Label = new Label();
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

    }
}
