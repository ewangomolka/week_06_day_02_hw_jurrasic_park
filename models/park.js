const Park = function (name, ticketPrice){
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurs = []
}


Park.prototype.addDinosaur = function (dinosaur){
    this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function (dinosaur){
    this.dinosaurs.pop(dinosaur)
}

Park.prototype.findMostPopularDinosaur = function (dinosaurs){
    let maxDinosaur = 0;
    let maxDinosaurObject
    for ( let dinosaur of dinosaurs ) {
        if ( dinosaur.guestsAttractedPerDay > maxDinosaur ) {
            maxDinosaur = dinosaur.guestsAttractedPerDay
            maxDinosaurObject = dinosaur
        }
    }
    return maxDinosaurObject
}

Park.prototype.findParticularSpecies = function (dinosaurs){
    let specificDinosaur
    for ( let dinosaur of dinosaurs ) {
        if ( dinosaur.species === dinosaur )
            specificDinosaur = dinosaur
    }
    return specificDinosaur
}

Park.prototype.findTotalVisitors = function (dinosaurs){
    let total = 0
    for ( let dinosaur of dinosaurs ) {
        total += dinosaur.guestsAttractedPerDay
    }
    return total
}

Park.prototype.findTotalVisitorsPerYear = function (dinosaurs){
    let total = 0
    for ( let dinosaur of dinosaurs ) {
        total += dinosaur.guestsAttractedPerDay
    }
    return total * 365
}

Park.prototype.findTotalRevenuePerYear = function (dinosaurs){
    let total = 0
    for ( let dinosaur of dinosaurs ) {
        total += dinosaur.guestsAttractedPerDay
    }
    return total * this.ticketPrice * 365
}

module.exports = Park;