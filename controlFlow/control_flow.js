let userRole = "admin";
let accessLevel;

if(userRole === "admin")
{
    accessLevel = "Full access granted";
}
else if(userRole === "manager")
{
    accessLevel = "Limited access granted";
}
else
{
    accessLevel = "No access granted";
}

console.log("Access Level: ", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message: ", userMessage);

let userType = "subscriber";
let userCategory;

switch(userType)
{
    case "admin":
        userCategory = "Administration";
        break;

    case "manager":
        userCategory = "Manager";
        break;

    case "subscriber":
        userCategory = "Subscriber";
        break;

    default:
        userCategory = "Unknown";
    }
    console.log("User Category", userCategory);

    let isAuthenticated = true;
    let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
    console.log("Authentication Status: ", authenticationStatus);


//Dietary Services Access

let userAccess = "Employee";  // Try changing this to Employee, Subscriber, etc.
let accessType;

if (userAccess === "Employee") {
  accessType = "Access granted to Dietary Services.";
} else if (userAccess === "Enrolled Member") {
  accessType = "Access granted to Dietary Services and one-on-one interaction with a dietician.";
} else if (userAccess === "Subscriber") {
  accessType = "Partial access granted to Dietary Services.";
} else {
  accessType = "Access denied. Please enroll or subscribe to avail the facility.";
}
console.log(accessType);
