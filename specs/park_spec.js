const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dinosaur = new Dinosaur('Velociraptor', 'Carnivore', 75)
    dinosaur2 = new Dinosaur('T-Rex', "Carnivore", 50)
    dinosaur3 = new Dinosaur('Diplodocus', 'Herbivore', 60)
    dinosaur4 = new Dinosaur('Stegosaurus', 'Herbivore', 50)
    dinosaur5 = new Dinosaur('Terodactyl', 'Omnivore', 55)
    park = new Park('Jurassic Park', 20)
  })

  it('should have a name', function (){
    const actual = park.name
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function (){
    const actual = park.ticketPrice
    assert.strictEqual(actual, 20)
  });

  it('should have a collection of dinosaurs', function (){
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 0)
  });

  it('should be able to add a dinosaur to its collection', function (){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.dinosaurs.length
    assert.strictEqual(actual, 3)
  });

  it('should be able to remove a dinosaur from its collection', function (){
    park.addDinosaur(dinosaur5)
    park.removeDinosaur(dinosaur5)
    const actual = park.dinosaurs.length
    assert.strictEqual(actual, 0)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function (){
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur5)
    park.addDinosaur(dinosaur)
    park.findMostPopularDinosaur(park.dinosaurs)
    const actual = park.dinosaurs[2]
    assert.strictEqual(actual, park.dinosaurs[2])
  });

  it('should be able to find all dinosaurs of a particular species', function (){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur4)
    park.addDinosaur(dinosaur3)
    park.findParticularSpecies('Carnivore')
    const actual = park.dinosaurs[0]
    assert.strictEqual(actual, park.dinosaurs[0])
  });

  it('should be able to calculate the total number of visitors per day', function (){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    park.addDinosaur(dinosaur5)
    park.findTotalVisitors(park.dinosaurs)
    const actual = park.findTotalVisitors(park.dinosaurs)
    assert.strictEqual(actual, 290)
  });

  it('should be able to calculate the total number of visitors per year', function (){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    park.addDinosaur(dinosaur5)
    park.findTotalVisitorsPerYear(park.dinosaurs)
    const actual = park.findTotalVisitorsPerYear(park.dinosaurs)
    assert.strictEqual(actual, 105850)
  });

  it('should be able to calculate total revenue for one year', function (){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    park.addDinosaur(dinosaur5)
    park.findTotalRevenuePerYear(park.dinosaurs)
    const actual = park.findTotalRevenuePerYear(park.dinosaurs)
    assert.strictEqual(actual, 2117000)
  });
})