'use strict';

// Declare hours of operations (global array)
var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

// Holding array for form data
var tableForm = document.getElementById('table-form');
var updateFormFields = document.getElementById('update-form-fields');

// Holding array for locations
var allLocations = [];

// Access to the table in the DOM
var cookieTable = document.getElementById('storeLoc');

// Array footer cookie totals
var totalCookiesEachHour = [];

// Constructor function for locations
function Stores (locName, minCustomers, maxCustomers, avgCookiePerSale) {
  this.locName = locName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiePerSale = avgCookiePerSale;
  this.hourlyCustomer = [];
  this.hourlyCookies = [];
  this.totalCookieSales = 0;

  this.setCustomerPerHour();
  this.setCookiePerHour();
  this.setDailyCookieSales();

  allLocations.push(this);
}

// Generate a random integers of customers
Stores.prototype.setRandomInt = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};

// Push random integer into customers per hour array
Stores.prototype.setCustomerPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.hourlyCustomer.push(this.setRandomInt());
  }
};

// Calculate number of cookies sold each hour
Stores.prototype.setCookiePerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    this.hourlyCookies.push(Math.round(this.hourlyCustomer[i] * this.avgCookiePerSale));
  }
};

// Calculate number of daily cookie sales
Stores.prototype.setDailyCookieSales = function() {
  for (var i = 0; i < hours.length; i++) {
    this.totalCookieSales += this.hourlyCookies[i];
  }
};

// Render function to display cookies sold per hour and total per day
Stores.prototype.render = function() {
  var locationUlEl = document.getElementById('storeLoc');
  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ': ' + this.hourlyCookies[i] + ' cookies';
    locationUlEl.appendChild(liEl);
  }
  var liElTotalCookies = document.createElement('li');
  liElTotalCookies.textContent = 'Total: ' + this.totalCookieSales + ' cookies';
  locationUlEl.appendChild(liElTotalCookies);
};

// ------------ Table creation functionality --------------------

Stores.prototype.render = function() {
  // create tr
  var trElem = document.createElement('tr');
  // create td
  var tdElem = document.createElement('td');
  // give td content
  tdElem.textContent = this.locName;
  // append the td to the tr
  trElem.appendChild(tdElem);

  for (var i = 0; i < this.hourlyCookies.length; i++) {
    tdElem = document.createElement('td');
    tdElem.textContent = this.hourlyCookies[i];
    trElem.appendChild(tdElem);
  }
  tdElem = document.createElement('td');
  tdElem.textContent = this.totalCookieSales;
  trElem.appendChild(tdElem);
  cookieTable.appendChild(trElem);
};

// Header Row Function
function makeHeaderRow () {
  var trElem = document.createElement('tr');
  var thElem = document.createElement('th');
  thElem.textContent = 'Location';
  trElem.appendChild(thElem);
  cookieTable.appendChild(trElem);

  for (var i = 0; i < hours.length; i++) {
    thElem = document.createElement('th');
    thElem.textContent = hours[i];
    trElem.appendChild(thElem);
    cookieTable.appendChild(trElem);
  }
  thElem = document.createElement('th');
  thElem.textContent = 'Total';
  trElem.appendChild(thElem);
  cookieTable.appendChild(trElem);
}

// Calculating hourly totals
function getTotalCookiesAllStoresPerHour () {
  for (var i = 0; i < hours.length; i++) {
    totalCookiesEachHour[i] = 0;
    // console.log('test');
    for (var k = 0; k < allLocations.length; k++) {
      totalCookiesEachHour[i] += allLocations[k].hourlyCookies[i];
    }
    console.log(allLocations);
  }
}

// Footer Row Function
function makeFooterRow () {
  var trElem = document.createElement('tr');
  var thElem = document.createElement('th');
  thElem.textContent = 'Hourly Total';
  trElem.appendChild(thElem);
  cookieTable.appendChild(trElem);

  for (var i = 0; i < hours.length; i++) {
    thElem = document.createElement('th');
    thElem.textContent = totalCookiesEachHour[i];
    trElem.appendChild(thElem);
    cookieTable.appendChild(trElem);
  }
  thElem = document.createElement('th');
  thElem.textContent = '';
  trElem.appendChild(thElem);
  cookieTable.appendChild(trElem);
}

function renderAllLocations () {
  for (var i = 0; i < allLocations.length; i++) {
    allLocations[i].render();
  }
}

// Define each of the store locations for the constructor function
new Stores ('1st & Pike', 23, 65, 6.3);
new Stores ('SeaTac Airport', 3, 24, 1.2);
new Stores ('Seattle Center', 11, 38, 3.7);
new Stores ('Capitol Hill', 20, 38, 2.3);
new Stores ('Alki', 2, 16, 4.6);

// Verify store data passed into constructor
console.table(allLocations);

// -------------------- FORM and EVENT FUNCTIONALITY ------------------------
function handleNewStoreSubmit (event) {
  event.preventDefault();

  if (!event.target.store.value || !event.target.min.value || !event.target.max.value || !event.target.avg.value) {
    return alert ('Please make sure all fields are filled in properly!');
  }

  var newName = event.target.store.value;
  var newMin = event.target.min.value;
  var newMax = event.target.max.value;
  var newAvg = event.target.avg.value;
  new Stores (newName, newMin, newMax, newAvg);

  console.table(allLocations);

  cookieTable.innerHTML = '';
  makeHeaderRow();
  renderAllLocations();
  getTotalCookiesAllStoresPerHour();
  makeFooterRow();

  event.target.store.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;
}

tableForm.addEventListener('submit', handleNewStoreSubmit);

makeHeaderRow();
renderAllLocations();
getTotalCookiesAllStoresPerHour();
makeFooterRow();

updateFormFields.addEventListener('click', function() {
  // Empties input fields

  console.log('You just cleared the chat list!');
  // makeHeaderRow();
  // renderAllLocations();
  // makeFooterRow();
});
