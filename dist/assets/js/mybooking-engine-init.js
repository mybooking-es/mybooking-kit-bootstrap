window.mybookingEngine = (function() {
  var baseURL = "https://carmove.mybooking.es";
  var apiKey = "";
  var extrasStep = false;
  var chooseProductUrl = "choose_product.html";
  var chooseExtrasUrl = "choose_extras.html";
  var completeUrl = "complete.html";
  var summaryUrl = "summary.html";
  var useGoogleMaps = true;
  var googleMapsSettings = {
    apiKey: "AIzaSyD3DUfIDDveebcfuob2XIDWjBol9eWExyo",
    settings: {
      googleMapsRestrictCountryCode: "es",
      googlePlacesRetrictBounds: true,
      googleMapsBoundsSWLat: 40.2652276,
      googleMapsBoundsSWLng: -3.9374601,
      googleMapsBoundsNELat: 40.5689585,
      googleMapsBoundsNELng: -3.4856473
    }
  };
  function getBaseURL() {
    return baseURL;
  }
  function getApiKey() {
    return apiKey;
  }
  function getExtrasStep() {
    return extrasStep;
  }
  function getChooseProductUrl() {
    return chooseProductUrl;
  }
  function getChooseExtrasUrl() {
    return chooseExtrasUrl;
  }
  function getCompleteUrl() {
    return completeUrl;
  }
  function getSummaryUrl() {
    return summaryUrl;
  }
  function getUseGoogleMaps() {
    return useGoogleMaps;
  }
  function getGoogleMapsSettings() {
    return googleMapsSettings;
  }
  return {
    baseURL: getBaseURL,
    apiKey: getApiKey,
    useGoogleMaps: getUseGoogleMaps,
    googleMapsSettings: getGoogleMapsSettings,
    extrasStep: getExtrasStep,
    chooseProductUrl: getChooseProductUrl,
    chooseExtrasUrl: getChooseExtrasUrl,
    completeUrl: getCompleteUrl,
    summaryUrl: getSummaryUrl
  };
})();
