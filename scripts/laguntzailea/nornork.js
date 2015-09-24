
/**
 * Created by juanmanuelsanchez on 6/7/15.
 */


(function () {


  var Model = {

    numColumns: 8,
    numRows: 8,
    numCells: 49

  };



  var initialAditzak5 = [

    {
      izenburua: "Nor-Nork Egite era, Orain Aldia",
      "koadrokoGoikoHeader": [" ", "Ni", "Hi", "Hura", "Gu", "Zu", "Zuek", "Haiek"],
      "paradigma": [

        {
          lerroa: ["Nik", " ", "haut", "dut", " ", "zaitut", "zaituztet", "ditut"]
        },
        {
          lerroa: ["Hik", "nauk<br\>naun", " ", "duk<br\>dun", "gaituk<br\>gaitun", " ", " ", "dituk<br\>ditun"]
        },
        {
          lerroa: ["Hark", "nau", "hau", "du", "gaitu", "zaitu", "zaituzte", "ditu"]
        },
        {
          lerroa: ["Guk", "", "haugu", "dugu", " ", "zaitugu", "zaituztegu", "ditugu"]
        },
        {
          lerroa: ["Zuk", "nauzu", " ", "duzu", "gaituzu", " ", " ", "dituzu"]
        },
        {
          lerroa: ["Zuek", "nauzue", " ", "duzue", "gaituzue", " ", " ", "dituzue"]
        },
        {
          lerroa: ["Haiek", "naute", "haute", "dute", "gaituzte", "zaituzte", "zaituzte(te)", "dituzte"]
        }
      ]
    },
    {
      izenburua: "Nor-Nork Egite era, Lehen Aldia",
      "koadrokoGoikoHeader": [" ", "Ni", "Hi", "Hura", "Gu", "Zu", "Zuek", "Haiek"],
      "paradigma": [

        {
          lerroa: ["Nik", " ", "hindudan", "nuen", " ", "zintudan", "zintuztedan", "nituen"]
        },
        {
          lerroa: ["Hik", "ninduan<br\>nindunan", " ", "huen", "gintuan<br\>gintunan", " ", " ", "hituen"]
        },
        {
          lerroa: ["Hark", "ninduen", "hinduen", "zuen", "gintuen", "zintuen", "zintuzten", "zituen"]
        },
        {
          lerroa: ["Guk", " ", "hindugun", "genuen", " ", "zintugun", "zintuztegun", "genituen"]
        },
        {
          lerroa: ["Zuk", "ninduzun", " ", "zenuen", "gintuzun", " ", " ", "zenituen"]
        },
        {
          lerroa: ["Zuek", "ninduzuen", " ", "zenuten", "gintuzuen", " ", " ", "zenituzten"]
        },
        {
          lerroa: ["Haiek", "ninduten", "hinduten", "zuten", "gintuzten", "zintuzten", "zintuzte(te)n", "zituzten"]
        }
      ]
    }
  ];




  var Aditza5 = function(data) {


    this.izenburua = ko.observable(data.izenburua);
    this.paradigma = ko.observable(data.paradigma);
    this.koadrokoGoikoHeader = ko.observable(data.koadrokoGoikoHeader);
    this.lerroa = ko.observable(data.paradigma.lerroa);

  };




  var TableViewModel5 = function () {

    var self = this;

    this.aditzak5 = ko.observableArray([]);
    initialAditzak5.forEach(function(item) {

      self.aditzak5.push(new Aditza5(item));

    });

    this.currentAditza5=ko.observable(this.aditzak5()[0]);
    this.numColumns = ko.observable(Model.numColumns);
    this.numRows = ko.observable(Model.numRows);
    this.numCells= ko.observable(Model.numCells);
    this.$column = $("thead .ertzeko-col");
    this.$tableBody = $('tbody');


    this.setCurrentAditza5= function(clickedAditza) {

      self.currentAditza5(clickedAditza);

    };


  };

  ko.bindingHandlers.animationTwo = {

    init: function(element) {

      $(element).animate({opacity:1},200);


    }

  };

  ko.bindingHandlers.animationOne = {

    init: function(element, valueAccessor) {

      var value = valueAccessor();

      $(element).toggle(ko.unwrap(value));

    },

    update: function(element, valueAccessor) {

      var value = valueAccessor();
      ko.unwrap(value) ? $(element).fadeIn(600) : $(element).fadeOut(600);


    }

  };

  var menuIcon = $("#paradigmakList");
  var header = $("#header");

  $(menuIcon).on("click", "#listItem", function(event) {

    console.log("testing");
    $(header).collapsible("collapse");
  });


  ko.applyBindings(new TableViewModel5());


}());
