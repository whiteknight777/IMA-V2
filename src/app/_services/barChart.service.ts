export class BarChart {
    public labels;
    public title;
    public data;
    protected borderWidth: 1;
    public options: {
        tooltips: {
            mode: 'point'
        },
        sclale: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: true
        }

    }

    constructor(labels, title, data) {
        this.labels = labels;
        this.title = title;
        this.data = data;
    }

    prepareData() {
        return {
            labels: this.labels,
            datasets: [{
                label: this.title,
                data: this.data,
                backgroundColor: '#0cca8e',
                borderColor: '#58d8a3',
                borderWidth: 1
            }]
        };
    }



}