"use strict";

var Controller_Index = function() {
  this.init();
  this.setActions();
};

Controller_Index.prototype = {
  "dataView" : null,
  "alcoholData" : null,
  "init": function() {
    this.dataView = new DataView();
    this.alcoholData = new AlcoholData();
  },
  "setActions" : function() {
    var _this = this;
    $(document).on('tap', '#beers', function(e) {
      _this.dataView.beersNo = parseInt($('#beers').val(), 10);
      _this.dataView.renderSlider();
    });
    $(document).on('tap', '#next-to-results', function() {
      _this.alcoholData.saveData();
      _this.alcoholData.calculateData();
      $('#results').find('div[data-role="content"]').html("Rezultatul este: "+_this.alcoholData.calculateData());
    });

  }
}

var ctrl = new Controller_Index();