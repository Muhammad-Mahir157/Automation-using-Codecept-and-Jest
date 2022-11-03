const { I } = inject();
// Add in your custom step files
/*
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

Given('I click login button', () =>
{
    I.wait(10);
    I.click('Sign in');
});

Then('I should see login', () => 
{
 
});

*/
Given('I have already added database and i am on hompage', () => {

    I.wait('5')
    I.amOnPage('http://localhost:3000');
    I.fillField("username","hammad@gmail.com");
    I.fillField("password","hammad123");
    I.click('Sign in');
    I.wait('5');
});

When('I click the New button', () => {
  // From "features\SQLEditor.feature" {"line":6,"column":5}
  I.click('New');
});

When('I select SQL query from the drop down menu', () => {
 I.click("SQL query");
});

Then('the query editor should open And I should be able to write queries',(table)  => {
    const cells = table.rows[1].cells;
    I.wait(5)
    I.seeElement("Sample Database");
});
