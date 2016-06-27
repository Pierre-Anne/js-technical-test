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
        var issue: Issue = this.issueService.getIssue();
        this.addComment(issue.user, issue.body.split(' ').length);
        _.each(listComment, function(comment: Comment){
            var nbWords = comment.body.split(' ').length;
            if (nbWords > 0) {
                var userWord = _.find(this.userWords, function(elm){return elm.id === comment.user.id});
                if (!_.isUndefined(userWord)) {
                    userWord.word = userWord.word + nbWords;
                } else {
                    this.addComment(comment.user, nbWords);
                }
            }
        }.bind(this));
    }

    private addComment(user: User, nbWords: number): void {
        var newUser: any = {};
        newUser.id = user.id;
        newUser.name = user.login;
        newUser.word = nbWords;
        this.userWords.push(newUser);
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

    public getChartData(): any {
        var chartData: any = {};
        chartData.type = "PieChart";
        chartData.options = {
            legend: 'none'
        };
        chartData.data = {};
        chartData.data.cols = [
            {id: "t", label: "Topping", type: "string"},
            {id: "s", label: "Slices", type: "number"}
        ];
        chartData.data.rows = this.getData();

        return chartData;
    }
}

jsTechnicalTestApp.controller('PieChartController', PieChartController);
