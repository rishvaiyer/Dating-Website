using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Utilities;
using System.Data;

namespace WebAPI.Controllers


{
    [Route("api/Profiles")]
    public class ProfileController : ControllerBase
    {


        [HttpPost("AddProfile")] //Add new profile  
        public Boolean AddProfile([FromBody] Profile profile)
        {
            DBConnect db = new DBConnect();
            string Insert = "INSERT INTO Profile_Table (FirstName, LastName, Title, Gender, My_Gender,  HasKids, WantsKids, Description, Religion, Status, Age, LookingFor, City, State, Zip, Username, Password, PhoneNumber, ProfilePic)"
            + " VALUES ('" + profile.FirstName + "','" + profile.LastName
                + "','" + profile.Title
                + "','" + profile.Gender
                + "','" + profile.My_Gender
                + "','" + profile.HasKids
                + "','" + profile.WantsKids
                + "','" + profile.Description
                + "','" + profile.Religion
                + "','" + profile.Status
                + "','" + profile.Age
                + "','" + profile.LookingFor
                + "','" + profile.City
                + "','" + profile.State
                + "','" + profile.Zip
                + "','" + profile.Username
                + "','" + profile.Password
                + "','" + profile.ProfilePic
                + "','" + profile.PhoneNumber + "')";


            int result = db.DoUpdate(Insert);
            if (result > 0)
            {
                return true;

            }

            else
            {
                return false;
            }

        }
        [HttpGet("GetByState")] //Get by state
        public List<Profile> GetByState(string state)
        {
            List<Profile> profilelist = new List<Profile>();
         
            DBConnect db = new DBConnect();
            DataSet myDataSet = db.GetDataSet("SELECT * FROM Profile_Table");
            Profile profile;
            
            foreach (DataRow record in myDataSet.Tables[0].Rows)
                
            {

                profile = new Profile();
                profile.FirstName = record["FirstName"].ToString();
                profile.Id = int.Parse(record["Id"].ToString());
                profile.LastName = record["LastName"].ToString();
                profile.Description = record["Description"].ToString();
                profile.Title = record["Title"].ToString();
                profile.Gender = record["Gender"].ToString();
                profile.My_Gender = record["My_Gender"].ToString();
                profile.HasKids = record["HasKids"].ToString();
                profile.WantsKids = record["WantsKids"].ToString();
                profile.Religion = record["Religion"].ToString();
                profile.Status = record["Status"].ToString();
                profile.Age = int.Parse(record["Age"].ToString());
                profile.LookingFor = record["LookingFor"].ToString();
                profile.City = record["City"].ToString();
                profile.State = record["State"].ToString();
                profile.Zip = record["Zip"].ToString();
                profile.Username = record["Username"].ToString();
                profile.Password = record["Password"].ToString();

                profile.PhoneNumber = record["PhoneNumber"].ToString();
                profile.ProfilePic = record["ProfilePic"].ToString();
                profile.Disabled = record["Disabled"].ToString();


                if(profile.State == state) { 
                profilelist.Add(profile);
   
                   
                }

            }


            return profilelist;
        }

        [HttpGet("GetByGender")] //Get by gender
        public List<Profile> GetByGender(string gender)
        {
            List<Profile> profilelist = new List<Profile>();

            DBConnect db = new DBConnect();
            DataSet myDataSet = db.GetDataSet("SELECT * FROM Profile_Table");
            Profile profile;

            foreach (DataRow record in myDataSet.Tables[0].Rows)

            {

                profile = new Profile();
                profile.FirstName = record["FirstName"].ToString();
                profile.Id = int.Parse(record["Id"].ToString());
                profile.LastName = record["LastName"].ToString();
                profile.Description = record["Description"].ToString();
                profile.Title = record["Title"].ToString();
                profile.Gender = record["Gender"].ToString();
                profile.My_Gender = record["My_Gender"].ToString();
                profile.HasKids = record["HasKids"].ToString();
                profile.WantsKids = record["WantsKids"].ToString();
                profile.Religion = record["Religion"].ToString();
                profile.Status = record["Status"].ToString();
                profile.Age = int.Parse(record["Age"].ToString());
                profile.LookingFor = record["LookingFor"].ToString();
                profile.City = record["City"].ToString();
                profile.State = record["State"].ToString();
                profile.Zip = record["Zip"].ToString();
                profile.Username = record["Username"].ToString();
                profile.Password = record["Password"].ToString();

                profile.PhoneNumber = record["PhoneNumber"].ToString();
                profile.ProfilePic = record["ProfilePic"].ToString();
                profile.Disabled = record["Disabled"].ToString();


                if (profile.My_Gender == gender)
                {
                    profilelist.Add(profile);


                }

            }


            return profilelist;
        }
        [HttpGet("GetById")]// Get by Id
        public List<Profile> GetById(int Id)
        {
            List<Profile> profilelist = new List<Profile>();

            DBConnect db = new DBConnect();
            DataSet myDataSet = db.GetDataSet("SELECT * FROM Profile_Table WHERE Id=" + Id);
            Profile profile;

            foreach (DataRow record in myDataSet.Tables[0].Rows)

            {

                profile = new Profile();
                profile.FirstName = record["FirstName"].ToString();
                profile.Id = int.Parse(record["Id"].ToString());
                profile.LastName = record["LastName"].ToString();
                profile.Description = record["Description"].ToString();
                profile.Title = record["Title"].ToString();
                profile.Gender = record["Gender"].ToString();
                profile.My_Gender = record["My_Gender"].ToString();
                profile.HasKids = record["HasKids"].ToString();
                profile.WantsKids = record["WantsKids"].ToString();
                profile.Religion = record["Religion"].ToString();
                profile.Status = record["Status"].ToString();
                profile.Age = int.Parse(record["Age"].ToString());
                profile.LookingFor = record["LookingFor"].ToString();
                profile.City = record["City"].ToString();
                profile.State = record["State"].ToString();
                profile.Zip = record["Zip"].ToString();
                profile.Username = record["Username"].ToString();
                profile.Password = record["Password"].ToString();

                profile.PhoneNumber = record["PhoneNumber"].ToString();
                profile.ProfilePic = record["ProfilePic"].ToString();
                profile.Disabled = record["Disabled"].ToString();


                if (profile.Id == Id)
                {
                    profilelist.Add(profile);


                }

            }


            return profilelist;
        }
        [HttpPut("DisableProfile")]// Get by Id
        public Boolean DisableProfile(int Id)
        {


            DBConnect db = new DBConnect();
            DataSet myDataSet = db.GetDataSet("UPDATE Profile_Table SET Disabled = 'Yes' WHERE Id=" + Id);

            return true;
        }



        [HttpPut("EditProfile")] //Edit Profile
        public Boolean EditProfile(int Id, string FirstName, string LastName, string Title, int Age, string My_Gender, string City, string State, string Username, string Password, string Religion, string Description, string LookingFor, string Gender, string ProfilePic, string Status, string HasKids, string WantsKids)
        {
            DBConnect db = new DBConnect();
            DataSet myDataSet = db.GetDataSet("UPDATE Profile_Table SET FirstName ='" + FirstName + "' , LastName ='" + LastName +
 "' , Title ='" + Title + "' , Age ='" + Age + "' , My_Gender ='" + My_Gender + "' , City ='" + City +
 "' , State ='" + State + "' , Username ='" + Username + "' , Password ='" + Password + "' , Religion ='" + Religion + "' , Description ='" + Description +
  "' , LookingFor ='" + LookingFor + "' , Gender ='" + Gender + "' , ProfilePic ='" + ProfilePic + "' , Status ='" + Status +
 "' , HasKids ='" + HasKids + "' , WantsKids ='" + WantsKids +
                "' WHERE Id=" + Id);
            return true;

        }

        [HttpPut("EnableProfile")]// Get by Id
        public Boolean EnableProfile(int Id)
        {


            DBConnect db = new DBConnect();
            DataSet myDataSet = db.GetDataSet("UPDATE Profile_Table SET Disabled = 'No' WHERE Id=" + Id);

            return true;
        }



        [HttpPost("LogIn")]
        public Boolean LogIn(string username, string password)
        {


            DBConnect db = new DBConnect();
            DataSet myDataSet = db.GetDataSet("SELECT * FROM Profile_Table");
            Profile profile;

            foreach (DataRow record in myDataSet.Tables[0].Rows)

            {

                profile = new Profile();
                profile.FirstName = record["FirstName"].ToString();
                profile.Id = int.Parse(record["Id"].ToString());
                profile.LastName = record["LastName"].ToString();
                profile.Description = record["Description"].ToString();
                profile.Title = record["Title"].ToString();
                profile.Gender = record["Gender"].ToString();
                profile.My_Gender = record["My_Gender"].ToString();
                profile.HasKids = record["HasKids"].ToString();
                profile.WantsKids = record["WantsKids"].ToString();
                profile.Religion = record["Religion"].ToString();
                profile.Status = record["Status"].ToString();
                profile.Age = int.Parse(record["Age"].ToString());
                profile.LookingFor = record["LookingFor"].ToString();
                profile.City = record["City"].ToString();
                profile.State = record["State"].ToString();
                profile.Zip = record["Zip"].ToString();
                profile.Username = record["Username"].ToString();
                profile.Password = record["Password"].ToString();

                profile.PhoneNumber = record["PhoneNumber"].ToString();
                profile.ProfilePic = record["ProfilePic"].ToString();
                profile.Disabled = record["Disabled"].ToString();

                if (profile.Username == username && profile.Password == password)
                {

                    return true;

                }

            }
            return true;


        }

        [HttpDelete("DeleteProfile")] //Delete 
        public Boolean DeleteProfile(int Id)
        {

            DBConnect db = new DBConnect();
            DataSet myDataSet = db.GetDataSet("DELETE FROM Profile_Table WHERE Id=" + Id);
       


            return true;

        }
        [HttpGet("GetProfiles")] //Get all profiles
        public List<Profile> GetProfiles()
        {
            List<Profile> profilelist = new List<Profile>();
            DBConnect db = new DBConnect();
            DataSet myDataSet = db.GetDataSet("SELECT * FROM Profile_Table");
            Profile profile;

            foreach (DataRow record in myDataSet.Tables[0].Rows)
            {

                profile = new Profile();
                profile.FirstName = record["FirstName"].ToString();
                profile.Id = int.Parse(record["Id"].ToString());
                profile.LastName = record["LastName"].ToString();
                profile.Description = record["Description"].ToString();
                profile.Title = record["Title"].ToString();
                profile.Gender = record["Gender"].ToString();
                profile.My_Gender = record["My_Gender"].ToString();
                profile.HasKids = record["HasKids"].ToString();
                profile.WantsKids = record["WantsKids"].ToString();
                profile.Religion = record["Religion"].ToString();
                profile.Status = record["Status"].ToString();
                profile.Age = int.Parse(record["Age"].ToString());
                profile.LookingFor = record["LookingFor"].ToString();
                profile.City = record["City"].ToString();
                profile.State = record["State"].ToString();
                profile.Zip = record["Zip"].ToString();
                profile.Username = record["Username"].ToString();
                profile.Password = record["Password"].ToString();

                profile.PhoneNumber = record["PhoneNumber"].ToString();
                profile.ProfilePic = record["ProfilePic"].ToString();
                profile.Disabled = record["Disabled"].ToString();



                profilelist.Add(profile);


            }


            return profilelist;
        }

    }
}









