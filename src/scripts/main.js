'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('table');

for (let i = 0; i < people.length; i++) {
  const newRow = document.createElement('tr');

  newRow.innerHTML = `<td>${people[i].name}</td>
    <td>${people[i].sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${people[i].born}</td>
    <td>${people[i].died}</td>
    <td>${people[i].died - people[i].born}</td>
    <td>${Math.ceil(people[i].died / 100)}</td>`;

  dashboard.append(newRow);
};

// eslint-disable-next-line no-console
// you can remove it

// write your code here
