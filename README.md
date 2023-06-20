# **TEST AUTOMATION PROJECT**

Welcome to the Test Automation project! This project utilizes WebDriverIO as the chosen automation tool, Jasmine as the test framework, Chrome as the browser, and Visual Studio Code as the Integrated Development Environment (IDE). Below, you will find instructions on configuring and installing the development environment, along with an overview of the project and its objective.

---

## **INTRODUCTION**

Test automation is a software quality practice that involves utilizing tools and scripts to execute tests in an automated manner. Instead of performing tests manually, scripts are written to simulate user actions and verify the correct functioning of an application. This approach enables more efficient, repeatable, and scalable testing.

---

## **ENVIRONMENT SETUP**

To set up your development environment and run automated tests, please follow the steps below:

---

## _Dependencies:_

Node.js version 18 or higher is required.
Google Chrome browser.
VS Code or any other code editor is necessary.

---

### Installation:

To install this repository, please proceed with the following steps:

Download the project from this repository.
Open a terminal within the project's folder.
Run the command "npm install" in the terminal to install all the dependencies specified in the package.json file.
Run "code ." to open the project in Visual Studio Code or use your preferred code editor.
You are now ready to execute the tests!

---

### Deployment:

To deploy and execute this project, use the following command in the terminal:

<sub> npx wdio </sub>

---

## **CONCLUSION:**

In conclusion, during the login process involving the users "locked_out_user" and "problem_user," specific challenges were encountered that impacted the test automation.

The "locked_out_user" user faced the challenge of being locked out, which prevented a successful login. To address this, specific validations were implemented to ensure the correct display of an error message indicating the user's lockout status. Additionally, further functional testing beyond the login attempt was not feasible due to the locked-out state.

The "problem_user" user did not pose any significant issues in terms of being blocked or restricted. However, additional testing was still necessary to verify successful access to the home page after login.

Challenges encountered with the "locked_out_user" and "problem_user" users during the login process involved lockout issues and the need for specific error message validation.

These difficulties emphasize the significance of taking into account different scenarios and conditions during the execution of automated tests, in addition to emphasizing the necessity for efficient communication and collaboration with the development team.
