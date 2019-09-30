$(document).ready(function(){
    var imageArray=[];

    $.getJSON("js/data.json", function (data) {
       $.each(data, function (index, image) {
          imageArray.push(image);
          var li = document.createElement("li");
          var imageElement = document.createElement("img");
          imageElement.src="images/square/"+image.path;
          imageElement.alt=image.title;
          li.append(imageElement);
          $(".gallery").append(li);
       });
    });

    $(".gallery").on("mouseenter" , "img" ,function (event){
       $(this).addClass("gray");
       var alt= $(this).attr('alt');
       //filtering for the image with title 
       var finalImage=imageArray.filter(image=> image.title ==this.alt)[0];

       $('body').append("<div id='preview'><img alt='"
                                                + finalImage.title+"' src=images/medium/"
                                                + finalImage.path+"><p>"+ finalImage.city +"," 
                                                + "<br>"
                                                + finalImage.taken
                                                +"</p></div>");
       $("#preview").css("left", event.pageX + 20);
       $("#preview").css("top", event.pageY + 20);
       $("#preview").css("z-index",100);
       $("#preview").fadeIn(1000);
    })


    $(".gallery").on("mousemove", "img" , function (event) {
      if ($("#preview")) {
         $("#preview").css("left", event.pageX + 20);
         $("#preview").css("top", event.pageY + 20);
         $("#preview").css("z-index",100);
      }
    })


    $(".gallery").on("mouseleave", "img" ,function (event) {
        $(this).removeClass("gray");
        $("#preview").remove();
    })
});