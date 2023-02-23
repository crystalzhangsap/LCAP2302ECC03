sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'crystalcicdtesting0223.FioriUIAPP',
            componentId: 'SrvAuthorsObjectPage',
            entitySet: 'SrvAuthors'
        },
        CustomPageDefinitions
    );
});