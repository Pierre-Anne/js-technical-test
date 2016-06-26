'use strict';
/**
 * UserDirective is a directive used to display user
 */
class UserDirective implements angular.IDirective {

    public user: User;

    static factory = function () {
        return new UserDirective();
    };

    constructor() {
        this.link = this._link.bind(this);
    }

    restrict = 'A';
    templateUrl = 'src/app/util/user/userView.html';
    scope = {
        // The banner to display
        user: '='
    };

    link:angular.IDirectiveLinkFn;

    private _link(scope:any,
                  element:ng.IAugmentedJQuery,
                  attrs:angular.IAttributes,
                  controller:any,
                  transclude:angular.ITranscludeFunction) {
        scope.user = scope.user;
    }
}

jsTechnicalTestApp.directive('ngUser', UserDirective.factory);