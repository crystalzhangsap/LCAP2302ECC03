{
	"_Name": "MDKAPP",
	"Version": "/MDKAPP/Globals/AppDefinition_Version.global",
	"MainPage": "/MDKAPP/Pages/Main.page",
	"OnLaunch": [
		"/MDKAPP/Actions/Service/InitializeOnline.action"
	],
	"OnWillUpdate": "/MDKAPP/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/MDKAPP/Actions/Service/InitializeOnline.action",
	"Styles": "/MDKAPP/Styles/Styles.less",
	"Localization": "/MDKAPP/i18n/i18n.properties",
	"_SchemaVersion": "6.3"
}