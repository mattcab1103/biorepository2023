function storeLastViewedChapter(chapter)
{
  document.cookie = "resumePath = /" + chapter;
}

function goToLastViewedChapter()
{
  var cookies = document.cookie;
  var cookiesArray = cookies.split("; ");
  var cookieSplit, cookieName, cookieValue;
  var returnPath = "";
  for (var i = 0; i < cookiesArray.length; i++) {
      cookieSplit = cookiesArray[i].split("=");
      cookieName = cookieSplit[0];
      cookieValue = cookieSplit[1];
      if (cookieName == "resumePath") {
          returnPath = cookieValue;
      }
   }
   window.location.href = returnPath;
}