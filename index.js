
const time=["Now" , "11:00" , "12:00","13:00", "14:00", "15:00", "16:00", "17:00",];
const img=["img/sun-1.png", "img/sun-1.png","img/cloud.png" , "img/cloud.png","img/sun-1.png", "img/cloud.png" , "img/cloud.png" , "img/sun-1.png",   ]
const degree=["27" , "28" ,  "28" , "29" ,"30" ,"29" ,"29" ,"28"]

let div="";
let get="";
let getImg="";
let deg="";
degree.forEach(degGet =>{
    deg+=`
       <h5>${degGet}\u00B0</h5>
     `
})
document.querySelector(".deg").innerHTML=deg;


img.forEach(image =>{
    getImg+=`
        <img src=${image}>
     `
})
document.querySelector(".image").innerHTML=getImg;

time.forEach(list=>{
    get+=`
    <div class="gets">
        <h6>${list}</h6>
        
     </div>`
      
})
document.querySelector(".head").innerHTML=get;




const xValues = ["23%", "29%", "58%", "75%", "33%" , "20%" ,"73%" , "49%"];

const ctx = document.getElementById('myChart-js');
const myChart = new Chart(ctx, {
    type: 'line',
   
   
    data: {
        labels: ["23%", "29%", "58%", "75%", "33%" , "20%" ,"73%" , "49%"],
        datasets: [{
            
            data: ["23", "29", "58", "75", "33" , "20" ,"73" , "49"],
            backgroundColor: "blue",
            
        fill:true,
       radius:0,
        }],
       
    },
    options: {
        plugins:{
            legend:{
                display:false,
            }
        },
        
        scales: {
            x:{
                grid:{
                    color:'black',
                }
            },
            y: {
                beginAtZero: true,
                grid:{
                   display:false,
                   
                },
                ticks:{
                    display:false,
                },
                
            },  
        }
    }
});

//gauge meter

class circularChart extends Chart.DoughnutController{
    draw(){
        super.draw(arguments);
       
    }
}
circularChart.id='circularGauge';
circularChart.defaults=Chart.DoughnutController.defaults;
circularChart.defaults={
    cutout:'95%',
    circumference:180,
    rotation:270,
    
};

circularChart.overrides={
    aspectRatio:3,
    plugins:{
        legend:{
            display:false,
          
        },
       
    }
}
Chart.register(circularChart);

const Ctx = document.getElementById('myChart');
const myCharts = new Chart(Ctx, {
    type: 'circularGauge',
   option:{
    
    
   },
    
     data: {
        labels: false,
        datasets: [{
            
          data: [23, 23,  23, 23, 23 ],
         borderWidth:1,
          backgroundColor: [
          'blue',
          'blue',
          'silver',
          'silver',
          'silver'

          ],
          hoverOffset: 5,
        
        }]
      }
    

});

