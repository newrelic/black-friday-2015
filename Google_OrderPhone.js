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

// Step 1
.then(function() {
  log(1, '$browser.get("https://store.google.com/")');
  return $browser.get("https://store.google.com/"); })

// Step 2
.then(function() {
  log(2, 'clickElement "Phones"');
  return $browser.waitForAndFindElement(By.linkText("Phones"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 3
.then(function() {
  log(3, 'clickElement "//div[@id=\'body-content\']//div[.=\'   \']"');
  return $browser.waitForAndFindElement(By.xpath("//div[@id=\'body-content\']//div[.=\'   \']"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 4
.then(function() {
  log(4, 'clickElement "//div[@class=\'button-wrap\']/div/button"');
  return $browser.waitForAndFindElement(By.xpath("//div[@class=\'button-wrap\']/div/button"), DefaultTimeout); })
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