/**
 * Created by juanmanuelsanchez on 9/7/15.
 */


(function () {
 "use strict";

  var Model = {

    numColumns: 3,
    numRowsGoikoa: 4,
    numRowsBehekoa: 2,
    numCellsGoikoa: 6,
    numCellsBehekoa: 3,
    deklinabideMotak: ["Nor", "Nork", "Nori"],
    aditzak: [],
    izenordeak: []

  };


  var initialDeklinabideak = [

    {
      "izenburua": "Nor",
      "border": "border:1px solid white",
      "oharra": " ",
      "display": "display:none",
      "singularraId": "singularra",
      "pluralaId": "plurala",
      "koadrokoBehekoHeader": ["GALDETZAILEAK", "ERAKUSLEAK", "PERTSONA-IZORD."],
      "behekoParadigma": ["Nor<br\>Nortzuk<br\>Zer<br\>Zein<br\>Zeintzuk<br\>Zenbat", "Hau<br\>Hori<br\>Hura<br\><br\>Hauek<br\>Horiek<br\>Haiek", "Ni<br\>Hi<br\>Hura<br\>Gu<br\>Zu<br\>Zuek<br\>Haiek"],
      "goikoParadigma": [

        {
          "lerroa": ["-A", "-AK", "Ø"]
        },
        {
          "lerroa": ["mutilA<br\>semeA<br\>neskA", "mutilAK<br\>semeAK<br\>neskAK", "mutil<br\>seme<br\>neska"]
        }
      ]
    },
    {
      "izenburua": "Partitiboa",
      "border": "border:none",
      "oharra": " ",
      "display": "display:none",
      "singularraId": "singularra",
      "pluralaId": "plurala",
      "koadrokoBehekoHeader": [" "],
      "behekoParadigma":[" "],
      "goikoParadigma": [

        {
          "lerroa": ["-", "-", "-(r)IK"]
        },
        {
          "lerroa": [" ", " ", "mutilIK<br\>semeRIK<br\>neskaRIK"]
        }
      ]
    },
    {
      "izenburua": "Nork",
      "border": "border:1px solid white",
      "oharra": " ",
      "display": "display:none",
      "singularraId": "singularra",
      "pluralaId": "plurala",
      "koadrokoBehekoHeader": ["GALDETZAILEAK", "ERAKUSLEAK", "PERTSONA-IZORD."],
      "behekoParadigma": ["Nork<br\>Nortzuek<br\>Zerk<br\>Zeinek<br\>Zeintzuek<br\>Zenbatek", "Honek<br\>Horrek<br\>Hark<br\><br\>Hauek<br\>Horiek<br\>Haiek", "Nik<br\>Hik<br\>Hark<br\>Guk<br\>Zuk<br\>Zuek<br\>Haiek"],
      "goikoParadigma": [

        {
          "lerroa": ["-AK", "-EK", "-(e)K"]
        },
        {
          "lerroa": ["mutilAK<br\>semeAK<br\>neskAK", "mutilEK<br\>semeEK<br\>neskEK", "mutilEK<br\>semeK<br\>neskaK"]
        }
      ]
    },
    {
      "izenburua": "Nori",
      "border": "border:1px solid white",
      "oharra": " ",
      "display": "display:none",
      "singularraId": "singularra",
      "pluralaId": "plurala",
      "koadrokoBehekoHeader": ["GALDETZAILEAK", "ERAKUSLEAK", "PERTSONA-IZORD."],
      "behekoParadigma": ["Nori<br\>Nortzuei<br\>Zeri<br\>Zeini<br\>Zeintzuei<br\>Zenbati", "Honi<br\>Horri<br\>Hari<br\><br\>Hauei<br\>Horiei<br\>Haiei", "Niri<br\>Hiri<br\>Hari<br\>Guri<br\>Zuri<br\>Zuei<br\>Haiei"],
      "goikoParadigma": [

        {
          "lerroa": ["-ARI", "-EI", "-(r)I"]
        },
        {
          "lerroa": ["mutilARI<br\>semeARI<br\>neskARI", "mutilEI<br\>semeEI<br\>neskEI", "mutilI<br\>semeRI<br\>neskaRI"]
        }
      ]
    },
    {
      "izenburua": "Noren",
      "border": "border:1px solid white",
      "oharra": " ",
      "display": "display:none",
      "singularraId": "singularra",
      "pluralaId": "plurala",
      "koadrokoBehekoHeader": ["GALDETZAILEAK", "ERAKUSLEAK", "PERTSONA-IZORD."],
      "behekoParadigma": ["Noren<br\>Nortzuen<br\>Zeren<br\>Zeinen<br\>Zeintzuen<br\>Zenbaten", "Honen<br\>Horren<br\>Haren<br\><br\>Hauen<br\>Horien<br\>Haien", "Nire<br\>Hire<br\>Haren<br\>Gure<br\>Zure<br\>Zuen<br\>Haien"],
      "goikoParadigma": [

        {
          "lerroa": ["-AREN", "-EN", "-(r)EN"]
        },
        {
          "lerroa": ["mutilAREN<br\>semeAREN<br\>neskAREN", "mutilEN<br\>semeEN<br\>neskEN", "mutilEN<br\>semeREN<br\>neskaREN"]
        }
      ]
    },
    {
      "izenburua": "Norentzat",
      "border": "border:1px solid white",
      "oharra": "NOREN + -TZAT -> NORENTZAT",
      "display": "display:block",
      "singularraId": "singularra",
      "pluralaId": "plurala",
      "koadrokoBehekoHeader": ["GALDETZAILEAK", "ERAKUSLEAK", "PERTSONA-IZORD."],
      "behekoParadigma": ["Norentzat<br\>Nortzuentzat<br\><br\>Zeinentzat<br\>Zeintzuentzat<br\>Zenbatentzat", "Honentzat<br\>Horrentzat<br\>Harentzat<br\><br\>Hauentzat<br\>Horientzat<br\>Haientzat", "Niretzat<br\>Hiretzat<br\>Harentzat<br\>Guretzat<br\>Zuretzat<br\>Zuentzat<br\>Haientzat"],
      "goikoParadigma": [

        {
          "lerroa": ["-ARENTZAT", "-ENTZAT", "-(r)ENTZAT"]
        },
        {
          "lerroa": ["mutilARENTZAT<br\>semeARENTZAT<br\>neskARENTZAT", "mutilENTZAT<br\>semeENTZAT<br\>neskENTZAT", "mutilENTZAT<br\>semeRENTZAT<br\>neskaRENTZAT"]
        }
      ]
    },
    {
      "izenburua": "Norekin",
      "border": "border:1px solid white",
      "oharra": "NORE(N) + -KIN -> NOREKIN",
      "display": "display:block",
      "singularraId": "singularra",
      "pluralaId": "plurala",
      "koadrokoBehekoHeader": ["GALDETZAILEAK", "ERAKUSLEAK", "PERTSONA-IZORD."],
      "behekoParadigma": ["Norekin<br\>Nortzuekin<br\>Zerekin<br\>Zeinekin<br\>Zeintzuekin<br\>Zenbatekin", "Honekin<br\>Horrekin<br\>Harekin<br\><br\>Hauekin<br\>Horiekin<br\>Haiekin", "Nirekin<br\>Hirekin<br\>Harekin<br\>Gurekin<br\>Zurekin<br\>Zuekin<br\>Haiekin"],
      "goikoParadigma": [

        {
          "lerroa": ["-AREKIN", "-EKIN", "-(r)EKIN"]
        },
        {
          "lerroa": ["mutilAREKIN<br\>semeAREKIN<br\>neskAREKIN", "mutilEKIN<br\>semeEKIN<br\>neskEKIN", "mutilEKIN<br\>semeREKIN<br\>neskaREKIN"]
        }
      ]
    },
    {
      "izenburua": "Zerez/Zertaz",
      "border": "border:1px solid white",
      "oharra": "<sup>1</sup>Diptongoa duten silaba bakarreko hitzak salbuespen dira:&nbsp;gau, gai, jai, dei,...&nbsp;Adibidez:&nbsp;gauEZ, gaiEZ, jaiEZ,...&nbsp;Beraz,&nbsp;<sup>*</sup>gauZ,<sup>*</sup>gaiZ...&nbsp;ez dira zuzenak.",
      "display": "display:block",
      "singularraId": "singularra",
      "pluralaId": "plurala",
      "koadrokoBehekoHeader": ["GALDETZAILEAK", "ERAKUSLEAK", "PERTSONA-IZORD."],
      "behekoParadigma": ["Nortaz<br\>Nortzuetaz<br\>Zerez/zertaz<br\>Zeine(ta)z<br\>Zeintzue(ta)z<br\>Zenbate(ta)z", "Honetaz<br\>Horretaz<br\>Hartaz<br\><br\>Hauetaz<br\>Horietaz<br\>Haietaz", "Nitaz<br\>Hitaz<br\>Hartaz<br\>Gutaz<br\>Zutaz<br\>Zuetaz<br\>Haietaz"],
      "goikoParadigma": [

        {
          "lerroa": ["-AZ", "-EZ", "-(e)Z<br\>-(e)TAZ"]
        },
        {
          "lerroa": ["mutilAZ<br\>eskuAZ<br\>neskAZ", "mutilEZ<br\>eskuEZ<br\>neskEZ", "mutilEZ<br\>eskuZ<sup>1</sup><br\>neskaZ"]
        }
      ]
    },
    {
      "izenburua": "Non",
      "border": "border:1px solid white",
      "oharra": " ",
      "display": "display:none",
      "singularraId": "nonSingularra",
      "pluralaId": "nonPlurala",
      "koadrokoBehekoHeader": ["GALDETZAILEAK", "ERAKUSLEAK", "LEKU-ADITZOND."],
      "behekoParadigma": ["Non<br\>Zertan<br\>Zeinetan<br\>Zeintzuetan<br\>Zenbate(t)an", "Honetan<br\>Horretan<br\>Hartan<br\><br\>Hauetan<br\>Horietan<br\>Haietan", "Hor<br\>Hemen<br\>Han"],
      "goikoParadigma": [

        {
          "lerroa": ["-(e)AN", "-ETAN", "-(e)TAN<br\>-(e)N"]
        },
        {
          "lerroa": ["komunEAN<br\>etxeAN<br\>tabernAN", "komunETAN<br\>etxeETAN<br\>tabernETAN", "komunETAN<br\>etxeTAN<br\>tabernaTAN<br\>GasteizEN"]
        }
      ]
    },
    {
      "izenburua": "Nondik",
      "border": "border:1px solid white",
      "oharra": " ",
      "display": "display:none",
      "singularraId": "nondikSingularra",
      "pluralaId": "nondikPlurala",
      "koadrokoBehekoHeader": ["GALDETZAILEAK", "ERAKUSLEAK", "LEKU-ADITZON."],
      "behekoParadigma": ["Nondik<br\>Zertatik<br\>Zeinetatik<br\>Zeintzuetatik<br\>Zenbate(ta)tik", "Honetatik<br\>Horretatik<br\>Hartatik<br\><br\>Hauetatik<br\>Horietatik<br\>Haietatik", "Hemendik<br\>Hortik<br\>Handik"],
      "goikoParadigma": [

        {
          "lerroa": ["-(e)TIK", "-ETATIK", "-(e)TATIK<br\>-(e)TIK"]
        },
        {
          "lerroa": ["komunETIK<br\>etxeTIK<br\>tabernaTIK", "komunETATIK<br\>etxeETATIK<br\>tabernETATIK", "komunETATIK<br\>etxeTATIK<br\>tabernaTATIK<br\>Gasteiz(E)TIK"]
        }
      ]
    },
    {
      "izenburua": "Nora",
      "border": "border:1px solid white",
      "oharra": " ",
      "display": "display:none",
      "singularraId": "noraSingularra",
      "pluralaId": "noraPlurala",
      "koadrokoBehekoHeader": ["GALDETZAILEAK", "ERAKUSLEAK", "LEKU-ADITZON."],
      "behekoParadigma": ["Nora<br\>Zertara<br\>Zeinetara<br\>Zeintzuetara<br\>Zenbate(ta)ra", "Honetara<br\>Horretara<br\>Hartara<br\><br\>Hauetara<br\>Horietara<br\>Haietara", "Hona<br\>Horra<br\>Hara"],
      "goikoParadigma": [

        {
          "lerroa": ["-(e)RA", "-ETARA", "-(e)TARA<br\>-(e)RA"]
        },
        {
          "lerroa": ["komunERA<br\>etxeRA<br\>tabernaRA", "komuneETARA<br\>etxeETARA<br\>tabernETARA", "komunETARA<br\>etxeTARA<br\>tabernaTARA<br\>Gasteiz(ER)A"]
        }
      ]
    },
    {
      "izenburua": "Norantz",
      "border": "border:1px solid white",
      "oharra": "NORA + -NTZ -> NORANTZ",
      "display": "display:block",
      "singularraId": "norantzSingularra",
      "pluralaId": "norantzPlurala",
      "koadrokoBehekoHeader": ["GALDETZAILEAK", "ERAKUSLEAK", "LEKU-ADITZ."],
      "behekoParadigma": ["Norantz<br\>Zertarantz<br\>Zeinetarantz<br\>Zeintzuetarantz<br\>Zenbate(ta)rantz", "Honetarantz<br\>Horretarantz<br\>Hartarantz<br\><br\>Hauetarantz<br\>Horietarantz<br\>Haietarantz", "Honantz<br\>Horrantz<br\>Harantz"],
      "goikoParadigma": [

        {
          "lerroa": ["-(e)RANTZ", "-ETARANTZ", "-(e)TARANTZ<br\>-(e)RANTZ"]
        },
        {
          "lerroa": ["komunERANTZ<br\>etxeRANTZ<br\>tabernaRANTZ", "komuneETARANTZ<br\>etxeETARANTZ<br\>tabernETARANTZ", "komunETARANTZ<br\>etxeTARANTZ<br\>tabernaTARANTZ<br\>GasteizERANTZ"]
        }
      ]
    },
    {
      "izenburua": "Noraino",
      "border": "border:1px solid white",
      "oharra": "NORA + -INO -> NORAINO",
      "display": "display:block",
      "singularraId": "norainoSingularra",
      "pluralaId": "norainoPlurala",
      "koadrokoBehekoHeader": ["GALDETZAILEAK", "ERAKUSLEAK", "LEKU-ADITZ."],
      "behekoParadigma": ["Noraino<br\>Zertaraino<br\>Zeinetaraino<br\>Zeintzuetaraino<br\>Zenbate(ta)raino", "Honetaraino<br\>Horretaraino<br\>Hartaraino<br\><br\>Hauetaraino<br\>Horietaraino<br\>Haietaraino", "Honaino<br\>Horraino<br\>Haraino"],
      "goikoParadigma": [

        {
          "lerroa": ["-(e)RAINO", "-ETARAINO", "-(e)TARAINO<br\>-(e)RAINO"]
        },
        {
          "lerroa": ["komunERAINO<br\>etxeRAINO<br\>tabernaRAINO", "komunETARAINO<br\>etxeETARAINO<br\>tabernETARAINO", "komunETARAINO<br\>etxeTARAINO<br\>tabernaTARAINO<br\>GasteizERAINO"]
        }
      ]
    },
    {
      "izenburua": "Nongo",
      "border": "border:1px solid white",
      "oharra": "NON + -KO -> NONGO",
      "display": "display:block",
      "singularraId": "nongoSingularra",
      "pluralaId": "nongoPlurala",
      "koadrokoBehekoHeader": ["GALDETZAILEAK", "ERAKUSLEAK", "LEKU-ADITZON."],
      "behekoParadigma": ["Nongo<br\>Zertako<br\>Zeinetako<br\>Zeintzuetako<br\>Zenbate(ta)ko", "Honetako<br\>Horretako<br\>Hartako<br\><br\>Hauetako<br\>Horietako<br\>Haietako", "Hemengo<br\>Horko<br\>Hango"],
      "goikoParadigma": [

        {
          "lerroa": ["-(e)KO", "-ETAKO", "-(e)TAKO<br\>-(e)KO"]
        },
        {
          "lerroa": ["komunEKO<br\>etxeKO<br\>tabernaKO", "komunETAKO<br\>etxeETAKO<br\>tabernETAKO", "komunETAKO<br\>etxeTAKO<br\>tabernaTAKO<br\>Gasteiz(E)KO"]
        }
      ]
    },
    {
      "izenburua": "Norako",
      "border": "border:1px solid white",
      "oharra": "NORA + -KO -> NORAKO",
      "display": "display:block",
      "singularraId": "norakoSingularra",
      "pluralaId": "norakoPlurala",
      "koadrokoBehekoHeader": ["GALDETZAILEAK", "ERAKUSLEAK", "LEKU-ADITZ."],
      "behekoParadigma": ["Norako<br\>Zertarako<br\>Zeinetarako<br\>Zeintzuetarako<br\>Zenbate(ta)rako", "Honetarako<br\>Horretarako<br\>Hartarako<br\><br\>Hauetarako<br\>Horietarako<br\>Haietarako", "Honako<br\>Horrako<br\>Harako"],
      "goikoParadigma": [

        {
          "lerroa": ["-(e)RAKO", "-ETARAKO", "-(e)TARAKO<br\>-(e)RAKO"]
        },
        {
          "lerroa": ["komunERAKO<br\>etxeRAKO<br\>tabernaRAKO", "komuneETARAKO<br\>etxeETARAKO<br\>tabernETARAKO", "komunETARAKO<br\>etxeTARAKO<br\>tabernaTARAKO<br\>GasteizERAKO"]
        }
      ]
    },
    {
      "izenburua": "Norengan",
      "border": "border:1px solid white",
      "oharra": "NOREN + -GAN -> NORENGAN",
      "display": "display:block",
      "singularraId": "norenganSingularra",
      "pluralaId": "norenganPlurala",
      "koadrokoBehekoHeader": ["GALDETZAILEAK", "ERAKUSLEAK", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PERTSONA-IZORDEAK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"],
      "behekoParadigma": ["No(ren)gan<br\>Nortzu(en)gan<br\><br\>Zeinengan<br\>Zeintzuengan<br\>Zenbatengan", "Honengan<br\>Horrengan<br\>Harengan<br\><br\>Hauengan<br\>Horiengan<br\>Haiengan", "Ni(re)gan<br\>Hi(re)gan<br\>Harengan<br\>Gu(re)gan<br\>Zu(re)gan<br\>Zuengan<br\>Haiengan"],
      "goikoParadigma": [

        {
          "lerroa": ["&nbsp;-A(REN)GAN", "-ENGAN", "-(r)ENGAN"]
        },
        {
          "lerroa": ["&nbsp;mutilA(REN)GAN<br\>&nbsp;semeA(REN)GAN<br\>&nbsp;neskA(REN)GAN", "&nbsp;&nbsp;mutilENGAN&nbsp;&nbsp;&nbsp;<br\>&nbsp;&nbsp;semeENGAN&nbsp;&nbsp&nbsp;<br\>&nbsp;&nbsp;neskENGAN&nbsp;&nbsp;&nbsp;", "mutilENGAN<br\>semeRENGAN<br\>neskaRENGAN<br\>Josu(REN)GAN"]
        }
      ]
    },
    {
      "izenburua": "Norengandik",
      "border": "border:1px solid white",
      "oharra": "NOREN + -GANDIK -> NORENGANDIK",
      "display": "display:block",
      "singularraId": "norengandikSingularra",
      "pluralaId": "norengandikPlurala",
      "koadrokoBehekoHeader": ["GALDETZAILEAK", "ERAKUSLEAK", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PERTSONA-IZORDEAK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"],
      "behekoParadigma": ["No(ren)gandik<br\>Nortzu(en)gandik<br\><br\>Zeinengandik<br\>Zeintzuengandik<br\>Zenbatengandik", "Honengandik<br\>Horrengandik<br\>Harengandik<br\><br\>Hauengandik<br\>Horiengandik<br\>Haiengandik", "Ni(re)gandik<br\>Hi(re)gandik<br\>Harengandik<br\>Gu(re)gandik<br\>Zu(re)gandik<br\>Zuengandik<br\>Haiengandik"],
      "goikoParadigma": [

        {
          "lerroa": ["-A(REN)GANDIK", "-ENGANDIK", "-(r)ENGANDIK"]
        },
        {
          "lerroa": ["mutilA(REN)GANDIK<br\>semeA(REN)GANDIK<br\>neskA(REN)GANDIK", "mutilENGANDIK<br\>semeENGANDIK<br\>neskENGANDIK", "mutilENGANDIK<br\>semeRENGANDIK<br\>neskaRENGANDIK<br\>Josu(REN)GANDIK"]
        }
      ]
    },
    {
      "izenburua": "Norengana",
      "border": "border:1px solid white",
      "oharra": "NOREN + -GANA -> NORENGANA",
      "display": "display:block",
      "singularraId": "norenganaSingularra",
      "pluralaId": "norenganaPlurala",
      "koadrokoBehekoHeader": ["GALDETZAILEAK", "ERAKUSLEAK", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PERTSONA-IZORDEAK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"],
      "behekoParadigma": ["No(ren)gana<br\>Nortzu(en)gana<br\><br\>Zeinengana<br\>Zeintzuengana<br\>Zenbatengana", "Honengana<br\>Horrengana<br\>Harengana<br\><br\>Hauengana<br\>Horiengana<br\>Haiengana", "Ni(re)gana<br\>Hi(re)gana<br\>Harengana<br\>Gu(re)gana<br\>Zu(re)gana<br\>Zuengana<br\>Haiengana"],
      "goikoParadigma": [

        {
          "lerroa": ["&nbsp;-A(REN)GANA", "-ENGANA", "-(r)ENGANA"]
        },
        {
          "lerroa": ["&nbsp;&nbsp;mutilA(REN)GANA&nbsp;<br\>&nbsp;semeA(REN)GANA<br\>&nbsp;neskA(REN)GANA", "&nbsp;&nbsp;mutilENGANA&nbsp;&nbsp;&nbsp;<br\>&nbsp;&nbsp;semeENGANA&nbsp;&nbsp&nbsp;<br\>&nbsp;&nbsp;neskENGANA&nbsp;&nbsp;&nbsp;", "mutilENGANA<br\>semeRENGANA<br\>neskaRENGANA<br\>Josu(REN)GANA"]
        }
      ]
    },
    {
      "izenburua": "Norenganantz",
      "border": "border:1px solid white",
      "oharra": "NOREN + -GANANTZ -> NORENGANANTZ",
      "display": "display:block",
      "singularraId": "norenganantzSingularra",
      "pluralaId": "norenganantzPlurala",
      "koadrokoBehekoHeader": ["GALDETZAILEAK", "ERAKUSLEAK", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PERTSONA-IZORDEAK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"],
      "behekoParadigma": ["No(ren)ganantz<br\>Nortzu(en)ganantz<br\><br\>Zeinenganantz<br\>Zeintzuenganantz<br\>Zenbatenganantz", "Honenganantz<br\>Horrenganantz<br\>Harenganantz<br\><br\>Hauenganantz<br\>Horienganantz<br\>Haienganantz", "Ni(re)ganantz<br\>Hi(re)ganantz<br\>Harenganantz<br\>Gu(re)ganantz<br\>Zu(re)ganantz<br\>Zuenganantz<br\>Haienganantz"],
      "goikoParadigma": [

        {
          "lerroa": ["&nbsp;-A(REN)GANANTZ", "-ENGANANTZ", "-(r)ENGANANTZ"]
        },
        {
          "lerroa": ["&nbsp;&nbsp;mutilA(REN)GANANTZ&nbsp;<br\>&nbsp;semeA(REN)GANANTZ<br\>&nbsp;neskA(REN)GANANTZ", "&nbsp;&nbsp;mutilENGANANTZ&nbsp;&nbsp;&nbsp;<br\>&nbsp;&nbsp;semeENGANANTZ&nbsp;&nbsp&nbsp;<br\>&nbsp;&nbsp;neskENGANANTZ&nbsp;&nbsp;&nbsp;", "mutilENGANANTZ<br\>semeRENGANANTZ<br\>neskaRENGANANTZ<br\>Josu(REN)GANANTZ"]
        }
      ]
    },
    {
      "izenburua": "Norengatik",
      "border": "border:1px solid white",
      "oharra": "NOREN + -GATIK -> NORENGATIK",
      "display": "display:block",
      "singularraId": "norengatikSingularra",
      "pluralaId": "norengatikPlurala",
      "koadrokoBehekoHeader": ["GALDETZAILEAK", "ERAKUSLEAK", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PERTSONA-IZORDEAK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"],
      "behekoParadigma": ["No(ren)gatik<br\>Nortzu(en)gatik<br\>Zergatik<br\>Zeinengatik<br\>Zeintzuengatik<br\>Zenbate(n)gatik", "Hone(n)gatik<br\>Horre(n)gatik<br\>Har(e/en)gatik<br\><br\>Hauengatik<br\>Horiengatik<br\>Haiengatik", "Ni(re)gatik<br\>Hi(re)gatik<br\>Har(e/en)gatik<br\>Gu(re)gatik<br\>Zu(re)gatik<br\>Zuengatik<br\>Haiengatik"],
      "goikoParadigma": [

        {
          "lerroa": ["&nbsp;-A(REN)GATIK", "-ENGATIK", "-(r)(EN)GATIK"]
        },
        {
          "lerroa": ["&nbsp;&nbsp;mutilA(REN)GATIK&nbsp;<br\>&nbsp;semeA(REN)GATIK<br\>&nbsp;neskA(REN)GATIK", "&nbsp;&nbsp;mutilENGATIK&nbsp;&nbsp;&nbsp;<br\>&nbsp;&nbsp;semeENGATIK&nbsp;&nbsp&nbsp;<br\>&nbsp;&nbsp;neskENGATIK&nbsp;&nbsp;&nbsp;", "mutilENGATIK<br\>semeRENGATIK<br\>neskaRENGATIK<br\>Josu(REN)GATIK"]
        }
      ]
    },
    {
      "izenburua": "Nortzat",
      "border": "border:1px solid white",
      "oharra": " ",
      "display": "display:none",
      "singularraId": "nortzatSingularra",
      "pluralaId": "nortzatPlurala",
      "koadrokoBehekoHeader": ["&nbsp;&nbsp;GALDETZAILEAK&nbsp;", "ERAKUSLEAK", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PERTSONA-IZORDEAK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"],
      "behekoParadigma": ["Nortzat<br\>Zertzat", "", ""],
      "goikoParadigma": [

        {
          "lerroa": ["-", "&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;", "-TZAT"]
        },
        {
          "lerroa": ["", "", "mutilTZAT<br\>semeTZAT<br\>neskaTZAT"]
        }
      ]
    }
  ];

  var octopus = {

    setIzenordeak: function (izenordeak) {

      Model.aditzak.push(izenordeak);

    },

    getIzenordeak: function () {

      return Model.aditzak;

    }

  };


  var Deklinabidea = function (data) {

    this.izenburua = ko.observable(data.izenburua);
    this.border = ko.observable(data.border);
    this.oharra = ko.observable(data.oharra);
    this.display = ko.observable(data.display);
    this.singularraId = ko.observable(data.singularraId);
    this.pluralaId = ko.observable(data.pluralaId);
    this.goikoParadigma = ko.observable(data.goikoParadigma);
    this.lerroa = ko.observable(data.goikoParadigma.lerroa);
    this.koadrokoBehekoHeader = ko.observable(data.koadrokoBehekoHeader);
    this.behekoParadigma = ko.observable(data.behekoParadigma);

  };


  var TableViewModel = function () {

    var self = this;



    this.deklinabideak = ko.observableArray([]);
    initialDeklinabideak.forEach(function (item) {

      self.deklinabideak.push(new Deklinabidea(item));

    });

    this.currentDeklinabidea = ko.observable(this.deklinabideak()[0]);
    this.numColumns = ko.observable(Model.numColumns);
    this.numRowsGoikoa = ko.observable(Model.numRowsGoikoa);
    this.numRowsBehekoa = ko.observable(Model.numCellsBehekoa);
    this.numCellsGoikoa = ko.observable(Model.numCellsGoikoa);
    this.numRowsBehekoa = ko.observable(Model.numCellsBehekoa);


    this.setCurrentDeklinabidea = function (clickedDeklinabidea) {

      self.currentDeklinabidea(clickedDeklinabidea);


    };




  };

  ko.bindingHandlers.animationTwo = {

    init: function (element) {

      $(element).animate({opacity: 1}, 200);


    }

  };

  ko.bindingHandlers.animationOne = {

    init: function (element, valueAccessor) {

      var value = valueAccessor();

      $(element).toggle(ko.unwrap(value));

    },

    update: function (element, valueAccessor) {

      var value = valueAccessor();
      ko.unwrap(value) ? $(element).fadeIn(600) : $(element).fadeOut(600);


    }

  };

  ko.applyBindings(new TableViewModel());

  var menuIcon = $("#paradigmakList");
  var header = $("#header");

  $(menuIcon).on("click", "#listItem", function(event) {

    console.log("testing");
    $(header).collapsible("collapse");
  });



}());
