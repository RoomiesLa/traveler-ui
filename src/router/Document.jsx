import './document.css'
import { Helmet } from 'react-helmet';
// import { v4 as uuid4 } from 'uuid';
import PropTypes from 'prop-types';
import MagnifyGlass from '../icons/MagnifyGlass';

function groupBy(array, callback) {
    const groups = {};

    array.forEach(element => {
        const key = callback(element);
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(element);
    });

    return groups;
}

async function getProject() {
    const res = await fetch('http://localhost:8000/repository/projects/', {
        headers: {
            'accept': 'application/json',
            'X-CSRFToken': 'dzQbNQ9fYmldfwWEBvVVN6GRniQ5L11r7dKjk6k5o1PxxaHix1XlQivfjxOhQH8k'
        }
    });
    const data = await res.json()
    return data[0].entries.map(entry => (
        {
            id: entry.id,
            title: "Default",
            author: "Israel García",
            description: processText(entry.json),
            date: new Date(entry.date_added),
        }
    ))
}

function processText(text) {
    // Replace newline characters with <br> tags
    text = text.replace(/\n/g, '<br>');
    // Replace backslashes with HTML entity &bsol;
    text = text.replace(/\\/g, '&bsol;');
    return text;
}

const entries = await getProject()

// const data = [
//     {
//         id: uuid4(),
//         title: "Implemented feature X according to specifications",
//         description: "Developed and integrated feature X as per the project specifications and requirements.",
//         author: "Elena Rodriguez",
//         date: new Date("2024-02-15")
//     },
//     {
//         id: uuid4(),
//         title: "Updated documentation for API endpoints",
//         description: "Enhanced the documentation to provide comprehensive information about the API endpoints for developers.",
//         author: "Michael Chang",
//         date: new Date("2023-11-20")
//     },
//     {
//         id: uuid4(),
//         title: "Fixed bug causing crashes on certain devices",
//         description: "Identified and resolved a critical bug that was causing application crashes on specific devices.",
//         author: "Sophie Bennett",
//         date: new Date("2024-03-10")
//     },
//     {
//         id: uuid4(),
//         title: "Optimized database queries for improved performance",
//         description: "Optimized SQL queries and database operations to enhance the overall performance of the application.",
//         author: "David Patel",
//         date: new Date("2024-01-05")
//     },
//     {
//         id: uuid4(),
//         title: "Fixed typo in README.md",
//         description: "Corrected a minor spelling mistake in the README file to improve clarity.",
//         author: "Elena Rodriguez",
//         date: new Date("2024-02-05")
//     },
//     {
//         id: uuid4(),
//         title: "Updated dependencies to latest versions",
//         description: "Updated project dependencies to their latest stable versions to ensure compatibility and security.",
//         author: "Michael Chang",
//         date: new Date("2023-12-10")
//     },
//     {
//         id: uuid4(),
//         title: "Refactored user authentication logic",
//         description: "Reorganized and optimized the codebase related to user authentication for improved performance and maintainability.",
//         author: "Sophie Bennett",
//         date: new Date("2024-01-20")
//     },
//     {
//         id: uuid4(),
//         title: "Added unit tests for user registration",
//         description: "Implemented unit tests to ensure the reliability and correctness of the user registration functionality.",
//         author: "David Patel",
//         date: new Date("2023-11-25")
//     },
//     {
//         id: uuid4(),
//         title: "Refactored CSS for better organization",
//         description: "Restructured the Cascading Style Sheets (CSS) codebase to improve organization and maintainability.",
//         author: "Elena Rodriguez",
//         date: new Date("2024-02-25")
//     },
//     {
//         id: uuid4(),
//         title: "Updated third-party library to patch security vulnerability",
//         description: "Upgraded a third-party library to address a critical security vulnerability and enhance application security.",
//         author: "Michael Chang",
//         date: new Date("2023-11-15")
//     },
//     {
//         id: uuid4(),
//         title: "Added API endpoint for exporting user data",
//         description: "Implemented a new API endpoint to allow users to export their data for backup or analysis purposes.",
//         author: "Sophie Bennett",
//         date: new Date("2024-03-05")
//     },
//     {
//         id: uuid4(),
//         title: "Implemented email verification for new accounts",
//         description: "Added functionality to verify email addresses for newly registered accounts to enhance security.",
//         author: "David Patel",
//         date: new Date("2024-01-15")
//     },
//     {
//         id: uuid4(),
//         title: "Fixed responsive design issues on mobile devices",
//         description: "Resolved issues related to the responsiveness of the application on various mobile devices and screen sizes.",
//         author: "Elena Rodriguez",
//         date: new Date("2024-02-10")
//     },
//     {
//         id: uuid4(),
//         title: "Added feature to filter search results",
//         description: "Implemented a filtering mechanism to refine search results based on user-defined criteria.",
//         author: "Michael Chang",
//         date: new Date("2023-12-05")
//     },
//     {
//         id: uuid4(),
//         title: "Implemented user roles and permissions",
//         description: "Developed a role-based access control system to manage user permissions and restrict access to certain features.",
//         author: "Sophie Bennett",
//         date: new Date("2024-03-01")
//     },
//     {
//         id: uuid4(),
//         title: "Refactored codebase to use TypeScript",
//         description: "Converted the codebase from JavaScript to TypeScript to improve type safety and code maintainability.",
//         author: "David Patel",
//         date: new Date("2024-01-25")
//     },
//     {
//         id: uuid4(),
//         title: "Optimized image loading for faster page loads",
//         description: "Implemented techniques to optimize image loading, reducing page load times and improving user experience.",
//         author: "Elena Rodriguez",
//         date: new Date("2024-02-20")
//     },
//     {
//         id: uuid4(),
//         title: "Added support for dark mode",
//         description: "Introduced a dark mode option to the application interface for users who prefer a darker color scheme.",
//         author: "Michael Chang",
//         date: new Date("2023-11-25")
//     },
//     {
//         id: uuid4(),
//         title: "Fixed issue with user session expiration",
//         description: "Resolved a bug causing premature expiration of user sessions, ensuring a smoother user experience.",
//         author: "Sophie Bennett",
//         date: new Date("2024-03-15")
//     },
//     {
//         id: uuid4(),
//         title: "Implemented multi-factor authentication",
//         description: "Enhanced security by adding support for multi-factor authentication (MFA) for user logins.",
//         author: "David Patel",
//         date: new Date("2024-01-10")
//     },
//     {
//         id: uuid4(),
//         title: "Implemented feature X according to specifications",
//         description: "Developed and integrated feature X as per the project specifications and requirements.",
//         author: "Elena Rodriguez",
//         date: new Date("2024-02-15")
//     },
//     {
//         id: uuid4(),
//         title: "Updated documentation for API endpoints",
//         description: "Enhanced the documentation to provide comprehensive information about the API endpoints for developers.",
//         author: "Michael Chang",
//         date: new Date("2023-11-20")
//     },
//     {
//         id: uuid4(),
//         title: "Fixed bug causing crashes on certain devices",
//         description: "Identified and resolved a critical bug that was causing application crashes on specific devices.",
//         author: "Sophie Bennett",
//         date: new Date("2024-03-10")
//     },
//     {
//         id: uuid4(),
//         title: "Optimized database queries for improved performance",
//         description: "Optimized SQL queries and database operations to enhance the overall performance of the application.",
//         author: "David Patel",
//         date: new Date("2024-01-05")
//     },
//     {
//         id: uuid4(),
//         title: "Fixed typo in README.md",
//         description: "Corrected a minor spelling mistake in the README file to improve clarity.",
//         author: "Elena Rodriguez",
//         date: new Date("2024-02-05")
//     },
//     {
//         id: uuid4(),
//         title: "Updated dependencies to latest versions",
//         description: "Updated project dependencies to their latest stable versions to ensure compatibility and security.",
//         author: "Michael Chang",
//         date: new Date("2023-12-10")
//     },
//     {
//         id: uuid4(),
//         title: "Refactored user authentication logic",
//         description: "Reorganized and optimized the codebase related to user authentication for improved performance and maintainability.",
//         author: "Sophie Bennett",
//         date: new Date("2024-01-20")
//     },
//     {
//         id: uuid4(),
//         title: "Added unit tests for user registration",
//         description: "Implemented unit tests to ensure the reliability and correctness of the user registration functionality.",
//         author: "David Patel",
//         date: new Date("2023-11-25")
//     },
//     {
//         id: uuid4(),
//         title: "Refactored CSS for better organization",
//         description: "Restructured the Cascading Style Sheets (CSS) codebase to improve organization and maintainability.",
//         author: "Elena Rodriguez",
//         date: new Date("2024-02-25")
//     },
//     {
//         id: uuid4(),
//         title: "Updated third-party library to patch security vulnerability",
//         description: "Upgraded a third-party library to address a critical security vulnerability and enhance application security.",
//         author: "Michael Chang",
//         date: new Date("2023-11-15")
//     },
//     {
//         id: uuid4(),
//         title: "Added API endpoint for exporting user data",
//         description: "Implemented a new API endpoint to allow users to export their data for backup or analysis purposes.",
//         author: "Sophie Bennett",
//         date: new Date("2024-03-05")
//     },
//     {
//         id: uuid4(),
//         title: "Implemented email verification for new accounts",
//         description: "Added functionality to verify email addresses for newly registered accounts to enhance security.",
//         author: "David Patel",
//         date: new Date("2024-01-15")
//     },
//     {
//         id: uuid4(),
//         title: "Fixed responsive design issues on mobile devices",
//         description: "Resolved issues related to the responsiveness of the application on various mobile devices and screen sizes.",
//         author: "Elena Rodriguez",
//         date: new Date("2024-02-10")
//     },
//     {
//         id: uuid4(),
//         title: "Added feature to filter search results",
//         description: "Implemented a filtering mechanism to refine search results based on user-defined criteria.",
//         author: "Michael Chang",
//         date: new Date("2023-12-05")
//     },
//     {
//         id: uuid4(),
//         title: "Implemented user roles and permissions",
//         description: "Developed a role-based access control system to manage user permissions and restrict access to certain features.",
//         author: "Sophie Bennett",
//         date: new Date("2024-03-01")
//     },
//     {
//         id: uuid4(),
//         title: "Refactored codebase to use TypeScript",
//         description: "Converted the codebase from JavaScript to TypeScript to improve type safety and code maintainability.",
//         author: "David Patel",
//         date: new Date("2024-01-25")
//     },
//     {
//         id: uuid4(),
//         title: "Optimized image loading for faster page loads",
//         description: "Implemented techniques to optimize image loading, reducing page load times and improving user experience.",
//         author: "Elena Rodriguez",
//         date: new Date("2024-02-20")
//     },
//     {
//         id: uuid4(),
//         title: "Added support for dark mode",
//         description: "Introduced a dark mode option to the application interface for users who prefer a darker color scheme.",
//         author: "Michael Chang",
//         date: new Date("2023-11-25")
//     },
//     {
//         id: uuid4(),
//         title: "Fixed issue with user session expiration",
//         description: "Resolved a bug causing premature expiration of user sessions, ensuring a smoother user experience.",
//         author: "Sophie Bennett",
//         date: new Date("2024-03-15")
//     },
//     {
//         id: uuid4(),
//         title: "Implemented multi-factor authentication",
//         description: "Enhanced security by adding support for multi-factor authentication (MFA) for user logins.",
//         author: "David Patel",
//         date: new Date("2024-01-10")
//     },
//     {
//         id: uuid4(),
//         title: "Implemented feature X according to specifications",
//         description: "Developed and integrated feature X as per the project specifications and requirements.",
//         author: "Elena Rodriguez",
//         date: new Date("2024-02-15")
//     },
//     {
//         id: uuid4(),
//         title: "Updated documentation for API endpoints",
//         description: "Enhanced the documentation to provide comprehensive information about the API endpoints for developers.",
//         author: "Michael Chang",
//         date: new Date("2023-11-20")
//     },
//     {
//         id: uuid4(),
//         title: "Fixed bug causing crashes on certain devices",
//         description: "Identified and resolved a critical bug that was causing application crashes on specific devices.",
//         author: "Sophie Bennett",
//         date: new Date("2024-03-10")
//     },
//     {
//         id: uuid4(),
//         title: "Optimized database queries for improved performance",
//         description: "Optimized SQL queries and database operations to enhance the overall performance of the application.",
//         author: "David Patel",
//         date: new Date("2024-01-05")
//     },
//     {
//         id: uuid4(),
//         title: "Fixed typo in README.md",
//         description: "Corrected a minor spelling mistake in the README file to improve clarity.",
//         author: "Elena Rodriguez",
//         date: new Date("2024-02-05")
//     },
//     {
//         id: uuid4(),
//         title: "Updated dependencies to latest versions",
//         description: "Updated project dependencies to their latest stable versions to ensure compatibility and security.",
//         author: "Michael Chang",
//         date: new Date("2023-12-10")
//     },
//     {
//         id: uuid4(),
//         title: "Refactored user authentication logic",
//         description: "Reorganized and optimized the codebase related to user authentication for improved performance and maintainability.",
//         author: "Sophie Bennett",
//         date: new Date("2024-01-20")
//     },
//     {
//         id: uuid4(),
//         title: "Added unit tests for user registration",
//         description: "Implemented unit tests to ensure the reliability and correctness of the user registration functionality.",
//         author: "David Patel",
//         date: new Date("2023-11-25")
//     },
//     {
//         id: uuid4(),
//         title: "Refactored CSS for better organization",
//         description: "Restructured the Cascading Style Sheets (CSS) codebase to improve organization and maintainability.",
//         author: "Elena Rodriguez",
//         date: new Date("2024-02-25")
//     },
//     {
//         id: uuid4(),
//         title: "Updated third-party library to patch security vulnerability",
//         description: "Upgraded a third-party library to address a critical security vulnerability and enhance application security.",
//         author: "Michael Chang",
//         date: new Date("2023-11-15")
//     },
//     {
//         id: uuid4(),
//         title: "Added API endpoint for exporting user data",
//         description: "Implemented a new API endpoint to allow users to export their data for backup or analysis purposes.",
//         author: "Sophie Bennett",
//         date: new Date("2024-03-05")
//     },
//     {
//         id: uuid4(),
//         title: "Implemented email verification for new accounts",
//         description: "Added functionality to verify email addresses for newly registered accounts to enhance security.",
//         author: "David Patel",
//         date: new Date("2024-01-15")
//     },
//     {
//         id: uuid4(),
//         title: "Fixed responsive design issues on mobile devices",
//         description: "Resolved issues related to the responsiveness of the application on various mobile devices and screen sizes.",
//         author: "Elena Rodriguez",
//         date: new Date("2024-02-10")
//     },
//     {
//         id: uuid4(),
//         title: "Added feature to filter search results",
//         description: "Implemented a filtering mechanism to refine search results based on user-defined criteria.",
//         author: "Michael Chang",
//         date: new Date("2023-12-05")
//     },
//     {
//         id: uuid4(),
//         title: "Implemented user roles and permissions",
//         description: "Developed a role-based access control system to manage user permissions and restrict access to certain features.",
//         author: "Sophie Bennett",
//         date: new Date("2024-03-01")
//     },
//     {
//         id: uuid4(),
//         title: "Refactored codebase to use TypeScript",
//         description: "Converted the codebase from JavaScript to TypeScript to improve type safety and code maintainability.",
//         author: "David Patel",
//         date: new Date("2024-01-25")
//     },
//     {
//         id: uuid4(),
//         title: "Optimized image loading for faster page loads",
//         description: "Implemented techniques to optimize image loading, reducing page load times and improving user experience.",
//         author: "Elena Rodriguez",
//         date: new Date("2024-02-20")
//     },
//     {
//         id: uuid4(),
//         title: "Added support for dark mode",
//         description: "Introduced a dark mode option to the application interface for users who prefer a darker color scheme.",
//         author: "Michael Chang",
//         date: new Date("2023-11-25")
//     },
//     {
//         id: uuid4(),
//         title: "Fixed issue with user session expiration",
//         description: "Resolved a bug causing premature expiration of user sessions, ensuring a smoother user experience.",
//         author: "Sophie Bennett",
//         date: new Date("2024-03-15")
//     },
//     {
//         id: uuid4(),
//         title: "Implemented multi-factor authentication",
//         description: "Enhanced security by adding support for multi-factor authentication (MFA) for user logins.",
//         author: "David Patel",
//         date: new Date("2024-01-10")
//     },
//     {
//         id: uuid4(),
//         title: "Implemented feature X according to specifications",
//         description: "Developed and integrated feature X as per the project specifications and requirements.",
//         author: "Elena Rodriguez",
//         date: new Date("2024-02-15")
//     },
//     {
//         id: uuid4(),
//         title: "Updated documentation for API endpoints",
//         description: "Enhanced the documentation to provide comprehensive information about the API endpoints for developers.",
//         author: "Michael Chang",
//         date: new Date("2023-11-20")
//     },
//     {
//         id: uuid4(),
//         title: "Fixed bug causing crashes on certain devices",
//         description: "Identified and resolved a critical bug that was causing application crashes on specific devices.",
//         author: "Sophie Bennett",
//         date: new Date("2024-03-10")
//     },
//     {
//         id: uuid4(),
//         title: "Optimized database queries for improved performance",
//         description: "Optimized SQL queries and database operations to enhance the overall performance of the application.",
//         author: "David Patel",
//         date: new Date("2024-01-05")
//     },
//     {
//         id: uuid4(),
//         title: "Fixed typo in README.md",
//         description: "Corrected a minor spelling mistake in the README file to improve clarity.",
//         author: "Elena Rodriguez",
//         date: new Date("2024-02-05")
//     },
//     {
//         id: uuid4(),
//         title: "Updated dependencies to latest versions",
//         description: "Updated project dependencies to their latest stable versions to ensure compatibility and security.",
//         author: "Michael Chang",
//         date: new Date("2023-12-10")
//     },
//     {
//         id: uuid4(),
//         title: "Refactored user authentication logic",
//         description: "Reorganized and optimized the codebase related to user authentication for improved performance and maintainability.",
//         author: "Sophie Bennett",
//         date: new Date("2024-01-20")
//     },
//     {
//         id: uuid4(),
//         title: "Added unit tests for user registration",
//         description: "Implemented unit tests to ensure the reliability and correctness of the user registration functionality.",
//         author: "David Patel",
//         date: new Date("2023-11-25")
//     },
//     {
//         id: uuid4(),
//         title: "Refactored CSS for better organization",
//         description: "Restructured the Cascading Style Sheets (CSS) codebase to improve organization and maintainability.",
//         author: "Elena Rodriguez",
//         date: new Date("2024-02-25")
//     },
//     {
//         id: uuid4(),
//         title: "Updated third-party library to patch security vulnerability",
//         description: "Upgraded a third-party library to address a critical security vulnerability and enhance application security.",
//         author: "Michael Chang",
//         date: new Date("2023-11-15")
//     },
//     {
//         id: uuid4(),
//         title: "Added API endpoint for exporting user data",
//         description: "Implemented a new API endpoint to allow users to export their data for backup or analysis purposes.",
//         author: "Sophie Bennett",
//         date: new Date("2024-03-05")
//     },
//     {
//         id: uuid4(),
//         title: "Implemented email verification for new accounts",
//         description: "Added functionality to verify email addresses for newly registered accounts to enhance security.",
//         author: "David Patel",
//         date: new Date("2024-01-15")
//     },
//     {
//         id: uuid4(),
//         title: "Fixed responsive design issues on mobile devices",
//         description: "Resolved issues related to the responsiveness of the application on various mobile devices and screen sizes.",
//         author: "Elena Rodriguez",
//         date: new Date("2024-02-10")
//     },
//     {
//         id: uuid4(),
//         title: "Added feature to filter search results",
//         description: "Implemented a filtering mechanism to refine search results based on user-defined criteria.",
//         author: "Michael Chang",
//         date: new Date("2023-12-05")
//     },
//     {
//         id: uuid4(),
//         title: "Implemented user roles and permissions",
//         description: "Developed a role-based access control system to manage user permissions and restrict access to certain features.",
//         author: "Sophie Bennett",
//         date: new Date("2024-03-01")
//     },
//     {
//         id: uuid4(),
//         title: "Refactored codebase to use TypeScript",
//         description: "Converted the codebase from JavaScript to TypeScript to improve type safety and code maintainability.",
//         author: "David Patel",
//         date: new Date("2024-01-25")
//     },
//     {
//         id: uuid4(),
//         title: "Optimized image loading for faster page loads",
//         description: "Implemented techniques to optimize image loading, reducing page load times and improving user experience.",
//         author: "Elena Rodriguez",
//         date: new Date("2024-02-20")
//     },
//     {
//         id: uuid4(),
//         title: "Added support for dark mode",
//         description: "Introduced a dark mode option to the application interface for users who prefer a darker color scheme.",
//         author: "Michael Chang",
//         date: new Date("2023-11-25")
//     },
//     {
//         id: uuid4(),
//         title: "Fixed issue with user session expiration",
//         description: "Resolved a bug causing premature expiration of user sessions, ensuring a smoother user experience.",
//         author: "Sophie Bennett",
//         date: new Date("2024-03-15")
//     },
//     {
//         id: uuid4(),
//         title: "Implemented multi-factor authentication",
//         description: "Enhanced security by adding support for multi-factor authentication (MFA) for user logins.",
//         author: "David Patel",
//         date: new Date("2024-01-10")
//     },
// ]
//     // For test purposes
//     .map(item => ({ ...item, description: `<div>docs: <br>Welcome to the Budget Pokedex Documentation!<br><br>Introduction:<br>The Budget Pokedex is an extremely simple application developed by Benschwartz96 using JavaScript, Bootstrap, HTML, and CSS. The app provides users with a comprehensive list of Generation 1 Pokémon, along with basic information about each Pokémon upon clicking on its name.<br><br>Features:<br><br>* A list of all Generation 1 Pokémon<br>* Clicking on any Pokémon name brings up a modal window displaying a picture and basic information (Name, Height, Weight, Type)<br><br>Technologies:<br><br>* JavaScript<br>* Bootstrap<br>* HTML<br>* CSS<br><br>Documentation Structure:<br><br>This documentation is structured as follows:<br><br>1. Introduction<br>2. Features<br>3. Technologies<br>4. Conclusion<br><br>Introduction:<br>The Budget Pokedex is a simple app that demonstrates the beginning of Benschwartz96's learning journey with JavaScript. The app provides users with a list of Generation 1 Pokémon and allows them to access basic information about each Pokémon upon clicking on its name.<br><br>Features:<br>The Budget Pokedex offers the following features:<br><br>* Comprehensive list of Generation 1 Pokémon<br>* Modal window displaying a picture and basic information (Name, Height, Weight, Type) upon clicking on any Pokémon name<br><br>Technologies:<br>The Budget Pokedex is built using the following technologies:<br><br>* JavaScript<br>* Bootstrap<br>* HTML<br>* CSS<br><br>Conclusion:<br>The Budget Pokedex is a simple yet functional app that demonstrates Benschwartz96's basic understanding of JavaScript, Bootstrap, HTML, and CSS. The app provides users with a comprehensive list of Generation 1 Pokémon and allows them to access basic information about each Pokémon upon clicking on its name. This documentation serves as a reference for the technologies used in the development of the Budget Pokedex.</div>` }))
//     .map(item => {
//         // Find the index of the first <br>
//         const indexOfFirstBr = item.description.indexOf('<br>') + 4;

//         // Find the index of the second <br> starting from the index of the first <br>
//         const indexOfSecondBr = item.description.indexOf('<br>', indexOfFirstBr);

//         // Extract the substring until before the second <br>
//         const title = item.description.substring(indexOfFirstBr, indexOfSecondBr);

//         const indexOfRest = item.description.indexOf(title) + title.length;
//         const description = item.description.substring(indexOfRest);

//         return {
//             ...item,
//             title,
//             description
//         }
//     })
//     .sort((a, b) => a.date - b.date)

console.log({ entries })
const data = entries
.map(item => {
    // Find the index of the first <br>
    const indexOfFirstBr = item.description.indexOf('<br>') + 4;

    // Find the index of the second <br> starting from the index of the first <br>
    const indexOfSecondBr = item.description.indexOf('<br>', indexOfFirstBr);

    // Extract the substring until before the second <br>
    const title = item.description.substring(indexOfFirstBr, indexOfSecondBr);

    const indexOfRest = item.description.indexOf(title) + title.length;
    const description = item.description.substring(indexOfRest);

    return {
        ...item,
        title,
        description
    }
})
.sort((a, b) => a.date - b.date)

const groupedData = groupBy(data, (entry) => `${entry.date.getFullYear()}-${entry.date.getMonth() + 1}`)

const sortedTimeline = Object.keys(groupedData).sort((a, b) => {
    // Split each string by '-' to get the year and month parts
    const [yearA, monthA] = a.split('-').map(Number);
    const [yearB, monthB] = b.split('-').map(Number);

    // Compare years first
    if (yearA !== yearB) {
        return yearA - yearB;
    }

    // If years are the same, compare months
    return monthA - monthB;
});


const Document = () => {
    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Helmet>
            <header className='shadow-lg p-5 flex justify-between text-black px-40'>
                <h3 className='text-3xl'>pokedex-demo</h3>
                <div className=' flex gap-2 items-center'>
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img className='w-full h-full object-cover' src="https://avatars.githubusercontent.com/u/82509220?v=4" alt="user" />
                    </div>
                    <h3>tonderflash</h3>
                </div>
            </header>
            <form className="m-auto w-1/3 my-10 border-blue-500 border-2 rounded-full py-2 px-5 flex justify-between gap-3">
                <input type="text" className="w-full bg-white text-black border-none active:border-none active:outline-none focus:border-none focus:outline-none" placeholder='Tell me what you want to find...' />
                <button onClick={search} className="transition-colors bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                    <MagnifyGlass />
                </button>
            </form>
            <section className="container mx-auto w-11/12 ml-40">
                <div className="timeline">
                    {sortedTimeline.map(month => {
                        const [yy, mm] = month.split('-')
                        return <TimelineMonth key={month} year={yy} month={mm} />
                    })}

                </div >
            </section>
        </>
    )
}

function search(e) {
    e.preventDefault()
}

function getDayOfWeek(date) {
    const dayOfWeekNumber = date.getDay();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[dayOfWeekNumber];
}

function TimelineMonth({ month, year }) {
    const monthName = new Date(`${year}-${month}-01`).toLocaleDateString('default', { month: 'long' })
    const entries = groupedData[`${year}-${month}`]
    const groupedEntries = groupBy(entries, entry => entry.date.getDate())
    return (
        <>
            <div className="timeline-month">
                {monthName}, {year}
                <span>{entries.length} Entries</span>
            </div>
            {Object.keys(groupedEntries).map(entryDay => (
                <>
                    <div key={entryDay} className="timeline-date w-fit">
                        {entryDay}, {getDayOfWeek(new Date(year, month, entryDay))}
                    </div>
                    <div className="timeline-section flex justify-start flex-wrap gap-12 ml-20">
                        {groupedEntries[entryDay].map(entry => {
                            return (
                                <TimelineBlock key={entry.id} entry={entry} />
                            )
                        })}
                    </div>
                    <br />
                </>
            ))}
            <br />
        </>
    )
}

TimelineMonth.propTypes = {
    year: PropTypes.string | PropTypes.number,
    month: PropTypes.string | PropTypes.number,
}

function TimelineBlock({ entry }) {
    return (
        <div className="timeline-box w-3/4 shadow-xl hover:scale-105">
            <div className="box-title font-semibold p-4">
                <i className="fa fa-asterisk text-success" aria-hidden="true"></i>{entry.title}
            </div>
            <div className="box-content text-black p-5" >
                <div dangerouslySetInnerHTML={{ __html: entry.description }}></div>
                <br /><br />
                <a className="underline text-cyan-500 font-semibold italic hover:text-cyan-600 hover:cursor-pointer">More Details</a>
            </div>
            <div className="box-footer">- {entry.author} ({entry.date.toLocaleDateString('default')})</div>
        </div>
    )
}

TimelineBlock.propTypes = {
    entry: PropTypes.object
}

export default Document