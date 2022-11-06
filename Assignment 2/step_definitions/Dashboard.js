const { I } = inject();

  Given('I navigate on home page', () => {
    I.click('New');
    I.wait(5);
    });
  

  When('I select Dashboard', () => {
    I.click({xpath: '/html/body/span/span/div/div/div/ol/li[3]/div'});
    I.wait(3);
    I.fillField('Name', 'Demo dashboard');
    I.fillField('Description','Just a random dashboard for testing');
    I.click('Create');
  });
  
  Then('I should see the new Dashboard', () => {
    I.click('Save');
  });

  // Editing the dashboard
  Then('I should be able to edit the dashboard', () => {
      I.click({xpath: '//*[@id="root"]/div/div/main/div/div/div/header/div/div/div[2]/div/button[1]'});
  });

  //Adding text cards to the dashboard
  Then('I should be able to add text cards', () => {
    I.click({xpath: '//*[@id="root"]/div/div/main/div/div/div/header/div/div[2]/div[2]/div/a'});
    
});

//Adding some notes to the text cards!
  Then('I should be able to add text to the text cards', () => {
    I.click({xpath: '//*[@id="root"]/div/div/main/div/div/div/div/div/div/div/div/div/div/div[2]/div/textarea'});
    I.fillField('//*[@id="root"]/div/div/main/div/div/div/div/div/div/div/div/div/div/div[2]/div/textarea','A sample note to the text cards');
    I.wait(2)
  });

  Then('I should be able to visualization of the text', () => {
    I.click({xpath: '//*[@id="root"]/div/div/main/div/div/div/div/div/div/div/div/div/div/div[1]/span/a[2]'});
    I.click({xpath: '/html/body/div[7]/div/div/div/div/div/div/div[1]/div[1]/a/button/svg'});
    I.click({xpath: '/html/body/div[7]/div/div/div/div/div/div/div[1]/div[1]/a/button/svg'});
    pause();
  });

  




  
  