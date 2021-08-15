function postalFilter (postalCode) {

    if (! postalCode) {
        return null;
    }

    postalCode = postalCode.toString().trim();

    var us = new RegExp("^\\d{5}(-{0,1}\\d{4})?$");
    var ca = new RegExp(/([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ]\d){2}/i);

    if (us.test(postalCode.toString())) {
        return postalCode;
    }

    if (ca.test(postalCode.toString().replace(/\W+/g, ''))) {
        return postalCode;
    }
    return null;
}
function getValue(radio) {
    debugger;
    if (radio.value == "Hiring") {
      document.querySelector("#trHourlyRate").style.visibility = "visible";
    }
  }
  function hideValue(val) {
    if (val.value == "Question") {
      document.querySelector("#trHourlyRate").style.visibility = "hidden";
    }
    if (val.value == "Comment") {
      document.querySelector("#trHourlyRate").style.visibility = "hidden";
    }
  }