//alert("ankit");
var objArray=[];
function objectStore()
 {

var formObject = { };
formObject.uname =  document.getElementById('name').value;
formObject.ureg = document.getElementById('reg').value;
formObject.uadd = document.getElementById('roll').value;
formObject.uroll = document.getElementById('address').value;
formObject.uemail = document.getElementById('email').value;
formObject.uclg = document.getElementById('clg').value;
formObject.cnt = document.getElementById('country').value;
formObject.stt = document.getElementById('state').value;


  objArray.push(formObject);
  //console.log(objArray);
  var txt = " ";
  var x;
  for (x in objArray)
    {

       var variable;
      for (variable in objArray[x]) {
        txt = txt + objArray[x][variable] + " ";
      }
      txt = txt + "<br>" + " ";
      document.getElementById("demo").innerHTML = txt;

    }
}
/*-- reset all values --*/
function reset() {
   document.getElementById('name').value=null;
  document.getElementById('reg').value=null;
  document.getElementById('roll').value=null;
  document.getElementById('address').value=null;
  document.getElementById('email').value=null;
  document.getElementById('clg').value=null;
  document.getElementById('country').value=null;
  document.getElementById('state').value=null;
}
