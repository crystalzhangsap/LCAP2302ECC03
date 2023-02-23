sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'crystalcicdtesting0223.FioriUIAPP',
            componentId: 'SrvAuthorsList',
            entitySet: 'SrvAuthors'
        },
        CustomPageDefinitions
    );
});