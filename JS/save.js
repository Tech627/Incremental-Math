function saveitems(name, location) { // this basically just removes the localstorage.setitem and json.stringify
    localStorage.setItem(name, JSON.stringify((location)));
}

function Save() {
    if (localStorage) {
        saveitems("firstload", false)
        saveitems("points", player.points)
        saveitems("pointgain", player.pointgain)
        saveitems("pointsPerSec", player.pointsPerSec)
        saveitems("bpoints", player.bpoints)
        saveitems("tpoints", player.tpoints)
        saveitems("Camount", buildings.Classmate.amount)
        saveitems("Ceff", buildings.Classmate.eff)
        saveitems("Ccost", buildings.Classmate.cost)
        saveitems("Tamount", buildings.Teacher.amount)
        saveitems("Teff", buildings.Teacher.eff)
        saveitems("Tcost", buildings.Teacher.cost)
        saveitems("Pamount", buildings.Professor.amount)
        saveitems("Peff", buildings.Professor.eff)
        saveitems("Pcost", buildings.Professor.cost)
        saveitems("tbuildings", buildings.tbuildings)
        saveitems("up1bought", upgrades.up1.bought)
        saveitems("up1eff", upgrades.up1.eff)
        saveitems("up2bought", upgrades.up2.bought)
        saveitems("up2eff", upgrades.up2.eff)
        saveitems("up3bought", upgrades.up3.bought)
        saveitems("equation1eff", equations.equation1.eff)
        saveitems("equation1x", equations.equation1.x)
        saveitems("multiplicator1cost", equations.multiplicator1.cost)
        saveitems("achv1c", achievements.achv1.completed) 
        saveitems("achv2c", achievements.achv2.completed) 
        saveitems("achv3c", achievements.achv3.completed) 
        saveitems("achv4c", achievements.achv4.completed) 
        saveitems("achv5c", achievements.achv5.completed) 
    }
}

function GetItems(saved, newdecimal) { //removes json.parse and localstorage
    let location = "Error" // placeholder
    if (saved) {
        if (newdecimal) { // checks if the value your setting to needs to be in newdecimal or not
            location = new Decimal(JSON.parse(localStorage.getItem(saved)));
        } else {
            location = JSON.parse(localStorage.getItem(saved));
        }
    }
    return location;
}

function Get() {
    if (localStorage) {
    let firstload = GetItems("firstload", false)
    if (!firstload) {
        player.points = GetItems("points", true)
        player.pointgain = GetItems("pointgain", true)
        player.pointsPerSec = GetItems("pointsPerSec", true)
        player.bpoints = GetItems("bpoints", true)
        player.tpoints = GetItems("tpoints", true)
        buildings.Classmate.amount = GetItems("Camount", true)
        buildings.Classmate.cost = GetItems("Ccost", true)
        buildings.Classmate.eff = GetItems("Ceff", true)
        buildings.Teacher.amount = GetItems("Tamount", true)
        buildings.Teacher.cost = GetItems("Tcost", true)
        buildings.Teacher.eff = GetItems("Teff", true)
        buildings.Professor.amount = GetItems("Pamount", true)
        buildings.Professor.cost = GetItems("Pcost", true)
        buildings.Professor.eff = GetItems("Peff", true)
        buildings.tbuildings = GetItems("tbuildings", true)
        upgrades.up1.bought = GetItems("up1bought", false)
        upgrades.up1.eff = GetItems("up1eff", true)
        upgrades.up2.bought = GetItems("up2bought", false)
        upgrades.up2.eff = GetItems("up2eff", true)
        upgrades.up3.bought = GetItems("up3bought", false)
        equations.equation1.eff = GetItems("equation1eff", true)
        equations.equation1.x = GetItems("equation1x", true)
        equations.multiplicator1.cost = GetItems("multiplicator1cost", true)
        achievements.achv1.completed = GetItems("achv1c", false)
        achievements.achv2.completed = GetItems("achv2c", false)
        achievements.achv3.completed = GetItems("achv3c", false)
        achievements.achv4.completed = GetItems("achv4c", false)
        achievements.achv5.completed = GetItems("achv5c", false)
    }}
}

function HardReset() {
    localStorage.clear(); // wipe localstorage
    saveitems("firstload", true)
    location.reload(true)
}