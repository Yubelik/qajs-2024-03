// in this file you can append custom step methods to 'I' object
Feature('My First Test');

Scenario('test something', ({ I }) => {
  I.amOnPage('/login');
  I.see('Войти Ваш e-mail Пароль Забыли пароль? Подтверждая, вы соглашаетесь на обработку персональных данных и c политикой конфиденциальности Войти Нет аккаунта? Зарегистрироваться');
  I.fillField('#root > div > div > div > form > div:nth-child(1) > input', "trainer@crystal.com")
  I.fillField('#root > div > div > div > form > div:nth-child(2) > input', 'trainerpass')
  I.click('#checkbox')
  I.click('Войти')
  I.see('ТРЕНЕР')
  I.see('Главная страница')
  I.click('#root > div > div > div.Sidebar_wrapper__Wvnnl > aside > div:nth-child(3) > div:nth-child(1) > span')
  I.see('Изменить аватарку')
  I.see('Сохранить')
  I.see('Изменить')
  I.click('#root > div > div > div.Sidebar_wrapper__Wvnnl > aside > nav > div > svg')
  I.see('Уведомления')
  I.see('Чек-листы')
  I.see('Расписание')
  I.see('Группы')
  I.see('Ученики')
  I.see('Обратная связь')
  I.click('#root > div > div > div.Sidebar_wrapper__Wvnnl > aside > nav > ul > li:nth-child(1) > a')
  I.see('ГЛАВНАЯ Уведомления Чек-листы Расписание Группы Ученики Обратная связь Изменить аватарку Помощь Выйти Уведомления Уведомления')
  



 
  
  
});

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
