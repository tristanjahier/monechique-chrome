/**
 * @author Tristan Jahier <tristan.jahier@gmail.com>
 * @license MIT Licence (http://opensource.org/licenses/mit-license.php)
 */

console.log(">>>>>>>>>>>>>>>> Initialisation de Monéchique >>>>>>>>>>>>>>>>");

////////////////////////////////////////////////////////////////
// Divers

// Ajout des crédits
console.log("> Ajout des crédits");

document.querySelector('.footer').innerHTML = '<p class="monechique-credits">' + chrome.i18n.getMessage('monechique_credits') + '</p>' + document.querySelector('.footer').innerHTML;


console.log("> Correction des fautes d'orthographe (mode maniaque : on)");

// Correction de 'Minimun' en 'Minimum'
var label_seuil = document.querySelector('#MainContent_lblSeuil');
if(label_seuil)
  label_seuil.innerText = label_seuil.innerText.replace(/Minimun:/g, 'Minimum:');

// Ajout d'un accent sur le 'e' de 'Déconnexion'
var btn_deconnexion = document.querySelector('input[name="deconnexion"]');
if(btn_deconnexion) btn_deconnexion.value = "Déconnexion";
// ...et comme le markup n'est jamais le même -__-"
var btn_deconnexion_toto = document.querySelector('input#id_deconnect_button');
if(btn_deconnexion_toto) btn_deconnexion_toto.value = "Déconnexion";


////////////////////////////////////////////////////////////////
// Changements dans le design

// ...


////////////////////////////////////////////////////////////////
// Bricolage pour le formulaire de connexion

if($('#actualPassword').length > 0)
{
  console.log("> Bricolage du formulaire de connexion");

  // Si le focus est sur le champ « Mot de passe » (déjà inscrit)
  // et que l'on appuie sur une touche du clavier
  $('#actualPassword').keypress(function(event)
  {
    // Si la touche appuyée est "Entrée",
    // alors on simule un clic sur le second bouton "Valider"
    if(event.which == 13)
      $('input[onclick="setTopPassword(\'0\');"]').click();
  });
}

console.log(">>>>>>>>>>>>>>> Monéchique est passé par là... >>>>>>>>>>>>>>>");
