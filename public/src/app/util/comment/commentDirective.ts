'use strict';
/**
 * commentDirective is a directive used to display comment
 */
class CommentDirective implements angular.IDirective {

    public comment: Comment;

    static factory = function () {
        return new CommentDirective();
    };

    constructor() {
        this.link = this._link.bind(this);
    }

    restrict = 'A';
    templateUrl = 'src/app/util/comment/commentView.html';
    scope = {
        // The banner to display
        comment: '='
    };

    link:angular.IDirectiveLinkFn;

    private _link(scope:any,
                  element:ng.IAugmentedJQuery,
                  attrs:angular.IAttributes,
                  controller:any,
                  transclude:angular.ITranscludeFunction) {
        scope.comment = scope.comment;
    }
}

jsTechnicalTestApp.directive('ngComment', CommentDirective.factory);