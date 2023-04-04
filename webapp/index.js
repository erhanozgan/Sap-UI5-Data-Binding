sap.ui.require([
    "sap/m/Text",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/BindingMode",
    "sap/ui/model/resource/ResourceModel"
], function (Text, JSONModel, XMLView, BindingMode, ResourceModel) {
    "use strict"

    // Attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function () {

        // Create Json model
        var oModel = new JSONModel({
            firstName : "Erhan",
            lastName : "Özğan",
            enabled : true,
            address: {
              street:"1 any lane",
              city:"walldorf",
              zip:"80250",
              country:"Türkiye"  
            },
            salesAmount : 12345.343,
            currencyCode : "TRY",
            panelHeaderText : "Data biunding"
        });

        var oResourseModel = new ResourceModel({
            bundleName : "sap.ui.demo.db.i18n.i18n",
            supportedLocales : ["", "en"],
            fallbackLocale :""
        })

        sap.ui.getCore().setModel(oResourseModel, "i18n");

        

        //oModel.setDefaultBindingMode(BindingMode.OneWay)

        sap.ui.getCore().setModel(oModel);

        //Display the xml called app
        new XMLView({
            viewName : "sap.ui.demo.db.view.App"
        }).placeAt("content")
    })
})