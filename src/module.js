function greet(name) {
    return `Hello, ${name}!`
  }
  
  
  //Стрелочная функция
  const farewell = (name) => {
    return `Goodbye, ${name}`
  }


  module.exports = {
    greet,
    farewell
  }