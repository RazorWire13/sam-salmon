'use strict';

//Declare hours of operations (global array)
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Declare object and properties (1st and Pike)
var firstPike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiePerSale: 6.3,
  hourlyCustomer: [],
  hourlyCookies: [],
  totalCookieSales: 0,
  dailyTotalCustomers: 0
};

// Generate a random integer (1st and Pike)
firstPike.setRandomInt = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};

// Push random integer into customers per hour array (1st and Pike)
firstPike.setCustomerPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.hourlyCustomer.push(this.setRandomInt());
  }
};

// Calculate number of cookies sold each hour (1st and Pike)
firstPike.setCookiePerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    this.hourlyCookies.push(Math.round(this.hourlyCustomer[i] * this.avgCookiePerSale));
  }
};

// Calculate number of daily cookie sales (1st and Pike)
firstPike.setDailyCookieSales = function() {
  for (var i = 0; i < hours.length; i++) {
    this.totalCookieSales += this.hourlyCookies[i];
  }
};
// Render function to display cookies sold per hour and total per day (1st and Pike)
firstPike.render = function() {
  var firstPikeUlEl = document.getElementById('locFirstPike');
  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ': ' + this.hourlyCookies[i] + ' cookies';
    firstPikeUlEl.appendChild(liEl);
  }
  var liElPikeTotalCookies = document.createElement('li');
  liElPikeTotalCookies.textContent = 'Total: ' + this.totalCookieSales + ' cookies';
  firstPikeUlEl.appendChild(liElPikeTotalCookies);
};

firstPike.setCustomerPerHour();
console.log('Hourly Customers ' + firstPike.hourlyCustomer);
firstPike.setCookiePerHour();
console.log('Hourly Cookie sales ' + firstPike.hourlyCookies);
firstPike.setDailyCookieSales();
console.log('Daily cookie sales ' + firstPike.totalCookieSales);
firstPike.render();



// Declare object and properties (SeaTac)
var seaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiePerSale: 1.2,
  hourlyCustomer: [],
  hourlyCookies: [],
  totalCookieSales: 0,
  dailyTotalCustomers: 0
};

// Generate a random integer (SeaTac)
seaTac.setRandomInt = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};

// Push random integer into customers per hour array (SeaTac)
seaTac.setCustomerPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.hourlyCustomer.push(this.setRandomInt());
  }
};

// Calculate number of cookies sold each hour (SeaTac)
seaTac.setCookiePerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    this.hourlyCookies.push(Math.round(this.hourlyCustomer[i] * this.avgCookiePerSale));
  }
};

// Calculate number of daily cookie sales (SeaTac)
seaTac.setDailyCookieSales = function() {
  for (var i = 0; i < hours.length; i++) {
    this.totalCookieSales += this.hourlyCookies[i];
  }
};

// Render function to display cookies sold per hour and total per day (SeaTac)
seaTac.render = function() {
  var seaTacUlEl = document.getElementById('locSeaTac');
  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ': ' + this.hourlyCookies[i] + ' cookies';
    seaTacUlEl.appendChild(liEl);
  }
  var liElSeaTacTotalCookies = document.createElement('li');
  liElSeaTacTotalCookies.textContent = 'Total: ' + this.totalCookieSales + ' cookies';
  seaTacUlEl.appendChild(liElSeaTacTotalCookies);
};

seaTac.setCustomerPerHour();
console.log('Hourly Customers ' + seaTac.hourlyCustomer);
seaTac.setCookiePerHour();
console.log('Hourly Cookie sales ' + seaTac.hourlyCookies);
seaTac.setDailyCookieSales();
console.log('Daily cookie sales ' + seaTac.totalCookieSales);
seaTac.render();


// Declare object and properties (Seattle Center)
var seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiePerSale: 3.7,
  hourlyCustomer: [],
  hourlyCookies: [],
  totalCookieSales: 0,
  dailyTotalCustomers: 0
};

// Generate a random integer (Seattle Center)
seattleCenter.setRandomInt = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};

// Push random integer into customers per hour array (Seattle Center)
seattleCenter.setCustomerPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.hourlyCustomer.push(this.setRandomInt());
  }
};

// Calculate number of cookies sold each hour (Seattle Center)
seattleCenter.setCookiePerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    this.hourlyCookies.push(Math.round(this.hourlyCustomer[i] * this.avgCookiePerSale));
  }
};

// Calculate number of daily cookie sales (Seattle Center)
seattleCenter.setDailyCookieSales = function() {
  for (var i = 0; i < hours.length; i++) {
    this.totalCookieSales += this.hourlyCookies[i];
  }
};

// Render function to display cookies sold per hour and total per day (Seattle Center)
seattleCenter.render = function() {
  var seattleCenterUlEl = document.getElementById('locSeattleCenter');
  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ': ' + this.hourlyCookies[i] + ' cookies';
    seattleCenterUlEl.appendChild(liEl);
  }
  var liElSeattleCenterTotalCookies = document.createElement('li');
  liElSeattleCenterTotalCookies.textContent = 'Total: ' + this.totalCookieSales + ' cookies';
  seattleCenterUlEl.appendChild(liElSeattleCenterTotalCookies);
};

seattleCenter.setCustomerPerHour();
console.log('Hourly Customers ' + seattleCenter.hourlyCustomer);
seattleCenter.setCookiePerHour();
console.log('Hourly Cookie sales ' + seattleCenter.hourlyCookies);
seattleCenter.setDailyCookieSales();
console.log('Daily cookie sales ' + seattleCenter.totalCookieSales);
seattleCenter.render();



// Declare object and properties (Capitol Hill)
var capHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiePerSale: 2.3,
  hourlyCustomer: [],
  hourlyCookies: [],
  totalCookieSales: 0,
  dailyTotalCustomers: 0
};

// Generate a random integer (Capitol Hill)
capHill.setRandomInt = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};

// Push random integer into customers per hour array (Capitol Hill)
capHill.setCustomerPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.hourlyCustomer.push(this.setRandomInt());
  }
};

// Calculate number of cookies sold each hour (Capitol Hill)
capHill.setCookiePerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    this.hourlyCookies.push(Math.round(this.hourlyCustomer[i] * this.avgCookiePerSale));
  }
};

// Calculate number of daily cookie sales (Capitol Hill)
capHill.setDailyCookieSales = function() {
  for (var i = 0; i < hours.length; i++) {
    this.totalCookieSales += this.hourlyCookies[i];
  }
};

// Render function to display cookies sold per hour and total per day (Capitol Hill)
capHill.render = function() {
  var capHillUlEl = document.getElementById('locCapHill');
  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ': ' + this.hourlyCookies[i] + ' cookies';
    capHillUlEl.appendChild(liEl);
  }
  var liElCapHillTotalCookies = document.createElement('li');
  liElCapHillTotalCookies.textContent = 'Total: ' + this.totalCookieSales + ' cookies';
  capHillUlEl.appendChild(liElCapHillTotalCookies);
};

capHill.setCustomerPerHour();
console.log('Hourly Customers ' + capHill.hourlyCustomer);
capHill.setCookiePerHour();
console.log('Hourly Cookie sales ' + capHill.hourlyCookies);
capHill.setDailyCookieSales();
console.log('Daily cookie sales ' + capHill.totalCookieSales);
capHill.render();



// Declare object and properties (Alki)
var alki = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiePerSale: 4.6,
  hourlyCustomer: [],
  hourlyCookies: [],
  totalCookieSales: 0,
  dailyTotalCustomers: 0
};

// Generate a random integer (Alki)
alki.setRandomInt = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};

// Push random integer into customers per hour array (Alki)
alki.setCustomerPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.hourlyCustomer.push(this.setRandomInt());
  }
};

// Calculate number of cookies sold each hour (Alki)
alki.setCookiePerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    this.hourlyCookies.push(Math.round(this.hourlyCustomer[i] * this.avgCookiePerSale));
  }
};

// Calculate number of daily cookie sales (Alki)
alki.setDailyCookieSales = function() {
  for (var i = 0; i < hours.length; i++) {
    this.totalCookieSales += this.hourlyCookies[i];
  }
};

// Render function to display cookies sold per hour and total per day (Alki)
alki.render = function() {
  var alkiUlEl = document.getElementById('locAlki');
  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ': ' + this.hourlyCookies[i] + ' cookies';
    alkiUlEl.appendChild(liEl);
  }
  var liElAlkiTotalCookies = document.createElement('li');
  liElAlkiTotalCookies.textContent = 'Total: ' + this.totalCookieSales + ' cookies';
  alkiUlEl.appendChild(liElAlkiTotalCookies);
};

alki.setCustomerPerHour();
console.log('Hourly Customers ' + alki.hourlyCustomer);
alki.setCookiePerHour();
console.log('Hourly Cookie sales ' + alki.hourlyCookies);
alki.setDailyCookieSales();
console.log('Daily cookie sales ' + alki.totalCookieSales);
alki.render();