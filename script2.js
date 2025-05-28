const mileageData = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [{
    label: 'Miles Run',
    data: [100, 102, 112, 120, 54], 
    backgroundColor: 'rgba(52, 152, 219, 0.7)',
    borderColor: 'rgba(41, 128, 185, 1)',
    borderWidth: 2,
    borderRadius: 6,
    maxBarThickness: 50,
  }]
};

const ctx = document.getElementById('mileageChart').getContext('2d');

const mileageChart = new Chart(ctx, {
  type: 'bar',
  data: mileageData,
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#2980b9',
        titleColor: '#ecf0f1',
        bodyColor: '#ecf0f1',
        cornerRadius: 6,
        displayColors: false
      }
    }
  }
});