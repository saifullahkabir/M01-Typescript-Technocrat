//* object destructuring

const user = {
  id: 123,
  name: {
    firstName: "Saifullah",
    middleName: "Kabir",
    lastName: "Rana",
  },
  gender: "Male",
  favouriteColor: "Black",
};

// const myFavouriteColor = user.favouriteColor;
// const myMiddleName = user.name.middleName;

//* name alias
const {
  favouriteColor: myFavouriteColor,
  name: { middleName: myMiddleName },
} = user;

// console.log(myMiddleName);

//* array destructuring
const friends = ["Rahim", "Karim", "Salim"];

// const myBestFriend = friends[1];

const [, myBestFriend] = friends;

console.log(myBestFriend);
