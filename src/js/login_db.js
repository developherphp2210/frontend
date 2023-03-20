// import { Database } from "../db/database";
// sqlite3 = require('sqlite3').verbose();

window.onload = setInterval(Orologio,6000);

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export function crea_ora(){
    var d = new Date();    
    var ora = addZero(d.getHours());
    var min = addZero(d.getMinutes());
  // var sec = addZero(d.getSeconds());
    var gio = addZero(d.getDate());
    var mes = addZero(d.getMonth()+1);
    var anno = addZero(d.getFullYear());
    return gio+'/'+mes+'/'+anno+' - '+ora+":"+min;
}

function Orologio() {  
  document.getElementById("orologio").innerHTML=crea_ora();
}

