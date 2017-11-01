jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Issues in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"basf/salesorderissue/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"basf/salesorderissue/test/integration/pages/App",
	"basf/salesorderissue/test/integration/pages/Browser",
	"basf/salesorderissue/test/integration/pages/Master",
	"basf/salesorderissue/test/integration/pages/Detail",
	"basf/salesorderissue/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "basf.salesorderissue.view."
	});

	sap.ui.require([
		"basf/salesorderissue/test/integration/MasterJourney",
		"basf/salesorderissue/test/integration/NavigationJourney",
		"basf/salesorderissue/test/integration/NotFoundJourney",
		"basf/salesorderissue/test/integration/BusyJourney",
		"basf/salesorderissue/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});