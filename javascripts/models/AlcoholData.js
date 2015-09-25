var AlcoholData = Backbone.Model.extend({
  "sex" : null,
  "weight" : null,
  "food" : null,
  "age" : null,
  "beers" : null,
  "urlRoot" : '/',
  "saveData" : function () {
    this.sex = $("select[name='sex']").val();
    this.weight = parseInt($("#weight").val(), 10);
    this.food = $("select[name='food'").val();
    this.age = parseInt($("#age").val(), 10);
    this.beers = parseInt($("#beers").val(), 10);
  },
  "calculateData" : function() {
    var bac, r, alcDose, _this = this;
    alcDose = this.beers*0.5*(5/100)*0.789;
    this.sex === "male" ? r = 0.68 : r = 0.55;
    bac = (alcDose/(this.weight*r))*100;
    return bac;
  }
});