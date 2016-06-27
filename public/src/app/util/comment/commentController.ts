'use strict';
/**
 * commentController is used as controller of the commentView
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
