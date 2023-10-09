# Nexus Event Management Assignment-9

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

<h2> Project Feature </h2>
<ul>
    <h3>Home</h3>
    <li>The main feature of the home page is Services. Where the company's services are discussed. Features have a Details button each. If the user wants to see the details of the service, click on the details button. If the user is not logged in then he has to login to the login page after which he can see the details of the service. (This is basically a private route)</li>
</ul>
<ul>
    <h3>Service</h3>
    <li>If the service page is logged in as a private user, he will get access to this page. And if there is no access, then you have to login to the login page. After login user will get access to service page</li>
</ul>
<ul>
    <h3>Events</h3>
    <li>Events dynamically links to company services and is a private route. If the user is logged in, he will see the details of the services. If not logged in, the user will be navigated to the login page. After that, if the user logs in, he will be navigated to the route he previously clicked</li>
</ul>
<ul>
    <h3>login</h3>
    <li>In the login page, the user can directly login with Google. And if the user already has an account, then he can login manually. A toast will be displayed if the user has successfully logged in. If unable to login, the appropriate toast will be shown. After the user login, there will be no login link on Nabar, instead the logout button will be shown.</li>
</ul>
<ul>
    <h3>Register</h3>
    <li>In the Register page, the user can login directly with Google like the login page. And you can create an account yourself with the required data. Proper alert will be shown if creat properly. and will be navigated to the home page.
Here if the password contains no capital letter below 6 and no special characters then appropriate alert/toast will be shown.</li>
</ul>
<ul>
    <h3>logout</h3>
    <li>Clicking the logout button will show a sweet alert. And permission will be taken from the user whether the user wants to logout or not? Clicking on the OK button of the juice will complete a toast in the middle. This button will not show if the user is not logged in</li>
</ul>
<ul>
    <h3>Profile</h3>
    <li>The profile page will contain the user's personal data. And there will be a little update info button. If the user wants to update his data. Clicking the submit button with the appropriate data will complete the update through a toast show. And after that refresh you can see the updated data.</li>
</ul>
<h3>Project Live Link</h3>
<li>https://event-managemente.web.app/</li>

