var param;
var paramValue;
var query;
query=window.location.search.substring(1).split("?");
for(i in query){
  param=query[i].split("=");
  paramValue=parseInt(param[1]);
}
var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;

if(!idb in window){
  alert("Browser is not supported");

}
var open=idb.open("StoreData",1);
console.log("indexedDB is created");

open.onupgradeneeded=function(event){
var request=event.target.result;
request.createObjectStore("Formdata",{keyPath:"id",autoIncrement:true});
}
open.onerror=function(error){
  console.log("eror");
}
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("Formdata","readwrite");
  var store=transaction.objectStore("Formdata");
var info=store.get(paramValue);
info.onsuccess=function(data){
  console.log(data.target.result);
  display(data.target.result);

}
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function display(data){
var img=document.createElement("img");
img.src="images/personal.svg";
left.append(img);

var h2=document.createElement("h2");
h2.textContent=data.name;
left.append(h2);
var email=document.createElement("h2");
email.textContent=data.email;
left.append(email);
var designation=document.createElement("h2");
designation.textContent=data.designation;
left.append(designation);
var mobile=document.createElement("h2");
mobile.textContent=data.mobile;
left.append(mobile);

var h2=document.createElement("h2");
h2.textContent="career objectives";
right.append(h2);

var line=document.createElement("hr")
right.append(line);


var obj=document.createElement("h3");
obj.textContent=data.career;
right.append(obj);

var line=document.createElement("hr")
right.append(line);

var h2=document.createElement("h2");
h2.textContent="Educational details";
right.append(h2);

var line=document.createElement("hr")
right.append(line);

var table=document.createElement("table");
let row=" ";
row +="<tr>"+"<th>"+"college name"+"</th>"+
"<th>"+"degree"+"</th>"+
"<th>"+"branch"+"</th>"+
"<th>"+"marks"+"</th>"+
"</tr>";
for (i in data.education){
row += "<tr>"+"<td>"+data.education[i].college+"</td>"+
"<td>"+data.education[i].degree +"</td>"+
"<td>"+data.education[i].branch +"</td>"+
"<td>"+data.education[i].marks +"</td>"+
"</tr>";
table.innerHTML=row;
right.append(table);
}

var line=document.createElement("hr")
right.append(line);

var h2=document.createElement("h2");
h2.textContent="skills";
right.append(h2);

var obj=document.createElement("h3");
obj.textContent=data.skills;
right.append(obj);
}
