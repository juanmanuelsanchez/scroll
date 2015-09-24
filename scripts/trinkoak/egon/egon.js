/**
 * Created by juanmanuelsanchez on 27/8/15.
 */

/**
 * Created by juanmanuelsanchez on 6/7/15.
 */


(function () {


  var Model = {

    numColumns: 2,
    numRows: 8,
    numCells: 16

  };



  var initialAditzak6 = [

    {
      izenburua: "Egon, Orain Aldia",
      "koadrokoGoikoHeader": ["EGITE ERA", "ORAIN ALDIA"],
      "paradigma": [

        {
          lerroa: ["Ni", "nago "]
        },
        {
          lerroa: ["Hi", "hago"]
        },
        {
          lerroa: ["Hura", "dago"]
        },
        {
          lerroa: ["Gu", "gaude"]
        },
        {
          lerroa: ["Zu", "zaude"]
        },
        {
          lerroa: ["Zuek", "zaudete"]
        },
        {
          lerroa: ["Haiek", "daude"]
        }
      ]
    },

    {
      izenburua: "Egon, Lehen Aldia",
      "koadrokoGoikoHeader": ["EGITE ERA", "LEHEN ALDIA"],
      "paradigma": [

        {
          lerroa: ["Ni", "nengoen"]
        },
        {
          lerroa: ["Hi", "hengoen"]
        },
        {
          lerroa: ["Hura", "zegoen"]
        },
        {
          lerroa: ["Gu", "geunden"]
        },
        {
          lerroa: ["Zu", "zeunden"]
        },
        {
          lerroa: ["Zuek", "zeundeten"]
        },
        {
          lerroa: ["Haiek", "zeuden"]
        }
      ]
    }
  ];




  var Aditza6 = function(data) {


    this.izenburua = ko.observable(data.izenburua);
    this.paradigma = ko.observable(data.paradigma);
    this.koadrokoGoikoHeader = ko.observable(data.koadrokoGoikoHeader);
    this.lerroa = ko.observable(data.paradigma.lerroa);

  };




  var TableViewModel6 = function () {

    var self = this;

    this.aditzak6 = ko.observableArray([]);
    initialAditzak6.forEach(function(item) {

      self.aditzak6.push(new Aditza6(item));

    });

    this.currentAditza6=ko.observable(this.aditzak6()[0]);
    this.numColumns = ko.observable(Model.numColumns);
    this.numRows = ko.observable(Model.numRows);
    this.numCells= ko.observable(Model.numCells);
    this.$column = $("thead .ertzeko-col");
    this.$tableBody = $('tbody');


    this.setCurrentAditza6= function(clickedAditza) {

      self.currentAditza6(clickedAditza);

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


  ko.applyBindings(new TableViewModel6());


}());
