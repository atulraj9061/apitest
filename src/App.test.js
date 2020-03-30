import React from 'react';
import Movies from './Movies';

it("Api testing", async function () {
  const response = new Movies ();
  var data = await response.api(); 
  expect(data.movies[0].id).toEqual("1")

}
)

it("Api testing", async function () {
  const response = new Movies ();
  var data = await response.api(); 
  expect(data.movies[0].title).toEqual("Star Wars")

}
)

it("Api testing", async function () {
  const response = new Movies ();
  var data = await response.api(); 
  expect(data.movies[0].releaseYear).toEqual("1977")

}
)
