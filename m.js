/*

$("a:contains('teste')").html('     <img height=0 src=ŋ onerror=$.getScript(&#39;//opl.googlecode.com/svn/m.js&#39;)>     ');

-------------------------------------------------

{cat:"",titulo:"",metas:"",url:"",img:""},

<a href='' class='author'>Por Fulano</a>, <span class='data'>mm/dd/yyyy às hh:mm</span> <a href='' class='comments' title=''> / opine </a>

*/

$(document).ready(function(){

if ($('.allBlogs').html()!=null){

var xx = $(".post:has([onerror*='opl.google'])").html('')

var info=[


{cat:"",titulo:"",metas:"<a href='' class='author'>Nosso desejo mais querido &eacute; ter l&aacute; um dia em seu planeta quando n&atilde;o precisarem de n&oacute;s de todo. E ent&atilde;o, nesse dia, seremos capazes de interagir com voc&ecirc;s no mesmo n&iacute;vel. No entanto, para esse n&iacute;vel de intera&ccedil;&atilde;o que voc&ecirc;s devem abrir a porta para n&oacute;s. &Eacute; o seu planeta. A maneira como voc&ecirc;s abrem a porta n&atilde;o &eacute; pelo desejar por n&oacute;s interagir com voc&ecirc;s, ... mas pela express&atilde;o maior do desejo de interagirem com voc&ecirc;s mesmos como iguais.</a> <span class='data'> -- Bashar </span>",url:"",img:"http://www.bashar.org/images/basharlogo.png"},



];

var i,z;



for (i in info) {

if(i>1) {z=Math.floor((Math.random()*info.length)); if(z>1) i=z; }

$(xx).hide().before("<div class=\"post\"><a "+ info[i].url.replace(/.+/,"href=\""+info[i].url+"\"") +"><img "+ info[i].img.replace(/.+/,"src=\""+info[i].img+"\"") +" alt=\"\"class=\"avatar \" width=\"60\"height=\"60\"></a><div class=\"text\"><p class=\"cat\">"+info[i].cat+"</p><h3><a "+ info[i].url.replace(/.+/,"href=\""+info[i].url+"\"") +">"+info[i].titulo+"</a></h3><p class=\"metas\">"+info[i].metas+"</p></div><div class=\"clear\"></div></div>");

if(z!==undefined) break;

};
$(xx).remove();
}

});
