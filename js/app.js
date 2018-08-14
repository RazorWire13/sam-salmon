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
