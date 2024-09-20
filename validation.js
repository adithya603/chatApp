// Function to print error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Function to validate signup input credentials
function validateSignUpInputCredentials() {
    console.log("Validating sign-up input credentials");

    // Prevent form submission (if called from a form submission event)
    //event.preventDefault();

    // Get the values from the form inputs
    let username = document.getElementById("name").value;
    let email = document.getElementById("email_address").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;

    // Initialize error flags
    let nameErr = emailErr = passwordErr = confirmPasswordErr = true;

    // Validate username
    if (username === "") {
        printError("nameErr", "Please enter your name.");
    } else {
        // Regular expression for name validation (letters and spaces only)
        let regex = /^[A-Za-z ]+$/;
        if (regex.test(username) === false) {
            printError("nameErr", "Please enter a valid name.");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address.");
    } else {
        // Regular expression for basic email validation
        let regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address.");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate password
    if (password === "") {
        printError("passwordErr", "Please enter your password.");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    }

    // Validate confirm password
    if (confirmPassword === "") {
        printError("confirmPasswordErr", "Please confirm your password.");
    } else {
        printError("confirmPasswordErr", "");
        confirmPasswordErr = false;
    }

    // Prevent form submission if there are any errors
    if (nameErr || emailErr || passwordErr || confirmPasswordErr) {
        return false;
    } else {
        return true;
    }
}

// Function to validate login input credentials
function validateLoginInputCredentials(event) {

    // Get the values from the form inputs
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Initialize error flags
    let emailErr = true;
    let passwordErr = true;

    // Validate email
    if (email === "") {
        printError("emailErr", "Please enter your email address.");
    } else {
        // Regular expression for basic email validation
        let regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address.");
        } else {
            printError("emailErr", "");
            emailErr = false;  // Clear error flag
        }
    }

    // Validate password
    if (password === "") {
        printError("passwordErr", "Please enter your password.");
    } else {
        printError("passwordErr", "");
        passwordErr = false;  // Clear error flag
    }

    // If any errors exist, prevent form submission
    if (emailErr || passwordErr) {
        return false;  // Stop form submission
    } else {
        return true;  // Allow form submission
    }
}
