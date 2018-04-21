/**
 * Created by gokhansari on 27.07.17.
 */
var HttpClient = function () {

    this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                if(anHttpRequest.responseType == "json") {
                    aCallback(JSON.parse(anHttpRequest.response));
                } else {
                    aCallback(anHttpRequest.response);
                }
        }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.setRequestHeader("Authorization", "Basic " + this.authdata);
        anHttpRequest.send(null);
    }

    this.setBasicAuthorization = function(authdata) {
        this.authdata = authdata;
    }
}
