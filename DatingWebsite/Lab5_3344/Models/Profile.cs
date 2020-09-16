using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    public class Profile //need to change using encapsulation, private props
    {
     public int Id { get; set; }
   public string FirstName { get; set; }
        public string LastName { get; set; }
        
        public string Title { get; set; }
        public string Gender { get; set; }
        public string My_Gender { get; set; }

        public string HasKids { get; set; }
        public string WantsKids { get; set; }
        public string Description { get; set; }
        public string Religion { get; set; }
        public string Status { get; set; }
        public int Age { get; set; }
        public string LookingFor { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get; set; }

        public string ProfilePic { get; set; }
        public string Disabled { get; set; }

 public Profile()
        {
           
        }

        public Profile(int id, string firstname, string lastname, string description,
            string title, string gender, string my_gender, string haskids, string wantskids, string religion, string status,
            int age, string lookingfor, string city, string state, string zip, string username, string password, string phonenumber, string profilepic, string disabled
           )
        {
            this.Id = id;
     
            this.FirstName = firstname;
            this.LastName = lastname;
            this.Description = description;
            this.Title = title;
            this.Gender = gender;
            this.My_Gender = my_gender;
            this.HasKids = haskids;
            this.WantsKids = wantskids;
            this.Religion = religion;
            this.Status = status;
            this.Age = age;
            this.LookingFor = lookingfor;
            this.City = city;
            this.State = state;
            this.Zip = zip;
            this.Username = username;
            this.Password = password;
            this.PhoneNumber = phonenumber;
            this.ProfilePic = profilepic;
            this.Disabled = disabled;
          

        }

        public override string ToString()
        {
            return this.FirstName + "|" + this.LastName + "|" + this.Description + "|" + this.Title + "|" + this.Gender + "|" +
                this.My_Gender + "|" + this.HasKids + "|" + this.WantsKids + "|" + this.Religion + "|" + this.Status + "|" + this.Age + "|" +
                this.LookingFor + "|" + this.City + "|" + this.State + "|" + this.Zip + "|" + this.Username + "|" + this.Password + "|" + this.PhoneNumber + "|" + this.ProfilePic + "|" + this.Disabled;
        }

    }
}
