'use strict';
/**
 * User class is used for the whole User information
 */
class User {

    public login: string;
    public id: string;
    public avatarUrl: string;
    public gravatarId: string;
    public url: string;
    public htmlUrl: string;
    public followersUrl: string;
    public followingUrl: string;
    public gistsUrl: string;
    public starredUrl: string;
    public subscriptionsUrl: string;
    public organizationsUrl: string;
    public reposUrl: string;
    public eventsUrl: string;
    public receivedEventsUrl: string;
    public type: string;
    public siteAdmin: string;

    /**
     * Initialize the User information with the data of the WS response
     * @param {} The WS response
     */
    public initUserFromWSResponse(user: IResponseUser) {
        this.login = user.login;
        this.id = user.id;
        this.avatarUrl = user.avatar_url;
        this.gravatarId = user.gravatar_id;
        this.url = user.url;
        this.htmlUrl = user.html_url;
        this.followersUrl = user.followers_url;
        this.followingUrl = user.following_url;
        this.gistsUrl = user.gists_url;
        this.starredUrl = user.starred_url;
        this.subscriptionsUrl = user.subscriptions_url;
        this.organizationsUrl = user.organizations_url;
        this.reposUrl = user.repos_url
        this.eventsUrl = user.events_url;
        this.receivedEventsUrl = user.received_events_url;
        this.type = user.type;
        this.siteAdmin = user.site_admin;
    }
}
