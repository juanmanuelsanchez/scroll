
/**
 * Created by juanmanuelsanchez on 6/7/15.
 */


(function () {


  var Model = {

    numColumns: 2,
    numRows: 8,
    numCells: 16

  };



  var initialAditzak4 = [

     {
      izenburua: "Nor, Orain Aldia",
      "koadrokoGoikoHeader": ["EGITE ERA", "ORAIN ALDIA"],
      "paradigma": [

        {
          lerroa: ["Ni", "naiz "]
        },
        {
          lerroa: ["Hi", "haiz"]
        },
        {
          lerroa: ["Hura", "da"]
        },
        {
          lerroa: ["Gu", "gara"]
        },
        {
          lerroa: ["Zu", "zara"]
        },
        {
          lerroa: ["Zuek", "zarete"]
        },
        {
          lerroa: ["Haiek", "dira"]
        }
      ]
    },

     {
      izenburua: "Nor, Lehen Aldia",
      "koadrokoGoikoHeader": ["EGITE ERA", "LEHEN ALDIA"],
      "paradigma": [

        {
          lerroa: ["Ni", "nintzen "]
        },
        {
          lerroa: ["Hi", "hintzen"]
        },
        {
          lerroa: ["Hura", "zen"]
        },
        {
          lerroa: ["Gu", "ginen"]
        },
        {
          lerroa: ["Zu", "zinen"]
        },
        {
          lerroa: ["Zuek", "zineten"]
        },
        {
          lerroa: ["Haiek", "ziren"]
        }
      ]
    },
    {
      izenburua: "Nor, Baldintza, Alegiazkoa",
      "koadrokoGoikoHeader": ["BALDINTZA", "ALEGIAZKOA"],
      "paradigma": [

        {
          lerroa: ["Ni", "banintz "]
        },
        {
          lerroa: ["Hi", "bahintz"]
        },
        {
          lerroa: ["Hura", "balitz"]
        },
        {
          lerroa: ["Gu", "bagina"]
        },
        {
          lerroa: ["Zu", "bazina"]
        },
        {
          lerroa: ["Zuek", "bazinete"]
        },
        {
          lerroa: ["Haiek", "balira"]
        }
      ]
    },
    {
      izenburua: "Nor, Ondorioa, Alegiazkoa",
      "koadrokoGoikoHeader": ["ONDORIOA", "ALEGIAZKOA"],
      "paradigma": [

        {
          lerroa: ["Ni", "nintzateke "]
        },
        {
          lerroa: ["Hi", "hintzateke"]
        },
        {
          lerroa: ["Hura", "litzateke"]
        },
        {
          lerroa: ["Gu", "ginateke"]
        },
        {
          lerroa: ["Zu", "zinateke"]
        },
        {
          lerroa: ["Zuek", "zinatekete"]
        },
        {
          lerroa: ["Haiek", "lirateke"]
        }
      ]
    }


  ];




  var Aditza4 = function(data) {


    this.izenburua = ko.observable(data.izenburua);
    this.paradigma = ko.observable(data.paradigma);
    this.koadrokoGoikoHeader = ko.observable(data.koadrokoGoikoHeader);
    this.lerroa = ko.observable(data.paradigma.lerroa);

  };




  var TableViewModel4 = function () {

    var self = this;

    this.aditzak4 = ko.observableArray([]);
    initialAditzak4.forEach(function(item) {

      self.aditzak4.push(new Aditza4(item));

    });

    this.currentAditza4=ko.observable(this.aditzak4()[0]);
    this.numColumns = ko.observable(Model.numColumns);
    this.numRows = ko.observable(Model.numRows);
    this.numCells= ko.observable(Model.numCells);
    this.$column = $("thead .ertzeko-col");
    this.$tableBody = $('tbody');


    this.setCurrentAditza4= function(clickedAditza) {

      self.currentAditza4(clickedAditza);

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


  ko.applyBindings(new TableViewModel4());


}());
