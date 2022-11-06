const { I } = inject();

Given('Login with username and password', (table) => {
    I.amOnPage('http://localhost:3000/auth/login');
    const cells = table.rows[1].cells;

    I.fillField("username",cells[0].value);
    I.fillField("password",cells[1].value);

});

When('I click login button', () =>
{
    I.wait(5);
    I.click('Sign in');
});

Then('I should see login', () => 
{
 
});

