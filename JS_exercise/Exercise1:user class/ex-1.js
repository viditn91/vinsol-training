
function user(name1,age){
  this.name1=name1;
  this.age=age;
}
user.prototype.compare=function(user){
  if (this.age>user.age) {
    alert(this.name1+" is older than "+user.name1);
  }
  else if (user.age>this.age){
    alert(user.name1+" is older than "+this.name1);
  }
  else{
    alert("both "+this.name1+" and "+user.name1+" are of same age" );
  }
}
var user1= new user("john","14");
var user2= new user("mary","16");
console.log(user1.compare(user2));
