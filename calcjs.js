var calcaction=function(){
	console.log(event);
	result=$('#result')[0]

	if(event.keyCode==8)
	result.value+="0"

	if(event.keyCode==13)
	{
		result.value=eval(result.value)
	}	

	if(event.keyCode==32)
	{
		event.preventDefault();
		result.value=""
	}
	if(event.keyCode==37)
	result.value+="%"
	if(event.keyCode==42)
		result.value+="*"

	if(event.keyCode==45)
		result.value+="-"
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
window.addEventListener('keypress',calcaction)