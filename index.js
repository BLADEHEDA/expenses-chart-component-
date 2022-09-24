// lets write the cpde thwat will actualize our chart 
var days= ["mon", "tue", "wed","thu" ,"fri","sat", "sun" ];
var values=[17.45,  34.91, 52.36, 31.07, 23.39, 43.28,25.48];
var colors= [  "hsl(10, 79%, 65%)",
'hsl(10, 79%, 65%)',
'hsl(186, 34%, 60%',
"hsl(10, 79%, 65%)",
'hsl(10, 79%, 65%)',
'hsl(10, 79%, 65%)',
"hsl(10, 79%, 65%)"];

var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];


var mychart = new Chart("mychart", {
    type: "bar",
    data: {
      
        labels: days,
   
        datasets: [{
            label: 'expanditures',
          backgroundColor: colors,
          data: values
        }]
      },

    options: {
        labels: {
            display:false
        },
        //  this line removes the legend from the chart 
        plugins: {
          legend: {
              display: false
          },
      },
        scales:{
          y: {
              display: false
          }
      
      }
    }




});

