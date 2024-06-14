const ctx = document.getElementById("myChart").getContext("2d");

const myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [],
        datasets: [
            {
                label: "# of Votes",
                data: [],
                borderWidth: 1,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)'
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
            x: {
                beginAtZero: true,
            }
        },
    },
});

let count = 0;

function updateCharts() {
    myChart.data.labels.push(count+=5);
    myChart.data.datasets[0].data.push(Math.ceil(Math.random() * 100));
    myChart.update(); 
}

setInterval(updateCharts, 1000);