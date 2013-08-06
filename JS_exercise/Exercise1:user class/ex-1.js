//defining class
function User(name,age){
  this.name = name;
  this.age = age;
}
//method to compare age
User.prototype.compare = function(User){
  if (this.age > User.age) {
    alert(this.name + " is older than " + User.name);
  }
  else if (User.age > this.age){
    alert(User.name + " is older than " + this.name);
  }
  else{
    alert("both " + this.name + " and " + User.name + " are of same age");
  }
}
//initializing objects
var user1 = new User("john",14);
var user2 = new User("mary",16);
//calling the method
console.log(user1.compare(user2));
