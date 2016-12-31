var companyLogoName = "VTRY for TEST";
var companyId = "vtry_for_test";
var glassesModelBaseUrlLocal = "http://localhost/preview/model/"+companyId+"/";
var glassesModelBaseUrlServer = "http://vtry.us/preview/model/"+companyId+"/";
window.vtryServiceUrl = "http://vtry.us/preview/avatar/service/";
var vtryServiceUrlLocal = "http://localhost/preview/avatar/service/";
//var modelIdList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17'];
var template = "<div class='glasses'>";
template +="<p class='name'></p>";
template +="<img>";
template +="<span class='price'>$19.95</span>";
template +="<button class='btnTryOn'>Try On</button>";
template +="</div>";

$(document).ready(function () {
	$(".logo").text(companyLogoName);
	var curUrl = window.location.href;
	var isLocal = curUrl.indexOf("localhost")>=0;
	var glassesModelBaseUrl = isLocal? glassesModelBaseUrlLocal: glassesModelBaseUrlServer;
  if (isLocal) {
    window.vtryServiceUrl = vtryServiceUrlLocal;
  }
  $.getJSON("get_folders.php", function(data){
      var modelIdList = data;
      for (var i=0; i<modelIdList.length; i++) {
          var g = $(template);
          var id = modelIdList[i];
          var url = glassesModelBaseUrl+id+"/thumb.jpg";
          g.find("img").attr("src", url);
          var action = "vtry('"+id+"')";
          g.find(".btnTryOn").attr("onclick", action);
          g.find(".name").text(id);
          var price = Math.floor(Math.random()*300+100);
          price = "$"+price+".95";
          g.find(".price").text(price);
          $("#container").append(g);
          }
});

});
