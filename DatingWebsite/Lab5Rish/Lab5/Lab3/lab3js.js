var person_array = [
    person1 = {image: "lab3images/person9.png",
        title: "I love playing poker!",
        firstName: "John",
        lastName: "Brown",
        age: 24,
        description: "",
        status: "Single", lookingFor: "Friendship",
        religion: "Christian",
        kids: "No",
        wantsKids: "Yes",
        gender: "Male",
        city: "Philadelphia,",
        state: "PA",
        likeButtonID: "person1", dislikeButtonID: "person1"},
    person2 = {image: "lab3images/person2.png",
        title: "I'm a pilot",
        firstName: "Brian",
        lastName: "Kelly",
        age: 23, description: "",
        status: "Taken", lookingFor: "Friendship",
        religion: "Catholic",
        kids: "No",
        wantsKids: "Yes",
        gender: "Male",
        city: "Levittown,",
        state: "NJ"
        ,
        likeButtonID: "person2", dislikeButtonID: "person2"},
    person3 = {image: "lab3images/person3.png",
        title: "Loves going to see new movies",
        firstName: "Kevin",
        lastName: "Brown",
        age: 23, description: "",
        status: "Single", lookingFor: "Relationship",
        religion: "Christian",
        kids: "No",
        wantsKids: "Yes",
        gender: "Male",
        city: "Philadelphia,",
        state: "PA"
        ,
        likeButtonID: "person3", dislikeButtonID: "person3"},
    person4 = {image: "lab3images/person4.png",
        title: "Can't wait to meet you",
        firstName: "Liam",
        lastName: "Man",
        age: 21, description: "",
        status: "Single", lookingFor: "Anything",
        religion: "Prefer Not To Say",
        kids: "No",
        wantsKids: "No",
        gender: "Male",
        city: "West Chester,",
        state: "PA", likeButtonID: "person4", dislikeButtonID: "person4"},
    person5 = {image: "lab3images/person5.png",
        title: "Comp Sci Major at Temple",
        firstName: "Brock",
        lastName: "Joesph",
        age: 20, description: "",
        status: "Single", lookingFor: "Friendship",
        religion: "Prefer Not To Say",
        kids: "No",
        wantsKids: "Yes",
        gender: "Male",
        city: "Philadelphia,",
        state: "PA", likeButtonID: "person5", dislikeButtonID: "person5"},
    person6 = {image: "lab3images/person6.png",
        title: "New to the city!!!",
        firstName: "Justin",
        lastName: "Jacobs",
        age: 23, description: "",
        status: "", lookingFor: "",
        religion: "Christian",
        kids: "No",
        wantsKids: "Yes",
        gender: "Male",
        city: "New York,",
        state: "NY", likeButtonID: "person6", dislikeButtonID: "person6"},
    person7 = {image: "lab3images/person7.png",
        title: "I love fashion and music",
        firstName: "Nick",
        lastName: "Doe",
        age: 26, description: "",
        status: "", lookingFor: "",
        religion: "Christian",
        kids: "No",
        wantsKids: "No",
        gender: "Male",
        city: "Cherry Hill,",
        state: "NJ", likeButtonID: "person7", dislikeButtonID: "person7"},
    person8 = {image: "lab3images/person8.png",
        title: "Olymic Athlete",
        firstName: "Daniel",
        lastName: "Fitzpatrick",
        age: 23, description: "",
        status: "Single", lookingFor: "Relationship",
        religion: "Prefer Not To Say",
        kids: "No",
        wantsKids: "Yes",
        gender: "Male",
        city: "Malvern,",
        state: "PA", likeButtonID: "person8", dislikeButtonID: "person8"},
    person9 = {image: "lab3images/person1.png",
        title: "Love a good book",
        firstName: "Kevin",
        lastName: "Wu",
        age: 21, description: "",
        status: "Taken", lookingFor: "Friendship",
        religion: "christian",
        kids: "No",
        wantsKids: "Yes",
        gender: "Male",
        city: "Philadelphia,",
        state: "PA", likeButtonID: "person9", dislikeButtonID: "person9"},
    person10 = {image: "lab3images/person10.png",
        title: "I enjoy hiking!",
        firstName: "Olivia",
        lastName: "Reiley",
        age: 21, description: "",
        status: "Taken", lookingFor: "Friendship",
        religion: "Agnostic",
        kids: "No",
        wantsKids: "Yes",
        gender: "Female",
        city: "Malvern,",
        state: "PA", likeButtonID: "person10", dislikeButtonID: "person10"},
    person11 = {image: "lab3images/person11.png",
        title: "Fashion Blogger",
        firstName: "Jenny",
        lastName: "Ella",
        age: 21, description: "",
        status: "Single", lookingFor: "Relationship",
        religion: "Prefer Not To Say",
        kids: "No",
        wantsKids: "Yes",
        gender: "Female",
        city: "Philadelphia,",
        state: "PA", likeButtonID: "person11", dislikeButtonID: "person11"},
    person12 = {image: "lab3images/person12.png",
        title: "Art!!!",
        firstName: "Anna",
        lastName: "Kendrick",
        age: 24, description: "",
        status: "", lookingFor: "",
        religion: "Prefer Not To Say",
        kids: "No",
        wantsKids: "Yes",
        gender: "Female",
        city: "Brooklyn,",
        state: "NY", likeButtonID: "person12", dislikeButtonID: "person12"},
    person13 = {image: "lab3images/person14.png",
        title: "Studying abroad ~",
        firstName: "Candy",
        lastName: "Reuzi",
        age: 21, description: "",
        status: "", lookingFor: "",
        religion: "Christian",
        kids: "No",
        wantsKids: "Yes",
        gender: "Female",
        city: "-",
        state: "PA", likeButtonID: "person13", dislikeButtonID: "person13"},
    person14 = {image: "lab3images/person13.png",
        title: "Always find me outdoors",
        firstName: "Jada",
        lastName: "Hope",
        age: 23, description: "",
        status: "Single", lookingFor: "Anything",
        religion: "Christian",
        kids: "No",
        wantsKids: "Yes",
        gender: "Female",
        city: "Roxborough,",
        state: "PA", likeButtonID: "person14", dislikeButtonID: "person14"},
    person15 = {image: "lab3images/person15.png",
        title: "love coffee",
        firstName: "Isabella",
        lastName: "Olivia",
        age: 23, description: "",
        status: "Single", lookingFor: "Relationship",
        religion: "christian",
        kids: "No",
        wantsKids: "Yes",
        gender: "Female",
        city: "Bridgewater,",
        state: "NJ", likeButtonID: "person15", dislikeButtonID: "person15"},
    person16 = {image: "lab3images/person16.png",
        title: "Love music :)",
        firstName: "Charolette",
        lastName: "Mia",
        age: 23, description: "",
        status: "", lookingFor: "",
        religion: "christian",
        kids: "No",
        wantsKids: "Yes",
        gender: "Female",
        city: "New Brunswick,",
        state: "NJ", likeButtonID: "person16", dislikeButtonID: "person16"},
    person17 = {image: "lab3images/person17.png",
        title: "Shopping is my favorite hobby ",
        firstName: "Ava",
        lastName: "Carol",
        age: 23, description: "",
        status: "", lookingFor: "",
        religion: "christian",
        kids: "No",
        wantsKids: "Yes",
        gender: "Female",
        city: "Wayne,",
        state: "PA", likeButtonID: "person17", dislikeButtonID: "person17"},
    person18 = {image: "lab3images/person18.png",
        title: "I love to act",
        firstName: "Jessica",
        lastName: "Alba",
        age: 23, description: "",
        status: "", lookingFor: "",
        religion: "Jewish",
        kids: "No",
        wantsKids: "Yes",
        gender: "Female",
        city: "Bridgewater,",
        state: "NJ", likeButtonID: "person18", dislikeButtonID: "person18"},
    person19 = {image: "lab3images/person19.png",
        title: "I enjoy reading ",
        firstName: "Kaylee",
        lastName: "Claire",
        age: 23, description: "",
        status: "", lookingFor: "",
        religion: "christian",
        kids: "No",
        wantsKids: "Yes",
        gender: "Female",
        city: "Bridgewater,",
        state: "NJ", likeButtonID: "person19", dislikeButtonID: "person19"},
    person20 = {image: "lab3images/person20.png",
        title: "My favorite color is blue",
        firstName: "Anna",
        lastName: "May",
        age: 23, description: "",
        status: "", lookingFor: "",
        religion: "christian",
        kids: "No",
        wantsKids: "Yes",
        gender: "Female",
        state: "NJ",
        city: "Bridgewater,"
        , likeButtonID: "person20"
        , dislikeButtonID: "person20"
    }];


//Functions 
var likesList = "";
var matchList = [];
var buttonList = [];
var stuff = "";
var pic = "";


function btnAddLike_click(clicked) {

    if (!buttonList.includes(clicked)) {
        buttonList.push(clicked);

        for (var i = 0; i < person_array.length; i++) {

            if (person_array[i].likeButtonID === clicked) {

                matchList.push(person_array[i]);

            }

            document.getElementById("myLikes").innerHTML = "";
        }
        for (var i = 0; i < matchList.length; i++) {

            pic = "<img id='likes_pic' src='" + matchList[i].image + "'>";

            document.getElementById("myLikes").innerHTML += matchList[i].firstName + " " + matchList[i].lastName + "<br>" + pic + "<br>" + matchList[i].age + "<br>" + matchList[i].title + "<br><br><br><br>";
        }
    }
}


function btnDislike_click(clicked) {

    var val_dislike = "";
    for (var i = 0; i < person_array.length; i++) {

        if (person_array[i].dislikeButtonID === clicked) {
            var a = person_array.indexOf(person_array[i]);
          var val_dislike = person_array[i].dislikeButtonID;


            person_array.splice(a, 1);

           




            btnDisplayProfiles_click();



        }
    }

    for (var k = 0; k < matchList.length; k++) {
        if (matchList[k].dislikeButtonID === val_dislike) {
            var b = matchList.indexOf(matchList[k]);
          //  alert(val_dislike);
            matchList.splice(b, 1);
            //document.getElementById("myLikes").innerHTML = matchList[i].firstName + " " + matchList[i].lastName + "<br>" + pic + "<br>" + matchList[i].age + "<br>" + matchList[i].title + "<br><br><br><br>";
            break;
        }


    }
    
    document.getElementById("myLikes").innerHTML = "";
    
    for (var i = 0; i < matchList.length; i++) {

            pic = "<img id='likes_pic' src='" + matchList[i].image + "'>";

            document.getElementById("myLikes").innerHTML += matchList[i].firstName + " " + matchList[i].lastName + "<br>" + pic + "<br>" + matchList[i].age + "<br>" + matchList[i].title + "<br><br><br><br>";
        }



}








function btnDisplayProfiles_click() {







    var imagez = "";
    var matches = "";
    var gender = document.getElementById("ddlGender").value;
    var state = document.getElementById("ddlState").value;





    for (var i = 0; i < person_array.length; i++) {


        if (person_array[i].gender === "Male" && gender === 'Males' && state === person_array[i].state) {

            imagez += "<img id='profile_pic' src='" + person_array[i].image + "'>";
            document.getElementById("image").innerHTML = imagez;

            matches += ("<br>" + "<span class='title'>Title:</span>" + person_array[i].title + "" + "<br/>" +
                    "<span class='title'>Name:</span> " + person_array[i].firstName + " " +
                    person_array[i].lastName + "" + "<br/>" +
                    "<span class='title'>Age:</span>" + person_array[i].age + "" + "<br/>" +
                    "<span class='title'>Description:</span> " + person_array[i].description + "" + "<br/>" +
                    "<span class='title'>Relationship Status:</span> " + person_array[i].status + "" + "<br/>" +
                    "<span class='title'>Looking For:</span> " + person_array[i].lookingFor + "" + "<br/>" +
                    "<span class='title'>Religion:</span> " + person_array[i].religion + "" + "<br/>" +
                    "<span class='title'>Has Kids?:</span> " + person_array[i].kids + "" + "<br/>" +
                    "<span class='title'>Wants Kids?:</span> " + person_array[i].wantsKids + "" + "<br/>" +
                    "<span class='title'>Gender:</span> " + person_array[i].gender + "" + "<br/>" +
                    "<span class='title'>City:</span> " + person_array[i].city + "" + "<br/>" +
                    "<span class='title'>State:</span> " + person_array[i].state) + "<br>" +
                    "<button id='" + person_array[i].likeButtonID + "'"
                    + "onclick='btnAddLike_click(this.id);'>" + "Like </button>" + "<button id='" + person_array[i].dislikeButtonID + "'"
                    + "onclick='btnDislike_click(this.id);'>" + "Dislike </button>" +
                    "<br>" + "<br>" + "<br>" + "<br>";

            document.getElementById("profile").innerHTML = matches;


        }



        else if (person_array[i].gender === "Female" && gender === 'Females' && state === person_array[i].state) {



            imagez += "<img id='profile_pic' src='" + person_array[i].image + "'>";
            document.getElementById("image").innerHTML = imagez;

            matches += ("<br>" + "<span class='title'>Title:</span>" + person_array[i].title + "" + "<br/>" +
                    "<span class='title'>Name:</span> " + person_array[i].firstName + " " +
                    person_array[i].lastName + "" + "<br/>" +
                    "<span class='title'>Age:</span>" + person_array[i].age + "" + "<br/>" +
                    "<span class='title'>Description:</span> " + person_array[i].description + "" + "<br/>" +
                    "<span class='title'>Relationship Status:</span> " + person_array[i].status + "" + "<br/>" +
                    "<span class='title'>Looking For:</span> " + person_array[i].lookingFor + "" + "<br/>" +
                    "<span class='title'>Religion:</span> " + person_array[i].religion + "" + "<br/>" +
                    "<span class='title'>Has Kids?:</span> " + person_array[i].kids + "" + "<br/>" +
                    "<span class='title'>Wants Kids?:</span> " + person_array[i].wantsKids + "" + "<br/>" +
                    "<span class='title'>Gender:</span> " + person_array[i].gender + "" + "<br/>" +
                    "<span class='title'>City:</span> " + person_array[i].city + "" + "<br/>" +
                    "<span class='title'>State:</span> " + person_array[i].state) + "<br>" +
                    "<button id='" + person_array[i].likeButtonID + "'"
                    + "onclick='btnAddLike_click(this.id);'>" + "Like </button>" + "<button id='" + person_array[i].dislikeButtonID + "'"
                    + "onclick='btnDislike_click(this.id);'>" + "Dislike </button>" +
                    "<br>" + "<br>" + "<br>" + "<br>";

            document.getElementById("profile").innerHTML = matches;

        }
        // FEMALES, ALL STATES
        else if (person_array[i].gender === "Female" && gender === 'Females' && state === "All") {

            imagez += "<img id='profile_pic' src='" + person_array[i].image + "'>";
            document.getElementById("image").innerHTML = imagez;

            matches += ("<br>" + "<span class='title'>Title:</span>" + person_array[i].title + "" + "<br/>" +
                    "<span class='title'>Name:</span> " + person_array[i].firstName + " " +
                    person_array[i].lastName + "" + "<br/>" +
                    "<span class='title'>Age:</span>" + person_array[i].age + "" + "<br/>" +
                    "<span class='title'>Description:</span> " + person_array[i].description + "" + "<br/>" +
                    "<span class='title'>Relationship Status:</span> " + person_array[i].status + "" + "<br/>" +
                    "<span class='title'>Looking For:</span> " + person_array[i].lookingFor + "" + "<br/>" +
                    "<span class='title'>Religion:</span> " + person_array[i].religion + "" + "<br/>" +
                    "<span class='title'>Has Kids?:</span> " + person_array[i].kids + "" + "<br/>" +
                    "<span class='title'>Wants Kids?:</span> " + person_array[i].wantsKids + "" + "<br/>" +
                    "<span class='title'>Gender:</span> " + person_array[i].gender + "" + "<br/>" +
                    "<span class='title'>City:</span> " + person_array[i].city + "" + "<br/>" +
                    "<span class='title'>State:</span> " + person_array[i].state) + "<br>" +
                    "<button id='" + person_array[i].likeButtonID + "'"
                    + "onclick='btnAddLike_click(this.id);'>" + "Like </button>" + "<button id='" + person_array[i].dislikeButtonID + "'"
                    + "onclick='btnDislike_click(this.id);'>" + "Dislike </button>" +
                    "<br>" + "<br>" + "<br>" + "<br>";

            document.getElementById("profile").innerHTML = matches;


        }

        // MALES FROM ALL STATES
        else if (person_array[i].gender === "Male" && gender === 'Males' && state === "All") {

            imagez += "<img id='profile_pic' src='" + person_array[i].image + "'>";
            document.getElementById("image").innerHTML = imagez;

            matches += ("<br>" + "<span class='title'>Title:</span>" + person_array[i].title + "" + "<br/>" +
                    "<span class='title'>Name:</span> " + person_array[i].firstName + " " +
                    person_array[i].lastName + "" + "<br/>" +
                    "<span class='title'>Age:</span>" + person_array[i].age + "" + "<br/>" +
                    "<span class='title'>Description:</span> " + person_array[i].description + "" + "<br/>" +
                    "<span class='title'>Relationship Status:</span> " + person_array[i].status + "" + "<br/>" +
                    "<span class='title'>Looking For:</span> " + person_array[i].lookingFor + "" + "<br/>" +
                    "<span class='title'>Religion:</span> " + person_array[i].religion + "" + "<br/>" +
                    "<span class='title'>Has Kids?:</span> " + person_array[i].kids + "" + "<br/>" +
                    "<span class='title'>Wants Kids?:</span> " + person_array[i].wantsKids + "" + "<br/>" +
                    "<span class='title'>Gender:</span> " + person_array[i].gender + "" + "<br/>" +
                    "<span class='title'>City:</span> " + person_array[i].city + "" + "<br/>" +
                    "<span class='title'>State:</span> " + person_array[i].state) + "<br>" +
                    "<button id='" + person_array[i].likeButtonID + "'"
                    + "onclick='btnAddLike_click(this.id);'>" + "Like </button>" + "<button id='" + person_array[i].dislikeButtonID + "'"
                    + "onclick='btnDislike_click(this.id);'>" + "Dislike </button>" +
                    "<br>" + "<br>" + "<br>" + "<br>";

            document.getElementById("profile").innerHTML = matches;

        }


        //ALL GENDERS FROM ____ STATE
        else if (gender === "All" && state === person_array[i].state) {






            imagez += "<img id='profile_pic' src='" + person_array[i].image + "'>";
            document.getElementById("image").innerHTML = imagez;

            matches += ("<br>" + "<span class='title'>Title:</span>" + person_array[i].title + "" + "<br/>" +
                    "<span class='title'>Name:</span> " + person_array[i].firstName + " " +
                    person_array[i].lastName + "" + "<br/>" +
                    "<span class='title'>Age:</span>" + person_array[i].age + "" + "<br/>" +
                    "<span class='title'>Description:</span> " + person_array[i].description + "" + "<br/>" +
                    "<span class='title'>Relationship Status:</span> " + person_array[i].status + "" + "<br/>" +
                    "<span class='title'>Looking For:</span> " + person_array[i].lookingFor + "" + "<br/>" +
                    "<span class='title'>Religion:</span> " + person_array[i].religion + "" + "<br/>" +
                    "<span class='title'>Has Kids?:</span> " + person_array[i].kids + "" + "<br/>" +
                    "<span class='title'>Wants Kids?:</span> " + person_array[i].wantsKids + "" + "<br/>" +
                    "<span class='title'>Gender:</span> " + person_array[i].gender + "" + "<br/>" +
                    "<span class='title'>City:</span> " + person_array[i].city + "" + "<br/>" +
                    "<span class='title'>State:</span> " + person_array[i].state) + "<br>" +
                    "<button id='" + person_array[i].likeButtonID + "'"
                    + "onclick='btnAddLike_click(this.id);'>" + "Like </button>" + "<button id='" + person_array[i].dislikeButtonID + "'"
                    + "onclick='btnDislike_click(this.id);'>" + "Dislike </button>" +
                    "<br>" + "<br>" + "<br>" + "<br>";

            document.getElementById("profile").innerHTML = matches;

        }

        // ALL GENDERS ALL STATES, EVERYONE, doesnt work...
        //update works now after removing else statement at bottom
        else if (gender === "All" && state === "All") {

            imagez += "<img id='profile_pic' src='" + person_array[i].image + "'>";
            document.getElementById("image").innerHTML = imagez;

            matches += ("<br>" + "<span class='title'>Title:</span>" + person_array[i].title + "" + "<br/>" +
                    "<span class='title'>Name:</span> " + person_array[i].firstName + " " +
                    person_array[i].lastName + "" + "<br/>" +
                    "<span class='title'>Age:</span>" + person_array[i].age + "" + "<br/>" +
                    "<span class='title'>Description:</span> " + person_array[i].description + "" + "<br/>" +
                    "<span class='title'>Relationship Status:</span> " + person_array[i].status + "" + "<br/>" +
                    "<span class='title'>Looking For:</span> " + person_array[i].lookingFor + "" + "<br/>" +
                    "<span class='title'>Religion:</span> " + person_array[i].religion + "" + "<br/>" +
                    "<span class='title'>Has Kids?:</span> " + person_array[i].kids + "" + "<br/>" +
                    "<span class='title'>Wants Kids?:</span> " + person_array[i].wantsKids + "" + "<br/>" +
                    "<span class='title'>Gender:</span> " + person_array[i].gender + "" + "<br/>" +
                    "<span class='title'>City:</span> " + person_array[i].city + "" + "<br/>" +
                    "<span class='title'>State:</span> " + person_array[i].state) + "<br>" +
                    "<button id='" + person_array[i].likeButtonID + "'"
                    + "onclick='btnAddLike_click(this.id);'>" + "Like </button>" + "<button id='" + person_array[i].dislikeButtonID + "'"
                    + "onclick='btnDislike_click(this.id);'>" + "Dislike </button>" +
                    "<br>" + "<br>" + "<br>" + "<br>";

            document.getElementById("profile").innerHTML = matches;


        }





        else {
            //Do nothing. This object doesn't match! Maybe the next one will!;
        }
        document.getElementById("profile").innerHTML = matches;


    }
//fixed.
    if (matches === "") {
        document.getElementById("profile").innerHTML = "Sorry, no matches were found!";
        document.getElementById("image").innerHTML = "";

    }

}



