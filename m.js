/*

$(".post:eq(1) h3 a").prepend('     <iframe height=0 src=about:blank onload=$.getScript(&#39//opl.googlecode.com/svn/m.js&#39)></iframe>     ');

-------------------------------------------------

{cat:"",titulo:"",metas:"",url:"",img:"",p:0},

<a href='' class='author'>Por Fulano</a>, <span class='data'>mm/dd/yyyy às hh:mm</span> <a href='' class='comments' title=''> / opine </a>

*/

$(document).ready(function(){

if ($('.allBlogs').html()!=null){

var 

info =[


  {cat:"R",titulo:"Atenção: Robô AÉzista rouba identidade de Elton Luis Gouvêa e escandaliza OP",p:0},

{cat:"",titulo:"<button type='button' onclick='$(\\\'.detailSeta\\\').click();int=setInterval(function(){$(\\\'.post:has(.user-9458-avatar,.user-7268-avatar)\\\').hide()},3000)' >Clique aqui para ocultar robôs Barbara e Juca</button>",metas:"",url:"",img:"",p:0},

 {cat:"",titulo:"PT♥PSDB: PerFeitos um para o outro.", metas:"<a href='' class='author'>Por Obi Ser Vando</a>, <span class='data'> em 20/04/2013 às 11:14 </span> <a href='http://www.observadorpolitico.org.br/grupos/cultura/forum/topic/pt%e2%99%a5psdb-perfeitos-um-para-o-outro/#comments' class='comments' title=''> / opinar </a>",url:"http://www.observadorpolitico.org.br/grupos/cultura/forum/topic/pt%e2%99%a5psdb-perfeitos-um-para-o-outro/", img:"http://3.bp.blogspot.com/-IUhQMxTvQls/T3RwAx1rumI/AAAAAAAAFh0/FhjAmA58xbg/s60/PSDB+COM+PT.jpg",p:0},

{cat:"",titulo:"10 Estratégias de Manipulação Midiática", metas:"<a href='' class='author'>Por Obi Ser Vando</a>, <span class='data'> em 22/04/2013 às 14:40  </span> <a href='http://www.observadorpolitico.org.br/grupos/comunicacao/forum/topic/10-estrategias-de-manipulacao-midiatica/#comments' class='comments' title=''> / opinar </a>",url:"http://www.observadorpolitico.org.br/grupos/comunicacao/forum/topic/10-estrategias-de-manipulacao-midiatica/", img:"http://4.bp.blogspot.com/_GrBPCsNjVJQ/TSMJKrKyJjI/AAAAAAAAAqA/Pk_Dj6mxaBw/s60/aten%25C3%25A7%25C3%25A3o_manipula%25C3%25A7%25C3%25A3o.png",p:0},

  {cat:"",titulo:"MÍDIA ESCONDE PROCESSO CONTRA AÉCIO", metas:"<a href='' class='author'>Por lauro esteves</a>, <span class='data'> em 11/04/2013 às 11:57  </span> <a href='http://www.observadorpolitico.org.br/grupos/eleicoes-2/forum/topic/midia-esconde-processo-contra-aecio/#comments' class='comments' title=''> / opinar </a>",url:"http://www.observadorpolitico.org.br/grupos/eleicoes-2/forum/topic/midia-esconde-processo-contra-aecio/", img:"http://i.imgur.com/Bkff2xns.jpg",p:0},


  {cat:"R",titulo:"O uso de robôs para manipular e direcionar a opinião nas redes?",p:0},
  {cat:"R",titulo:"Uma prece pela paz.",p:0},
  {cat:"R",titulo:"SOJA – A não Trangênica",p:0},
  {cat:"R",titulo:"Educação/Ensino de qualidade social",p:0},
  
  {cat:"",titulo:"As palavras são a fonte menos confiável da Verdade.", metas:"<a href='' class='author'>Por Obi Ser Vando</a>, <span class='data'> em 17/04/2013 às 10:51 </span> <a href='http://www.observadorpolitico.org.br/grupos/comunicacao/forum/topic/informacao-a-imprensa-2/#comments' class='comments' title=''> /  opinar  </a>",url:"http://www.observadorpolitico.org.br/grupos/comunicacao/forum/topic/informacao-a-imprensa-2/", img:"https://lh5.googleusercontent.com/-VyrEnxqEApk/USCjgllGgPI/AAAAAAAABNY/L5NyneX99qk/s100/StrawberriesHigh_29C5465.jpg",p:0},

  {cat:"",titulo:"Qual é a melhor escolha?", metas:"<a href='' class='author'>Por Obi Ser Vando</a>, <span class='data'> em 18/04/2013 às 11:06 </span> <a href='http://www.observadorpolitico.org.br/grupos/mundo-2/forum/topic/qual-e-a-melhor-escolha/#comments' class='comments' title=''> / opinar </a>",url:"http://www.observadorpolitico.org.br/grupos/mundo-2/forum/topic/qual-e-a-melhor-escolha/", img:"https://lh4.googleusercontent.com/-lR5gLLgckqE/TU1eYDeuqEI/AAAAAAAADzk/3CnpTzmpWIE/s100/Your%252520Choice%252520is%252520Your%252520Way.jpg",p:0},


  {cat:"R",titulo:"Tem algo a dizer？",p:0}


],

txtch = '<a href="#" style="position: absolute; top: -25px;color:#01acf1;font-weight: bold; right: 25px;z-index: 0;font-size: 80%;font-family: \'HelveticaLTStdBold\';text-align: center;width: 90px;">carregar mais<span style="position: absolute;top: -3px;  display: block; background: url(/wp-content/themes/gk/images/sprite.png) no-repeat -275px -218px; width: 90px; height: 30px;z-index: -1;"></span></a>' ,

$xx = $(".post:has([onload*='opl.google'])").removeClass().css("position","relative").html(txtch).click(function(e){


  e.preventDefault();


var i,z,txtpost;



for (i in info) {

  if( l==-2) {z=i } else if( l==-3){l=-2}  else if( l==-4){l=-3}  else if(i>l) {z=Math.floor((Math.random()*info.length)); if(z>l) i=z; } 

if( info[i].p!=0 )   continue;

if(info[i].cat=="R") { txtpost = $('<div><p class="textLoading">Carregando...</p></div>').load('http://www.observadorpolitico.org.br/?s=' + encodeURI(info[i].titulo) + ' .post:last')} else { txtpost = "<div class=\"post\"><a "+ info[i].url.replace(/.+/,"href=\""+info[i].url+"\"") +"><img "+ info[i].img.replace(/.+/,"src=\""+info[i].img+"\"") +" alt=\"\"class=\"avatar \" width=\"60\"height=\"60\"></a><div class=\"text\"><p class=\"cat\">"+info[i].cat+"</p><h3><a "+ info[i].url.replace(/.+/,"href=\""+info[i].url+"\"") +">"+info[i].titulo+"</a></h3><p class=\"metas\">"+info[i].metas+"</p></div><div class=\"clear\"></div></div>"}

$xx.before(txtpost); info[i].p=1

if(z!==undefined) break;

};
if (l==99 || info.length==1 ) $xx.remove();


});

var l=-4; $xx.click();l=99
}
});
