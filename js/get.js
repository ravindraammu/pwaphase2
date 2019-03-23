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
  var final=store.getAll();
  final.onsuccess=function(event){
    var result=event.target.result;
    console.log(result);
    display(result);
  }
}

function display(data){
  var parent=document.querySelector(".parent");
  for(var i = 0; i < data.length; i++){
    var child=document.createElement("div");
    child.classList.add("child");
  var image=document.createElement("img");
  image.src="images/girl.svg";
  image.alt=data[i].name;

  var name=document.createElement("h2");
  name.textContent=data[i].name;

  var email=document.createElement("p");
  email.textContent=data[i].email;

  var name=document.createElement("h2");
  name.textContent=data[i].name;

  child.append(image);
  child.append(name);
  child.append(email);
  parent.append(child);

  var link=document.createElement("a");
  link.href="resume.html?id="+data[i].id;
  link.textContent="view profile";
  child.append(link);

}
}
