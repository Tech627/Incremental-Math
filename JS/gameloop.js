function UpdateGUI() {
    document.getElementById("Points").textContent = "You have " + format(player.points) + " Points"
    if(player.pointgain.eq(1)) {
        document.getElementById("btn-gain").textContent = "+1 Point"
    }
    else if (player.pointgain.gt(1)) {
        document.getElementById("btn-gain").textContent = "+" + format(player.pointgain) + "Points"
    }
    document.getElementById("PointsPerSec").textContent = "(+" + format(player.pointsPerSec) + " Points/sec)" 
    document.getElementById("building-amount").textContent = "Classmate [" + format(player.buildings.Classmate.amount) + "]"
    document.getElementById("building-production").textContent = "(+" + format(player.buildings.Classmate.amount
        .mul(player.buildings.Classmate.eff)) + " Points/sec)"
    document.getElementById("building-prod").textContent = "gives +" + format(CalculateClassmateMult()) + " Points/sec"
    document.getElementById("Building-cost").textContent = "Cost: " + format(player.buildings.Classmate.cost) + " Points"
    document.getElementById("building-amount2").textContent = "Teacher [" + format(player.buildings.Teacher.amount) + "]"
    document.getElementById("building-production2").textContent = "(+" + format(player.buildings.Teacher.amount
        .mul(player.buildings.Teacher.eff)) + " Points/sec)"
    document.getElementById("building-prod2").textContent = "gives +" + format(CalculateTeacherMult()) + " Points/sec"
    document.getElementById("Building-cost2").textContent = "Cost: " + format(player.buildings.Teacher.cost) + " Points"
    document.getElementById("building-amount3").textContent = "Professor [" + format(player.buildings.Professor.amount) + "]"
    document.getElementById("building-production3").textContent = "(+" + format(player.buildings.Professor.amount
        .mul(player.buildings.Professor.eff)) + " Points/sec)"
    document.getElementById("building-prod3").textContent = "gives +" + format(CalculateProfessorMult()) + " Points/sec"
    document.getElementById("Building-cost3").textContent = "Cost: " + format(player.buildings.Professor.cost) + " Points"
    if(player.equations.equation1.x.eq(1)) {
        document.getElementById("Equation1").textContent = "1+x=2"
    }
    else {
        document.getElementById("Equation1").textContent = "1+(x/" + format(CalculateEquationGain(), precision = 0) + ")=2"
    }
    document.getElementById("Equation1-boost").textContent = format(CalculateEquationGain()) + "x to your point production"
    document.getElementById("mult-cost").textContent = "Cost: " + format(player.equations.multiplicator1.cost) + " Points"
    if(player.equations.equation2.y.gt(1)) {
        player.equations.equation2.eff = new Decimal(2).pow(player.equations.equation2.y)
        player.equations.equation2.eff = player.equations.equation2.eff.mul(2)
    }
    document.getElementById("Equation2-boost").textContent = format(player.equations.equation2.eff) + "x to your point production," +
    "and dividing your x from 1st equation by 2 each y"
    document.getElementById("mult-cost2").textContent = "Cost: " + format(player.equations.xbuyer.cost) + " Points"
    player.equations.equation2.y = player.equations.equation2.k.mul(player.equations.equation2.x).add(player.equations.equation2.n)
    document.getElementById("solved-equation").textContent = "y = " + format(player.equations.equation2.y)
    document.getElementById("k-amt").textContent = "k = " + format(player.equations.equation2.k)
    document.getElementById("x-amt").textContent = "x = " + format(player.equations.equation2.x)
    document.getElementById("n-amt").textContent = "n = " + format(player.equations.equation2.n)
    if(player.points.gte(player.bpoints)) {
        player.bpoints = player.points
        document.getElementById("best-p-ever").textContent = "Your Best points ever was " + format(player.bpoints)
    }
    document.getElementById("total-p").textContent = "Your total points is " + format(player.tpoints)
    document.getElementById("total-b-bought").textContent = "You bought a total of " + format(player.buildings.tbuildings) + " buildings"
    player.upgrades.up1.eff = player.points.log10(player.points).add(1)
    document.getElementById("up-eff1").textContent = "Currently: " + format(player.upgrades.up1.eff) + "x boost"
    player.upgrades.up2.eff = player.buildings.Professor.amount.sqrt(player.buildings.Professor.amount).add(1)
    document.getElementById("up-eff2").textContent = "Currently: " + format(player.upgrades.up2.eff) + "x boost to teachers"
    player.upgrades.up4.eff = player.points.log10(player.points).div(2.5)
    document.getElementById("up-eff4").textContent = "Currently: " + format(player.upgrades.up4.eff) + "x boost"
    player.upgrades.up5.eff = player.buildings.Professor.amount.sqrt(player.buildings.Professor.amount).div(4).add(1)
    document.getElementById("up-eff5").textContent = "Currently: " + format(player.upgrades.up5.eff) + "x boost"
    if(player.upgrades.up3.bought === true) {
        document.getElementById("Equation").classList.add("unlocked")
    }
    if(player.buildings.Classmate.amount.gte(1)) {
        player.achievements.achv1.completed = true
    }
    if(player.buildings.Teacher.amount.gte(1)) {
        player.achievements.achv2.completed = true
    }
    if(player.buildings.Professor.amount.gte(1)) {
        player.achievements.achv3.completed = true
    }
    if(player.upgrades.up3.bought === true) {
        player.achievements.achv4.completed = true
    }
    if(player.points.gte(1e6)) {
        document.getElementById("row2").classList.add("show")
        document.getElementById("note").style.visibility = "collapse"
        player.achievements.achv5.completed = true
    }
    if(player.achievements.achv5.completed === true) {
        document.getElementById("achv-row2").classList.add("unlocked")
    }
    if(player.points.gte(1e7)) {
        player.achievements.achv6.completed = true
    }
    if(player.upgrades.up6.bought === true) {
        document.getElementById("Equation2").classList.add("unlocked")
        player.achievements.achv7.completed = true
    }
    if(player.equations.equation2.y.gte(5)) {
        player.achievements.achv8.completed = true
    }
    if(player.equations.equation2.x.gte(10)) {
        player.achievements.achv9.completed = true
    }
}

function UpdateStyles() {
    if(player.points.gte(player.buildings.Classmate.cost)) {
        document.getElementById("Building-cost").classList.remove("Building-cost")
        document.getElementById("Building-cost").classList.add("Building-buy")
    }
    else {
        document.getElementById("Building-cost").classList.add("Building-cost")
        document.getElementById("Building-cost").classList.remove("Building-buy")
    }
    if(player.points.gte(player.buildings.Teacher.cost)) {
        document.getElementById("Building-cost2").classList.remove("Building-cost")
        document.getElementById("Building-cost2").classList.add("Building-buy")
    }
    else {
        document.getElementById("Building-cost2").classList.add("Building-cost")
        document.getElementById("Building-cost2").classList.remove("Building-buy")
    }
    if(player.points.gte(player.buildings.Professor.cost)) {
        document.getElementById("Building-cost3").classList.remove("Building-cost")
        document.getElementById("Building-cost3").classList.add("Building-buy")
    }
    else {
        document.getElementById("Building-cost3").classList.add("Building-cost")
        document.getElementById("Building-cost3").classList.remove("Building-buy")
    }
    if(player.points.gte(player.upgrades.up1.cost) && player.upgrades.up1.bought != true) {
        document.getElementById("up-cost1").classList.remove("Up-cost")
        document.getElementById("up-cost1").classList.add("Up-bought")
    }
    else if (player.upgrades.up1.bought === true) {
        document.getElementById("up-cost1").classList.remove("Up-cost")
        document.getElementById("up-cost1").classList.add("Up-buy")
    }
    else if (player.points.lt(player.upgrades.up1.cost) && player.upgrades.up1.bought != true) {
        document.getElementById("up-cost1").classList.add("Up-cost")
        document.getElementById("up-cost1").classList.remove("Up-bought")
    }
    if(player.points.gte(player.upgrades.up2.cost) && player.upgrades.up2.bought != true) {
        document.getElementById("up-cost2").classList.remove("Up-cost")
        document.getElementById("up-cost2").classList.add("Up-bought")
    }
    else if (player.upgrades.up2.bought === true) {
        document.getElementById("up-cost2").classList.remove("Up-cost")
        document.getElementById("up-cost2").classList.add("Up-buy")
    }
    else if (player.points.lt(player.upgrades.up2.cost) && player.upgrades.up2.bought != true) {
        document.getElementById("up-cost2").classList.add("Up-cost")
        document.getElementById("up-cost2").classList.remove("Up-bought")
    }
    if(player.points.gte(player.upgrades.up3.cost) && player.upgrades.up3.bought != true) {
        document.getElementById("up-cost3").classList.remove("Up-cost")
        document.getElementById("up-cost3").classList.add("Up-bought")
    }
    else if (player.upgrades.up3.bought === true) {
        document.getElementById("up-cost3").classList.remove("Up-cost")
        document.getElementById("up-cost3").classList.add("Up-buy")
    }
    else if (player.points.lt(player.upgrades.up3.cost) && player.upgrades.up3.bought != true) {
        document.getElementById("up-cost3").classList.add("Up-cost")
        document.getElementById("up-cost3").classList.remove("Up-bought")
    }
    if(player.points.gte(player.upgrades.up4.cost) && player.upgrades.up4.bought != true) {
        document.getElementById("up-cost4").classList.remove("Up-cost")
        document.getElementById("up-cost4").classList.add("Up-bought")
    }
    else if (player.upgrades.up4.bought === true) {
        document.getElementById("up-cost4").classList.remove("Up-cost")
        document.getElementById("up-cost4").classList.add("Up-buy")
    }
    else if (player.points.lt(player.upgrades.up4.cost) && player.upgrades.up1.bought != true) {
        document.getElementById("up-cost4").classList.add("Up-cost")
        document.getElementById("up-cost4").classList.remove("Up-bought")
    }
    if(player.points.gte(player.upgrades.up5.cost) && player.upgrades.up5.bought != true) {
        document.getElementById("up-cost5").classList.remove("Up-cost")
        document.getElementById("up-cost5").classList.add("Up-bought")
    }
    else if (player.upgrades.up5.bought === true) {
        document.getElementById("up-cost5").classList.remove("Up-cost")
        document.getElementById("up-cost5").classList.add("Up-buy")
    }
    else if (player.points.lt(player.upgrades.up5.cost) && player.upgrades.up5.bought != true) {
        document.getElementById("up-cost5").classList.add("Up-cost")
        document.getElementById("up-cost5").classList.remove("Up-bought")
    }
    if(player.points.gte(player.upgrades.up6.cost) && player.upgrades.up6.bought != true) {
        document.getElementById("up-cost6").classList.remove("Up-cost")
        document.getElementById("up-cost6").classList.add("Up-bought")
    }
    else if (player.upgrades.up6.bought === true) {
        document.getElementById("up-cost6").classList.remove("Up-cost")
        document.getElementById("up-cost6").classList.add("Up-buy")
    }
    else if (player.points.lt(player.upgrades.up6.cost) && player.upgrades.up6.bought != true) {
        document.getElementById("up-cost6").classList.add("Up-cost")
        document.getElementById("up-cost6").classList.remove("Up-bought")
    }
    if(player.achievements.achv1.completed === true) {
        document.getElementById("Achv-1").classList.add("completed")
    }
    if(player.achievements.achv2.completed === true) {
        document.getElementById("Achv-2").classList.add("completed")
    }
    if(player.achievements.achv3.completed === true) {
        document.getElementById("Achv-3").classList.add("completed")
    }
    if(player.achievements.achv4.completed === true) {
        document.getElementById("Achv-4").classList.add("completed")
    }
    if(player.achievements.achv5.completed === true) {
        document.getElementById("Achv-5").classList.add("completed")
    }
    if(player.achievements.achv6.completed === true) {
        document.getElementById("Achv-6").classList.add("completed")
    }
    if(player.achievements.achv7.completed === true) {
        document.getElementById("Achv-7").classList.add("completed")
    }
    if(player.achievements.achv8.completed === true) {
        document.getElementById("Achv-8").classList.add("completed")
    }
    if(player.achievements.achv9.completed === true) {
        document.getElementById("Achv-9").classList.add("completed")
    }
}

var LastUpdate = Date.now()

function CalculatePointGain() {
    let gain = new Decimal(0)
    gain = gain.add(player.buildings.Classmate.amount.mul(player.buildings.Classmate.eff))
    gain = gain.add(player.buildings.Teacher.amount.mul(player.buildings.Teacher.eff))
    gain = gain.add(player.buildings.Professor.amount.mul(player.buildings.Professor.eff))
    gain = gain.mul(player.equations.equation1.x)
    if(player.upgrades.up4.bought === true) {
        gain = gain.mul(player.upgrades.up4.eff)
    }
    return gain
}

function CalculateClassmateMult() {
    let cmult = new Decimal(1)
    if(player.upgrades.up1.bought === true) {
        cmult = cmult.mul(player.upgrades.up1.eff)
    }
    return cmult
}

function CalculateTeacherMult() {
    let tmult = new Decimal(20)
    if(player.upgrades.up2.bought === true) {
        tmult = tmult.mul(player.upgrades.up2.eff)
    }
    return tmult
}

function CalculateProfessorMult() {
    let pmult = new Decimal(150)
    if(player.upgrades.up5.bought === true) {
        pmult = pmult.mul(player.upgrades.up5.eff)
    }
    return pmult
}

function CalculateEquationGain() {
    let xeff = new Decimal(1)
    xeff = xeff.mul(player.equations.equation1.eff)
    if(player.equations.equation2.y.gt(1)) {
        xeff = xeff.mul(new Decimal(2).pow(player.equations.equation2.y))
    }
    return xeff
}

function productionLoop(diff) {
    player.points = player.points.add(player.pointsPerSec.mul(diff))
    player.pointsPerSec = CalculatePointGain()
    player.tpoints = player.tpoints.add(player.pointsPerSec.mul(diff))
    player.buildings.Classmate.eff = CalculateClassmateMult()
    player.buildings.Teacher.eff = CalculateTeacherMult()
    player.buildings.Professor.eff = CalculateProfessorMult()
    player.equations.equation1.x = CalculateEquationGain()
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