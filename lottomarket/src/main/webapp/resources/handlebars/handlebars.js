define(["jquery", "handlebars.org"], function($, Handlebars){
/*
 * handle bars common
 */
var handlebarsManager = (function () {
  var printTemplate = function (data, target, templateObject, type, prefixHtml,
      suffixHtml) {

    target.empty();

    var template = Handlebars.compile(templateObject.html());
    var html = '';
    if (prefixHtml) {
      html += prefixHtml;
    }
    html += template(data);
    if (suffixHtml) {
      html += suffixHtml;
    }

    if (type == 'html') {
      target.html(html);
    }
    else if (type == 'append') {
      target.append(html);
    }
  };

  return {
    printTemplate: printTemplate
  }
})();

/**
 * Regist helpers
 */
Handlebars.registerHelper('getTxStatus', function (status) {
  if(status === '0x0') {
    return 'Failure';
  } else if(status === '0x1') {
    return 'Success';
  } else {
    console.log('status is unknown : ' + status);
    return "Unknown";
  }
});

// handle bars 길이 구하는 메소드
Handlebars.registerHelper('getLength', function (arr) {
  return (!arr) ? 0 : arr.length;
});

Handlebars.registerHelper('getInOut', function (fromAddr, block) {
  if (fromAddr == '${addr}') {
    console.log('is from addr..');
    return '[OUT]';
  }
  console.log('is to addr..');
  return '[IN]';
});

return handlebarsManager;

});