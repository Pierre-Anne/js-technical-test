'use strict';
/**
 * IssueController is used as controller of the issueView
 */
class HeaderController {

    static $inject = ['HeaderService', '$state'];

    constructor(private headerService: HeaderService, private $state: ng.ui.IStateService) {
        headerService.setHeaderTitle('choose your issue');
        this.$state.go('root.home');
    }
}

jsTechnicalTestApp.controller('HeaderController', HeaderController);