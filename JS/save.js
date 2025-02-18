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
        saveitems("Camount", player.buildings.Classmate.amount)
        saveitems("Ceff", player.buildings.Classmate.eff)
        saveitems("Ccost", player.buildings.Classmate.cost)
        saveitems("Tamount", player.buildings.Teacher.amount)
        saveitems("Teff", player.buildings.Teacher.eff)
        saveitems("Tcost", player.buildings.Teacher.cost)
        saveitems("Pamount", player.buildings.Professor.amount)
        saveitems("Peff", player.buildings.Professor.eff)
        saveitems("Pcost", player.buildings.Professor.cost)
        saveitems("tbuildings", player.buildings.tbuildings)
        saveitems("up1bought", player.upgrades.up1.bought)
        saveitems("up1eff", player.upgrades.up1.eff)
        saveitems("up2bought", player.upgrades.up2.bought)
        saveitems("up2eff", player.upgrades.up2.eff)
        saveitems("up3bought", player.upgrades.up3.bought)
        saveitems("up4bought", player.upgrades.up4.bought)
        saveitems("up4eff", player.upgrades.up4.eff)
        saveitems("up5bought", player.upgrades.up5.bought)
        saveitems("up5eff", player.upgrades.up5.eff)
        saveitems("up6bought", player.upgrades.up6.bought)
        saveitems("equation1eff", player.equations.equation1.eff)
        saveitems("equation1x", player.equations.equation1.x)
        saveitems("multiplicator1cost", player.equations.multiplicator1.cost)
        saveitems("equation2eff", player.equations.equation2.eff)
        saveitems("equation2x", player.equations.equation2.x)
        saveitems("equation2k", player.equations.equation2.k)
        saveitems("equation2n", player.equations.equation2.n)
        saveitems("equation2y", player.equations.equation2.y)
        saveitems("XbuyerCost", player.equations.xbuyer.cost)
        saveitems("achv1c", player.achievements.achv1.completed) 
        saveitems("achv2c", player.achievements.achv2.completed) 
        saveitems("achv3c", player.achievements.achv3.completed) 
        saveitems("achv4c", player.achievements.achv4.completed) 
        saveitems("achv5c", player.achievements.achv5.completed) 
        saveitems("achv6c", player.achievements.achv6.completed) 
        saveitems("achv7c", player.achievements.achv7.completed) 
        saveitems("achv8c", player.achievements.achv8.completed) 
        saveitems("achv9c", player.achievements.achv9.completed) 
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
        player.buildings.Classmate.amount = GetItems("Camount", true)
        player.buildings.Classmate.cost = GetItems("Ccost", true)
        player.buildings.Classmate.eff = GetItems("Ceff", true)
        player.buildings.Teacher.amount = GetItems("Tamount", true)
        player.buildings.Teacher.cost = GetItems("Tcost", true)
        player.buildings.Teacher.eff = GetItems("Teff", true)
        player.buildings.Professor.amount = GetItems("Pamount", true)
        player.buildings.Professor.cost = GetItems("Pcost", true)
        player.buildings.Professor.eff = GetItems("Peff", true)
        player.buildings.tbuildings = GetItems("tbuildings", true)
        player.upgrades.up1.bought = GetItems("up1bought", false)
        player.upgrades.up1.eff = GetItems("up1eff", true)
        player.upgrades.up2.bought = GetItems("up2bought", false)
        player.upgrades.up2.eff = GetItems("up2eff", true)
        player.upgrades.up3.bought = GetItems("up3bought", false)
        player.upgrades.up4.bought = GetItems("up4bought", false)
        player.upgrades.up4.eff = GetItems("up4eff", true)
        player.upgrades.up5.bought = GetItems("up5bought", false)
        player.upgrades.up5.eff = GetItems("up5eff", true)
        player.upgrades.up6.bought = GetItems("up6bought", false)
        player.equations.equation1.eff = GetItems("equation1eff", true)
        player.equations.equation1.x = GetItems("equation1x", true)
        player.equations.multiplicator1.cost = GetItems("multiplicator1cost", true)
        player.equations.equation2.eff = GetItems("equation2eff", true)
        player.equations.equation2.x = GetItems("equation2x", true)
        player.equations.equation2.k = GetItems("equation2k", true)
        player.equations.equation2.n = GetItems("equation2n", true)
        player.equations.equation2.y = GetItems("equation2y", true)
        player.equations.xbuyer.cost = GetItems("XbuyerCost", true)
        player.achievements.achv1.completed = GetItems("achv1c", false)
        player.achievements.achv2.completed = GetItems("achv2c", false)
        player.achievements.achv3.completed = GetItems("achv3c", false)
        player.achievements.achv4.completed = GetItems("achv4c", false)
        player.achievements.achv5.completed = GetItems("achv5c", false)
        player.achievements.achv6.completed = GetItems("achv6c", false)
        player.achievements.achv7.completed = GetItems("achv7c", false)
        player.achievements.achv8.completed = GetItems("achv8c", false)
        player.achievements.achv9.completed = GetItems("achv9c", false)
    } else {
        Save()
    }}

function HardReset() {
    localStorage.clear(); // wipe localstorage
    saveitems("firstload", true)
    location.reload(true)
}

function Export() {
    const Exported = btoa(JSON.stringify(player))
    navigator.clipboard.writeText(Exported);
}

function Import() {
    let userResponse = prompt("Enter your exported save")
    const Imported = userResponse
    player = JSON.parse(atob(Imported))
    Save()
    location.reload()
}