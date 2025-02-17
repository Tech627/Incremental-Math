let player = {
    points: new Decimal(0),
    pointgain: new Decimal(1),
    pointsPerSec: new Decimal(0),
    bpoints: new Decimal(0),
    tpoints: new Decimal(0),
}

let buildings = {
    Classmate: {
        amount: new Decimal(0),
        eff: new Decimal(1),
        cost: new Decimal(10),
    },
    Teacher: {
        amount: new Decimal(0),
        eff: new Decimal(20),
        cost: new Decimal(150),
    },
    Professor: {
        amount: new Decimal(0),
        eff: new Decimal(150),
        cost: new Decimal(2000),
    },
    tbuildings: new Decimal(0),
}

let upgrades = {
    up1: {
        bought: false,
        cost: new Decimal(1000),
        eff: new Decimal(1),
    },
    up2: {
        bought: false,
        cost: new Decimal(40000),
        eff: new Decimal(1),
    },
    up3: {
        bought: false,
        cost: new Decimal(3.5e5),
    }
}

let equations = {
    equation1: {
        eff: new Decimal(1),
        x: new Decimal(1),
    },
    multiplicator1: {
        cost: new Decimal(5000),
    }
}

let achievements = {
    achv1: {
        completed: false
    },
    achv2: {
        completed: false
    },
    achv3: {
        completed: false
    },
    achv4: {
        completed: false
    },
    achv5: {
        completed: false
    },
}

function GetPoints() {
    player.points = player.points.add(1)
    player.tpoints = player.tpoints.add(1)
}

function BuyClassmate() {
    if(player.points.gte(buildings.Classmate.cost)) {
        player.points = player.points.sub(buildings.Classmate.cost)
        buildings.Classmate.amount = buildings.Classmate.amount.add(1)
        buildings.Classmate.cost = buildings.Classmate.cost.mul(1.3)
        buildings.tbuildings = buildings.tbuildings.add(1)
    }
}

function BuyTeacher() {
    if(player.points.gte(buildings.Teacher.cost)) {
        player.points = player.points.sub(buildings.Teacher.cost)
        buildings.Teacher.amount = buildings.Teacher.amount.add(1)
        buildings.Teacher.cost = buildings.Teacher.cost.mul(1.3)
        buildings.tbuildings = buildings.tbuildings.add(1)
    }
}

function BuyProfessor() {
    if(player.points.gte(buildings.Professor.cost)) {
        player.points = player.points.sub(buildings.Professor.cost)
        buildings.Professor.amount = buildings.Professor.amount.add(1)
        buildings.Professor.cost = buildings.Professor.cost.mul(1.3)
        buildings.tbuildings = buildings.tbuildings.add(1)
    }
}

function BuyMultiplication() {
    if(player.points.gte(equations.multiplicator1.cost)) {
        player.points = player.points.sub(equations.multiplicator1.cost)
        equations.multiplicator1.cost = equations.multiplicator1.cost.mul(1.5)
        equations.equation1.x = equations.equation1.x.mul(2)
        equations.equation1.eff = equations.equation1.eff.mul(2)
    }
}

function BuyUp1() {
    if(player.points.gte(upgrades.up1.cost) && upgrades.up1.bought === false) {
        player.points = player.points.sub(upgrades.up1.cost)
        upgrades.up1.bought = true
    }
}

function BuyUp2() {
    if(player.points.gte(upgrades.up2.cost) && upgrades.up2.bought === false) {
        player.points = player.points.sub(upgrades.up2.cost)
        upgrades.up2.bought = true
    }
}

function BuyUp3() {
    if(player.points.gte(upgrades.up3.cost) && upgrades.up3.bought === false) {
        player.points = player.points.sub(upgrades.up3.cost)
        upgrades.up3.bought = true
    }
}