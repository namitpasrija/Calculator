function fact(num)
{
    if(num<0)
     return "Undefined";
    var fact=1;
    for(var i=num;i>1;i--)
      fact*=i;
    return fact;
 }

var calcaction=function(){
	result=$('#result')[0]

	console.log(event)

	if(event.type=="keydown")
	{
		if(event.keyCode==8)
		result.value=result.value.substring(0,result.value.length-1)

		if(event.keyCode==27)
		{
		result.value=""
		event.preventDefault();
		}

		return 
	}	

	if(event.keyCode==13)
	{
		result.value=eval(result.value)
	}	

	if(event.keyCode==127)
	{
		result.value=result.value.substring(0,result.value.length-1)
	}

	if(event.keyCode==32)
	{
		result.value=""
		event.preventDefault();
	}

	if(event.keyCode==37)
	result.value+="%"

	if(event.keyCode==42)
		result.value+="*"

	if(event.keyCode==45)
		result.value+="-"

	if(event.keyCode==46)
	result.value+="."

	if(event.keyCode==47)
		result.value+="/"

	if(event.keyCode==40)
		result.value+="("
	if(event.keyCode==41)
		result.value+=")"
	if(event.keyCode==43)
		result.value+="+"
	if(event.keyCode==48)
		result.value+="0"
	if(event.keyCode==49)
		result.value+="1"
	if(event.keyCode==50)
		result.value+="2"
	if(event.keyCode==51)
		result.value+="3"
	if(event.keyCode==52)
		result.value+="4"
	if(event.keyCode==53)
		result.value+="5"
	if(event.keyCode==54)
		result.value+="6"
	if(event.keyCode==55)
		result.value+="7"
	if(event.keyCode==56)
		result.value+="8"
	if(event.keyCode==57)
		result.value+="9"


}
var mouseevents=function(){
	console.log(event)
	
	if(event.target.getAttribute('id')=="number_=")
	{
		result.value=eval(result.value)
	}	
	if(event.target.getAttribute('id')=="number_.")
	{
		result.value+="."
	}	
	if(event.target.getAttribute('id')=="number_log")
	{
		result.value=Math.log10(result.value)
	}


	if(event.target.getAttribute('id')=="number_delete")
	{
		result.value=result.value.substring(0,result.value.length-1)
	}

	if(event.target.getAttribute('id')=="number_fact")
	{
		result.value=fact(result.value)
	}

	if(event.target.getAttribute('id')=="number_AC")
	{
		result.value=""
	}

	if(event.target.getAttribute('id')=="number_root")
	{
		result.value=Math.sqrt(result.value)
	}

	if(event.target.getAttribute('id')=="number_%")
	result.value+="%"

	if(event.target.getAttribute('id')=="number_*")
		result.value+="*"

	if(event.target.getAttribute('id')=="number_-")
		result.value+="-"

	if(event.target.getAttribute('id')=="number_/")
		result.value+="/"

	if(event.target.getAttribute('id')=="number_(")
		result.value+="("

	if(event.target.getAttribute('id')=="number_)")
		result.value+=")"

	if(event.target.getAttribute('id')=="number_+")
		result.value+="+"

	if(event.target.getAttribute('id')=="number_0")
		result.value+="0"

	if(event.target.getAttribute('id')=="number_1")
		result.value+="1"

	if(event.target.getAttribute('id')=="number_2")
		result.value+="2"

	if(event.target.getAttribute('id')=="number_3")
		result.value+="3"

	if(event.target.getAttribute('id')=="number_4")
		result.value+="4"

	if(event.target.getAttribute('id')=="number_5")
		result.value+="5"

	if(event.target.getAttribute('id')=="number_6")
		result.value+="6"

	if(event.target.getAttribute('id')=="number_7")
		result.value+="7"

	if(event.target.getAttribute('id')=="number_8")
		result.value+="8"

	if(event.target.getAttribute('id')=="number_9")
		result.value+="9"

}

window.addEventListener('mousedown',mouseevents)
window.addEventListener('keydown',calcaction)
window.addEventListener('keypress',calcaction)
