document.addEventListener('DOMContentLoaded', () => {
   
    const totalUsers = 1500;
    const revenue = "$25,000";
    const salesData = [10, 20, 30, 40, 50, 60, 70];
    const revenueData = [5, 15, 25, 35, 45, 55, 65];

    
    document.getElementById('total-users').textContent = totalUsers;
    document.getElementById('revenue').textContent = revenue;

   
    const salesCtx = document.getElementById('sales-chart').getContext('2d');
    new Chart(salesCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Sales',
                data: salesData,
                borderColor: '#4f46e5',
                backgroundColor: 'rgba(79, 70, 229, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
            }],
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                },
                y: {
                    beginAtZero: true,
                },
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#333',
                        font: {
                            family: 'Poppins',
                        }
                    }
                }
            }
        },
    });

    const revenueCtx = document.getElementById('revenue-chart').getContext('2d');
    new Chart(revenueCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Revenue',
                data: revenueData,
                backgroundColor: '#4f46e5',
                borderColor: '#4f46e5',
                borderWidth: 1,
                borderRadius: 10,
            }],
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                },
                y: {
                    beginAtZero: true,
                },
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#333',
                        font: {
                            family: 'Poppins',
                        }
                    }
                }
            }
        },
    });
});
