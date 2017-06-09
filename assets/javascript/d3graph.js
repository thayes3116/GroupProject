
  
        $(".cityBtn").on("click", function() {
            var bb = $(this).data('name');
            // console.log(this);
            console.log(bb);
            // (showGraph()).hide();
            for ( i = 0; i < cities.length; i++) {
 
                if (bb === cities[i].city) {
                    console.log(cities[i].city);
                    showGraph(i);
                }
            }

      
   })  
      // console.log(j);
  // function City(city,housing,costOfLiving,commute,safety,education,environment){

  //   this.city = city;
  //   this.housing = housing;
  //   this.costOfLiving = costOfLiving;
  //   this.commute = commute;
  //   this.safety = safety;
  //   this.education = education;
  //   this.environment = environment;

  // }

  // var austin = new City("austin", 2, 2, 2,);

  // console.log(austin.housing);
  // var thisCity = $("<h1>" + cities[0].city + "</h1>");

  // $("body").prepend(thisCity)
    function showGraph(add) {
      var bubbleChart = new d3.svg.BubbleChart({
        supportResponsive: true,
        //container: => use @default
        size: 600,
        //viewBoxSize: => use @default
        innerRadius: 600 / 3.5,
        //outerRadius: => use @default
        radiusMin: 50,
        //radiusMax: use @default
        //intersectDelta: use @default
        //intersectInc: use @default
        //circleColor: use @default

        
        data: {
          items: [
            {text: "Housing", count: cities[add].Housing[0]},
            {text: "Cost of Living", count: cities[add]["Cost of Living"][0]},
            {text: "Commute", count: cities[add].Commute[0]},
            {text: "Safety", count: cities[add].Safety[0]},
            {text: "Education", count: cities[add].Education[0]},
            {text: "Environmental Quality", count: cities[add]["Environmental Quality"][0]},
            {text: "Economy", count: cities[add].Economy[0]},
            {text: "Taxation", count: cities[add].Taxation[0]},
            {text: "Leisure & Culture", count: cities[add]["Leisure & Culture"][0]},
            {text: "Outdoors", count: cities[add].Outdoors[0]}
          ],
          eval: function (item) {return item.count;},
          classed: function (item) {return item.text.split(" ").join("");}
        },
        plugins: [
          {
            name: "central-click",
            options: {
              text: "Score out of 5",
              style: {
                "font-size": "12px",
                "font-style": "italic",
                "font-family": "Source Sans Pro, sans-serif",
                //"font-weight": "700",
                "text-anchor": "middle",
                "fill": "white"
              },
              attr: {dy: "65px"},
              centralClick: function() {
                alert("Hi");
              }
            }
          },
          {
            name: "lines",
            options: {
              format: [
                {// Line #0
                  textField: "count",
                  classed: {count: true},
                  style: {
                    "font-size": "28px",
                    "font-family": "Source Sans Pro, sans-serif",
                    "text-anchor": "middle",
                    fill: "white"
                  },
                  attr: {
                    dy: "0px",
                    x: function (d) {return d.cx;},
                    y: function (d) {return d.cy;}
                  }
                },
                {// Line #1
                  textField: "text",
                  classed: {text: true},
                  style: {
                    "font-size": "14px",
                    "font-family": "Source Sans Pro, sans-serif",
                    "text-anchor": "middle",
                    fill: "white"
                  },
                  attr: {
                    dy: "20px",
                    x: function (d) {return d.cx;},
                    y: function (d) {return d.cy;}
                  }
                }
              ],
              centralFormat: [
                {// Line #0
                  style: {"font-size": "50px"},
                  attr: {}
                },
                {// Line #1
                  style: {"font-size": "30px"},
                  attr: {dy: "40px"}
                }
              ]
            }
          }]
      });

      $(".graphModal").append(bubbleChart);
    }


