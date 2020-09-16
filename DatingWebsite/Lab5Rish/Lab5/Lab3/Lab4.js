
var ding;
var thePerson;
var new_array = [];
//var people_array = [
//    {url: "lab3images/person9.png",
//        username: "JohnBrown",
//        title: "I love riding  bikes!",
//        firstName: "John",
//        lastName: "Brown",
//        age: "24",
//        description: "nice",
//        relationshipPrefrence: "Friendship",
//        religionPrefrence: "Other",
//        gender: "All",
//        birthday: "02/09/1998",
//        status: "Single",
   

//        religion: "Christian",
//        wantsKids: "Yes",
//        hasKids: "No",
//        my_gender: "Male",
//        city: "Philadelphia,",
//        state: "PA",
//        likeButtonID: "person1", dislikeButtonID: "person1"
//    },


//    {url: "lab3images/person2.png",
//              username: "BrianKelly",
//        title: "Music is my passion",
//        firstName: "Brian",
//        lastName: "Kelly",
//        age: "23",
//        description: "nice",
//        relationshipPrefrence: "Friendship",
//        religionPrefrence: "Other",
//        gender: "All",
//        birthday: "02/09/1998",
//        status: "Single",
//        hasKids: "No",
//        religion: "Catholic",
//        kids: "No",
//        wantsKids: "Yes",
//        my_gender: "Male",
//        city: "Levittown,",
//        state: "NJ"
//        ,
//        likeButtonID: "person2", dislikeButtonID: "person2"},
//    {url: "lab3images/person3.png",
//         username: "KevinBrown",
//        title: "Loves going to see stand up comedy",
//        firstName: "Kevin",
//        lastName: "Brown",
//        age: "23", description: "nice",
//        relationshipPrefrence: "Friendship",
//        religionPrefrence: "Other",
//        gender: "All",
//        hasKids: "No",
//        birthday: "02/09/1998",
//        status: "Single",
//        religion: "Christian",
//        kids: "No",
//        wantsKids: "Yes",
//        my_gender: "Male",
//        city: "Philadelphia,",
//        state: "PA"
//        ,
//        likeButtonID: "person3", dislikeButtonID: "person3"},
//    {url: "lab3images/person4.png",
//         username: "LiamMan",
//        title: "Can't wait to meet you",
//        firstName: "Liam",
//        lastName: "Man",
//        age: "23", description: "nice",
//        relationshipPrefrence: "Friendship",
//        religionPrefrence: "Other",
//        gender: "All",
//        hasKids: "No",
//        birthday: "02/09/1998",
//        status: "Single",
//        wantsKids: "No",
//        my_gender: "Male",
//        city: "West Chester,",
//        state: "PA", likeButtonID: "person4", dislikeButtonID: "person4"},
//    {url: "lab3images/person5.png",
//         username: "BrockJoesph",
//        title: "Comp Sci Major at Temple",
//        firstName: "Brock",
//        lastName: "Joesph",
//        age: "23", description: "nice",
//        relationshipPrefrence: "Friendship",
//        religionPrefrence: "Other",
//        gender: "All",
//        birthday: "02/09/1998",
//        status: "Single",
//        wantsKids: "Yes",
//        hasKids: "No",
//        my_gender: "Male",
//        city: "Philadelphia,",
//        state: "PA", likeButtonID: "person5", dislikeButtonID: "person5"},
//    {url: "lab3images/person6.png",
//         username: "JustinJacobs",
//        title: "New to the city!!!",
//        firstName: "Justin",
//        lastName: "Jacobs",
//        age: "23", description: "nice",
//        relationshipPrefrence: "Friendship",
//        religionPrefrence: "Other",
//        gender: "All",
//        hasKids: "No",
//        birthday: "02/09/1998",
//        status: "Single",
//        religion: "Christian",
//        wantsKids: "Yes",
//        my_gender: "Male",
//        city: "New York,",
//        state: "NY", likeButtonID: "person6", dislikeButtonID: "person6"},
//    {url: "lab3images/person7.png",
//         username: "NickDoe",
//        title: "I love fashion and music",
//        firstName: "Nick",
//        lastName: "Doe",
//        age: "23", description: "nice",
//        relationshipPrefrence: "Friendship",
//        religionPrefrence: "Other",
//        gender: "All",
//        birthday: "02/09/1998",
//        status: "Single",
//        religion: "Christian",
//        hasKids: "No",
//        wantsKids: "No",
//        my_gender: "Male",
//        city: "Cherry Hill,",
//        state: "NJ", likeButtonID: "person7", dislikeButtonID: "person7"},
//    {url: "lab3images/person8.png",
//         username: "DanielFitzpatrick",
//        title: "Olymic Athlete",
//        firstName: "Daniel",
//        lastName: "Fitzpatrick",
//        age: "23", description: "nice",
//        relationshipPrefrence: "Friendship",
//        religionPrefrence: "Other",
//        gender: "All",
//        hasKids: "No",
//        birthday: "02/09/1998",
//        status: "Single",
//        wantsKids: "Yes",
//        my_gender: "Male",
//        city: "Malvern,",
//        state: "PA", likeButtonID: "person8", dislikeButtonID: "person8"},
//    {url: "lab3images/person1.png",
//         username: "KevinWu",
//        title: "Love a good book",
//        firstName: "Kevin",
//        lastName: "Wu",
//        age: "23", description: "nice",
//        relationshipPrefrence: "Friendship",
//        religionPrefrence: "Other",
//        gender: "All",
//        birthday: "02/09/1998",
//        status: "Single",
//        religion: "christian",
//        hasKids: "No",
//        wantsKids: "Yes",
//        my_gender: "Male",
//        city: "Philadelphia,",
//        state: "PA", likeButtonID: "person9", dislikeButtonID: "person9"},
//    {url: "lab3images/person10.png",
//         username: "OliviaReiley",
//        title: "I enjoy hiking!",
//        firstName: "Olivia",
//        lastName: "Reiley",
//        age: "23", description: "nice",
//        relationshipPrefrence: "Friendship",
//        religionPrefrence: "Other",
//        gender: "All",
//        birthday: "02/09/1998",
//        status: "Single",
//        religion: "Agnostic",
//        hasKids: "No",
//        wantsKids: "Yes",
//        my_gender: "Female",
//        city: "Malvern,",
//        state: "PA", likeButtonID: "person10", dislikeButtonID: "person10"},
//    {url: "lab3images/person11.png",
//         username: "JennyElla",
//        title: "Fashion Blogger",
//        firstName: "Jenny",
//        lastName: "Ella",
//        age: "23",
//        description: "nice",
//        relationshipPrefrence: "Friendship",
//        religionPrefrence: "Other",
//        gender: "All",
//        birthday: "02/09/1998",
//        status: "Single",
       
//        religion: "Prefer Not To Say",
//        hasKids: "No",
//        wantsKids: "Yes",
//        my_gender: "Female",
//        city: "Philadelphia,",
//        state: "PA", likeButtonID: "person11", dislikeButtonID: "person11"},
//    {url: "lab3images/person12.png",
//         username: "AnnaKendrick",
//        title: "Art!!!",
//        firstName: "Anna",
//        lastName: "Kendrick",
//        age: "23",
//        description: "nice",
//        relationshipPrefrence: "Friendship",
//        religionPrefrence: "Other",
//        gender: "All",
//        birthday: "02/09/1998",
//        status: "Single",
//        hasKids: "No",
//        religion: "Prefer Not To Say",
       
//        wantsKids: "Yes",
//        my_gender: "Female",
//        city: "Brooklyn,",
//        state: "NY",
//        likeButtonID: "person12",
//        dislikeButtonID: "person12"},
//    {url: "lab3images/person14.png",
//         username: "CandyReuzi",
//        title: "Studying abroad ~",
//        firstName: "Candy",
//        lastName: "Reuzi",
//        age: "23",
//        description: "nice",
//        relationshipPrefrence: "Friendship",
//        religionPrefrence: "Other",
//        gender: "All",
//        birthday: "02/09/1998",
//        status: "Single",
//        hasKids: "No",
//        religion: "Christian",
        
//        wantsKids: "Yes",
//        my_gender: "Female",
//        city: "-",
//        state: "PA", likeButtonID: "person13", dislikeButtonID: "person13"},
//    {url: "lab3images/person13.png",
//         username: "JadaHope",
//        title: "Always find me outdoors",
//        firstName: "Jada",
//        lastName: "Hope",
//        age: "23",
//        description: "nice",
//        relationshipPrefrence: "Friendship",
//        religionPrefrence: "Other",
//        gender: "All",
//        birthday: "02/09/1998",
//        status: "Single",
//        hasKids: "No",
//        religion: "Christian",
       
//        wantsKids: "Yes",
//        my_gender: "Female",
//        city: "Roxborough,",
//        state: "PA", likeButtonID: "person14", dislikeButtonID: "person14"},
//    {url: "lab3images/person15.png",
//         username: "IsabellaOlivia",
//        title: "love coffee",
//        firstName: "Isabella",
//        lastName: "Olivia",
//        age: "23",
//        description: "nice",
//        relationshipPrefrence: "Friendship",
//        religionPrefrence: "Other",
//        gender: "All",
//        birthday: "02/09/1998",
//        status: "Single",
//        hasKids: "No",
//        religion: "christian",
       
//        wantsKids: "Yes",
//        my_gender: "Female",
//        city: "Bridgewater,",
//        state: "NJ", likeButtonID: "person15", dislikeButtonID: "person15"},
//    {url: "lab3images/person16.png",
//         username: "CharoletteMia",
//        title: "Love music :)",
//        firstName: "Charolette",
//        lastName: "Mia",
//        age: "23",
//        description: "nice",
//        relationshipPrefrence: "Friendship",
//        religionPrefrence: "Other",
//        gender: "All",
//        birthday: "02/09/1998",
//        status: "Single",
//        hasKids: "No",
//        religion: "christian",
       
//        wantsKids: "Yes",
//        my_gender: "Female",
//        city: "New Brunswick,",
//        state: "NJ", likeButtonID: "person16", dislikeButtonID: "person16"},
//    {url: "lab3images/person17.png",
//         username: "AvaCarol",
//        title: "Shopping is my favorite hobby ",
//        firstName: "Ava",
//        lastName: "Carol",
//        age: "23",
//        description: "nice",
//        relationshipPrefrence: "Friendship",
//        religionPrefrence: "Other",
//        gender: "All",
//        birthday: "02/09/1998",
//        status: "Single",
//        hasKids: "No",
//        religion: "christian",
        
//        wantsKids: "Yes",
//        my_gender: "Female",
//        city: "Wayne,",
//        state: "PA", likeButtonID: "person17", dislikeButtonID: "person17"},
//    {url: "lab3images/person18.png",
//         username: "JessicaAlba",
//        title: "I love to act",
//        firstName: "Jessica",
//        lastName: "Alba",
//        age: "23",
//        description: "nice",
//        relationshipPrefrence: "Friendship",
//        religionPrefrence: "Other",
//        gender: "All",
//        birthday: "02/09/1998",
//        status: "Single",
//        hasKids: "No",
//        religion: "Jewish",
       
//        wantsKids: "Yes",
//        my_gender: "Female",
//        city: "Bridgewater,",
//        state: "NJ", likeButtonID: "person18", dislikeButtonID: "person18"},
//    {url: "lab3images/person19.png",
//         username: "KayleeClaire",
//        title: "I enjoy reading ",
//        firstName: "Kaylee",
//        lastName: "Claire",
//        age: "23",
//        description: "nice",
//        relationshipPrefrence: "Friendship",
//        religionPrefrence: "Other",
//        gender: "All",
//        birthday: "02/09/1998",
//        status: "Single",
//        hasKids: "No",
//        religion: "christian",
       
//        wantsKids: "Yes",
//        my_gender: "Female",
//        city: "Bridgewater,",
//        state: "NJ", likeButtonID: "person19", dislikeButtonID: "person19"},
//    {url: "lab3images/person20.png",
//         username: "AnnaMay",
//        title: "My favorite color is blue",
//        firstName: "Anna",
//        lastName: "May",
//        age: "23",
//        description: "nice",
//        relationshipPrefrence: "Friendship",
//        religionPrefrence: "Other",
//        gender: "All",
//        birthday: "02/09/1998",
//        status: "Single",
//        hasKids: "No",
//        religion: "christian",
       
//        wantsKids: "Yes",
//        my_gender: "Female",
//        state: "NJ",
//        city: "Bridgewater,"
//        , likeButtonID: "person20"
//        , dislikeButtonID: "person20"
//    }];


 var likedArray = [];
var passedArray = [];
function setStorage() {
    
   localStorage.setItem("array", JSON.stringify(people_array));
    localStorage.setItem("likedArray", JSON.stringify(likedArray));
   localStorage.setItem("passedArray", JSON.stringify(passedArray));
   
   alert("Great! Local storage has been set.")
}




function makeProfile() {

    var profile = new Object();
   
    profile.username = $('#username').val();
    profile.password = $('#password').val();
    profile.title = $('#title').val();
    profile.firstname = $('#fname').val();
    profile.lastname = $('#lname').val();
    profile.age = $('#age').val();
    profile.my_gender = $('#my_gender').val();
    profile.city = $('#city').val();
    profile.state = $('#state').val();
    profile.birthday = $('#birthday').val();
    profile.religion = $('#religion').val();
    profile.description = $('#description').val();
    profile.url = $('#url').val();
    profile.status = $("input[name='status']:checked").val();
    profile.hasKids = $("input[name='hasKids']:checked").val();
    profile.wantsKids = $("input[name='wantsKids']:checked").val();

    
    var isFormValid = true;


    if (profile.firstname === "") {
        $("#fname").next().html("Enter a valid first name");
        isFormValid = false;
    } else {

        $("#fname").next().html("");
    }


    if (profile.lastname === "") {
        $("#lname").next().html(" Enter a valid last name");

        isFormValid = false;
    } else {
        $("#lname").next().html("");
    }

    if (profile.url === "") {
        $("#url").next().html(" Enter a valid url");

        isFormValid = false;
    } else {
        $("#url").next().html("");
    }

    if (profile.age === "" || isNaN(profile.age)) {
        $("#age").next().html(" Enter a valid age");
        isFormValid = false;
    } else {
        $("#age").next().html("");
    }

    if (profile.my_gender === "") {
        $("#my_gender").next().html(" Enter a valid gender");
        isFormValid = false;
    } else {
        $("#my_gender").next().html("");
    }


    if (profile.title === "") {
        $("#title").next().html(" Enter a valid bio");

        isFormValid = false;
    } else {
        $("#title").next().html("");
    }
    if (profile.description === "") {
        $("#description").next().html(" Enter a valid description");
        isFormValid = false;
    } else {
        $("#description").next().html("");
    }
    if (profile.city === "") {
        $("#city").next().html(" Enter a valid city");
        isFormValid = false;
    } else {
        $("#city").next().html("");
    }
    if (profile.state === "") {
        $("#state").next().html(" Enter a valid state");
        isFormValid = false;
    } else {
        $("#state").next().html("");
    }
    if (profile.religion === "") {
        $("#religion").next().html(" Enter a valid religion");
        isFormValid = false;
    } else {
        $("#religion").next().html("");
    }

    if (isFormValid === false) {

        alert('Please Fix errors');
    } else {


        personString = JSON.stringify(profile);
        $.ajax({
            type: "POST",
            url: "https://localhost:44388/api/Profiles/AddProfile",
            contentType: "application/json",
            dataType: "json",
            data: personString,
            success: function (data) {
                var result = data;
                if (result == true) {
                    alert("Success");
                  //  window.open('Edit.html');
                }

                else {
                    alert("error");

                }

            },
            error: function (req, status, error) {
                alert('errror');
            }

        });
    }
};

 


//function checkStorage() {


//    var i;

//    console.log("local storage:");
//    for (i = 0; i < localStorage.length; i++) {
//        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
//        alert(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
//    }



//}


//function clearStorage() {

//    localStorage.clear();
//    alert('local storage cleared :) ');
//}

