//* ?  : ternary operator : decision making
//* ?? : nullish coalescing operator : null/undefined
//* ?. : optional chaining

const eligibleToMarried = (age: number) => {
  //   if (age >= 21) {
  //     console.log("You are eligible");
  //   } else {
  //     console.log("You are not eligible!");
  //   }

  //* ternary
  const result = age >= 21 ? "You are eligible" : "You are not eligible!";
  console.log(result);
};

eligibleToMarried(20);

//* nullish coalescing
const userTheme = undefined;

const selectedTheme = userTheme ?? "Light theme";

console.log(selectedTheme);

const isAuthenticated = null;

const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest";
const resultWithNullish = isAuthenticated ?? "You are guest";

console.log({ resultWithTernary }, { resultWithNullish });

//* optional chaining

const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "Dhaka",
    town: "Banani",
  },
};

const postalCode = user?.address?.postalCode;
console.log(postalCode);
