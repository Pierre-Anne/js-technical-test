'use strict';
/**
 * HiddenService is used to manage the HiddenService
 */
class HiddenService {

    public hiddenUsers: Array<number> = [];

    //static $inject = [];
    //
    //constructor() {
    //}

    /**
     * Getters and Setters
     */
    public addHiddenService(hiddenUser: number): void {
        this.hiddenUsers.push(hiddenUser);
    }

    public getHiddenService(): Array<number> {
        return this.hiddenUsers;
    }

    public isHiddenUser(id: number): boolean {
        var index = _.indexOf(this.hiddenUsers,  id);
        var isHidden: boolean = true;
        if (index === -1) { isHidden = false; }
        return isHidden;
    }

    public removeHiddenUser(id: number): void {
        var index = _.indexOf(this.hiddenUsers,  id);
        this.hiddenUsers.splice(index, 1);
    }
}

jsTechnicalTestApp.service('HiddenService', HiddenService);
