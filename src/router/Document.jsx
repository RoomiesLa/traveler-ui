import './document.css'
import { Helmet } from 'react-helmet';
import { v4 as uuid4 } from 'uuid';
import PropTypes from 'prop-types';

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
    
}

async function getUserInfo() {

}

const data = [
    {
        id: uuid4(),
        title: "Implemented feature X according to specifications",
        description: "Developed and integrated feature X as per the project specifications and requirements.",
        author: "Elena Rodriguez",
        date: new Date("2024-02-15")
    },
    {
        id: uuid4(),
        title: "Updated documentation for API endpoints",
        description: "Enhanced the documentation to provide comprehensive information about the API endpoints for developers.",
        author: "Michael Chang",
        date: new Date("2023-11-20")
    },
    {
        id: uuid4(),
        title: "Fixed bug causing crashes on certain devices",
        description: "Identified and resolved a critical bug that was causing application crashes on specific devices.",
        author: "Sophie Bennett",
        date: new Date("2024-03-10")
    },
    {
        id: uuid4(),
        title: "Optimized database queries for improved performance",
        description: "Optimized SQL queries and database operations to enhance the overall performance of the application.",
        author: "David Patel",
        date: new Date("2024-01-05")
    },
    {
        id: uuid4(),
        title: "Fixed typo in README.md",
        description: "Corrected a minor spelling mistake in the README file to improve clarity.",
        author: "Elena Rodriguez",
        date: new Date("2024-02-05")
    },
    {
        id: uuid4(),
        title: "Updated dependencies to latest versions",
        description: "Updated project dependencies to their latest stable versions to ensure compatibility and security.",
        author: "Michael Chang",
        date: new Date("2023-12-10")
    },
    {
        id: uuid4(),
        title: "Refactored user authentication logic",
        description: "Reorganized and optimized the codebase related to user authentication for improved performance and maintainability.",
        author: "Sophie Bennett",
        date: new Date("2024-01-20")
    },
    {
        id: uuid4(),
        title: "Added unit tests for user registration",
        description: "Implemented unit tests to ensure the reliability and correctness of the user registration functionality.",
        author: "David Patel",
        date: new Date("2023-11-25")
    },
    {
        id: uuid4(),
        title: "Refactored CSS for better organization",
        description: "Restructured the Cascading Style Sheets (CSS) codebase to improve organization and maintainability.",
        author: "Elena Rodriguez",
        date: new Date("2024-02-25")
    },
    {
        id: uuid4(),
        title: "Updated third-party library to patch security vulnerability",
        description: "Upgraded a third-party library to address a critical security vulnerability and enhance application security.",
        author: "Michael Chang",
        date: new Date("2023-11-15")
    },
    {
        id: uuid4(),
        title: "Added API endpoint for exporting user data",
        description: "Implemented a new API endpoint to allow users to export their data for backup or analysis purposes.",
        author: "Sophie Bennett",
        date: new Date("2024-03-05")
    },
    {
        id: uuid4(),
        title: "Implemented email verification for new accounts",
        description: "Added functionality to verify email addresses for newly registered accounts to enhance security.",
        author: "David Patel",
        date: new Date("2024-01-15")
    },
    {
        id: uuid4(),
        title: "Fixed responsive design issues on mobile devices",
        description: "Resolved issues related to the responsiveness of the application on various mobile devices and screen sizes.",
        author: "Elena Rodriguez",
        date: new Date("2024-02-10")
    },
    {
        id: uuid4(),
        title: "Added feature to filter search results",
        description: "Implemented a filtering mechanism to refine search results based on user-defined criteria.",
        author: "Michael Chang",
        date: new Date("2023-12-05")
    },
    {
        id: uuid4(),
        title: "Implemented user roles and permissions",
        description: "Developed a role-based access control system to manage user permissions and restrict access to certain features.",
        author: "Sophie Bennett",
        date: new Date("2024-03-01")
    },
    {
        id: uuid4(),
        title: "Refactored codebase to use TypeScript",
        description: "Converted the codebase from JavaScript to TypeScript to improve type safety and code maintainability.",
        author: "David Patel",
        date: new Date("2024-01-25")
    },
    {
        id: uuid4(),
        title: "Optimized image loading for faster page loads",
        description: "Implemented techniques to optimize image loading, reducing page load times and improving user experience.",
        author: "Elena Rodriguez",
        date: new Date("2024-02-20")
    },
    {
        id: uuid4(),
        title: "Added support for dark mode",
        description: "Introduced a dark mode option to the application interface for users who prefer a darker color scheme.",
        author: "Michael Chang",
        date: new Date("2023-11-25")
    },
    {
        id: uuid4(),
        title: "Fixed issue with user session expiration",
        description: "Resolved a bug causing premature expiration of user sessions, ensuring a smoother user experience.",
        author: "Sophie Bennett",
        date: new Date("2024-03-15")
    },
    {
        id: uuid4(),
        title: "Implemented multi-factor authentication",
        description: "Enhanced security by adding support for multi-factor authentication (MFA) for user logins.",
        author: "David Patel",
        date: new Date("2024-01-10")
    },
    {
        id: uuid4(),
        title: "Implemented feature X according to specifications",
        description: "Developed and integrated feature X as per the project specifications and requirements.",
        author: "Elena Rodriguez",
        date: new Date("2024-02-15")
    },
    {
        id: uuid4(),
        title: "Updated documentation for API endpoints",
        description: "Enhanced the documentation to provide comprehensive information about the API endpoints for developers.",
        author: "Michael Chang",
        date: new Date("2023-11-20")
    },
    {
        id: uuid4(),
        title: "Fixed bug causing crashes on certain devices",
        description: "Identified and resolved a critical bug that was causing application crashes on specific devices.",
        author: "Sophie Bennett",
        date: new Date("2024-03-10")
    },
    {
        id: uuid4(),
        title: "Optimized database queries for improved performance",
        description: "Optimized SQL queries and database operations to enhance the overall performance of the application.",
        author: "David Patel",
        date: new Date("2024-01-05")
    },
    {
        id: uuid4(),
        title: "Fixed typo in README.md",
        description: "Corrected a minor spelling mistake in the README file to improve clarity.",
        author: "Elena Rodriguez",
        date: new Date("2024-02-05")
    },
    {
        id: uuid4(),
        title: "Updated dependencies to latest versions",
        description: "Updated project dependencies to their latest stable versions to ensure compatibility and security.",
        author: "Michael Chang",
        date: new Date("2023-12-10")
    },
    {
        id: uuid4(),
        title: "Refactored user authentication logic",
        description: "Reorganized and optimized the codebase related to user authentication for improved performance and maintainability.",
        author: "Sophie Bennett",
        date: new Date("2024-01-20")
    },
    {
        id: uuid4(),
        title: "Added unit tests for user registration",
        description: "Implemented unit tests to ensure the reliability and correctness of the user registration functionality.",
        author: "David Patel",
        date: new Date("2023-11-25")
    },
    {
        id: uuid4(),
        title: "Refactored CSS for better organization",
        description: "Restructured the Cascading Style Sheets (CSS) codebase to improve organization and maintainability.",
        author: "Elena Rodriguez",
        date: new Date("2024-02-25")
    },
    {
        id: uuid4(),
        title: "Updated third-party library to patch security vulnerability",
        description: "Upgraded a third-party library to address a critical security vulnerability and enhance application security.",
        author: "Michael Chang",
        date: new Date("2023-11-15")
    },
    {
        id: uuid4(),
        title: "Added API endpoint for exporting user data",
        description: "Implemented a new API endpoint to allow users to export their data for backup or analysis purposes.",
        author: "Sophie Bennett",
        date: new Date("2024-03-05")
    },
    {
        id: uuid4(),
        title: "Implemented email verification for new accounts",
        description: "Added functionality to verify email addresses for newly registered accounts to enhance security.",
        author: "David Patel",
        date: new Date("2024-01-15")
    },
    {
        id: uuid4(),
        title: "Fixed responsive design issues on mobile devices",
        description: "Resolved issues related to the responsiveness of the application on various mobile devices and screen sizes.",
        author: "Elena Rodriguez",
        date: new Date("2024-02-10")
    },
    {
        id: uuid4(),
        title: "Added feature to filter search results",
        description: "Implemented a filtering mechanism to refine search results based on user-defined criteria.",
        author: "Michael Chang",
        date: new Date("2023-12-05")
    },
    {
        id: uuid4(),
        title: "Implemented user roles and permissions",
        description: "Developed a role-based access control system to manage user permissions and restrict access to certain features.",
        author: "Sophie Bennett",
        date: new Date("2024-03-01")
    },
    {
        id: uuid4(),
        title: "Refactored codebase to use TypeScript",
        description: "Converted the codebase from JavaScript to TypeScript to improve type safety and code maintainability.",
        author: "David Patel",
        date: new Date("2024-01-25")
    },
    {
        id: uuid4(),
        title: "Optimized image loading for faster page loads",
        description: "Implemented techniques to optimize image loading, reducing page load times and improving user experience.",
        author: "Elena Rodriguez",
        date: new Date("2024-02-20")
    },
    {
        id: uuid4(),
        title: "Added support for dark mode",
        description: "Introduced a dark mode option to the application interface for users who prefer a darker color scheme.",
        author: "Michael Chang",
        date: new Date("2023-11-25")
    },
    {
        id: uuid4(),
        title: "Fixed issue with user session expiration",
        description: "Resolved a bug causing premature expiration of user sessions, ensuring a smoother user experience.",
        author: "Sophie Bennett",
        date: new Date("2024-03-15")
    },
    {
        id: uuid4(),
        title: "Implemented multi-factor authentication",
        description: "Enhanced security by adding support for multi-factor authentication (MFA) for user logins.",
        author: "David Patel",
        date: new Date("2024-01-10")
    },
    {
        id: uuid4(),
        title: "Implemented feature X according to specifications",
        description: "Developed and integrated feature X as per the project specifications and requirements.",
        author: "Elena Rodriguez",
        date: new Date("2024-02-15")
    },
    {
        id: uuid4(),
        title: "Updated documentation for API endpoints",
        description: "Enhanced the documentation to provide comprehensive information about the API endpoints for developers.",
        author: "Michael Chang",
        date: new Date("2023-11-20")
    },
    {
        id: uuid4(),
        title: "Fixed bug causing crashes on certain devices",
        description: "Identified and resolved a critical bug that was causing application crashes on specific devices.",
        author: "Sophie Bennett",
        date: new Date("2024-03-10")
    },
    {
        id: uuid4(),
        title: "Optimized database queries for improved performance",
        description: "Optimized SQL queries and database operations to enhance the overall performance of the application.",
        author: "David Patel",
        date: new Date("2024-01-05")
    },
    {
        id: uuid4(),
        title: "Fixed typo in README.md",
        description: "Corrected a minor spelling mistake in the README file to improve clarity.",
        author: "Elena Rodriguez",
        date: new Date("2024-02-05")
    },
    {
        id: uuid4(),
        title: "Updated dependencies to latest versions",
        description: "Updated project dependencies to their latest stable versions to ensure compatibility and security.",
        author: "Michael Chang",
        date: new Date("2023-12-10")
    },
    {
        id: uuid4(),
        title: "Refactored user authentication logic",
        description: "Reorganized and optimized the codebase related to user authentication for improved performance and maintainability.",
        author: "Sophie Bennett",
        date: new Date("2024-01-20")
    },
    {
        id: uuid4(),
        title: "Added unit tests for user registration",
        description: "Implemented unit tests to ensure the reliability and correctness of the user registration functionality.",
        author: "David Patel",
        date: new Date("2023-11-25")
    },
    {
        id: uuid4(),
        title: "Refactored CSS for better organization",
        description: "Restructured the Cascading Style Sheets (CSS) codebase to improve organization and maintainability.",
        author: "Elena Rodriguez",
        date: new Date("2024-02-25")
    },
    {
        id: uuid4(),
        title: "Updated third-party library to patch security vulnerability",
        description: "Upgraded a third-party library to address a critical security vulnerability and enhance application security.",
        author: "Michael Chang",
        date: new Date("2023-11-15")
    },
    {
        id: uuid4(),
        title: "Added API endpoint for exporting user data",
        description: "Implemented a new API endpoint to allow users to export their data for backup or analysis purposes.",
        author: "Sophie Bennett",
        date: new Date("2024-03-05")
    },
    {
        id: uuid4(),
        title: "Implemented email verification for new accounts",
        description: "Added functionality to verify email addresses for newly registered accounts to enhance security.",
        author: "David Patel",
        date: new Date("2024-01-15")
    },
    {
        id: uuid4(),
        title: "Fixed responsive design issues on mobile devices",
        description: "Resolved issues related to the responsiveness of the application on various mobile devices and screen sizes.",
        author: "Elena Rodriguez",
        date: new Date("2024-02-10")
    },
    {
        id: uuid4(),
        title: "Added feature to filter search results",
        description: "Implemented a filtering mechanism to refine search results based on user-defined criteria.",
        author: "Michael Chang",
        date: new Date("2023-12-05")
    },
    {
        id: uuid4(),
        title: "Implemented user roles and permissions",
        description: "Developed a role-based access control system to manage user permissions and restrict access to certain features.",
        author: "Sophie Bennett",
        date: new Date("2024-03-01")
    },
    {
        id: uuid4(),
        title: "Refactored codebase to use TypeScript",
        description: "Converted the codebase from JavaScript to TypeScript to improve type safety and code maintainability.",
        author: "David Patel",
        date: new Date("2024-01-25")
    },
    {
        id: uuid4(),
        title: "Optimized image loading for faster page loads",
        description: "Implemented techniques to optimize image loading, reducing page load times and improving user experience.",
        author: "Elena Rodriguez",
        date: new Date("2024-02-20")
    },
    {
        id: uuid4(),
        title: "Added support for dark mode",
        description: "Introduced a dark mode option to the application interface for users who prefer a darker color scheme.",
        author: "Michael Chang",
        date: new Date("2023-11-25")
    },
    {
        id: uuid4(),
        title: "Fixed issue with user session expiration",
        description: "Resolved a bug causing premature expiration of user sessions, ensuring a smoother user experience.",
        author: "Sophie Bennett",
        date: new Date("2024-03-15")
    },
    {
        id: uuid4(),
        title: "Implemented multi-factor authentication",
        description: "Enhanced security by adding support for multi-factor authentication (MFA) for user logins.",
        author: "David Patel",
        date: new Date("2024-01-10")
    },
    {
        id: uuid4(),
        title: "Implemented feature X according to specifications",
        description: "Developed and integrated feature X as per the project specifications and requirements.",
        author: "Elena Rodriguez",
        date: new Date("2024-02-15")
    },
    {
        id: uuid4(),
        title: "Updated documentation for API endpoints",
        description: "Enhanced the documentation to provide comprehensive information about the API endpoints for developers.",
        author: "Michael Chang",
        date: new Date("2023-11-20")
    },
    {
        id: uuid4(),
        title: "Fixed bug causing crashes on certain devices",
        description: "Identified and resolved a critical bug that was causing application crashes on specific devices.",
        author: "Sophie Bennett",
        date: new Date("2024-03-10")
    },
    {
        id: uuid4(),
        title: "Optimized database queries for improved performance",
        description: "Optimized SQL queries and database operations to enhance the overall performance of the application.",
        author: "David Patel",
        date: new Date("2024-01-05")
    },
    {
        id: uuid4(),
        title: "Fixed typo in README.md",
        description: "Corrected a minor spelling mistake in the README file to improve clarity.",
        author: "Elena Rodriguez",
        date: new Date("2024-02-05")
    },
    {
        id: uuid4(),
        title: "Updated dependencies to latest versions",
        description: "Updated project dependencies to their latest stable versions to ensure compatibility and security.",
        author: "Michael Chang",
        date: new Date("2023-12-10")
    },
    {
        id: uuid4(),
        title: "Refactored user authentication logic",
        description: "Reorganized and optimized the codebase related to user authentication for improved performance and maintainability.",
        author: "Sophie Bennett",
        date: new Date("2024-01-20")
    },
    {
        id: uuid4(),
        title: "Added unit tests for user registration",
        description: "Implemented unit tests to ensure the reliability and correctness of the user registration functionality.",
        author: "David Patel",
        date: new Date("2023-11-25")
    },
    {
        id: uuid4(),
        title: "Refactored CSS for better organization",
        description: "Restructured the Cascading Style Sheets (CSS) codebase to improve organization and maintainability.",
        author: "Elena Rodriguez",
        date: new Date("2024-02-25")
    },
    {
        id: uuid4(),
        title: "Updated third-party library to patch security vulnerability",
        description: "Upgraded a third-party library to address a critical security vulnerability and enhance application security.",
        author: "Michael Chang",
        date: new Date("2023-11-15")
    },
    {
        id: uuid4(),
        title: "Added API endpoint for exporting user data",
        description: "Implemented a new API endpoint to allow users to export their data for backup or analysis purposes.",
        author: "Sophie Bennett",
        date: new Date("2024-03-05")
    },
    {
        id: uuid4(),
        title: "Implemented email verification for new accounts",
        description: "Added functionality to verify email addresses for newly registered accounts to enhance security.",
        author: "David Patel",
        date: new Date("2024-01-15")
    },
    {
        id: uuid4(),
        title: "Fixed responsive design issues on mobile devices",
        description: "Resolved issues related to the responsiveness of the application on various mobile devices and screen sizes.",
        author: "Elena Rodriguez",
        date: new Date("2024-02-10")
    },
    {
        id: uuid4(),
        title: "Added feature to filter search results",
        description: "Implemented a filtering mechanism to refine search results based on user-defined criteria.",
        author: "Michael Chang",
        date: new Date("2023-12-05")
    },
    {
        id: uuid4(),
        title: "Implemented user roles and permissions",
        description: "Developed a role-based access control system to manage user permissions and restrict access to certain features.",
        author: "Sophie Bennett",
        date: new Date("2024-03-01")
    },
    {
        id: uuid4(),
        title: "Refactored codebase to use TypeScript",
        description: "Converted the codebase from JavaScript to TypeScript to improve type safety and code maintainability.",
        author: "David Patel",
        date: new Date("2024-01-25")
    },
    {
        id: uuid4(),
        title: "Optimized image loading for faster page loads",
        description: "Implemented techniques to optimize image loading, reducing page load times and improving user experience.",
        author: "Elena Rodriguez",
        date: new Date("2024-02-20")
    },
    {
        id: uuid4(),
        title: "Added support for dark mode",
        description: "Introduced a dark mode option to the application interface for users who prefer a darker color scheme.",
        author: "Michael Chang",
        date: new Date("2023-11-25")
    },
    {
        id: uuid4(),
        title: "Fixed issue with user session expiration",
        description: "Resolved a bug causing premature expiration of user sessions, ensuring a smoother user experience.",
        author: "Sophie Bennett",
        date: new Date("2024-03-15")
    },
    {
        id: uuid4(),
        title: "Implemented multi-factor authentication",
        description: "Enhanced security by adding support for multi-factor authentication (MFA) for user logins.",
        author: "David Patel",
        date: new Date("2024-01-10")
    },
].sort((a, b) => a.date - b.date)

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
        <div className="timeline-box w-1/4 shadow-xl hover:scale-105">
            <div className="box-title font-semibold p-4">
                <i className="fa fa-asterisk text-success" aria-hidden="true"></i>{entry.title}
            </div>
            <div className="box-content text-black p-5">
                {entry.description}
                <br/><br/>
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