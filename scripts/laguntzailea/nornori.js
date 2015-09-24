
/**
 * Created by juanmanuelsanchez on 6/7/15.
 */


(function () {


  var Model = {

    numColumns: 8,
    numRows: 8,
    numCells: 49

  };



  var initialAditzak3 = [

    {
      izenburua: "Nor-Nori Egite era, Orain Aldia",
      "koadrokoGoikoHeader": [" ", "Niri", "Hiri", "Hari", "Guri", "Zuri", "Zuei", "Haiei"],
      "paradigma": [

        {
          lerroa: ["Ni", " ", "natzaik<br\>natzain", "natzaio",  " ", "natzaizu", "natzaizue", "natzaie"]

        },
        {
          lerroa: ["Hi", "hatzait"," ", "hatzaio", "hatzaigu", " ", " ", "hatzaie"]
        },
        {

          lerroa: ["Hura", "zait","zaik<br\>zain", "zaio", "zaigu", "zaizu", "zaizue", "zaie"]
        },
        {
          lerroa: ["Gu", " ","gatzaizkik<br\>gatzaizkin", "gatzaizkio", " ", "gatzaizkizu", "gatzaizkizue", "gatzaizkie"]
        },
        {
          lerroa: ["Zu", "zatzaizkit"," ", "zatzaizkio", "zatzaizkigu ", " ", " ", "zatzaizkie"]
        },
        {
          lerroa: ["Zuek", "zatzaizkidate"," ", "zatzaizkiote", "zatzaizkigute", " ", " ", "zatzaizkiete"]
        },
        {
          lerroa: ["Haiek", "zaizkit", "zaizkik<br\>zaizkin", "zaizkio", "zaizkigu", "zaizkizu", "zaizkizue", "zaizkie"]
        }
      ]

    },

    {
      izenburua: "Nor-Nori Egite era, Lehen Aldia",
      "koadrokoGoikoHeader": [" ", "Niri", "Hiri", "Hari", "Guri", "Zuri", "Zuei", "Haiei"],
      "paradigma": [

        {
          lerroa: ["Ni", " ", "nintzaian<br\>nintzainan", "nintzaion",  " ", "nintzaizun", "nintzaizuen", "nintzaien"]
        },
        {
          lerroa: ["Hi", "hintzaidan"," ", "hintzaion", "hintzaigun", " ", " ", "hintzaien"]
        },
        {
          lerroa: ["Hura", "zitzaidan", "zitzaian<br\>zitzainan", "zitzaion",  "zitzaigun", "zitzaizun", "zitzaizuen", "zitzaien"]
        },
        {
          lerroa: ["Gu", " ", "gintzaizkian<br\>gintzaizkinan", "gintzaizkion",  " ", "gintzaizkizun", "gintzaizkizuen", "gintzaizkien"]
        },
        {
          lerroa: ["Zu", "zintzaizkidan", " ", "zintzaizkion",  "zintzaizkigun", " ", " ", "zintzaizkien"]
        },
        {
          lerroa: ["Zuek", "zintzaizkidaten", " ", "zintzaizkioten",  "zintzaizkiguten", " ", " ", "zintzaizkieten"]
        },
        {
          lerroa: ["Haiek", "zitzaizkidan", "zitzaizkian<br\>zitzaizkinan", "zitzaizkion",  "zitzaizkigun", "zitzaizkizun", "zitzaizkizuen", "zitzaizkien"]
        }
      ]
    },
    {
      izenburua: "Nor-Nori, Baldintza, Alegiazkoa",
      "koadrokoGoikoHeader": [" ", "Niri", "Hiri", "Hari", "Guri", "Zuri", "Zuei", "Haiei"],
      "paradigma": [

        {
          lerroa: ["Ni", " ", "banintzaik<br\>banintzain", "banintzaio",  " ", "banintzaizu", "banintzaizue", "banintzaie"]

        },
        {
          lerroa: ["Hi", "bahintzait"," ", "bahintzaio", "bahintzaigu", " ", " ", "bahintzaie"]
        },
        {

          lerroa: ["Hura", "balitzait","balitzaik<br\>balitzain", "balitzaio", "balitzaigu", "balitzaizu", "balitzaizue", "balitzaie"]
        },
        {
          lerroa: ["Gu", " ","bagintzaizkik<br\>bagintzaizkin", "bagintzaizkio", " ", "bagintzaizkizu", "bagintzaizkizue", "bagintzaizkie"]
        },
        {
          lerroa: ["Zu", "bazintzaizkit"," ", "bazintzaizkio", "bazintzaizkigu ", " ", " ", "bazintzaizkie"]
        },
        {
          lerroa: ["Zuek", "bazintzaizkidate"," ", "bazintzaizkiote", "bazintzaizkigute", " ", " ", "bazintzaizkiete"]
        },
        {
          lerroa: ["Haiek", "balitzaizkit", "balitzaizkik<br\>balitzaizkin", "balitzaizkio", "balitzaizkigu", "balitzaizkizu", "balitzaizkizue", "balitzaizkie"]
        }
      ]
    },
    {
      izenburua: "Nor-Nori, Ondorioa, Alegiazkoa",
      "koadrokoGoikoHeader": [" ", "Niri", "Hiri", "Hari", "Guri", "Zuri", "Zuei", "Haiei"],
      "paradigma": [

        {
          lerroa: ["Ni", " ", "nintzaiake<br\>nintzainake", "nintzaioke",  " ", "nintzaizuke", "nintzaizueke", "nintzaieke"]
        },
        {
          lerroa: ["Hi", "hintzaidake"," ", "hintzaioke", "hintzaiguke", " ", " ", "hintzaieke"]
        },
        {
          lerroa: ["Hura", "litzaidake", "litzaiake<br\>litzainake", "lizitzaioke",  "litzaiguke", "litzaizuke", "litzaizueke", "litzaieke"]
        },
        {
          lerroa: ["Gu", " ", "gintzaizkiake<br\>gintzaizkinake", "gintzaizkioke",  " ", "gintzaizkizuke", "gintzaizkizueke", "gintzaizkieke"]
        },
        {
          lerroa: ["Zu", "zintzaizkidake", " ", "zintzaizkioke",  "zintzaizkiguke", " ", " ", "zintzaizkieke"]
        },
        {
          lerroa: ["Zuek", "zintzaizkidakete", " ", "zintzaizkiokete",  "zintzaizkigukete", " ", " ", "zintzaizkiekete"]
        },
        {
          lerroa: ["Haiek", "litzaizkidake", "litzaizkiake<br\>litzaizkinake", "litzaizkioke",  "litzaizkiguke", "litzaizkizuke", "litzaizkizueke", "litzaizkieke"]
        }
      ]
    }

  ];




  var Aditza3 = function(data) {


    this.izenburua = ko.observable(data.izenburua);
    this.paradigma = ko.observable(data.paradigma);
    this.koadrokoGoikoHeader = ko.observable(data.koadrokoGoikoHeader);
    this.lerroa = ko.observable(data.paradigma.lerroa);

  };




  var TableViewModel3 = function () {

    var self = this;

    this.aditzak3 = ko.observableArray([]);
    initialAditzak3.forEach(function(item) {

      self.aditzak3.push(new Aditza3(item));

    });

    this.currentAditza3=ko.observable(this.aditzak3()[0]);
    this.numColumns = ko.observable(Model.numColumns);
    this.numRows = ko.observable(Model.numRows);
    this.numCells= ko.observable(Model.numCells);
    this.$column = $("thead .ertzeko-col");
    this.$tableBody = $('tbody');


    this.setCurrentAditza3= function(clickedAditza) {

      self.currentAditza3(clickedAditza);

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

  ko.applyBindings(new TableViewModel3());


}());
