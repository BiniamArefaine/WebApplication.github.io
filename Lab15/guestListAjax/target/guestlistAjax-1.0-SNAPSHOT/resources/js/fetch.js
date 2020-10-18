
$(function () {
    $("container").hide();
    $("#fetch").click(getUserInfo);
    $("#fetch").click(getPost);
    $("#fetch").click(getComment);
});


function getUserInfo() {
    $("container").show();
    var userId = $("#userId").val();
    var postId="";
    $.get(`http://jsonplaceholder.typicode.com/users/${userId}`, function(userInfo){
        displayUserInfo(userInfo);
    });
}

function displayUserInfo(userInfo) {

    $("#id").html(JSON.stringify(userInfo.id));
    $("#name").html(JSON.stringify(userInfo.name));
    $("#username").html(JSON.stringify(userInfo.username));
    $("#email").html(JSON.stringify(userInfo.email));
    $("#phone").html(JSON.stringify(userInfo.phone));
    $("#web").html(JSON.stringify(userInfo.website));
}
function getPost() {
    // document.getElementById("container").style.display="block";
    $("container").show();
    var userId = $("#userId").val();
    var postId="";
    $.get(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`, function(posts){
        displayPost(posts);
    });
}
function displayPost(posts){
    ul = document.createElement('ul');
    $("#post").html(ul);
    for (var i = 0; i < posts.length; i++) {
        var button = document.createElement('BUTTON');
        var text = document.createTextNode("comment");
        button.appendChild(text);

        let li = document.createElement("li");
        ul.appendChild(li);
        ul.appendChild(button);
        var array = JSON.stringify(posts[i].body).split("\\");
        for(var k=0;k<array.length;k++){
            li.innerHTML += array[k];
        }

    }
}
function getComment() {
    // document.getElementById("container").style.display="block";
    $("container").show();
    var userId = $("#userId").val();
    var postId="";
    $.get(`http://jsonplaceholder.typicode.com/comments?postId=${userId}`, function(comments){
        displayComments(comments);
    });
}
function displayComments(comments){
    ul2 = document.createElement('ul');
    $("#comment").html(ul2);
    for (var j = 0; j < comments.length; j++) {
        let li2 = document.createElement("li");
        ul2.appendChild(li2);
        li2.innerHTML += JSON.stringify(comments[j].body);

    }
}