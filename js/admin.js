$(document).ready(function () {
   
    var array = (localStorage.getItem("Careers"));
    var url = "http://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding"
    $.getJSON(url, function (data) {
        debugger;
        var html = "";
        $.each(data.items, function (i, item) {

            html += "<div class='mySlides fade'><div class='numbertext'>" + i + "</div><img src=" + item.media.m + " style='width:1060px;height:500px;'></div>"
            // html += "<a href='" + item.media.m + "'  data-title='" + item.title + "' ><img src=" + item.media.m + "></a><br>";
        });
        $("#carosuel").html(html);
    });





});
setTimeout(function () {
    Slides(1);
}, 1000);

var html = "";
$('.tabGroup2').swichTab({
    cahngePanel: 'fade',
    swiper: true,
    index: 2,
});

function getdata() {
    debugger;
 loc= window.location.href;
    loc=loc.split("finalgroup");
   loc[0]= loc[0].concat("finalgroup/file/");
    
    var array = (localStorage.getItem("Careers"));
    if (array != undefined) {
        array = array.split("||");
        for (var i = 0; i < array.length; i++) {
            var subArr = array[i].split(",");
            if (subArr != "") {
                debugger;
               loc[0]= loc[0].concat(subArr[4]);
                html = html + "<span>ame:" + subArr[1] + "</span><br><span> email:" + subArr[2] + "</span><br><span> mobile:" + subArr[0] + "</span><br><span> hours:" + subArr[3] + "</span><br><span>Province:" + subArr[5] + "</span><br><span> City:" + subArr[6] + "</span><br><button onClick=openWith('" + subArr[4] + "')>Resume</button><embed src='" +loc[0] + "' height='200' width='200'>";

            }

        }
        $("#carrer").html(html);



    }
}

function getContactDetail() {
    debugger;
    var html="";
    var array = (localStorage.getItem("Contact"));
    if (array != undefined) {
        array = array.split("||");
        for (var i = 0; i < array.length; i++) {
            var subArr = array[i].split(",");
            if (subArr != "") {
                html = html + "<span>name:" + subArr[0] + "</span><br><span> email:" + subArr[1] + "</span><br><span> mobile:" + subArr[2] + "</span><br><span> hours:" + subArr[3] + "</span><br>";

            }

        }
        $("#contact").html(html);



    }
}

function openWith(filename) {
    debugger;
     loc= window.location.href;
    loc=loc.split("finalgroup");
   loc[0]= loc[0].concat("finalgroup/file/");
    loc[0]= loc[0].concat(filename);
    myWindow = window.open("", "myWindow");

    myWindow.document.write("<div><embed src='"+loc[0]+"' height='500' width='500'></div>");

}

var slideIndex = 1;
// showSlides(slideIndex);



function currentSlide(n) {
    Slides(slideIndex = n);
}

function Slides(n) {
    debugger;
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    try
    {slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    }
    catch{
       window.location.reload();
}
}
        
      


 $("#adpara").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "coral");
  });
