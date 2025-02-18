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
    },
    up4: {
        bought: false,
        cost: new Decimal(3e6),
        eff: new Decimal(1),
    },
    up5: {
        bought: false,
        cost: new Decimal(5e7),
        eff: new Decimal(1),
    },
    up6: {
        bought: false,
        cost: new Decimal(2.5e9),
    }
}

let equations = {
    equation1: {
        eff: new Decimal(1),
        x: new Decimal(1),
    },
    equation2: {
        eff: new Decimal(1),
        k: new Decimal(1),
        x: new Decimal(0),
        n: new Decimal(1),
        y: new Decimal(1)
    },  
    multiplicator1: {
        cost: new Decimal(5e5),
    },
    xbuyer: {
        cost: new Decimal(1e12),
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
    achv6: {
        completed: false
    },
    achv7: {
        completed: false
    },
    achv8: {
        completed: false
    },
    achv9: {
        completed: false
    },
}
console.log(achievements.achv5.completed)
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
        equations.multiplicator1.cost = equations.multiplicator1.cost.mul(3.5)
        equations.equation1.x = equations.equation1.x.mul(2)
        equations.equation1.eff = equations.equation1.eff.mul(2)
    }
}

function BuyXBuyer() {
    if(player.points.gte(equations.xbuyer.cost)) {
        player.points = player.points.sub(equations.xbuyer.cost)
        equations.equation2.x = equations.equation2.x.add(1)
        equations.xbuyer.cost = equations.xbuyer.cost.mul(15)
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

function BuyUp4() {
    if(player.points.gte(upgrades.up4.cost) && upgrades.up4.bought === false) {
        player.points = player.points.sub(upgrades.up4.cost)
        upgrades.up4.bought = true
    }
}

function BuyUp5() {
    if(player.points.gte(upgrades.up5.cost) && upgrades.up5.bought === false) {
        player.points = player.points.sub(upgrades.up5.cost)
        upgrades.up5.bought = true
    }
}

function BuyUp6() {
    if(player.points.gte(upgrades.up6.cost) && upgrades.up6.bought === false) {
        player.points = player.points.sub(upgrades.up6.cost)
        upgrades.up6.bought = true
    }
}