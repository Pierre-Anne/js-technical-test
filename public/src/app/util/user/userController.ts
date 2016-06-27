'use strict';
/**
 * userController is used as controller of the userView
 */
class UserController {

    static $inject = ['HiddenService'];

    constructor(private hiddenService: HiddenService) {

    }

    public isHidden(id: number): boolean {
        return this.hiddenService.isHiddenUser(id);
    }

    public addHiddenUser(id: number): void {
        if (!this.hiddenService.isHiddenUser(id)) {
            this.hiddenService.addHiddenService(id);
        } else {
            this.hiddenService.removeHiddenUser(id);
        }
    }
}

jsTechnicalTestApp.controller('UserController', UserController);
