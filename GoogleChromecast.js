/**
 * Generated script for New Relic Synthetics
 * Generated using se-builder with New Relic Synthetics Formatter
 *
 * Feel free to explore, or check out the full documentation
 * https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/scripting-monitors/writing-scripted-browsers
 * for details.
 */

/** CONFIGURATIONS **/

// Script-wide timeout for wait and waitAndFind functions (in ms)
var DefaultTimeout = 10000;
// Change to any User Agent you want to use.
// Leave as "default" or empty to use the Synthetics default.
var UserAgent = "default";

/** HELPER VARIABLES AND FUNCTIONS **/

var assert = require('assert'),
  By = $driver.By,
  browser = $browser.manage(),
  startTime = Date.now(),
  stepStartTime = Date.now(),
  prevMsg = '',
  prevStep = 0,
  lastStep = 9999,
  VARS = {};

var log = function(thisStep, thisMsg) {
  if (thisStep > 1 || thisStep == lastStep) {
    var prevStepTimeElapsed = Date.now() - (startTime + stepStartTime);
    console.log('Step ' + prevStep + ': ' + prevMsg + ' FINISHED. It took ' + prevStepTimeElapsed + 'ms to complete.');
    $util.insights.set('Step ' + prevStep + ': ' + prevMsg, prevStepTimeElapsed);
  }
  if (thisStep > 0 && thisStep != lastStep) {
    stepStartTime = Date.now() - startTime;
    console.log('Step ' + thisStep + ': ' + thisMsg + ' STARTED at ' + stepStartTime + 'ms.');
    prevMsg = thisMsg;
    prevStep = thisStep;
  }
};

function isAlertPresent() {
  try {
    var thisAlert = $browser.switchTo().alert();
    return true;
  } catch (err) { return false; }
}

function isElementSelected(el) { return $browser.findElement(el).isSelected(); }

function isTextPresentIn(text, sourceEl) {
  return sourceEl.getText()
  .then(function (wholetext) {
    return wholetext.indexOf(text) != -1;
  });
}

function isTextPresent(text) {
  return isTextPresentIn(text, $browser.findElement(By.tagName('html')));
}

/** BEGINNING OF SCRIPT **/

// Setting User Agent is not then-able, so we do this first (if defined and not default)
if (UserAgent && (0 !== UserAgent.trim().length) && (UserAgent != 'default')) {
  $browser.addHeader('User-Agent', UserAgent);
  console.log('Setting User-Agent to ' + UserAgent);
}

// Get browser capabilities and do nothing with it, so that we start with a then-able command
$browser.getCapabilities().then(function () { })

// Step 6
.then(function() {
  log(6, '$browser.get("https://store.google.com/")');
  return $browser.get("https://store.google.com/"); })

// Step 7
.then(function() {
  log(7, 'clickElement "//div[@class=\'navbar\']//a[.=\'TV & Audio\']"');
  return $browser.findElement(By.xpath("//div[@class=\'navbar\']//a[.=\'TV & Audio\']"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 8
.then(function() {
  log(8, 'clickElement "div.flag-button-icon.svg-icon-component"');
  $browser.sleep(1000);
  return $browser.findElement(By.partialLinkText("SHOP NOW"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 9
.then(function() {
  log(9, 'clickElement "//div[@class=\'button-wrap\']/div/button"');
  return $browser.findElement(By.xpath("//div[@class=\'button-wrap\']/div/button"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 10
.then(function() {
  log(10, 'clickElement "//div[@class=\'configure-summary-container\']//button[.=\'   Add to cart\']"');
  return $browser.waitForAndFindElement(By.xpath("//div[@class=\'configure-summary-container\']//button[.=\'   Add to cart\']"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 11
.then(function() {
  log(11, 'clickElement "button.text-link-small.primary"');
  return $browser.waitForAndFindElement(By.css("button.text-link-small.primary"), DefaultTimeout); })
.then(function (el) { el.click(); })

.then(function() {
  log(lastStep, '');
  console.log('Browser script execution SUCCEEDED.');
}, function(err) {
  log(lastStep, '');
  console.log ('Browser script execution FAILED.');
  throw(err);
});

/** END OF SCRIPT **/