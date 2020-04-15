/*
File name : index.js
Student's name : Karandeep
StudentID : 100734535
Student's name : Ritu Patel
StudentID : 100730021
Student's name : Harmanpreet Kaur
StudentID : 100734511
Date : 2020-04-06
*/

/* CONTROLLERS SECTION */
module.exports.displayHome = (res) =>
{
  res.render('index', 
    { 
      title: 'Home'
    });
}

module.exports.displayProjects = (res) =>
{
  res.render('index',
  {
    title: 'Projects'
  });
}

module.exports.displayAbout = (res) =>
{
  res.render('index',
  {
    title: 'About'
  });
}

module.exports.displayContact = (res) =>
{
  res.render('index',
  {
    title: 'Contact'
  });
}

module.exports.displayProducts = (res) =>
{
  res.render('index',
  {
    title: 'Products'
  });
}

module.exports.displayServices = (res) =>
{
  res.render('index',
  {
    title: 'Services'
  });
}

module.exports.displayLogin = (res) =>
{
  res.render('index',
  {
    title: 'Login'
  });
}