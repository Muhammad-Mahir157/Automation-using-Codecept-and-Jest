const { I } = inject();
// Add in your custom step files

Given('Login with username and password', (table) => 
{ 
    I.amOnPage('http://localhost:3000/auth/login?redirect=%2F');
    const cells = table.rows[1].cells;

    I.fillField("username",cells[0].value);
    I.fillField("password",cells[1].value);
    I.wait(5);
    I.click('Sign in');
});






