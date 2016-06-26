'use strict';
interface IResponseComment {
    url: string;
    html_url: string;
    issue_url: string;
    id: number;
    user: IResponseUser;
    created_at: string;
    updated_at: string;
    body: string;

}