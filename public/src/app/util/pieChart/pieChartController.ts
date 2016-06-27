'use strict';
/**
 * commentController is used as controller of the commentView
 */
class PieChartController {

    static $inject = ['IssueService', 'HiddenService'];

    public userWords: any;

    constructor(private issueService: IssueService, private hiddenService: HiddenService) {
        this.getNumberWord();
    }

    private getNumberWord(): void {
        var listComment: Array<Comment> = this.issueService.getIssueComment();
        this.userWords = new Array<any>();
        _.each(listComment, function(comment: Comment){
            var nbWords = comment.body.split(' ').length;
            if (nbWords > 0) {
                var userWord = _.find(this.userWords, function(elm){return elm.id === comment.user.id});
                if (!_.isUndefined(userWord)) {
                    userWord.word = userWord.word + nbWords;
                } else {
                    var newUser: any = {};
                    newUser.id = comment.user.id;
                    newUser.name = comment.user.login;
                    newUser.word = nbWords;
                    this.userWords.push(newUser);
                }
            }
        }.bind(this));
    }




    public getData(): any {
        var data = new Array<any>();
        _.each(this.userWords, function(user){
           if (!this.hiddenService.isHiddenUser(user.id)){
               var userData: any = {};
               userData.c = [
                   {v: user.name} ,
                   {v: user.word} ,
               ];
               data.push(userData);
           }
        }.bind(this));
        return data;
    }

    //public getLabels(): any {
    //    var labels = new Array<number>();
    //    _.each(this.userWords, function(user){
    //        if (!this.hiddenService.isHiddenUser(user.id)){
    //            labels.push(user.name)
    //        }
    //    }.bind(this));
    //    return labels;
    //}

    public getChartData(): any {
        var chartData: any = {};
        chartData.type = "PieChart";
        chartData.options = {
            'title': 'Who speak much'
        };
        chartData.data = {};
        chartData.data.cols = [
            {id: "t", label: "Topping", type: "string"},
            {id: "s", label: "Slices", type: "number"}
        ];
        chartData.data.rows = this.getData();

        return chartData;
    }


    //public myChartObject = {
    //    data: {
    //        "cols": [
    //            {id: "t", label: "Topping", type: "string"},
    //            {id: "s", label: "Slices", type: "number"}
    //        ], "rows": [
    //            {
    //                c: [
    //                    {v: "Mushrooms"},
    //                    {v: 3},
    //                ]
    //            }
    //            {
    //                c: [
    //                    {v: "Olives"},
    //                    {v: 31}
    //                ]
    //            },
    //            {
    //                c: [
    //                    {v: "Zucchini"},
    //                    {v: 1},
    //                ]
    //            },
    //            {
    //                c: [
    //                    {v: "Pepperoni"},
    //                    {v: 2},
    //                ]
    //            }
    //        ]
    //    }
    //}
}

jsTechnicalTestApp.controller('PieChartController', PieChartController);
