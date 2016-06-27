'use strict';
interface IResponseIssue {
    url: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    id: number;
    number: number;
    title: string;
    user: IResponseUser;
    labels: Array<IResponseLabel>;
    state: string;
    locked: boolean;
    assignee: any;
    assignees: any;
    milestone: any;
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at: any;
    body: string;
    closed_by: any;
}
