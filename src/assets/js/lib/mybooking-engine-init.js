window.mybookingEngine = (function() {
  var baseURL = "https://demo-rentacar.mybooking.es";
  var extrasStep = false;
  var chooseProductUrl = "choose_product.html";
  var chooseExtrasUrl = "choose_extras.html";
  var completeUrl = "complete.html";
  var summaryUrl = "summary.html";
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
  return {
    baseURL: getBaseURL,
    extrasStep: getExtrasStep,
    chooseProductUrl: getChooseProductUrl,
    chooseExtrasUrl: getChooseExtrasUrl,
    completeUrl: getCompleteUrl,
    summaryUrl: getSummaryUrl
  };
})();
