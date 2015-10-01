/**
 * Created by juanmanuelsanchez on 19/7/15.
 */

/**
 * Created by juanmanuelsanchez on 6/7/15.
 */


(function () {


  var Model = {

    numColumns: 8,
    numRows: 8,
    numCells: 49

  };



  var initialAditzak2 = [

    {
      izenburua: "Nor-Nori-Nork Egite era, Orain Aldia",
      "goikoAditzMota": "Batueraz",
      "behekoAditzMota": "Bizkaieraz",
      "oharra": " ",
      "koadrokoGoikoHeaderBatua": ["Niri", "Hiri", "Hari", "Guri", "Zuri", "Zuei", "Haiei"],
      "koadrokoGoikoHeaderBizkaiera": ["Niri", "Hiri", "Hari", "Guri", "Zuri", "Zuei", "Hareei"],
      "paradigma": [

        {
          leftColumn: ["Nik<br\>&nbsp;&nbsp;&nbsp;"],
          lerroaBatua: [" ", "diat<br\><i>dinat</i>", "diot",  " ", "dizut", " dizuet", "diet"],
          lerroaBizkaiera: [" ", "deuat<br\><i>deunat</i>", "deutsat",  " ", "deutsut", " deutsuet", "deutset"]

        },
        {
          leftColumn: ["Hik"],
          lerroaBatua: ["didak"," ", "diok", "diguk", " ", " ", "diek"],
          lerroaBizkaiera:["deutsak"," ", "deutsak", "deuskuk", " ", " ", "deutsek"]

        }
      ]

    },

    {
      izenburua: "Nor-Nori-Nork Egite era, Lehen Aldia",
      "goikoAditzMota": "Batueraz",
      "behekoAditzMota": "Bizkaieraz",
      "oharra": " ",
      "koadrokoGoikoHeaderBatua": ["Niri", "Hiri", "Hari", "Guri", "Zuri", "Zuei", "Haiei"],
      "koadrokoGoikoHeaderBizkaiera": ["Niri", "Hiri", "Hari", "Guri", "Zuri", "Zuei", "Hareei"],
      "paradigma": [

        {
          leftColumn: ["Nik"],
          lerroaBatua: [" ", "nian", "nion",  " ", "nizun", "nizuen", "nien"],
          lerroaBizkaiera: [" ", "neuan", "neutsan",  " ", "neutsun", "neutsuen", "neutsen"]


        },
        {
          leftColumn: ["Hik"],
          lerroaBatua: ["hidan"," ", "hion", "higun", " ", " ", "hien"],
          lerroaBizkaiera:["heustan"," ", "heutsan", "heuskun", " ", " ", "heutsen"]

        }
      ]

    }


  ];




  var Aditza2 = function(data) {


    this.izenburua = ko.observable(data.izenburua);
    this.goikoAditzMota = ko.observable(data.goikoAditzMota);
    this.behekoAditzMota = ko.observable(data.behekoAditzMota);
    this.oharra = ko.observable(data.oharra);
    this.paradigma = ko.observable(data.paradigma);
    this.koadrokoGoikoHeaderBatua = ko.observable(data.koadrokoGoikoHeaderBatua);
    this.koadrokoGoikoHeaderBizkaiera = ko.observable(data.koadrokoGoikoHeaderBizkaiera);
    this.leftColumn = ko.observable(data.paradigma.leftColumn);
    this.lerroaBatua = ko.observable(data.paradigma.lerroaBatua);
    this.lerroaBizkaiera = ko.observable(data.paradigma.lerroaBizkaiera);

  };




  var TableViewModel2 = function () {

    var self = this;

    this.aditzak2 = ko.observableArray([]);
    initialAditzak2.forEach(function(item) {

      self.aditzak2.push(new Aditza2(item));

    });

    this.currentAditza2=ko.observable(this.aditzak2()[0]);
    this.numColumns = ko.observable(Model.numColumns);
    this.numRows = ko.observable(Model.numRows);
    this.numCells= ko.observable(Model.numCells);
    this.$column = $("thead .ertzeko-col");
    this.$tableBody = $('tbody');


    this.setCurrentAditza2= function(clickedAditza) {

      self.currentAditza2(clickedAditza);

    }


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


  ko.applyBindings(new TableViewModel2());


}());
