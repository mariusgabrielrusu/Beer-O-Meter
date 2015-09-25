var DataView = Backbone.View.extend({
  "beersNo" : 1,
  renderSlider: function() {
    $('#beers').css("background-position", this.beersNo*30-300 + "px , center");
  }
});