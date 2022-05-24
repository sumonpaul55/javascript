let friends = {
  name: "Abdulla al mamun",
  age: 38,
  gfNmae: "Rohima Sundori",
  schoolname: "School primary school",
  address: "C/2 blog by guho road",
  city: "Mymensingh",
  info: {
    favouritColor: "red",
    favouritSport: "cricket",
    hobby: "listening music",
  },
  friends: ["Sakib", "rohim", "korim", "julekha"],
};

//we can find any of property as a variable with the name of property

const { age, name, gfNmae, info, address, schoolname } = friends; //ordering doesn't metter

// console.log(age, name, gfNmae, address, schoolname);

//accesing the object's value inside other's objects value
let { favouritColor, favouritSport, hobby } = friends.info;

console.log(favouritColor, favouritSport, hobby);
