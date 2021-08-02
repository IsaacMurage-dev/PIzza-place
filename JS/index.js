$(document).ready(function(){
    $("#d1").click(function(){
        $(".d2").toggle()

    });
    $("#dev1").click(function(){
        $(".dev2").toggle()
    });
    $("#s1").click(function(){
        $(".s2").toggle()
    });
    $("#s3").click(function(){
        $(".s4").toggle()
    });
    $("#drink1").click(function(){
        $(".drink2").toggle()
    });
    $("#prd1").click(function(){
        $(".prd2").toggle()
    });
    $("#ital1").click(function(){
        $(".itali2").toggle()
    });
    $("#marg1").click(function(){
        $(".marg2").toggle()
    });
    $("#pine1").click(function(){
        $(".pine2").toggle()
    });
    $("#heart1").click(function(){
        $(".heart2").toggle()
    });
    $("#veggie1").click(function(){
        $(".veggie2").toggle()
    });
    

});
// animation
// $(document).click(function(){
//         $(".s1").animate({Height:"300px"});
// });
$(document).ready(function () {
    $(function () {
      $('.summary').hide();
      $('.cdata-overlay').hide();
      
      $("#checkout").click(function () {
        let pizza = $(".pizza option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);
    
    
        let order = (p, s, c, t, n, total) => {
          return { p, s, c, t, n, total };
        };
    
    
        let price, totalPrice;
        switch (pizza) {
          case pizza = "Peperoni":
            switch (size) {
              case size = "regular":
                price = 600;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                } 
                else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
                // else {
                //   totalPrice = (price * number) + 280;
                // }
                break;
              case size = "medium":
                price = 800;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                } 
                else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
                
                break;
              case size = "large":
                price = 1200;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                }
                 else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
                
                break;
            }
            break;
          case pizza = "Chicken Bacon":
            switch (size) {
              case size = "regular":
                price = 600;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                } 
                else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
                
                break;
              case size = "medium":
                price = 800;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                } 
                else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
                
                break;
              case size = "large":
                price = 1200;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                } else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } else {
                  totalPrice = (price * number) + 280;
                }
                break;
            }
            break;
          case pizza = "Red Sauce":
            switch (size) {
              case size = "regular":
                price = 600;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                } 
                else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
                
                break;
              case size = "medium":
                price = 800;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                } 
                else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
                
                break;
              case size = "large":
                price = 1200;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                } 
                else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
                
                break;
            }
            break;
          case pizza = "Italian-Style":
            switch (size) {
              case size = "regular":
                price = 600;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                } 
                else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
                
                break;
              case size = "medium":
                price = 800;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                } 
                else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
                
                break;
              case size = "large":
                price = 1200;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                } 
                else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
                
                break;
            }
            break;
          case pizza = "Margherita":
            switch (size) {
              case size = "regular":
                price = 600;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                } 
                else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
                
                break;
              case size = "medium":
                price = 800;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                } 
                else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
               
                break;
              case size = "large":
                price = 1200;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                }
                 else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
                
                break;
            }
            break;
          case pizza = "Pineapple ham":
            switch (size) {
              case size = "regular":
                price = 300;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                } 
                else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
               
                break;
              case size = "medium":
                price = 600;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                } 
                else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
                
                break;
              case size = "large":
                price = 1200;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                } 
                else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
               
                break;
            }
            break;
          case pizza = "Heart slice":
            switch (size) {
              case size = "regular":
                price = 600;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                }
                 else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
               
                break;
              case size = "medium":
                price = 800;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                } 
                else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
                
                break;
              case size = "large":
                price = 1200;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                } 
                else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
                
                break;
            }
            break;
          case pizza = "Veggie":
            switch (size) {
              case size = "regular":
                price = 600;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                } 
                else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
               
                break;
              case size = "medium":
                price = 800;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                } 
                else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                } 
                else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                } 
               
                break;
              case size = "large":
                price = 1200;
                if (crust === "thin") {
                  totalPrice = (price * number) + 100;
                }
                 else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
                }
                 else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
                }
               
                break;
            }
        
            break;
        }
        switch (topping) {
          case topping = "blackolive":
            totalPrice = totalPrice + 80;
            break;
          case topping = "lettuce":
            totalPrice = totalPrice + 80;
            break;
          case topping = "pineapple":
            totalPrice = totalPrice + 80;
            break;
          case topping = "greenpepper":
            totalPrice = totalPrice + 80;
            break;
          case topping = "bacon":
            totalPrice = totalPrice + 120;
            break;
       
    
        }
    
        
        let newOrder = order(pizza, size, crust, topping, number, totalPrice);
        console.log(newOrder); 
  
        $("#checkout").click(function () {
          $('.text-center sum').slideDown(2000);
          $('.cdata-overlay').slideUp();
          $('#list').slideDown();
          $('.text-center sum').show(1000);
          $('.text-center sum').show(1000);
        });
    
        $('#list').text(" ");
        $("#list").append("<br>" + "Pizza :   " + newOrder.p + "<br>" + "Size :   "
          + newOrder.s + "<br>" + "Crust :     "
          + newOrder.c + "<br>" + "Toppings :     "
          + newOrder.t + "<br>" + " Number of pizzas :    "
          + newOrder.n + "<br>" + "Total Price :  "
          + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
      });
    
      
      $(".deliver").click(function () {
        $('#deli').slideUp();
        // $('#list').slideUp();
        $('.summary').text("Provide location details").slideUp();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.cdata-overlay').show();
      });
    
         $('.go').click(function()  {
             var name=document.querySelector('#name').value;
             var output=(`${name}`);
            document.querySelector('#deliveryconfirmation').value= output;
             var number=document.querySelector('#pn').value;
             var output=(`${number}`);
             document.querySelector('#deliveryconfirmation').value= output;
             var address=document.querySelector('#add').value;
             var output=(`${address}`);
             document.querySelector('#deliveryconfirmation').value= output;
               
         })
         
    
      $(".delivernot").click(function () {
    
      });
    
      
      $(function () {
        $.scrollify.move('#sum-order');
      });
    });
    
  
  })
  