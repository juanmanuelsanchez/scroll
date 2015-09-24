
/**
 * Created by juanmanuelsanchez on 6/7/15.
 */


(function () {


  var Model = {

    numColumns: 8,
    numRows: 8,
    numCells: 49

  };



  var initialAditzak1 = [

    {
      izenburua: "Nor-Nori-Nork Egite era, Orain Aldia",
      "koadrokoGoikoHeader": [" ", "Niri", "Hiri", "Hari", "Guri", "Zuri", "Zuei", "Haiei"],
      "paradigma": [

        {
          lerroa: ["Nik", " ", "diat<br\><i>dizkiat</i><br\>dinat<br\><i>dizkinat</i>", "diot<br\><i>dizkiot</i>",  " ", "dizut<br\><i>dizkizut</i>", "dizuet<br\><i>dizkizuet</i>", "diet<br\><i>dizkiet</i>"]
        },
        {
          lerroa: ["Hik", "didak<br\><i>dizkidak</i><br\>didan<br\><i>dizkidan</i>"," ", "diok<br\><i>dizkiok</i><br\>dion<br\><i>dizkion</i>", "diguk<br\><i>dizkiguk</i><br\>digun<br\><i>dizkigun</i>", " ", " ", "diek<br\><i>dizkiek</i><br\>dien<br\><i>dizkien</i>"]
        },
        {
          lerroa: ["Hark", "dit<br\><i>dizkit</i>", "dik<br\><i>dizkik</i><br\>din<br\><i>dizkin</i>", "dio<br\><i>dizkio</i>", "digu<br\><i>dizkigu</i>", "dizu<br\><i>dizkizu</i> ", "dizue<br\><i>dizkizue</i>", "die<br\><i>dizkie</i>"]
        },
        {
          lerroa: ["Guk", " ", "diagu<br\><i>dizkiagu</i><br\>dinagu<br\><i>dizkinagu</i>", "diogu<br\><i>dizkiogu</i>",  " ", "dizugu<br\><i>dizkizugu</i>", "dizuegu<br\><i>dizkizuegu</i>", "diegu<br\><i>dizkiegu</i>"]
        } ,
        {
          lerroa: ["Zuk", "didazu<br\><i>dizkidazu</i>", " ", "diozu<br\><i>dizkiozu</i>",  "diguzu<br\><i>dizkiguzu</i>", " ", " ", "diezu<br\><i>dizkiezu</i>"]
        },
        {
          lerroa: ["Zuek", "didazue<br\><i>dizkidazue</i>", " ", "diozue<br\><i>dizkiozue</i>",  "diguzue<br\><i>dizkiguzue</i>", " ", " ", "diezue<br\><i>dizkiezue</i>"]
        },
        {
          lerroa: ["Haiek", "didate<br\><i>dizkidate</i>", "diate<br\><i>dizkiate</i><br\>dinate<br\><i>dizkinate</i>", "diote<br\><i>dizkiote</i>", "digute<br\><i>dizkigute</i>", "dizute<br\><i>dizkizute</i>", "dizuete<br\><i>dizkizuete</i>", "diete<br\><i>dizkiete</i>"]
        }
      ]
    },

    {
      izenburua: "Nor-Nori-Nork Egite era, Lehen Aldia",
      "koadrokoGoikoHeader": [" ", "Niri", "Hiri", "Hari", "Guri", "Zuri", "Zuei", "Haiei"],
      "paradigma": [

        {
          lerroa: ["Nik", " ", "nian<br\><i>nizkian</i><br\>ninan<br\><i>nizkinan</i>", "nion<br\><i>nizkion</i>",  " ", "nizun<br\><i>nizkizun</i>", "nizuen<br\><i>nizkizuen</i>", "nien<br\><i>nizkien</i>"]
        },
        {
          lerroa: ["Hik", "hidan<br\><i>hizkidan</i>", " ", "hion<br\><i>hizkion</i>", "higun<br\><i>hizkigun</i>", " ", " ", "hien<br\><i>hizkien</i>"]
        },
        {
          lerroa: ["Hark", "zidan<br\><i>zizkidan</i>", "zian<br\><i>zizkian</i><br\>zinan<br\><i>zizkinan</i>", "zion<br\><i>zizkion</i>", "zigun<br\><i>zizkigun</i>", "zizun<br\><i>zizkizun</i> ", "zizuen<br\><i>zizkizuen</i>", "zien<br\><i>zizkien</i>"]
        },
        {
          lerroa: ["Guk", " ", "genian<br\><i>genizkian</i><br\>geninan<br\><i>genizkinan</i>", "genion<br\><i>genizkion</i>",  " ", "genizun<br\><i>genizkizun</i>", "genizuen<br\><i>genizkizuen</i>", "genien<br\><i>genizkien</i>"]
        },
        {
          lerroa: ["Zuk", "zenidan<br\><i>zenizkidan</i>", " ", "zenion<br\><i>zenizkion</i>",  "zenigun<br\><i>zenizkigun</i>", " ", " ", "zenien<br\><i>zenizkien</i>"]
        },
        {
          lerroa: ["Zuek", "zenidaten<br\><i>zenizkidaten</i>", " ", "zenioten<br\><i>zenizkioten</i>",  "zeniguten<br\><i>zenizkiguten</i>", " ", " ", "zenieten<br\><i>zenizkieten</i>"]
        },
        {
          lerroa: ["Haiek", "zidaten<br\><i>zizkidaten</i>", "ziaten<br\><i>zizkiaten</i><br\>zinaten<br\><i>zizkinaten</i>", "zioten<br\><i>zizkioten</i>", "ziguten<br\><i>zizkiguten</i>", "zizuten<br\><i>zizkizuten</i>", "zizueten<br\><i>zizkizueten</i>", "zieten<br\><i>zizkieten</i>"]
        }
      ]
    }

  ];




  var Aditza1 = function(data) {


    this.izenburua = ko.observable(data.izenburua);
    this.paradigma = ko.observable(data.paradigma);
    this.koadrokoGoikoHeader = ko.observable(data.koadrokoGoikoHeader);
    this.lerroa = ko.observable(data.paradigma.lerroa);

  };




  var TableViewModel2 = function () {

    var self = this;

    this.aditzak1 = ko.observableArray([]);
    initialAditzak1.forEach(function(item) {

      self.aditzak1.push(new Aditza1(item));

    });

    this.currentAditza1=ko.observable(this.aditzak1()[0]);
    this.numColumns = ko.observable(Model.numColumns);
    this.numRows = ko.observable(Model.numRows);
    this.numCells= ko.observable(Model.numCells);
    this.$column = $("thead .ertzeko-col");
    this.$tableBody = $('tbody');


    this.setCurrentAditza1= function(clickedAditza) {

      self.currentAditza1(clickedAditza);

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


  ko.applyBindings(new TableViewModel2());


}());
