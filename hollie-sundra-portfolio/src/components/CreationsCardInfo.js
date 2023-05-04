import project1 from "../assets/challenge10.jpg";
import project2 from "../assets/challenge11.jpg";
import project3 from "../assets/challenge12.jpg";
import project4 from "../assets/project1.jpg";
import project5 from "../assets/project2.png";
import project6 from "../assets/challenge18.jpg";





const ProjectCardData = [
    {
        imgsrc: project6,
        title: "Social Networking API",
        text: "This project is a social media API for a startup that uses a NoSQL database to handle large amounts of unstructured data. The API allows users to create, read, update, and delete their account information, their thoughts, and their reactions to other user's thoughts. It also allows users to add and remove friends from their friend list.",
        view: "https://github.com/HollieSundra/my_social_network"
    },
    {
        imgsrc: project5,
        title: "Fizz Buzzed Web Application",
        text: "Fizz Buzzed is a robust web application designed as a store an online store front for a dispensory. The application has signup features with login and logout capablity. For future development there will be a fully functional shopping cart with checkout.",
        view: "https://fizz-buzzed.herokuapp.com/"
    },
    {
        imgsrc: project4,
        title: "Dinner and Drinks",
        text: "Motivation for the Dinner and Drinks was simple, create an easy to use food and drink app that inspires users with new recipes and easy to choose options. A one-click shuffle button provides the user with a random drink or food recipe. If they want a specific kind of drink, the user can pick a liquor type from the drop-down value and click choose a drink. The generator will provide them with a drink based on what type of alcohol they select.The main problem we wanted to solve was to give people more choices when making drinks or food. Instead of the same boring beverages and recipes, we wanted to provide the user with various options. That way, they can try new drinks and dishes enjoyed by themselves or with family and friends.",
        view: "https://rachelwildberger.github.io/super-awesome-app/"
    },
    {
        imgsrc: project3,
        title: "Employee Traker",
        text: "Employee Tracker is a command-line application that allows a business owner to manage the departments, roles, and employees in their company by accessing and interacting with employee information stored in a MySQL database.The application provides the user with options to add, view, update, and delete departments, roles, and employees. The user can also view employees by manager and view the total utilized budget of a department, which is the combined salaries of all employees in that department.",
        view: "https://github.com/HollieSundra/employee-tracker"
    },
    {
        imgsrc: project2,
        title: "Note Taker Application",
        text: "For this challenge the client wanted an application created that can be ussed to write and save notes. The application would use Express.js for the back end which will allow saving, retrieving, updating, and deleting of user generated note data from a JSON file.",
        view: "https://github.com/HollieSundra/note-taker"
    },
    {
        imgsrc: project1,
        title: "Team Profile Generator",
        text: "Node.js command-line application that takes in information from the user about an employee, and with the information generates and HTML webpage that displays the user input data. Along with the building of this application tests to insure that the application ran were created for each component of the libary portion.",
        view: "https://github.com/HollieSundra/team-profile"
    },
];


export default ProjectCardData;