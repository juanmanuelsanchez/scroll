/**
 * Created by juanmanuelsanchez on 26/9/15.
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



  var initialAditzak3 = [

    {
      izenburua: "Nor-Nori Egite era, Orain Aldia",
      "koadrokoGoikoHeader": ["Niri", "Hiri", "Hari", "Guri", "Zuri", "Zuei", "Haiei"],
      "paradigma": [

        {
          leftColumn: ["Ni<br\>&nbsp;&nbsp;&nbsp;"],
          lerroa: [" ", "natzaik<br\>natzain", "natzaio",  " ", "natzaizu", "natzaizue", "natzaie"]


        },
        {
          leftColumn: ["Hi"],
          lerroa: ["hatzait"," ", "hatzaio", "hatzaigu", " ", " ", "hatzaie"]
        },
        {
          leftColumn: ["Hura<br\>&nbsp;&nbsp;&nbsp;"],
          lerroa: ["zait","zaik<br\>zain", "zaio", "zaigu", "zaizu", "zaizue", "zaie"]
        },
        {
          leftColumn: ["Gu<br\>&nbsp;&nbsp;&nbsp;"],
          lerroa: [" ","gatzaizkik<br\>gatzaizkin", "gatzaizkio", " ", "gatzaizkizu", "gatzaizkizue", "gatzaizkie"]
        },
        {
          leftColumn: ["Zu"],
          lerroa: ["zatzaizkit"," ", "zatzaizkio", "zatzaizkigu ", " ", " ", "zatzaizkie"]
        },
        {
          leftColumn: ["Zuek"],
          lerroa: ["zatzaizkidate"," ", "zatzaizkiote", "zatzaizkigute", " ", " ", "zatzaizkiete"]
        },
        {
          leftColumn: ["Haiek<br\>&nbsp;&nbsp;&nbsp;"],
          lerroa: ["zaizkit", "zaizkik<br\>zaizkin", "zaizkio", "zaizkigu", "zaizkizu", "zaizkizue", "zaizkie"]
        }
      ]

    },

    {
      izenburua: "Nor-Nori Egite era, Lehen Aldia",
      "koadrokoGoikoHeader": ["Niri", "Hiri", "Hari", "Guri", "Zuri", "Zuei", "Haiei"],
      "paradigma": [

        {
          leftColumn: ["Ni<br\>&nbsp;&nbsp;&nbsp;"],
          lerroa: [" ", "nintzaian<br\>nintzainan", "nintzaion",  " ", "nintzaizun", "nintzaizuen", "nintzaien"]
        },
        {
          leftColumn: ["Hi"],
          lerroa: ["hintzaidan"," ", "hintzaion", "hintzaigun", " ", " ", "hintzaien"]
        },
        {
          leftColumn: ["Hura<br\>&nbsp;&nbsp;&nbsp;"],
          lerroa: ["zitzaidan", "zitzaian<br\>zitzainan", "zitzaion",  "zitzaigun", "zitzaizun", "zitzaizuen", "zitzaien"]
        },
        {
          leftColumn: ["Gu<br\>&nbsp;&nbsp;&nbsp;"],
          lerroa: [" ", "gintzaizkian<br\>gintzaizkinan", "gintzaizkion",  " ", "gintzaizkizun", "gintzaizkizuen", "gintzaizkien"]
        },
        {
          leftColumn: ["Zu"],
          lerroa: ["zintzaizkidan", " ", "zintzaizkion",  "zintzaizkigun", " ", " ", "zintzaizkien"]
        },
        {
          leftColumn: ["Zuek"],
          lerroa: ["zintzaizkidaten", " ", "zintzaizkioten",  "zintzaizkiguten", " ", " ", "zintzaizkieten"]
        },
        {
          leftColumn: ["Haiek<br\>&nbsp;&nbsp;&nbsp;"],
          lerroa: ["zitzaizkidan", "zitzaizkian<br\>zitzaizkinan", "zitzaizkion",  "zitzaizkigun", "zitzaizkizun", "zitzaizkizuen", "zitzaizkien"]
        }
      ]
    },
    {
      izenburua: "Nor-Nori, Baldintza, Alegiazkoa",
      "koadrokoGoikoHeader": ["Niri", "Hiri", "Hari", "Guri", "Zuri", "Zuei", "Haiei"],
      "paradigma": [

        {
          leftColumn: ["Ni<br\>&nbsp;&nbsp;&nbsp;"],
          lerroa: [ " ", "banintzaik<br\>banintzain", "banintzaio",  " ", "banintzaizu", "banintzaizue", "banintzaie"]

        },
        {
          leftColumn: ["Hi"],
          lerroa: ["bahintzait"," ", "bahintzaio", "bahintzaigu", " ", " ", "bahintzaie"]
        },
        {
          leftColumn: ["Hura<br\>&nbsp;&nbsp;&nbsp;"],
          lerroa: ["balitzait","balitzaik<br\>balitzain", "balitzaio", "balitzaigu", "balitzaizu", "balitzaizue", "balitzaie"]
        },
        {
          leftColumn: ["Gu<br\>&nbsp;&nbsp;&nbsp;"],
          lerroa: [" ","bagintzaizkik<br\>bagintzaizkin", "bagintzaizkio", " ", "bagintzaizkizu", "bagintzaizkizue", "bagintzaizkie"]
        },
        {
          leftColumn: ["Zu"],
          lerroa: ["bazintzaizkit"," ", "bazintzaizkio", "bazintzaizkigu ", " ", " ", "bazintzaizkie"]
        },
        {
          leftColumn: ["Zuek"],
          lerroa: ["bazintzaizkidate"," ", "bazintzaizkiote", "bazintzaizkigute", " ", " ", "bazintzaizkiete"]
        },
        {
          leftColumn: ["Haiek<br\>&nbsp;&nbsp;&nbsp;"],
          lerroa: ["balitzaizkit", "balitzaizkik<br\>balitzaizkin", "balitzaizkio", "balitzaizkigu", "balitzaizkizu", "balitzaizkizue", "balitzaizkie"]
        }
      ]
    },
    {
      izenburua: "Nor-Nori, Ondorioa, Alegiazkoa",
      "koadrokoGoikoHeader": ["Niri", "Hiri", "Hari", "Guri", "Zuri", "Zuei", "Haiei"],
      "paradigma": [

        {
          leftColumn: ["Ni<br\>&nbsp;&nbsp;&nbsp;"],
          lerroa: [" ", "nintzaiake<br\>nintzainake", "nintzaioke",  " ", "nintzaizuke", "nintzaizueke", "nintzaieke"]
        },
        {
          leftColumn: ["Hi"],
          lerroa: ["hintzaidake"," ", "hintzaioke", "hintzaiguke", " ", " ", "hintzaieke"]
        },
        {
          leftColumn: ["Hura<br\>&nbsp;&nbsp;&nbsp;"],
          lerroa: ["litzaidake", "litzaiake<br\>litzainake", "lizitzaioke",  "litzaiguke", "litzaizuke", "litzaizueke", "litzaieke"]
        },
        {
          leftColumn: ["Gu<br\>&nbsp;&nbsp;&nbsp;"],
          lerroa: [" ", "gintzaizkiake<br\>gintzaizkinake", "gintzaizkioke",  " ", "gintzaizkizuke", "gintzaizkizueke", "gintzaizkieke"]
        },
        {
          leftColumn: ["Zu"],
          lerroa: ["zintzaizkidake", " ", "zintzaizkioke",  "zintzaizkiguke", " ", " ", "zintzaizkieke"]
        },
        {
          leftColumn: ["Zuek"],
          lerroa: ["zintzaizkidakete", " ", "zintzaizkiokete",  "zintzaizkigukete", " ", " ", "zintzaizkiekete"]
        },
        {
          leftColumn: ["Haiek<br\>&nbsp;&nbsp;&nbsp;"],
          lerroa: ["litzaizkidake", "litzaizkiake<br\>litzaizkinake", "litzaizkioke",  "litzaizkiguke", "litzaizkizuke", "litzaizkizueke", "litzaizkieke"]
        }
      ]
    }

  ];




  var Aditza3 = function(data) {


    this.izenburua = ko.observable(data.izenburua);
    this.paradigma = ko.observable(data.paradigma);
    this.koadrokoGoikoHeader = ko.observable(data.koadrokoGoikoHeader);
    this.lerroa = ko.observable(data.paradigma.lerroa);
    this.leftColumn= ko.observable(data.paradigma.leftColumn);


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
