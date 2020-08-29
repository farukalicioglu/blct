
function calculateBenford(){
  var numbers=$('#numbers').val();
  var arrayOfLines = numbers.split('\n');
  var firstLetterOfNumber=0;

  var total0=0;
  var total1=0;
  var total2=0;
  var total3=0;
  var total4=0;
  var total5=0;
  var total6=0;
  var total7=0;
  var total8=0;
  var total9=0;

  arrayOfLines.forEach(function(entry) {
      firstLetterOfNumber=entry.charAt(0);
      console.log(firstLetterOfNumber);
      switch(firstLetterOfNumber){
        case '0':
        total0++;
        break;
        case '1':
        total1++;
        break;
        case '2':
        total2++;
        break;
        case '3':
        total3++;
        break;
        case '4':
        total4++;
        break;
        case '5':
        total5++;
        break;
        case '6':
        total6++;
        break;
        case '7':
        total7++;
        break;
        case '8':
        total8++;
        break;
        case '9':
        total9++;
        break;
      }
  });
  var result='total0='+total0+'<br />total1='+total1+'<br />total2='+total2+'<br />total3='+total3+'<br />total4='+total4+'<br />total5='+total5+'<br />total6='+total6+'<br />total7='+total7+'<br />total8='+total8+'<br />total9='+total9;
  $('.result-area2').html(result);

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
  data: [total1, total2, total3, total4, total5, total6, total7, total8, total9],
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

$(document).ready(function(){
    $("#numbers").focus();
    calculateBenford()
});
