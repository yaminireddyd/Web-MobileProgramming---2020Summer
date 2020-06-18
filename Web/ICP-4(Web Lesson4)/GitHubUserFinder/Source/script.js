function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it.
    // The function should finally return the object(it now contains the response!)
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', "https://api.github.com/users/" + user, true);
    xhttp.send();

    //This will be called after the response is received
    xhttp.onreadystatechange = function() {

        if(xhttp.readyState == 4)
        {
            if(xhttp.status == 200)
            {
                var response = JSON.parse(xhttp.responseText);
                //alert(response.ip);
                console.log(response);
                showUser(response);
            }
         else {
                noSuchUser(username);
            }

        }
    };
}

function showUser(user) {

    $("#profilePic").html("<img height='150' width='150' src='"+ user.avatar_url+"'/>");
    $("#name").text('User Name : '+user.login);
    $("#Id").text('Profile Id : '+user.id);
    $("#link").append("<a href='"+user.html_url+"'>Link URL</a>");

}

function noSuchUser(username) {
    alert("user selected " + username + " is not present");
}

$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        if (e.which == 13) {
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);

        }
    })
});
