/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'NaturalHazardDashboard.Application',

    name: 'NaturalHazardDashboard',

    requires: [
        // This will automatically load all classes in the NaturalHazardDashboard namespace
        // so that application classes do not need to require each other.
        'NaturalHazardDashboard.*'
    ],

    // The name of the initial view to create.
    mainView: 'NaturalHazardDashboard.view.main.Main'
});
