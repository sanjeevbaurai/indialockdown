
(function(window, document) {
    'use strict';


    function mainCDBanner() {
        
        var acc = document.getElementsByClassName("accordion");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            this.parentElement.classList.toggle("borderStyle");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
             // this.parentElement.style.border= "solid #f7f7f9";
            }
          });
        }
        //var endTime = new Date("29 November 2019 12:00:00 GMT");
        var setDate = '31 May 2020 23:59:00 UTC';

      
        //calling timerFunction
        setInterval(function() { 
        makeTimer(setDate); 
        }, 1000);
        
    }
    
   

    function makeTimer(setDate) {
        var isSetDate = setDate;	
        var endTime = new Date(isSetDate);		
        endTime = (Date.parse(endTime) / 1000);
       // console.log(endTime)
        var now = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
        now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        if (timeLeft < 0 ){
            // $("#timer").html("<span class='banner-heading'>EXPIRED</span>");
            clearInterval();
            $("#countdown_timer_royalrumble").hide();
            return;
        }

        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        var totalDays=24;
        var percent =  (100*timeLeft/endTime).toFixed(7);
        //console.log(percent)
        $("#days").html(days );
        $("#hours").html(hours);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds );	
		$("#percent").html(percent );
		
       // $("#contact_list").
     //  var mydata = JSON.parse(contactList);
       
       //var mydata = JSON.parse(data);
            //console.log(mydata[0].name);
          //  console.log(mydata[0].number);
            // $.getJSON("../data/sample.json", function (data) {
            //     $.each(data, function (index, value) {
            //        console.log(value);
            //     });
            // });
    }	
    
    $(".top").click(function(){
       
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
    
    
    
    if (document.readyState !== 'loading') {
        mainCDBanner();
    } else {
        document.addEventListener('DOMContentLoaded', init);
    }

    function init() {
        document.removeEventListener('DOMContentLoaded', init);
        mainCDBanner();
    }
    
})(window, document);

//# sourceURL=lockdown.js