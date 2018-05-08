/*CORE FUNCTIONS*/


function changeAppPage(gameScreen) {

    //the screen to goto
    var gameScreen;

    console.log("changeAppPage called with " + gameScreen + " as partial view");




    $(".contentRoot").empty();
    //newView = gameScreen;
    getPartialView(gameScreen);



    

} //close changeAppPage function




function getPartialView(screen) {



  var contentLoaded;

  console.log("screen content injection for " + screen);


  //Get HTML via a promise
  var myHeaders = new Headers();
  var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
  };
  var myRequest = new Request('partialViews/' + screen + '.html', myInit);
  fetch(myRequest).then(function(response) {
    return response.text();
  }).then(function(data) {
    $(".contentRoot").append(data);
    contentLoaded = true;

  });





}
function navHashHistory(saveHash) {
    //Hash Hijack Method for SPA
    //for each new SPA partial view, add the hash to the URL bar
    var hashValue = location.hash;
    hashValue = hashValue.replace(/^#/, '');
    if (hashValue != saveHash) {
        window.history.pushState("", "", "#" + saveHash);
    } else {
        //Must be first initialise
        window.history.pushState("", "", "#" + saveHash);
    }

} //end navHashHistory
