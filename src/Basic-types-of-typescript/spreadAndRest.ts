//* spread operator for array
const friends = ["Rahim", "Karim"];

const schoolFriends = ["Cintu", "Montu", "Bantu"];

const collageFriends = ["Sonika", "Monika", "Rupali"];

friends.push(...schoolFriends);

// console.log(friends);

//* spread operator for object
const user = {
  name: "Rana",
  phoneNo: "01800000000",
};

const otherInfo = {
  hobby: "Travelling",
  favouriteColor: "Black",
};

const userInfo = { ...user, ...otherInfo };
// console.log(userInfo);

//* rest operator
// const sentInvite = (friend1: string, friend2: string, friend3: string) => {
//   console.log(`Sent Invitation to ${friend1}`);
//   console.log(`Sent Invitation to ${friend2}`);
//   console.log(`Sent Invitation to ${friend3}`);
// };

// sentInvite("Sonika", "Monika", "Rupali");

const sentInvite = (...friends: string[]) => {
    // console.log(friends);
  friends.forEach((friend: string) =>
    console.log(`Sent Invitation to ${friend}`),
  );
};

sentInvite("Sonika", "Monika", "Rupali", "Rahim");
