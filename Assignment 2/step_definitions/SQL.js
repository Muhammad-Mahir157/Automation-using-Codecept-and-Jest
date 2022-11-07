const { I } = inject();

Given('I click on New button', () => 
{
    I.wait(5);
    I.click('New');
});

Given('I click on SQL Query button', () => 
{
    I.wait(5);
    I.click('SQL query');
});

Then('I should see SQL Query page', () => 
{
   I.wait(5);
});

When('I write', () => 
{
    I.fillField("//div[@id='id_sql']","select * from ORDERS where {{CREATED_AT}}");
});
  
Then('I see text', () =>
{
    I.wait(5);
});

Then('I click on Variable Type button', () => 
{
    I.click("//button [@data-testid='select-button']");
    I.wait(5);
    I.click({xpath: '/html/body/span[2]/span/div/div/div/div[3]'})
    pause();
});
  
// Given('I am on SQL Query page', () => 
// {
//     I.amOnPage("http://localhost:3000/question");
// });
// Then('I should Change vriable types', () => 
// {
   
// });
