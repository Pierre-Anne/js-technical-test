'use strict';
/**
 * commentDirective is a directive used to display comment
 */
class PieChartDirective implements angular.IDirective {

    //public pieChart: any;


    static factory = function () {
        return new PieChartDirective();
    };

    constructor() {
        this.link = this._link.bind(this);
    }

    restrict = 'A';
    templateUrl = 'src/app/util/pieChart/pieChartView.html';
    scope = {
        // The banner to display
        //pieChart: '='
    };

    link:angular.IDirectiveLinkFn;

    private _link(scope:any,
                  element:ng.IAugmentedJQuery,
                  attrs:angular.IAttributes,
                  controller:any,
                  transclude:angular.ITranscludeFunction) {
        //scope.pieChart = scope.pieChart;
    }
}

jsTechnicalTestApp.directive('ngPiechart', PieChartDirective.factory);
