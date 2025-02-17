function UpdateGUI() {
    document.getElementById("Points").textContent = "You have " + format(player.points) + " Points"
    if(player.pointgain.eq(1)) {
        document.getElementById("btn-gain").textContent = "+1 Point"
    }
    else if (player.pointgain.gt(1)) {
        document.getElementById("btn-gain").textContent = "+" + format(player.pointgain) + "Points"
    }
    document.getElementById("PointsPerSec").textContent = "(+" + format(player.pointsPerSec) + " Points/sec)" 
    document.getElementById("building-amount").textContent = "Classmate [" + format(buildings.Classmate.amount) + 
    "] ~ +" + format(buildings.Classmate.amount.mul(buildings.Classmate.eff)) + " Points/sec"
    document.getElementById("Building-cost").textContent = "Cost: " + format(buildings.Classmate.cost) + " Points"
    document.getElementById("building-amount2").textContent = "Teacher [" + format(buildings.Teacher.amount) + 
    "] ~ +" + format(buildings.Teacher.amount.mul(buildings.Teacher.eff)) + " Points/sec"
    document.getElementById("Building-cost2").textContent = "Cost: " + format(buildings.Teacher.cost) + " Points"
    document.getElementById("building-amount3").textContent = "Professor [" + format(buildings.Professor.amount) +
    "] ~ +" + format(buildings.Professor.amount.mul(buildings.Professor.eff)) + " Points/sec"
    document.getElementById("Building-cost3").textContent = "Cost: " + format(buildings.Professor.cost) + " Points"
    if(equations.equation1.x.eq(1)) {
        document.getElementById("Equation1").textContent = "1+x=2"
    }
    else {
        document.getElementById("Equation1").textContent = "1+(x/" + format(equations.equation1.x, precision = 0) + ")=2"
    }
    document.getElementById("Equation1-boost").textContent = format(equations.equation1.eff) + "x to your point production"
    document.getElementById("mult-cost").textContent = "Cost: " + format(equations.multiplicator1.cost) + " Points"
    if(player.points.gte(player.bpoints)) {
        player.bpoints = player.points
        document.getElementById("best-p-ever").textContent = "Your Best points ever was " + format(player.bpoints)
    }
    document.getElementById("total-p").textContent = "Your total points is " + format(player.tpoints)
    document.getElementById("total-b-bought").textContent = "You bought a total of " + format(buildings.tbuildings) + " buildings"
    upgrades.up1.eff = player.points.log10(player.points).add(1)
    document.getElementById("up-eff1").textContent = "Currently: " + format(upgrades.up1.eff) + "x boost"
    upgrades.up2.eff = buildings.Professor.amount.sqrt(buildings.Professor.amount).add(1)
    document.getElementById("up-eff2").textContent = "Currently: " + format(upgrades.up2.eff) + "x boost to teachers"
    if(upgrades.up3.bought === true) {
        document.getElementById("Equation").classList.add("unlocked")
    }
    if(buildings.Classmate.amount.gte(1)) {
        achievements.achv1.completed = true
    }
    if(buildings.Teacher.amount.gte(1)) {
        achievements.achv2.completed = true
    }
    if(buildings.Professor.amount.gte(1)) {
        achievements.achv3.completed = true
    }
    if(upgrades.up3.bought === true) {
        achievements.achv4.completed = true
    }
    if(player.points.gte(1e6)) {
        achievements.achv5.completed = true
    }
}

function UpdateStyles() {
    if(player.points.gte(buildings.Classmate.cost)) {
        document.getElementById("Building-cost").classList.remove("Building-cost")
        document.getElementById("Building-cost").classList.add("Building-buy")
    }
    else {
        document.getElementById("Building-cost").classList.add("Building-cost")
        document.getElementById("Building-cost").classList.remove("Building-buy")
    }
    if(player.points.gte(buildings.Teacher.cost)) {
        document.getElementById("Building-cost2").classList.remove("Building-cost")
        document.getElementById("Building-cost2").classList.add("Building-buy")
    }
    else {
        document.getElementById("Building-cost2").classList.add("Building-cost")
        document.getElementById("Building-cost2").classList.remove("Building-buy")
    }
    if(player.points.gte(buildings.Professor.cost)) {
        document.getElementById("Building-cost3").classList.remove("Building-cost")
        document.getElementById("Building-cost3").classList.add("Building-buy")
    }
    else {
        document.getElementById("Building-cost3").classList.add("Building-cost")
        document.getElementById("Building-cost3").classList.remove("Building-buy")
    }
    if(player.points.gte(upgrades.up1.cost) || upgrades.up1.bought === true) {
        document.getElementById("up-cost1").classList.remove("Up-cost")
        document.getElementById("up-cost1").classList.add("Up-buy")
    }
    else {
        document.getElementById("up-cost1").classList.add("Up-cost")
        document.getElementById("up-cost1").classList.remove("Up-buy")
    }
    if(player.points.gte(upgrades.up2.cost) || upgrades.up2.bought === true) {
        document.getElementById("up-cost2").classList.remove("Up-cost")
        document.getElementById("up-cost2").classList.add("Up-buy")
    }
    else {
        document.getElementById("up-cost2").classList.add("Up-cost")
        document.getElementById("up-cost2").classList.remove("Up-buy")
    }
    if(player.points.gte(upgrades.up3.cost) || upgrades.up3.bought === true) {
        document.getElementById("up-cost3").classList.remove("Up-cost")
        document.getElementById("up-cost3").classList.add("Up-buy")
    }
    else {
        document.getElementById("up-cost3").classList.add("Up-cost")
        document.getElementById("up-cost3").classList.remove("Up-buy")
    }
    if(achievements.achv1.completed === true) {
        document.getElementById("Achv-1").classList.add("completed")
    }
    if(achievements.achv2.completed === true) {
        document.getElementById("Achv-2").classList.add("completed")
    }
    if(achievements.achv3.completed === true) {
        document.getElementById("Achv-3").classList.add("completed")
    }
    if(achievements.achv4.completed === true) {
        document.getElementById("Achv-4").classList.add("completed")
    }
    if(achievements.achv5.completed === true) {
        document.getElementById("Achv-5").classList.add("completed")
    }
}

var LastUpdate = Date.now()

function CalculatePointGain() {
    let gain = new Decimal(0)
    gain = gain.add(buildings.Classmate.amount.mul(buildings.Classmate.eff))
    gain = gain.add(buildings.Teacher.amount.mul(buildings.Teacher.eff))
    gain = gain.add(buildings.Professor.amount.mul(buildings.Professor.eff))
    gain = gain.mul(equations.equation1.eff)
    return gain
}

function CalculateClassmateMult() {
    let cmult = new Decimal(1)
    if(upgrades.up1.bought === true) {
        cmult = cmult.mul(upgrades.up1.eff)
    }
    return cmult
}

function CalculateTeacherMult() {
    let tmult = new Decimal(20)
    if(upgrades.up2.bought === true) {
        tmult = tmult.mul(upgrades.up2.eff)
    }
    return tmult
}

function CalculateProfessorMult() {
    let pmult = new Decimal(150)
    return pmult
}

function productionLoop(diff) {
    player.points = player.points.add(player.pointsPerSec.mul(diff))
    player.pointsPerSec = CalculatePointGain()
    player.tpoints = player.tpoints.add(player.pointsPerSec.mul(diff))
    buildings.Classmate.eff = CalculateClassmateMult()
    buildings.Teacher.eff = CalculateTeacherMult()
}

function MainLoop() {
    var diff = (Date.now() - LastUpdate) / 1000

    CalculatePointGain()
    productionLoop(diff)
    UpdateGUI()
    UpdateStyles()

    LastUpdate = Date.now()
}

setInterval(MainLoop, 33)

UpdateGUI()