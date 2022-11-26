const { I } = inject();
const assert = require('assert');

Given('I click on New button', () => 
{
    I.wait(2);
    I.click('New');
});

Given('I click on SQL Query button', () => 
{
    I.wait(2);
    I.click('SQL query');
});

Then('I should see SQL Query page', () => 
{
    I.see('New question');
    I.wait(2);
});

When('I write',  () => 
{
    I.fillField("//div[@id='id_sql']","select * from ORDERS where {{CREATED_AT}}");
});
  
Then('I see text', () =>
{
    I.wait(2);
    I.see("select * from ORDERS where {{CREATED_AT}}","//div[@id='id_sql']");
});

Then('I see Variables', () =>
{
    I.wait(1);
    I.see("Variables");
    I.see("Text","//button [@data-testid='select-button']");
});
Then('I click on Variable Type button', () => 
{
    I.click("//button [@data-testid='select-button']");
    I.wait(1);
    I.click({xpath: '/html/body/span[2]/span/div/div/div/div[3]'})
    I.see("Number","//button [@data-testid='select-button']");
    pause();
});