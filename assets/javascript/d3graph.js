d3.svg.BubbleChart.define("central-click", function (options) {
  var self = this;

  self.setup = (function (node) {
    var original = self.setup;
    return function (node) {
      var fn = original.apply(this, arguments);
      self.event.on("click", function(node) {
        // console.log(node.data()[0].item)
      });
      return fn;
    };
  })();

  self.reset = (function (node) {
    var original = self.reset;
    return function (node) {
      var fn = original.apply(this, arguments);
      node.select("text.central-click").remove();
      return fn;
    };
  })();

  self.moveToCentral = (function (node) {
    var original = self.moveToCentral;
    return function (node) {
      var fn = original.apply(this, arguments);
      var transition = self.getTransition().centralNode;
      transition.each("end", function() {
        node.append("text").classed({"central-click": true})
          .attr(options.attr)
          .style(options.style)
          .attr("x", function (d) {return d.cx;})
          .attr("y", function (d) {return d.cy;})
          .text(options.text)
          .style("opacity", 0).transition().duration(self.getOptions().transitDuration / 2).style("opacity", "0.8");
      });
      return fn;
    };
  })();
});
  
   //      $(".cityBtn").on("click", function() {
   //          var bb = $(this).data('name');
   //          // console.log(this);
   //          console.log(bb);
   //          // (showGraph()).hide();
   //          for ( i = 0; i < cities.length; i++) {
 
   //              if (bb === cities[i].city) {
   //                  console.log(cities[i].city);
   //                  showGraph(i);
   //              }
   //          }

      
   // })  
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
      // $("text.centralClick").on("click",function(d){
      //       d3.select(this).remove();
      //   });
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
                "font-size": "20px",
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
                  style: {"font-size": "100px"},
                  attr: {}
                },
                {// Line #1
                  style: {"font-size": "35px"},
                  attr: {dy: "40px"}
                }
              ]
            }
          }]
      });

      $(".graphModal").append(bubbleChart);
    }


