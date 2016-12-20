angular.module('chartApp', ['chart.js']);

const app = angular.module('chartApp');

app.service('salaryService', function () {
    this.data = [
        [65000, 67300, 71100, 73900, 74600, 77100, 82700],
        [74500, 76700, 83200, 86599, 88900, 91200, 94500]
    ];
});

app.component('simpleTable', {
    template: `
        <h1>Table</h1>
        <pre>{{$ctrl.data}}</pre>
    `,
    controller: function (salaryService) {
        this.data = salaryService.data;
    }
});

app.component('barChart', {
    template: `
        <h1>Chart</h1>
        <pre>{{$ctrl.data}}</pre>
    `,
    controller: function (salaryService) {
        this.data = salaryService.data;
    }
});