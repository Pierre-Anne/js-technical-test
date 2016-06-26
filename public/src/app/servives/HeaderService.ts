'use strict';
/**
 * TitleService is used to manage the header
 */
class HeaderService {

    public headerTitle: string;

    //static $inject = [];
    //
    //constructor() {
    //}

    /**
     * Getters and Setters
     */
    public setHeaderTitle(headerTitle: string): void{
        this.headerTitle = headerTitle;
    }

    public getHeaderTitle(): string{
        return this.headerTitle;
    }
}
jsTechnicalTestApp.service('HeaderService', HeaderService);
