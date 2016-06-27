'use strict';
/**
 * commentController is used as controller of the commentView
 */
class CommentController {

    static $inject = ['HiddenService', 'IssueService'];

    constructor(private hiddenService: HiddenService, private issueService: IssueService) {

    }

    public isHidden(id: number): boolean {
      return this.hiddenService.isHiddenUser(id);
    }
}

jsTechnicalTestApp.controller('CommentController', CommentController);
