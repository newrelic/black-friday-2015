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

// Step 25
.then(function() {
  log(25, '$browser.get("http://www.apple.com/")');
  return $browser.get("http://www.apple.com/"); })

// Step 26
.then(function() {
  log(26, 'clickElement "iPhone"');
  return $browser.waitForAndFindElement(By.linkText("iPhone"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 27
.then(function() {
  log(27, 'clickElement "iPhone 6s"');
  return $browser.waitForAndFindElement(By.linkText("iPhone 6s"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 28
.then(function() {
  log(28, 'clickElement "Buy"');
  return $browser.waitForAndFindElement(By.linkText("Buy"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 29
.then(function() {
  log(29, 'setElementSelected "//div[3]/div[6]/div[3]/div[1]/div/div[2]/div[1]/div/div/fieldset/materializer[2]/div[2]/div[1]/div/div/input"');
  return $browser.findElement(By.xpath("//div[3]/div[6]/div[3]/div[1]/div/div[2]/div[1]/div/div/fieldset/materializer[2]/div[2]/div[1]/div/div/input")).click(); })
//.then(function(el) { el.isSelected()
 // .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 30
/*.then(function() {
  log(30, 'setElementSelected "//div[3]/div[6]/div[3]/div[1]/div/div[2]/div[2]/div/div/fieldset/materializer[2]/div[2]/div[1]/div/input"');
  return $browser.findElement(By.xpath("//div[3]/div[6]/div[3]/div[1]/div/div[2]/div[2]/div/div/fieldset/materializer[2]/div[2]/div[1]/div/input")).click(); })
//.then(function(el) { el.isSelected()
 // .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 31
.then(function() {
  log(31, 'setElementSelected "//div[@id=\'Item3\']/div/div/fieldset/materializer[2]/div[2]/div[1]/div/div/input"');
  return $browser.findElement(By.xpath("//div[@id=\'Item3\']/div/div/fieldset/materializer[2]/div[2]/div[1]/div/div/input")).click(); })
//.then(function(el) { el.isSelected()
 // .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 32
/*.then(function() {
  log(32, 'setElementSelected "Item5UNLOCKED/US"');
  return $browser.findElement(By.xpath("//div[3]/div[6]/div[3]/div[1]/div/div[2]/div[5]/div/div/fieldset/materializer[1]/div[2]/div/div/input")).click(); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 33
.then(function() {
  log(33, 'clickElement "//fieldset[@class=\'as-purchaseoptions-isrevealed\']/materializer[2]/div/div/div/div/label"');
  return $browser.waitForAndFindElement(By.xpath("//fieldset[@class=\'as-purchaseoptions-isrevealed\']/materializer[2]/div/div/div/div/label"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 34
.then(function() {
  log(34, 'clickElement "fullPrice"');
  return $browser.waitForAndFindElement(By.id("fullPrice"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 35
.then(function() {
  log(35, 'clickElement "add-to-cart"');
  return $browser.waitForAndFindElement(By.name("add-to-cart"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 36
.then(function() {
  log(36, 'clickElement "cart-actions-checkout"');
  return $browser.waitForAndFindElement(By.id("cart-actions-checkout"), DefaultTimeout); })
.then(function (el) { el.click(); })
*/
.then(function() {
  log(lastStep, '');
  console.log('Browser script execution SUCCEEDED.');
}, function(err) {
  log(lastStep, '');
  console.log ('Browser script execution FAILED.');
  throw(err);
});

/** END OF SCRIPT **/