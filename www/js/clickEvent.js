

$(document).on('click', '#continueButton', {}, function(e) {
	document.getElementById("header").style.height = "20vh";
	navHashHistory('Dashboard');
    changeAppPage('dashboardPartial');
});

$(document).on('click', '#construction', {}, function(e) {
	document.getElementById("header").style.height = "30vh";
	navHashHistory('Under Construction');
    changeAppPage('constructionPartial');
});


$(document).on('click', '#return', {}, function(e) {
	document.getElementById("header").style.height = "20vh";
	navHashHistory('Dashboard');
    changeAppPage('dashboardPartial');
});

$(document).on('click', '#sport', {}, function(e) {


	navHashHistory('Sport and Leisure');
    changeAppPage('sportPartial');
    document.getElementById("header").style.height = "30vh";
});

$(document).on('click', '#gym', {}, function(e) {

	navHashHistory('Dashboard');
    changeAppPage('gymPartial');
});
$(document).on('click', '#health', {}, function(e) {

	navHashHistory('Dashboard');
    changeAppPage('healthPartial');
});

$(document).on('click', '#injury', {}, function(e) {

	navHashHistory('Dashboard');
    changeAppPage('injuryPartial');
});
$(document).on('click', '#free', {}, function(e) {

	navHashHistory('Dashboard');
    changeAppPage('freePartial');
});