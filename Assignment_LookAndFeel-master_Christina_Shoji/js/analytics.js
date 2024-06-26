document.addEventListener('DOMContentLoaded', function() {
    const ctxDmChart = document.getElementById('dmChart').getContext('2d');
    const ctxAwardsChart = document.getElementById('awardsChart').getContext('2d');

    
    const dmData = [
        { movie: "Titanic", gross_revenue: 674460013 },
        { movie: "The Blind Side", gross_revenue: 255959475 },
        { movie: "The Truman Show", gross_revenue: 125618201 },
        { movie: "Oppenheimer", gross_revenue: 329862540 },
        { movie: "The Pursuit of Happyness", gross_revenue: 162586036 },
        { movie: "Catch Me if You Can", gross_revenue: 164606800 },
        { movie: "A Star is Born", gross_revenue: 215288866 },
        { movie: "Twilight", gross_revenue: 192769854 },
        { movie: "A Beautiful Mind", gross_revenue: 170708996 },
        { movie: "Apollo 13", gross_revenue: 173772767 }
    ];

   
    const dmChartData = {
        labels: dmData.map(dm => dm.movie),
        datasets: [{
            label: 'Gross Revenue',
            data: dmData.map(dm => dm.gross_revenue),
            backgroundColor: 'rgb(255, 102, 102)',
            borderColor: 'rgb(204, 51, 0)',
            borderWidth: 1
        }]
    };

    const dmChartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    const dmChart = new Chart(ctxDmChart, {
        type: 'bar',
        data: dmChartData,
        options: dmChartOptions
    });

    
    const awardsData = [
        { movie: "Titanic", awards: 11 },
        { movie: "The Blind Side", awards: 5 },
        { movie: "The Truman Show", awards: 40 },
        { movie: "Oppenheimer", awards: 7 },
        { movie: "The Pursuit of Happyness", awards: 9 },
        { movie: "Catch Me if You Can", awards: 16 },
        { movie: "A Star is Born", awards: 3 },
        { movie: "Twilight", awards: 35 },
        { movie: "A Beautiful Mind", awards: 4 },
        { movie: "Apollo 13", awards: 2 }
    ];

    const awardsChartData = {
        labels: awardsData.map(dm => dm.movie),
        datasets: [{
            label: 'Number of Awards',
            data: awardsData.map(dm => dm.awards),
            backgroundColor: 'rgb(0, 153, 204)',
            borderColor: 'rgb(0, 102, 204)',
            borderWidth: 1
        }]
    };

    const awardsChartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    const awardsChart = new Chart(ctxAwardsChart, {
        type: 'bar',
        data: awardsChartData,
        options: awardsChartOptions
    });
});