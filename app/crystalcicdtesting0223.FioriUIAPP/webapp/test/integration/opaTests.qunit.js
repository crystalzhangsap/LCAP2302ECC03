sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'crystalcicdtesting0223/FioriUIAPP/test/integration/FirstJourney',
		'crystalcicdtesting0223/FioriUIAPP/test/integration/pages/SrvAuthorsList',
		'crystalcicdtesting0223/FioriUIAPP/test/integration/pages/SrvAuthorsObjectPage'
    ],
    function(JourneyRunner, opaJourney, SrvAuthorsList, SrvAuthorsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('crystalcicdtesting0223/FioriUIAPP') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSrvAuthorsList: SrvAuthorsList,
					onTheSrvAuthorsObjectPage: SrvAuthorsObjectPage
                }
            },
            opaJourney.run
        );
    }
);