$(document).ready(function(){
    gallery();
    $("#cartools1").hide();
       $("#cartools2").hide();
       $("#cartools3").hide();
    
  $("#more").click(function(){
   
      $("#p1l").fadeIn();
   
  });
    
    $("#coca1").click(function(){
    $(".coca").animate({left: '400px'});
  });
    
      
    $(".tool1").click(function(){
    $("#cartools1").animate({
      height: 'toggle'
    });
    });
    
    $(".tool2").click(function(){
    $("#cartools2").animate({
      height: 'toggle'
    });
    });
    
    $(".tool3").click(function(){
    $("#cartools3").animate({
      height: 'toggle'
    });
    });
    
});
function gallery() {
     var array = localStorage.getItem("appCategory");
    if (array == null) {

    } else {
        array = array.split("||");
        for (var i = 0; i < array.length; i++) {
            var subArr = array[i].split(",");
            if (subArr != "") {
                if(i>3)
                    {
                        break;
                    }
                else
                {
                var html1 = subArr[2] + "," + subArr[3];
                $("#image"+i).attr('src',html1);
                    }
            }
        }

    }
}