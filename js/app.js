
function calculateBenford(){
  var numbers=$('#numbers').val();
  var arrayOfLines = numbers.split('\n');
  var firstLetterOfNumber=0;

  var total=[];
  var percent=[];

  for(let i=0;i<10;i++){
      total[i] = 0;
  }

  arrayOfLines.forEach(function(entry) {
      firstLetterOfNumber=parseInt(entry.charAt(0));
      total[firstLetterOfNumber]++;
  });

  for(let i=0;i<10;i++){
      percent[i] = ((total[i]*100)/arrayOfLines.length).toFixed(2);
  }

  percent.shift();

  //line
  var ctxL = document.getElementById("lineChart").getContext('2d');
  var myLineChart = new Chart(ctxL, {
  type: 'line',
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    datasets: [{
    label: "Benford's Law",
    data: [30.1, 17.6, 12.5, 9.7, 7.9, 6.7, 5.8, 5.1, 4.6],
    backgroundColor: [
    'rgba(105, 0, 132, .2)',
    ],
    borderColor: [
    'rgba(200, 99, 132, .7)',
    ],
    borderWidth: 2
  },
  {
    label: "Your dataset",
    data: percent,
    backgroundColor: [
    'rgba(0, 137, 132, .2)',
  ],
  borderColor: [
  'rgba(0, 10, 130, .7)',
  ],
  borderWidth: 2
  }
  ]
  },
  options: {
  responsive: true
  }
  });
}

function clearTextarea() {
    document.getElementById("numbers").value = "";
    $("#numbers").focus();
    calculateBenford()
}

function textarea_height(){
  var lc_h=$('.line-chart-area').height();
  $('.numbers-card-area').height(lc_h);
}

$(document).ready(function(){
    $("#numbers").focus();
    calculateBenford();
    textarea_height();
});

$( window ).resize(function() {
  textarea_height();
});
