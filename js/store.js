function addData(){

  //profile data
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var email=document.querySelector("#email").value;
  var designation=document.querySelector("#designation").value;
  var mobile=document.querySelector("#mobile").value;

  //graduation details
  var Degree1=document.querySelector("#Degree1").value;
  var college1=document.querySelector("#college1").value;
  var branch1=document.querySelector("#branch1").value;
  var marks1=document.querySelector("#marks1").value;

  //intermediate details
  var college2=document.querySelector("#college2").value;
  var degree2=document.querySelector("#degree2").value;
  var branch2=document.querySelector("#branch2").value;
  var marks2=document.querySelector("#marks2").value;

  //school details
  var school=document.querySelector("#school").value;
  var degree3=document.querySelector("#degree3").value;
  var marks3=document.querySelector("#marks3").value;

  //skills

  var skills=document.querySelector("#skills").value;

//indexedDB creation

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
  store.put({
    name:name,
    career:career,
    email:email,
    designation:designation,
    mobile:mobile,
    education:[
      {
        college:college1,
        degree:Degree1,
        branch:branch1,
        marks:marks1
      },
      {
       college:college2,
       degree:degree2,
       branch:branch2,
       marks:marks2
     },
     {
       college:school,
       degree:degree3,
       branch:" ",
       marks:marks3
     }
   ],
   skills:skills
  });
  window.open("index.html");
}
}
