sap.ui.define([
	"basf/salesorderissue/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("basf.salesorderissue.controller.App", {

		onInit: function() {
			var oViewModel,
				fnSetAppNotBusy,
				oListSelector = this.getOwnerComponent().oListSelector,
				iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();

			oViewModel = new JSONModel({
				busy: true,
				delay: 0
			});
			this.setModel(oViewModel, "appView");

			fnSetAppNotBusy = function() {
				oViewModel.setProperty("/busy", false);
				oViewModel.setProperty("/delay", iOriginalBusyDelay);
			};

			// // this.getOwnerComponent().getModel().metadataLoaded()
			// 	// .then(fnSetAppNotBusy);

			// Makes sure that master view is hidden in split app
			// after a new list entry has been selected.
			oListSelector.attachListSelectionChange(function() {
				this.byId("idAppControl").hideMaster();
			}, this);

			// apply content density mode to root view
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());

			sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function(oEvent) {
			var oNavCon = this.getView().byId("navCon"),
				sView = oEvent.getParameter("name");
			if (sView === "SalesOrderIssues") {
				oNavCon.to(this.createId("idAppControl"));
			}else if(sView === "SalesOrders"){
				oNavCon.to(this.createId("FullScreen"));
			}
		}

	});

});