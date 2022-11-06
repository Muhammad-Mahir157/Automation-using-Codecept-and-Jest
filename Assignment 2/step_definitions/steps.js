const { I } = inject();

Given('I navigate on login page', (table) =>
{
  I.amOnPage('http://localhost:3000/auth/login?redirect=%2F');
});

Given('Login with username and password', (table) => 
{
    const cells = table.rows[1].cells;

    I.fillField("username",cells[0].value);
    I.fillField("password",cells[1].value);

});

When('I click login button', () =>
{
    I.wait(10);
    I.click('Sign in');
});

Then('I should see login', () => 
{
 
});
