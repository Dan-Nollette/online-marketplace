$(document).ready(function(){
	$("form#mailingAddress").submit(function(event) {
		event.preventDefault();
    var name_1 = $("#name_1").val();
    var address = $("#address").val();
    var prefix = $("input:radio[name=prefix]:checked").val();
		$("#output").text(prefix + " " + name_1 + " " + address);
  });
});
