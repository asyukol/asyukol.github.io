"use strict"
window.addEventListener("change",Calc);
window.addEventListener("change",Change);
function Calc()
{
  let age = document.getElementById("age").value;
  let num = document.getElementById("numberOfVyhuhols");
  let sum = 0; 
  let final = document.getElementById("calculated");
  if (age==0)
  {
  	sum=0;
  	document.getElementById("takida").style.display="none";
  }
  if (age==3000)
  {
  	sum=age*num.value;
  	document.getElementById("takida").style.display="none";
  }
  if (age==7500)
  {
  	let tutorial = document.getElementById('trainingTutorial');
  	if (tutorial.checked == true) sum=age*num.value+(+tutorial.value);
  	else sum=age*num.value;
  	document.getElementById("takida").style.display="none";
  }
  if (age==12000)
  {
  	let off0 = document.getElementById("zero");
  	let off1 = document.getElementById("one");
  	let off2 = document.getElementById("two");
  	let off3 = document.getElementById("three");
  	if(zero.checked==true) sum=parseInt(zero.value);
  	if(one.checked==true) sum=parseInt(one.value);
  	if(two.checked==true) sum=parseInt(two.value);
  	if(three.checked==true) sum=parseInt(three.value);
  	sum=(sum+(+age))*num.value;
  	document.getElementById("takida").style.display="block";
  }
  final.innerHTML = sum;
}
function Change()
{
	let age = document.getElementById("age").value;
	if(age==7500)
	{
		document.getElementById("tutorial").style.display="block";
		document.getElementById("offsprings").style.display="none";
	}
	else if(age==12000)
	{
		document.getElementById("tutorial").style.display="none";
		document.getElementById("offsprings").style.display="block";
	}
	else
	{
		document.getElementById("tutorial").style.display="none";
		document.getElementById("offsprings").style.display="none";
	}

}
