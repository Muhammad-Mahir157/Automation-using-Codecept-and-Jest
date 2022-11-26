const { I } = inject();

//Creating new Dashboard!
  Given('I navigate on home page', () => {
    I.click('New');
    I.wait(5);
    });
  

  When('I select Dashboard', () => {
    I.click({xpath: '/html/body/span/span/div/div/div/ol/li[3]/div'});
    I.wait(3);
    I.see('New dashboard');                 //assertion
    I.fillField('Name', 'Demo dashboard');
    I.fillField('Description','Just a random dashboard for testing');
    I.click('Create');
    I.wait(5);
    I.see('Done');                 //assertion
  });
  
  Then('I should see the new Dashboard', () => {
    I.click('Save');
    I.see('This dashboard is looking empty.');                //assertion
  });

  // Editing the dashboard
  Then('I should be able to edit the dashboard', () => {
      I.click({xpath: '//*[@id="root"]/div/div/main/div/div/div/header/div/div/div[2]/div/button[1]'});
      I.see("You're editing this dashboard.",'//*[@id="root"]/div/div/main/div/div/div/header/div/div[1]/div[1]/span');
  });

  //Adding text cards to the dashboard
  Then('I should be able to add text cards', () => {
    I.click({xpath: '//*[@id="root"]/div/div/main/div/div/div/header/div/div[2]/div[2]/div/a'});
    //I.see('Edited a few seconds ago by you');           //assertion
    I.seeElement({xpath: '//*[@id="root"]/div/div/main/div/div/div/div/div/div/div/div/div/div/div[2]/div/textarea'});
});

//Adding some notes to the text cards!
  Then('I should be able to add text to the text cards', () => {
    I.click({xpath: '//*[@id="root"]/div/div/main/div/div/div/div/div/div/div/div/div/div/div[2]/div/textarea'});
    I.fillField('//*[@id="root"]/div/div/main/div/div/div/div/div/div/div/div/div/div/div[2]/div/textarea','A sample note to the text cards');
    //I.see('A sample note to the text cards','.text');
    //I.see('A sample note to the text cards', '//*[@id="root"]/div/div/main/div/div/div/div/div/div/div/div/div/div/div[2]/div/textarea');  //asssertion
  });

  Then('I should see the saved Dashboard', () => {
    I.click('Save');
    I.seeElement({xpath: '//*[@id="root"]/div/div/main/div/div/div/div/div/div/div/div/div/div/div/div/div'}); //assertion
  });

//  Then('I should be able to visualize of the text', () => {
//    I.click({xpath: '//*[@id="root"]/div/div/main/div/div/div/div/div/div/div/div/div/div/div[1]/span/a[2]'});
//    I.click({xpath: '/html/body/div[7]/div/div/div/div/div/div/div[1]/div[1]/a/button/svg'});
//    I.click({xpath: '/html/body/div[7]/div/div/div/div/div/div/div[1]/div[1]/a/button/svg'});
//    pause();
//  });

  




  
  