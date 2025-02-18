function saveitems(name, location) { // this basically just removes the localstorage.setitem and json.stringify
    localStorage.setItem(name, JSON.stringify((location)));
}

function Save() {
    if (localStorage) {
        saveitems("firstload", false)
        localStorage.setItem("has_visited", "true")
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
        saveitems("up4bought", upgrades.up4.bought)
        saveitems("up4eff", upgrades.up4.eff)
        saveitems("up5bought", upgrades.up5.bought)
        saveitems("up5eff", upgrades.up5.eff)
        saveitems("up6bought", upgrades.up6.bought)
        saveitems("equation1eff", equations.equation1.eff)
        saveitems("equation1x", equations.equation1.x)
        saveitems("multiplicator1cost", equations.multiplicator1.cost)
        saveitems("equation2eff", equations.equation2.eff)
        saveitems("equation2x", equations.equation2.x)
        saveitems("equation2k", equations.equation2.k)
        saveitems("equation2n", equations.equation2.n)
        saveitems("equation2y", equations.equation2.y)
        saveitems("XbuyerCost", equations.xbuyer.cost)
        saveitems("achv1c", achievements.achv1.completed) 
        saveitems("achv2c", achievements.achv2.completed) 
        saveitems("achv3c", achievements.achv3.completed) 
        saveitems("achv4c", achievements.achv4.completed) 
        saveitems("achv5c", achievements.achv5.completed) 
        saveitems("achv6c", achievements.achv6.completed) 
        saveitems("achv7c", achievements.achv7.completed) 
        saveitems("achv8c", achievements.achv8.completed) 
        saveitems("achv9c", achievements.achv9.completed) 
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

function isFirstVisit() {
    if (!localStorage.getItem('has_visited')) {
      localStorage.setItem('has_visited', 'true');
      return true; // First visit
    }
    return false; // Returning visitor
}

function Get() {
    if (!localStorage) {return;}
    if (!isFirstVisit()) {
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
        upgrades.up4.bought = GetItems("up4bought", false)
        upgrades.up4.eff = GetItems("up4eff", true)
        upgrades.up5.bought = GetItems("up5bought", false)
        upgrades.up5.eff = GetItems("up5eff", true)
        upgrades.up6.bought = GetItems("up6bought", false)
        equations.equation1.eff = GetItems("equation1eff", true)
        equations.equation1.x = GetItems("equation1x", true)
        equations.multiplicator1.cost = GetItems("multiplicator1cost", true)
        equations.equation2.eff = GetItems("equation2eff", true)
        equations.equation2.x = GetItems("equation2x", true)
        equations.equation2.k = GetItems("equation2k", true)
        equations.equation2.n = GetItems("equation2n", true)
        equations.equation2.y = GetItems("equation2y", true)
        equations.xbuyer.cost = GetItems("XbuyerCost", true)
        achievements.achv1.completed = GetItems("achv1c", false)
        achievements.achv2.completed = GetItems("achv2c", false)
        achievements.achv3.completed = GetItems("achv3c", false)
        achievements.achv4.completed = GetItems("achv4c", false)
        achievements.achv5.completed = GetItems("achv5c", false)
        achievements.achv6.completed = GetItems("achv6c", false)
        achievements.achv7.completed = GetItems("achv7c", false)
        achievements.achv8.completed = GetItems("achv8c", false)
        achievements.achv9.completed = GetItems("achv9c", false)
    } else {
        Save()
    }}

function HardReset() {
    localStorage.clear(); // wipe localstorage
    saveitems("firstload", true)
    location.reload(true)
}