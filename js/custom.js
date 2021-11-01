
// ISOTOPE FILTER
jQuery(document).ready(function($){

  if ( $('.iso-box-wrapper').length > 0 ) { 

      var $container  = $('.iso-box-wrapper'), 
        $imgs     = $('.iso-box img');

      $container.imagesLoaded(function () {

        $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
        });

        $imgs.load(function(){
          $container.isotope('reLayout');
        })

      });

      //filter items on button click

      $('.filter-wrapper li a').click(function(){

          var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({ 
        filter: filterValue,
        animationOptions: { 
            duration: 750, 
            easing: 'linear', 
            queue: false, 
        }                
      });             

      // don't proceed if already selected 

      if ( $this.hasClass('selected') ) { 
        return false; 
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

        return false;
      }); 

  }

});

// jQuery to collapse the navbar on scroll //
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();

  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

  // NIVO LIGHTBOX
  $('.iso-box-section a').nivoLightbox({
        effect: 'fadeScale',
    });

  // Get lang
  if(window.location.hash !== '')
  {
    var langToUpdate = window.location.hash.substr(1,2);
    let container = document.querySelector('html');
    container.lang = langToUpdate;
    console.log(langToUpdate);
    switch(langToUpdate)
    {
      case "fr":
      default:
        console.log("in fr");
        document.getElementById("langFr").style = "display:none;";
        document.getElementById("langEn").style = "";
          break;
      case "en":
        console.log("in en");
        document.getElementById("langFr").style = "";
        document.getElementById("langEn").style = "display:none;";
        break;
    }
  }
  var zone = document.querySelectorAll('html');
  applyTraduction(zone);
  let lang = findLocaleMatch();
  let container = document.querySelector('html');
  container.lang = lang;

  // Set year in the footer
  document.getElementById("getyear").innerHTML = (new Date().getFullYear());
});

function findLocaleMatch() {
  let keys = Object.keys(langdata.languages); //from our data
  let locales = Intl.getCanonicalLocales(keys); //from our data validated

  let lang = navigator.language; //from browser 
  let locale = Intl.getCanonicalLocales(lang); //from browser validated

  //find the match for locale inside locales
  let langMatch = document.documentElement.getAttribute('lang'); //default
  locales = locales.filter(l => locale == l);
  langMatch = (locales.length > 0) ? locales[0] : langMatch;
  return langMatch;
}

function applyTraduction(containers)
{
  containers.forEach(contaier => {
    var local = contaier.getAttribute('lang');
    contaier.querySelectorAll('[data-key]').forEach(element => {
      var key = element.getAttribute('data-key');
      var lang = local.substr(0,2);
      if(key)
      {
        var textValue = langdata.languages[lang].strings[key];
        if(textValue === "")
        {
          element.setAttribute("style", "display:none;");
        }
        element.textContent = langdata.languages[lang].strings[key];
        element.removeAttribute('data-key');   
      }
    })
  });
}

function changeLang(currentLang)
{
  if(window.location.hash !== '')
  {
    window.location.href =  window.location.href.slice(0, -3) + "#" + currentLang;
  }
  else
  {
    window.location.href = window.location.href + "#" + currentLang;
  }
  window.location.reload();
}

const langdata = {
  "languages": {
      "en": {
          "strings": {
              "informationUrgente": "Display important information so that everyboday can see it.", 
              "accueil": "Home",
              "tarifsHoraire": "Rates & Schedule",
              "vuePanoramique": "Panormic view",
              "nousJoindre": "Contact us",
              "slogantEntete": "Place the ferry",
              "slogantSousEntete": "slogant here",
              "tarif": "Rate",
              "typeTransport": "Type of transport",
              "prix": "Price",
              "pieton": "Pedestrian",
              "velo": "Bike",
              "motoVTT": "Motorcycle and A.T.V",
              "cac2P": "Side by side 2 places",
              "autoTyrexCac4Place": "Automobile, Tyrex, Side by side 4 places",
              "pickup6": "Pick-up 6 wheels",
              "autobus": "School bus",
              "camions": "Trucks",
              "cube":"Cubes 4 & 6 wheels",
              "10roues":"10 wheels",
              "12roues":"12 wheels",
              "14roues":"14 wheels",
              "remorque": "Trailers (from bumper)",
              "max18": "Up to 18′",
              "18_26": "Between 18′ to 26′",
              "26Plus": "More than 26′",
              "pourVelo": "for bike",
              "pourMotoVTT": "for motorcycles/AVTs",
              "forfaits" : "Package",
              "automobile" : "Cars",
              "10Traverse" : "10 Crossings",
              "20Traverse" : "20 Crossings",
              "remorques10Travers": "Trailers: 10 crossings",
              "horaire": "Schedule",
              "dateOuverture": "Open from April 5 to December 17",
              "lundiSamediOuverture": "Monday to Saturday 6 am to 10 pm",
              "dimancheOuverture": "Monday to Saturday 6 am to 10 pm Sunday 8 am to 10 pm",
              "changementSansPreavis" : "* Date may change without any prior notice",
              "pointImportant": "Important to know",
              "payment" : "Payment on the ferry: Cash only",
              "poidsMax": "Maximum weight",
              "40Tonnes": "- 40 tons per vehicle",
              "50Tonnes": "- 50 tons total",
              "derniereTraverse": "Last crossing 21h50",
              "vuePanoramiqueSousEntete": "Boat, view, and others",
              "question": "You have questions? Don't hesitate, contact us",
            }
      },
      "fr": {
          "strings": {
              "informationUrgente": "Mettre une information important pour que tout le monde puisse voir ce qui se passe", 
              "accueil": "Accueil",
              "tarifsHoraire": "Tarifs et horaire",
              "vuePanoramique": "Vue panoramique",
              "nousJoindre": "Nous joindre",
              "slogantEntete": "Placer le slogant",
              "slogantSousEntete": "du traversier ici",
              "tarif": "Tarifs",
              "typeTransport": "Type de transport",
              "prix": "Prix",
              "pieton": "Piéton",
              "velo": "Vélo",
              "motoVTT": "Moto & V.T.T.",
              "cac2P": "Côte à côte 2 places",
              "autoTyrexCac4Place": "Automobile, Tyrex, Côte à côte 4 places",
              "pickup6": "Pick-up 6 roues",
              "autobus": "Autobus  scolaire",
              "camions": "Trucks",
              "cube":"Cube 4 & 6 roues",
              "10roues":"10 roues",
              "12roues":"12 roues",
              "14roues":"14 roues",
              "remorque": "Remorque (du pare-choc)",
              "max18": "Jusqu’à 18′",
              "18_26": "+ de 18′ à 26′",
              "26Plus": "+ de 26′",
              "pourVelo": "pour vélo",
              "pourMotoVTT": "pour moto/VTT",
              "forfaits" : "Forfaits",
              "automobile" : "Automobile",
              "10Traverse" : "10 Traversées",
              "20Traverse" : "20 Traversées",
              "remorques10Travers": "Remorques: 10 Traversées",
              "horaire": "Horaire",
              "dateOuverture": "Ouvert du 5 avril au 17 décembre*",
              "lundiSamediOuverture": "Lundi au samedi 6h à 22h",
              "dimancheOuverture": "Dimanche 8h à 22h",
              "changementSansPreavis" : "* Les dates peuvent changées sans préavis",
              "pointImportant": "Point important",
              "payment": "Paiement sur le bateau, en argent comptant seulement",
              "poidsMax": "Poids maximum",
              "40Tonnes": "- 40 tonnes par véhicule",
              "50Tonnes": "- 50 tonnes au total",
              "derniereTraverse": "Dernière traversée : 21h50",
              "vuePanoramiqueSousEntete": "Bateau, vue, et autre",
              "question": "Vous avez des questions? N'hésitez pas, contactez-nous",
          }
      }
  }
}