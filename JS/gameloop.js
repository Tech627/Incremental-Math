function UpdateGUI() {
    document.getElementById("Points").textContent = "You have " + format(player.points) + " Points"
    if(player.pointgain.eq(1)) {
        document.getElementById("btn-gain").textContent = "+1 Point"
    }
    else if (player.pointgain.gt(1)) {
        document.getElementById("btn-gain").textContent = "+" + format(player.pointgain) + "Points"
    }
    document.getElementById("PointsPerSec").textContent = "(+" + format(player.pointsPerSec) + " Points/sec)" 
    document.getElementById("building-amount").textContent = "Classmate [" + format(buildings.Classmate.amount) + "]"
    document.getElementById("building-production").textContent = "(+" + format(buildings.Classmate.amount
        .mul(buildings.Classmate.eff)) + " Points/sec)"
    document.getElementById("building-prod").textContent = "gives +" + format(CalculateClassmateMult()) + " Points/sec"
    document.getElementById("Building-cost").textContent = "Cost: " + format(buildings.Classmate.cost) + " Points"
    document.getElementById("building-amount2").textContent = "Teacher [" + format(buildings.Teacher.amount) + "]"
    document.getElementById("building-production2").textContent = "(+" + format(buildings.Teacher.amount
        .mul(buildings.Teacher.eff)) + " Points/sec)"
    document.getElementById("building-prod2").textContent = "gives +" + format(CalculateTeacherMult()) + " Points/sec"
    document.getElementById("Building-cost2").textContent = "Cost: " + format(buildings.Teacher.cost) + " Points"
    document.getElementById("building-amount3").textContent = "Professor [" + format(buildings.Professor.amount) + "]"
    document.getElementById("building-production3").textContent = "(+" + format(buildings.Professor.amount
        .mul(buildings.Professor.eff)) + " Points/sec)"
    document.getElementById("building-prod3").textContent = "gives +" + format(CalculateProfessorMult()) + " Points/sec"
    document.getElementById("Building-cost3").textContent = "Cost: " + format(buildings.Professor.cost) + " Points"
    if(equations.equation1.x.eq(1)) {
        document.getElementById("Equation1").textContent = "1+x=2"
    }
    else {
        document.getElementById("Equation1").textContent = "1+(x/" + format(CalculateEquationGain(), precision = 0) + ")=2"
    }
    document.getElementById("Equation1-boost").textContent = format(CalculateEquationGain()) + "x to your point production"
    document.getElementById("mult-cost").textContent = "Cost: " + format(equations.multiplicator1.cost) + " Points"
    if(equations.equation2.y.gt(1)) {
        equations.equation2.eff = new Decimal(2).pow(equations.equation2.y)
        equations.equation2.eff = equations.equation2.eff.mul(2)
    }
    document.getElementById("Equation2-boost").textContent = format(equations.equation2.eff) + "x to your point production," +
    "and dividing your x from 1st equation by 2 each y"
    document.getElementById("mult-cost2").textContent = "Cost: " + format(equations.xbuyer.cost) + " Points"
    equations.equation2.y = equations.equation2.k.mul(equations.equation2.x).add(equations.equation2.n)
    document.getElementById("solved-equation").textContent = "y = " + format(equations.equation2.y)
    document.getElementById("k-amt").textContent = "k = " + format(equations.equation2.k)
    document.getElementById("x-amt").textContent = "x = " + format(equations.equation2.x)
    document.getElementById("n-amt").textContent = "n = " + format(equations.equation2.n)
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
    upgrades.up4.eff = player.points.log10(player.points).div(2.5)
    document.getElementById("up-eff4").textContent = "Currently: " + format(upgrades.up4.eff) + "x boost"
    upgrades.up5.eff = buildings.Professor.amount.sqrt(buildings.Professor.amount).div(4).add(1)
    document.getElementById("up-eff5").textContent = "Currently: " + format(upgrades.up5.eff) + "x boost"
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
        document.getElementById("row2").classList.add("show")
        document.getElementById("note").style.visibility = "collapse"
        achievements.achv5.completed = true
    }
    if(achievements.achv5.completed === true) {
        document.getElementById("achv-row2").classList.add("unlocked")
    }
    if(player.points.gte(1e7)) {
        achievements.achv6.completed = true
    }
    if(upgrades.up6.bought === true) {
        document.getElementById("Equation2").classList.add("unlocked")
        achievements.achv7.completed = true
    }
    if(equations.equation2.y.gte(5)) {
        achievements.achv8.completed = true
    }
    if(equations.equation2.x.gte(10)) {
        achievements.achv9.completed = true
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
    if(player.points.gte(upgrades.up1.cost) && upgrades.up1.bought != true) {
        document.getElementById("up-cost1").classList.remove("Up-cost")
        document.getElementById("up-cost1").classList.add("Up-bought")
    }
    else if (upgrades.up1.bought === true) {
        document.getElementById("up-cost1").classList.remove("Up-cost")
        document.getElementById("up-cost1").classList.add("Up-buy")
    }
    else if (player.points.lt(upgrades.up1.cost) && upgrades.up1.bought != true) {
        document.getElementById("up-cost1").classList.add("Up-cost")
        document.getElementById("up-cost1").classList.remove("Up-bought")
    }
    if(player.points.gte(upgrades.up2.cost) && upgrades.up2.bought != true) {
        document.getElementById("up-cost2").classList.remove("Up-cost")
        document.getElementById("up-cost2").classList.add("Up-bought")
    }
    else if (upgrades.up2.bought === true) {
        document.getElementById("up-cost2").classList.remove("Up-cost")
        document.getElementById("up-cost2").classList.add("Up-buy")
    }
    else if (player.points.lt(upgrades.up2.cost) && upgrades.up2.bought != true) {
        document.getElementById("up-cost2").classList.add("Up-cost")
        document.getElementById("up-cost2").classList.remove("Up-bought")
    }
    if(player.points.gte(upgrades.up3.cost) && upgrades.up3.bought != true) {
        document.getElementById("up-cost3").classList.remove("Up-cost")
        document.getElementById("up-cost3").classList.add("Up-bought")
    }
    else if (upgrades.up3.bought === true) {
        document.getElementById("up-cost3").classList.remove("Up-cost")
        document.getElementById("up-cost3").classList.add("Up-buy")
    }
    else if (player.points.lt(upgrades.up3.cost) && upgrades.up3.bought != true) {
        document.getElementById("up-cost3").classList.add("Up-cost")
        document.getElementById("up-cost3").classList.remove("Up-bought")
    }
    if(player.points.gte(upgrades.up4.cost) && upgrades.up4.bought != true) {
        document.getElementById("up-cost4").classList.remove("Up-cost")
        document.getElementById("up-cost4").classList.add("Up-bought")
    }
    else if (upgrades.up4.bought === true) {
        document.getElementById("up-cost4").classList.remove("Up-cost")
        document.getElementById("up-cost4").classList.add("Up-buy")
    }
    else if (player.points.lt(upgrades.up4.cost) && upgrades.up1.bought != true) {
        document.getElementById("up-cost4").classList.add("Up-cost")
        document.getElementById("up-cost4").classList.remove("Up-bought")
    }
    if(player.points.gte(upgrades.up5.cost) && upgrades.up5.bought != true) {
        document.getElementById("up-cost5").classList.remove("Up-cost")
        document.getElementById("up-cost5").classList.add("Up-bought")
    }
    else if (upgrades.up5.bought === true) {
        document.getElementById("up-cost5").classList.remove("Up-cost")
        document.getElementById("up-cost5").classList.add("Up-buy")
    }
    else if (player.points.lt(upgrades.up5.cost) && upgrades.up5.bought != true) {
        document.getElementById("up-cost5").classList.add("Up-cost")
        document.getElementById("up-cost5").classList.remove("Up-bought")
    }
    if(player.points.gte(upgrades.up6.cost) && upgrades.up6.bought != true) {
        document.getElementById("up-cost6").classList.remove("Up-cost")
        document.getElementById("up-cost6").classList.add("Up-bought")
    }
    else if (upgrades.up6.bought === true) {
        document.getElementById("up-cost6").classList.remove("Up-cost")
        document.getElementById("up-cost6").classList.add("Up-buy")
    }
    else if (player.points.lt(upgrades.up6.cost) && upgrades.up6.bought != true) {
        document.getElementById("up-cost6").classList.add("Up-cost")
        document.getElementById("up-cost6").classList.remove("Up-bought")
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
    if(achievements.achv6.completed === true) {
        document.getElementById("Achv-6").classList.add("completed")
    }
    if(achievements.achv7.completed === true) {
        document.getElementById("Achv-7").classList.add("completed")
    }
    if(achievements.achv8.completed === true) {
        document.getElementById("Achv-8").classList.add("completed")
    }
    if(achievements.achv9.completed === true) {
        document.getElementById("Achv-9").classList.add("completed")
    }
}

var LastUpdate = Date.now()

function CalculatePointGain() {
    let gain = new Decimal(0)
    gain = gain.add(buildings.Classmate.amount.mul(buildings.Classmate.eff))
    gain = gain.add(buildings.Teacher.amount.mul(buildings.Teacher.eff))
    gain = gain.add(buildings.Professor.amount.mul(buildings.Professor.eff))
    gain = gain.mul(equations.equation1.x)
    if(upgrades.up4.bought === true) {
        gain = gain.mul(upgrades.up4.eff)
    }
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
    if(upgrades.up5.bought === true) {
        pmult = pmult.mul(upgrades.up5.eff)
    }
    return pmult
}

function CalculateEquationGain() {
    let xeff = new Decimal(1)
    xeff = xeff.mul(equations.equation1.eff)
    if(equations.equation2.y.gt(1)) {
        xeff = xeff.mul(new Decimal(2).pow(equations.equation2.y))
    }
    return xeff
}

function productionLoop(diff) {
    player.points = player.points.add(player.pointsPerSec.mul(diff))
    player.pointsPerSec = CalculatePointGain()
    player.tpoints = player.tpoints.add(player.pointsPerSec.mul(diff))
    buildings.Classmate.eff = CalculateClassmateMult()
    buildings.Teacher.eff = CalculateTeacherMult()
    buildings.Professor.eff = CalculateProfessorMult()
    equations.equation1.x = CalculateEquationGain()
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