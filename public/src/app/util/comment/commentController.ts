'use strict';
/**
 * IssueController is used as controller of the issueView
 */
class CommentController {

    static $inject = ['HiddenService'];

    constructor(private hiddenService: HiddenService) {

    }

    public isHidden(id: number): boolean {
      return this.hiddenService.isHiddenUser(id);
    }
}

jsTechnicalTestApp.controller('CommentController', CommentController);