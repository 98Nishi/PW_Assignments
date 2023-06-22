/*Password Checker.
Create a class called User with properties username and password. Implement a getter method for password
that returns the password with all characters replaced by asterisks. Implement a setter method for password
that checks if the new password is at least 8 characters long and contains at least one number and one
uppercase letter. If the password is valid, set the new password. If not, log an error message. */

 

class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    getPassword() {
      return this.password.replace(/./g, "*");
    }
  
    setPassword(newPassword) {
      const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
      if (regex.test(newPassword)) {
        this.password = newPassword;
      } else {
        console.log("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
      }
    }
  }
  
  const user = new User("Mithun", "Password123");
  console.log(user.getPassword()); 
  user.setPassword("myPassword"); 
  user.setPassword("MyPassword"); 
  user.setPassword("Mypassword123");
  console.log(user.getPassword()); 