window.mybookingEngine = (function() {
  var baseURL = "";
  var extrasStep = false;
  var chooseProductUrl = "choose_product.html";
  var chooseExtrasUrl = "choose_extras.html";
  var completeUrl = "complete.html";
  var summaryUrl = "summary.html";
  var useGoogleMaps = true;
  var googleMapsSettings = {
    apiKey: "",
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
    extrasStep: getExtrasStep,
    useGoogleMaps: getUseGoogleMaps,
    googleMapsSettings: getGoogleMapsSettings,
    chooseProductUrl: getChooseProductUrl,
    chooseExtrasUrl: getChooseExtrasUrl,
    completeUrl: getCompleteUrl,
    summaryUrl: getSummaryUrl
  };
})();
