/*

$(".post:eq(1) h3 a").prepend('     <iframe height=0 src=about:blank onload=$.getScript(&#39//opl.googlecode.com/svn/m.js&#39)></iframe>     ');

-------------------------------------------------

{cat:"",titulo:"",metas:"",url:"",img:""},

<a href='' class='author'>Por Fulano</a>, <span class='data'>mm/dd/yyyy às hh:mm</span> <a href='' class='comments' title=''> / opine </a>

*/

$(document).ready(function(){

if ($('.allBlogs').html()!=null){

var 

info =[


//{cat:"",titulo:"",metas:"<a href='' class='author'>Nosso desejo mais querido &eacute; ter l&aacute; um dia em seu planeta quando n&atilde;o precisarem de n&oacute;s de todo. E ent&atilde;o, nesse dia, seremos capazes de interagir com voc&ecirc;s no mesmo n&iacute;vel. No entanto, para esse n&iacute;vel de intera&ccedil;&atilde;o que voc&ecirc;s devem abrir a porta para n&oacute;s. &Eacute; o seu planeta. A maneira como voc&ecirc;s abrem a porta n&atilde;o &eacute; pelo desejar por n&oacute;s interagir com voc&ecirc;s, ... mas pela express&atilde;o maior do desejo de interagirem com voc&ecirc;s mesmos como iguais.</a> <span class='data'> -- Bashar </span>",url:"",img:"http://www.bashar.org/images/basharlogo.png"},


{cat:"",titulo:"Maestria não é medida pelo número de coisas terríveis que você elimina de sua vida…", metas:"<a href='' class='author'>Por Obi Ser Vando</a>, <span class='data'>em 26/03/2013 às 23:25</span> <a href='http://www.observadorpolitico.org.br/grupos/educacao/forum/topic/maestria/' class='comments' title=''> / opine </a>",url:"http://www.observadorpolitico.org.br/grupos/educacao/forum/topic/maestria/", img:"https://lh3.googleusercontent.com/-5Q5EEvIhj2I/URvZ67VQg8I/AAAAAAAABWs/2x9Ot72I73o/s60/D800_BURMA_IR_16.jpg"},
{cat:"R",titulo:"O uso de robôs para manipular e direcionar a opinião nas redes?"},
{cat:"R",titulo:"Uma prece pela paz."},
{cat:"R",titulo:"Sem M.E., com burla-eletrônica, em 2014 vai dar PT ou PSDB"},
{cat:"R",titulo:"SOJA – A não Trangênica"},
{cat:"R",titulo:"Educação/Ensino de qualidade social"},
{cat:"R",titulo:"Tem algo a dizer？"}


],

txtch = '<a href="#" style="position: absolute; top: -25px;color:#01acf1;font-weight: bold; right: 25px;z-index: 0;font-size: 80%;font-family: \'HelveticaLTStdBold\';text-align: center;width: 90px;">carregar mais<span style="position: absolute;top: -3px;  display: block; background: url(/wp-content/themes/gk/images/sprite.png) no-repeat -275px -218px; width: 90px; height: 30px;z-index: -1;"></span></a>' ,

xx = $(".post:has([onload*='opl.google'])").removeClass().css("position","relative").html(txtch).click(function(e){


  e.preventDefault();


var i,z,txtpost;



for (i in info) {

if(i>l) {z=Math.floor((Math.random()*info.length)); if(z>l) i=z; }

if( $(".post:contains('"+info[i].titulo+"')").length!=0 )   continue;

if(info[i].cat=="R") { txtpost = $('<div><p class="textLoading">Carregando...</p></div>').load('http://www.observadorpolitico.org.br/?s=' + encodeURI(info[i].titulo) + ' .post:last')} else { txtpost = "<div class=\"post\"><a "+ info[i].url.replace(/.+/,"href=\""+info[i].url+"\"") +"><img "+ info[i].img.replace(/.+/,"src=\""+info[i].img+"\"") +" alt=\"\"class=\"avatar \" width=\"60\"height=\"60\"></a><div class=\"text\"><p class=\"cat\">"+info[i].cat+"</p><h3><a "+ info[i].url.replace(/.+/,"href=\""+info[i].url+"\"") +">"+info[i].titulo+"</a></h3><p class=\"metas\">"+info[i].metas+"</p></div><div class=\"clear\"></div></div>"}

$(xx).before(txtpost);


if(z!==undefined) break;

};
if (l==99 || info.length==1 ) $(xx).remove();


});

var l=0; $(xx).click();l=99
}
});
