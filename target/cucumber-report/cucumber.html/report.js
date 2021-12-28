$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("testoform.feature");
formatter.feature({
  "line": 1,
  "name": "Adding details in test form",
  "description": "",
  "id": "adding-details-in-test-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15867520700,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "verify user should be able to add all details and click on submit",
  "description": "",
  "id": "adding-details-in-test-form;verify-user-should-be-able-to-add-all-details-and-click-on-submit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on next button on first page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I have added first name",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I have added last name",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on next buttn on secondpage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I have drag and dropped file from desktop",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I clicked on next button on draganddrop page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I have added signaure",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I have clicked on signature next button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I have sent \"\u003cdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should be able to click on next button on date page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should be abel to select message from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to add \"\u003cmessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should be able to see message",
  "keyword": "Then "
});
formatter.match({
  "location": "TestFormSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 589041300,
  "status": "passed"
});
formatter.match({
  "location": "TestFormSteps.iClickOnNextButtonOnFirstPage()"
});
formatter.result({
  "duration": 201601200,
  "status": "passed"
});
formatter.match({
  "location": "TestFormSteps.iHaveAddedFirstName()"
});
formatter.result({
  "duration": 398545200,
  "status": "passed"
});
formatter.match({
  "location": "TestFormSteps.iHaveAddedLastName()"
});
formatter.result({
  "duration": 1086678900,
  "status": "passed"
});
formatter.match({
  "location": "TestFormSteps.iClickOnNextButtnOnSecondpage()"
});
formatter.result({
  "duration": 350838300,
  "status": "passed"
});
formatter.match({
  "location": "TestFormSteps.iHaveDragAndDroppedFileFromDesktop()"
});
formatter.result({
  "duration": 1040977600,
  "status": "passed"
});
formatter.match({
  "location": "TestFormSteps.iClickedOnNextButtonOnDraganddropPage()"
});
formatter.result({
  "duration": 406563300,
  "status": "passed"
});
formatter.match({
  "location": "TestFormSteps.iHaveAddedSignaure()"
});
formatter.result({
  "duration": 2074123800,
  "status": "passed"
});
formatter.match({
  "location": "TestFormSteps.iHaveClickedOnSignatureNextButton()"
});
formatter.result({
  "duration": 144967800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cdate\u003e",
      "offset": 13
    }
  ],
  "location": "TestFormSteps.iHaveSent(String)"
});
formatter.result({
  "duration": 647315200,
  "status": "passed"
});
formatter.match({
  "location": "TestFormSteps.iShouldBeAbleToClickOnNextButtonOnDatePage()"
});
formatter.result({
  "duration": 328062800,
  "status": "passed"
});
formatter.match({
  "location": "TestFormSteps.iShouldBeAbelToSelectMessageFromDropdown()"
});
formatter.result({
  "duration": 345141500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cmessage\u003e",
      "offset": 25
    }
  ],
  "location": "TestFormSteps.iShouldBeAbleToAdd(String)"
});
formatter.result({
  "duration": 330562900,
  "status": "passed"
});
formatter.match({
  "location": "TestFormSteps.iShouldBeAbleToClickOnSubmitButton()"
});
formatter.result({
  "duration": 1273537600,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton style\u003d\"display: block;\" type\u003d\"submit\" class\u003d\"jfInput-button for... form-submit-button u-right\" data-component\u003d\"button\" aria-label\u003d\"Submit\"\u003eSubmit\u003c/button\u003e is not clickable at point (891, 369). Other element would receive the click: \u003cli role\u003d\"option\" data-value\u003d\"...\" class\u003d\"jfDropdown-optionListItem\" tabindex\u003d\"0\"\u003eFavorite school subject\u003c/li\u003e\n  (Session info: chrome\u003d96.0.4664.110)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027TL-HEN-ICTS-01\u0027, ip: \u0027172.20.64.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4da709d1449026b1385360de5f0951da, clickElement {id\u003dc1a0e8ea-a12b-4b60-be7f-362aefb83702}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51182}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51182/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (4da709d1449026b1385360de5f0951da)] -\u003e xpath: //button[@class\u003d\u0027jfInput-button forSubmit form-submit-button u-right\u0027]]\nSession ID: 4da709d1449026b1385360de5f0951da\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat com.jotform.form.utility.Utility.clickOnElement(Utility.java:50)\r\n\tat com.jotform.form.pages.HomePage.clickOnSubmitBtn(HomePage.java:120)\r\n\tat com.jotform.form.cucumber.steps.TestFormSteps.iShouldBeAbleToClickOnSubmitButton(TestFormSteps.java:87)\r\n\tat ✽.And I should be able to click on submit button(testoform.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestFormSteps.iShouldBeAbleToSeeMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3885559700,
  "status": "passed"
});
});