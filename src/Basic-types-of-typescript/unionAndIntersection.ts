//* Union : |

type UserRole = "admin" | "user";

const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "user Dashboard";
  } else {
    return "Guest Dashboard";
  }
};

// console.log(getDashboard("guest"));

//* intersection : &

type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const ChowdhuryShaheb: EmployeeManager = {
  id: "123",
  name: "Chowdhury Shaheb",
  phoneNo: "0180000000",
  designation: "Manager",
  teamSize: 20,
};
