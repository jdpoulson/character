$(document).ready(function() {
  $("form#character").submit(function(event) {
    event.preventDefault();
    var favorite = $("input:radio[name=favorite]:checked").val();
    var weapon = $("#weapon").val();
    var minion = $("#minion").val();

    if (((favorite === "gru") && (weapon === "shrink ray") && (minion === "0")) || ((favorite === "agnus") && (weapon === "none of these") && (minion === "100")) || ((favorite === "edith") && (weapon === "none of these") && (minion === "100")) || ((favorite === "margo") && (weapon === "none of these") && (minion === "100")) || ((favorite === "vector") && (weapon === "shrink ray") && (minion === "100"))) {
      $(".no-answer").show();
      $(".answer").hide();
    } else {
      if ((favorite === "gru") && (weapon === "shrink ray") && (minion === "100")) {
        $(".character").append("gru")
      }

      if ((favorite === "vector") && (weapon === "shrink ray") && (minion === "0")) {
        $(".character").append("vector")
      }

      if ((favorite === "agnus") && (weapon === "none of these") && (minion === "0")) {
        $(".character").append("agnus")
      }

      if ((favorite === "edith") && (weapon === "none of these") && (minion === "0")) {
        $(".character").append("edith")
      }

      if ((favorite === "margo") && (weapon === "none of these") && (minion === "0")) {
        $(".character").append("margo")
      }
    }
  });
});
