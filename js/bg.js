// Raccourci vers le site de gestion de la carte monétique
chrome.browserAction.onClicked.addListener(function(tab)
{
    chrome.tabs.create({ url: "https://monetique.central.crous-rennes.fr/CrousVAD" });
});
