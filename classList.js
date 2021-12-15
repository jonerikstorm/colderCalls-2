function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({ scope: "https://www.googleapis.com/auth/classroom.profile.emails https://www.googleapis.com/auth/classroom.profile.photos https://www.googleapis.com/auth/classroom.rosters https://www.googleapis.com/auth/classroom.rosters.readonly" })
        .then(function () { console.log("Sign-in successful"); }, function (err) { console.error("Error signing in", err); });
}
function loadClient() {
    gapi.client.setApiKey("YOUR_API_KEY");
    return gapi.client.load("https://classroom.googleapis.com/$discovery/rest?version=v1")
        .then(function () { console.log("GAPI client loaded for API"); }, function (err) { console.error("Error loading GAPI client for API", err); });
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
    return gapi.client.classroom.courses.students.list({
        "courseId": "376202031779"
    })
        .then(function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
    }, function (err) { console.error("Execute error", err); });
}
gapi.load("client:auth2", function () {
    gapi.auth2.init({ client_id: "YOUR_CLIENT_ID" });
});
//# sourceMappingURL=classList.js.map