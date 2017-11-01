jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"basf/salesorderissue/test/integration/NavigationJourneyPhone",
		"basf/salesorderissue/test/integration/NotFoundJourneyPhone",
		"basf/salesorderissue/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});