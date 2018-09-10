 

function alltext() {

    var newDate = new Date(),
        day = newDate.getDay(),
        hours = 23,
        minutes = 15,
        seconds = 0;

    if (hours > 12 && hours !== 0 && hours !== 23) {
        hours = hours - 12;
    }
    if (minutes < 10) {
        minutes = 0 + minutes;
    }
    if (seconds < 10) {
        seconds = 0 + seconds;
    }

    var minsSecs = minutes + seconds;
    if (minsSecs > 3230) {
        hours++;
    }

     
    }

    hoursObj = {
        1: '#one',
        2: '#two',
        3: '#three',
        4: '#four',
        5: '#five-hr',
        6: '#six',
        7: '#seven',
        8: '#eight',
        9: '#nine',
        10: '#ten-hr',
		 
        11: '#eleven',
        12: '#twelve',
        23: '#twothree1',
		       
 
        24: '#midnight',
        0: '#hr0'
    };
 
    if ((minsSecs >= 5730 && minsSecs < 6000) || (minsSecs >= 0 && minsSecs < 230)) {
        if (hours !== 24 && hours !== 0) {
            updateDesc('#oclock');
        }
    } else if (minsSecs >= 230 && minsSecs < 730) {
        updateDesc('#five, #past');
    } else if (minsSecs >= 730 && minsSecs < 1230) {
        updateDesc('#ten, #past');
    } else if (minsSecs >= 1230 && minsSecs < 1730) {
        updateDesc('#quarter, #past');
    } else if (minsSecs >= 1730 && minsSecs < 2230) {
        updateDesc('#twenty, #past');
    } else if (minsSecs >= 2230 && minsSecs < 2730) {
        updateDesc('#twenty, #five, #past');
    } else if (minsSecs >= 2730 && minsSecs < 3230) {
        updateDesc('#half, #past');
    } else if (minsSecs >= 3230 && minsSecs < 3730) {
        updateDesc('#twenty, #five, #to');
    } else if (minsSecs >= 3730 && minsSecs < 4230) {
        updateDesc('#twenty, #to');
    } else if (minsSecs >= 4230 && minsSecs < 4730) {
        updateDesc('#quarter, #to');
    } else if (minsSecs >= 4730 && minsSecs < 5230) {
        updateDesc('#ten, #to');
    } else if (minsSecs >= 5230 && minsSecs < 5730) {
        updateDesc('#five, #to');
    } else {
        updateDesc();
    }
	 
     
}
 
function updateDesc(classes) {
    $('.desc').removeClass('active');
    $(classes).addClass('');
 
}
function numbertos(d)
{
 
	    if(d.contains('1'))  
		 {
			 s+="one";
		 }
		  if(d.contains('2'))  
		 {
			 s+="two";
		 }
		
		 if(d.contains('3'))  
		 {
			 s+="three";
		 }
		  if(d.contains('4'))  
		 {
			 s+="four";
		 }
		  if(d.contains('5'))  
		 {
			 s+="five";
		 }
		  if(d.contains('6'))  
		 {
			 s+="six";
		 }
		  if(d.contains('7'))  
		 {
			 s+="seven";
		 }
		  if(d.contains('8'))  
		 {
			 s+="eight";
		 }
		 
		  if(d.includes('9'))  
		 {
			 s+="nine";
		 }
	 
 
	return s;
}
function updateHour(classes) {
  var countDownDate = new Date("Oct 7  2018").getTime();

// Update the count down every 1 second
 

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  a= n(days); 
   if(getParam( 'text' )!="")
  {
	  a=n(getParam( 'text' ));
  }	  
  
     if(a[0]!='0')
	 {   alert(a[0]);

	   $('.hr'+a[0]).removeClass('active');
    $('.hr'+a[0]).addClass('active');
	 }
	   $('.hr'+a[1]).removeClass('active');
    $('.hr'+a[1]).addClass('active');
}
 
function formatEmail() {
  var body = "test";
  var emailTo = "test@example.org"
  window.location.href = "mailto:" + emailTo + "?subject=" + "asdasdasdasd" + "&body=" + body;
}
function getParam( name )
{
 name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
 var regexS = "[\\?&]"+name+"=([^&#]*)";
 var regex = new RegExp( regexS );
 var results = regex.exec( window.location.href );
 if( results == null1 )
  return "";
else
 return results[1];
}
function test()
{
	alert("d");
}
function n(n){
    return n > 9 ? "" + n: "0" + n;
}
setInterval(function() {
    alltext();
}, 1000);
$( document ).ready(function() {
	  $('#resultTextBox').on("keydown keyup", function() {
		alert("d");
		$s="abcdefghijklmnopqrstuvwxyz"; 
          		 
       
	   a=n($d) ;
	  
	   
	   for(i=0;i<12;i++)
	    $('.hr'+i).removeClass('active');
     if(a[0]!="0")
	 {
	   $('.hr'+a[0]).removeClass('active');
    $('.hr'+a[0]).addClass('active');
	 }
	 	   for(i=1;i<a.length;i++)
{
	   $('.hr'+a[i]).removeClass('active');
    $('.hr'+a[i]).addClass('active');
 }    
});  
});

