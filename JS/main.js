let player = {
    points: new Decimal(0),
    pointgain: new Decimal(1),
    pointsPerSec: new Decimal(0),
    bpoints: new Decimal(0),
    tpoints: new Decimal(0),
    buildings: {
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
    },
    upgrades: {
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
    },
    equations: {
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
    },
    achievements: {
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
}

function GetPoints() {
    player.points = player.points.add(1)
    player.tpoints = player.tpoints.add(1)
}

function BuyClassmate() {
    if(player.points.gte(player.buildings.Classmate.cost)) {
        player.points = player.points.sub(player.buildings.Classmate.cost)
        player.buildings.Classmate.amount = player.buildings.Classmate.amount.add(1)
        player.buildings.Classmate.cost = player.buildings.Classmate.cost.mul(1.3)
        player.buildings.tbuildings = player.buildings.tbuildings.add(1)
    }
}

function BuyTeacher() {
    if(player.points.gte(player.buildings.Teacher.cost)) {
        player.points = player.points.sub(player.buildings.Teacher.cost)
        player.buildings.Teacher.amount = player.buildings.Teacher.amount.add(1)
        player.buildings.Teacher.cost = player.buildings.Teacher.cost.mul(1.3)
        player.buildings.tbuildings = player.buildings.tbuildings.add(1)
    }
}

function BuyProfessor() {
    if(player.points.gte(player.buildings.Professor.cost)) {
        player.points = player.points.sub(player.buildings.Professor.cost)
        player.buildings.Professor.amount = player.buildings.Professor.amount.add(1)
        player.buildings.Professor.cost = player.buildings.Professor.cost.mul(1.3)
        player.buildings.tbuildings = player.buildings.tbuildings.add(1)
    }
}

function BuyMultiplication() {
    if(player.points.gte(player.equations.multiplicator1.cost)) {
        player.points = player.points.sub(player.equations.multiplicator1.cost)
        player.equations.multiplicator1.cost = player.equations.multiplicator1.cost.mul(3.5)
        player.equations.equation1.x = player.equations.equation1.x.mul(2)
        player.equations.equation1.eff = player.equations.equation1.eff.mul(2)
    }
}

function BuyXBuyer() {
    if(player.points.gte(player.equations.xbuyer.cost)) {
        player.points = player.points.sub(equations.xbuyer.cost)
        player.equations.equation2.x = player.equations.equation2.x.add(1)
        player.equations.xbuyer.cost = player.equations.xbuyer.cost.mul(15)
    }
}

function BuyUp1() {
    if(player.points.gte(player.upgrades.up1.cost) && player.upgrades.up1.bought === false) {
        player.points = player.points.sub(player.upgrades.up1.cost)
        player.upgrades.up1.bought = true
    }
}

function BuyUp2() {
    if(player.points.gte(player.upgrades.up2.cost) && player.upgrades.up2.bought === false) {
        player.points = player.points.sub(player.upgrades.up2.cost)
        player.upgrades.up2.bought = true
    }
}

function BuyUp3() {
    if(player.points.gte(player.upgrades.up3.cost) && player.upgrades.up3.bought === false) {
        player.points = player.points.sub(player.upgrades.up3.cost)
        player.upgrades.up3.bought = true
    }
}

function BuyUp4() {
    if(player.points.gte(player.upgrades.up4.cost) && player.upgrades.up4.bought === false) {
        player.points = player.points.sub(player.upgrades.up4.cost)
        player.upgrades.up4.bought = true
    }
}

function BuyUp5() {
    if(player.points.gte(player.upgrades.up5.cost) && player.upgrades.up5.bought === false) {
        player.points = player.points.sub(player.upgrades.up5.cost)
        player.upgrades.up5.bought = true
    }
}

function BuyUp6() {
    if(player.points.gte(player.upgrades.up6.cost) && player.upgrades.up6.bought === false) {
        player.points = player.points.sub(player.upgrades.up6.cost)
        player.upgrades.up6.bought = true
    }
}