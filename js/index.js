id=0;
pre=id;
score=0;
$current1="#9a";
$current2="#10a";
$current3="#11a";
$current4="#12a"; 
			 win=0;

	 		 
var arr = []
while(arr.length < 3){
    var randomnumber = Math.floor(Math.random()*13) + 1;
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
}
$('#count').on('click',function(){
     $("#count").html(parseInt($('#count').html(), 10)+5);
});
function isgood(n)
{ 	
 alert(arr[0]+":"+arr[1]+":"+arr[2]+":"+ $("#count").html());
       if((arr[0]==-2)&& (arr[1]==-2)&&(arr[2]==-2)&&(parseInt($('#count').html(), 10)>0))
	  $("#count").html("you save doctor"); 
	 if((parseInt($('#count').html(), 10)<=0))
	  $("#count").html("you lost"); 

	count=parseInt($('#count').html(), 10);
    if(count>0)
    {		
	if((n=="9a")&&(arr[0]==1))
	{
		arr[0]=-2;score+=10;alert("correct");
	}
	if((n=="9a")&&(arr[1]==1))
		{
		arr[1]=-2;score+=10;alert("correct");
	}
	if((n=="9a")&&(arr[2]==1))
		{
		arr[2]=-2;score+=10;alert("correct");
	}
	if((n=="9b")&&(arr[0]==2))
	{
		arr[0]=-2;score+=10;alert("correct");
	}
	if((n=="9b")&&(arr[1]==2))
		{
		arr[1]=-2;score+=10;alert("correct");
	}
	if((n=="9b")&&(arr[2]==2))
		{
		arr[2]=-2;score+=10;alert("correct");
	}
	if((n=="9c")&&(arr[0]==3))
	{
		arr[0]=-2;score+=10;alert("correct");
	}
	if((n=="9c")&&(arr[1]==3))
		{
		arr[1]=-2;score+=10;alert("correct");
	}
	if((n=="9c")&&(arr[2]==3))
		{
		arr[2]=-2;score+=10;	alert("correct");	

	}
	if((n=="10a")&&(arr[0]==4))
	{
		arr[0]=-2;score+=10;alert("correct");
	}
	if((n=="10a")&&(arr[1]==4))
		{
		arr[1]=-2;score+=10;alert("correct");
	}
	if((n=="10a")&&(arr[2]==4))
		{
		arr[2]=-2;score+=10;	alert("correct");	

	}
	if((n=="10b")&&(arr[0]==5))
	{
		arr[0]=-2;score+=10;alert("correct");
	}
	if((n=="10b")&&(arr[1]==5))
		{
		arr[1]=-2;score+=10;alert("correct");
	}
	if((n=="10b")&&(arr[2]==5))
		{
		arr[2]=-2;score+=10;	alert("correct");	

	}
	if((n=="10c")&&(arr[0]==6))
	{
		arr[0]=-2;score+=10;alert("correct");
	}
	if((n=="10c")&&(arr[1]==6))
		{
		arr[1]=-2;score+=10;alert("correct");
	}
	if((n=="10c")&&(arr[2]==6))
		{
		arr[2]=-2;score+=10;	alert("correct");	

	}
	if((n=="11a")&&(arr[0]==7))
	{
		arr[0]=-2;score+=10;alert("correct");
	}
	if((n=="11a")&&(arr[1]==7))
		{
		arr[1]=-2;score+=10;alert("correct");
	}
	if((n=="11a")&&(arr[2]==7))
		{
		arr[2]=-2;score+=10;	alert("correct");

	}
	if((n=="11b")&&(arr[0]==8))
	{
		arr[0]=-2;score+=10;alert("correct");
	}
	if((n=="11b")&&(arr[1]==8))
		{
		arr[1]=-2;score+=10;alert("correct");
	}
	if((n=="11b")&&(arr[2]==8))
		{
		arr[2]=-2;score+=10;	alert("correct");	

	}
	if((n=="11c")&&(arr[0]==9))
	{
		arr[0]=-2;score+=10;alert("correct");
	}
	if((n=="11c")&&(arr[1]==9))
		{
		arr[1]=-2;score+=10;alert("correct");
	}
	if((n=="11c")&&(arr[2]==9))
		{
		arr[2]=-2;score+=10;	alert("correct");	

	}
	if((n=="12a")&&(arr[0]==10))
	{
		arr[0]=-2;score+=10;alert("correct");
	}
	if((n=="12a")&&(arr[1]==10))
		{
		arr[1]=-2;score+=10;alert("correct");
	}
	if((n=="12a")&&(arr[2]==10))
		{
		arr[2]=-2;score+=10;	alert("correct");	

	}if((n=="12b")&&(arr[0]==11))
	{
		arr[0]=-2;score+=10;alert("correct");
	}
	if((n=="13a")&&(arr[1]==13))
		{
		arr[1]=-2;score+=10;alert("correct");
	}
	if((n=="13a")&&(arr[2]==13))
		{
		arr[2]=-2;score+=10;	alert("correct");	

	}
	if((n=="13a")&&(arr[2]==13))
		{
		arr[2]=-2;score+=10;	alert("correct");	

	}
	}
	else
	{
	
	}
}
function next()
{
	id++;
			last="day-"+id;
}
function getidfrompic(pic)
{
	pic=pic.replace("pics/","");
         pic=pic.replace(".png","");

        pic=pic.replace(".PNG","");
        
	return ""+pic;
	  
}
function playvideo($id)
{
	if($(this).attr("src").includes($id+"a"))
{
var vid = document.getElementById("myVideo"); 
			vid.src="videos/"+$id+"a.mp4";
			 vid.play();
}
 if($(this).attr("src").includes($id+"b"))
{
var vid = document.getElementById("myVideo"); 
			vid.src="videos/"+$id+"b.mp4";
			 vid.play();
}
if($(this).attr("src").includes($id+"c"))
{
var vid = document.getElementById("myVideo"); 
			vid.src="videos/"+$id+"c.mp4";
			 vid.play();
}
}
i="9";  

 
for(i=9;i<=13;i++)
{
	$current='#'+i+'a';  
 	
$("#"+i+'a' ).click(function(){var vid = document.getElementById("myVideo"); 
			vid.src="videos/"+getidfrompic($(this).attr("src"))+".mp4"; 
			 vid.play(); 			
 
if((arr[0]==-2)&& (arr[1]==-2)&&(arr[2]==-2)&&(parseInt($('#count').html(), 10)>0))
	  $("#count").html("you save doctor"); 
	 if((parseInt($('#count').html(), 10)<=0))
	  $("#count").html("you lost"); 

             isgood(getidfrompic($(this).attr("src")) );

 
});
$("#"+i+'b' ).click(function(){  var vid = document.getElementById("myVideo"); 
			vid.src="videos/"+getidfrompic($(this).attr("src"))+".mp4"; 
			 vid.play();  
if((arr[0]==-2)&& (arr[1]==-2)&&(arr[2]==-2)&&(parseInt($('#count').html(), 10)>0))
	  $("#count").html("you save doctor"); 
	 if((parseInt($('#count').html(), 10)<=0))
	  $("#count").html("you lost"); 
			  isgood(getidfrompic($(this).attr("src")) );
$("#count").html(parseInt($('#count').html(), 10)-1); if((parseInt($('#count').html(), 10)<=0))
	  $("#count").html("you lost"); 
			  if($(this).attr("id").includes("9"))		  
		{  
    	      swap( "#9a","#9b") ;
		}
      if($(this).attr("id").includes("10"))		  
     swap( "#10a","#10b") ;
 if($(this).attr("src").includes("11"))		  
     swap( "#11a","#11b") ;
      if($(this).attr("id").includes("12"))		  
     swap( "#12a","#12b") ;
 
});
$("#"+i+'c' ).click(function(){  var vid = document.getElementById("myVideo"); 
			vid.src="videos/"+getidfrompic($(this).attr("src"))+".mp4"; 
			 vid.play();$("#count").html(parseInt($('#count').html(), 10)-1);
			        if((parseInt($('#count').html(), 10)<=0))
	  $("#count").html("you lost"); 
			  isgood(getidfrompic($(this).attr("src")));

			  if($(this).attr("id").includes("9"))		  
		{ 	
          
    	      swap( "#9a","#9c") ;
		}
      if($(this).attr("id").includes("10"))		  
     swap( "#10a","#10c") ;
 if($(this).attr("src").includes("11"))		  
     swap( "#11a","#11c") ;
      if($(this).attr("id").includes("12"))		  
     swap( "#12a","#12c") ;
 
});
}
 
function swap(a, b) {
	$temp=$(b).attr("src");
  $(b).attr("src",$(a).attr("src"));
  $(a).attr("src",$temp);
};
 
 

function plusDivs(n) {
    showDivs(slideIndex += n);
}


window.onload = function(){
 

  var labels = document.querySelectorAll('label');
  var checked = false;
  var last_id = '';
  for(var i = 0; i<labels.length; i++){
    labels[i].addEventListener('mouseup', function(e){
		 
		last="day-"+id;
		if(id==2)
		{ 

		}
     if(last_id.length > 0){
        if(e.currentTarget.getAttribute('for')< last_id)
		{
			id--;
			last="day-"+id;
		}
		
		else if(e.currentTarget.getAttribute('for')> last_id)
		{
			id++;
			last="day-"+id;
		}
		 else if(e.currentTarget.getAttribute('for')==null)
		 {id++;
			last="day-"+id;
		 }
		if(id==3)
		{
			var vid = document.getElementById("myVideo"); 
			vid.src="videos/doctor10.mkv";
			 vid.play(); 
		}
		if(pre==id)
		{
			 
		}
       if(e.currentTarget.getAttribute('for') === last_id){
         last_id = last;
       } else {
		   {
			   last_id = last;
		   }
       }
       
     } else {
       last_id = last;
     }
      if(last_id.length > 0){
        document.getElementById('calendar').className = 'active';
        var index = last_id.split('-')[1];
        var elm_width = window.getComputedStyle(document.querySelector('label[for="'+last_id+'"]')).width;
       if(last_id.match(/0/)){
         document.documentElement.style.setProperty('--margin-left', elm_width);   
       } else if (last_id.match(/1/)){
          document.documentElement.style.setProperty('--margin-left', '0px');
       } else {
         document.documentElement.style.setProperty('--margin-left', '-'+(parseInt(elm_width)*(index-1))+'px');
       }
      } else {
        document.getElementById('calendar').className = '';
        document.documentElement.style.setProperty('--margin-left', '0px');   
      }
    });
  }
}
