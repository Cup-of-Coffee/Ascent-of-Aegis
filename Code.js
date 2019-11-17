

// - - - RACES

function RaceConstructor(name,valor,volition,finesse,cognition){ // Constructor for the races.
    this.name = name;
    this.valor = valor;
    this.volition = volition;
    this.finesse = finesse;
    this.cognition = cognition;
}

let races = {
    choose: new RaceConstructor("",0,0,0,0),
    alfar: new RaceConstructor("alfar",40,45,65,50),
    human: new RaceConstructor("human",50,50,50,50),
    mountainDweorg: new RaceConstructor("mountainDweorg",35,40,60,65),
    stoorsLeprauchanus: new RaceConstructor("stoorsLeprauchanus",35,45,50,70),
    stoorsShireling: new RaceConstructor("stoorsShireling",30,70,55,45),
    svartAlfar: new RaceConstructor("svartAlfar",50,40,50,60),
    ungzefer: new RaceConstructor("ungzefer",30,30,80,30),
    yrch: new RaceConstructor("yrch",70,50,40,40)
}

var chosenRace = new RaceConstructor();

// - - - RACE FUNCTIONS

function getRace() { // The menu to select race :: 
    
    race = document.getElementById("raceSelect").value; // Get the chosen race from the dropdown

    chosenRace.name = races[race].name;
    document.getElementById("valorTab").innerHTML = chosenRace.valor = races[race].valor;
    document.getElementById("volitionTab").innerHTML = chosenRace.volition = races[race].volition;
    document.getElementById("finesseTab").innerHTML = chosenRace.finesse = races[race].finesse;
    document.getElementById("cognitionTab").innerHTML = chosenRace.cognition = races[race].cognition;

    totalValor = chosenRace.valor;
    totalVolition = chosenRace.volition;
    totalFinesse = chosenRace.finesse;
    totalCognition = chosenRace.cognition;

    // Reseting Vars and fields.
    valorInput = 0; volitionInput = 0; finesseInput = 0; cognitionInput = 0; newValue = 0;
    valorCost = 0; volitionCost = 0; finesseCost = 0; cognitionCost = 0; traitCost = 0;
    totalTraitCost = 0; 

    totalValor = 0; totalVolition = 0; totalFinesse = 0; totalCognition = 0; 
    
    traitTotal();
    document.getElementById("valorCost").innerHTML = 0;
    document.getElementById("volitionCost").innerHTML = 0;
    document.getElementById("finesseCost").innerHTML = 0;
    document.getElementById("cognitionCost").innerHTML = 0;
    document.getElementById("valorTotal").innerHTML = chosenRace.valor;
    document.getElementById("volitionTotal").innerHTML = chosenRace.volition;
    document.getElementById("finesseTotal").innerHTML = chosenRace.finesse;
    document.getElementById("cognitionTotal").innerHTML = chosenRace.cognition;
    document.getElementById("traitCostTotal").innerHTML = 0;

    racialCraft(chosenRace.name);

}

// - - - 

var valorInput = 0; var volitionInput = 0; var finesseInput = 0; var cognitionInput = 0; var newValue = 0;
var valorCost = 0; var volitionCost = 0; var finesseCost = 0; var cognitionCost = 0; var traitCost = 0;
var totalTraitCost = 0; // The total cost of EXP for changing to the set value.

var totalValor = 0;     
var totalVolition = 0;  
var totalFinesse = 0;   
var totalCognition = 0; 

function traitIncrease(typeOfTrait){ // Button to increase :: 
    if(typeOfTrait == "Valor"){
        traitCost = valorCost;                          // The cost in EXP of valor's change
        newValue = valorInput + chosenRace.valor;       // The new value.
    }else if(typeOfTrait == "Volition"){
        traitCost = volitionCost;
        newValue = volitionInput + chosenRace.volition;
    }else if(typeOfTrait == "Finesse"){
        traitCost = finesseCost;
        newValue = finesseInput + chosenRace.finesse;
    }else if(typeOfTrait == "Cognition"){
        traitCost = cognitionCost;
        newValue = cognitionInput + chosenRace.cognition;
    }else{
        console.log("ERROR in picking TypeOfTrait");
    }
    
    if(newValue >= 0 && newValue < 100){
        
        newValue++;
        
        if(newValue > 0 && newValue <= 10){ //15
            traitCost = traitCost + 15;
            
        }else if(newValue > 10 && newValue <= 20){ //15
            traitCost = traitCost + 15;
            
        }else if(newValue > 20 && newValue <= 30){ //10
            traitCost = traitCost + 10;

        }else if(newValue > 30 && newValue <= 40){ //5
            traitCost = traitCost + 5;
            
        }else if(newValue > 40 && newValue <= 50){ //2
            traitCost = traitCost + 2;

        }else if(newValue > 50 && newValue <= 60){ //2
            traitCost = traitCost + 2;

        }else if(newValue > 60 && newValue <= 70){ //5
            traitCost = traitCost + 5;

        }else if(newValue > 70 && newValue <= 80){ //10
            traitCost = traitCost + 10;
            
        }else if(newValue > 80 && newValue <= 90){ //15
            traitCost = traitCost + 15;
            
        }else if(newValue > 90 && newValue <= 100){ //20
            traitCost = traitCost + 20;

        }

        if(typeOfTrait == "Valor"){
            valorInput++;                                                   // 
            valorCost = traitCost;                                          // 
            totalValor = newValue                                           //
            document.getElementById("valorCost").innerHTML = valorCost;
            document.getElementById("valorTotal").innerHTML = totalValor;
        }else if(typeOfTrait == "Volition"){
            volitionInput++;
            volitionCost = traitCost;
            totalVolition = newValue
            document.getElementById("volitionCost").innerHTML = volitionCost;
            document.getElementById("volitionTotal").innerHTML = totalVolition;
        }else if(typeOfTrait == "Finesse"){
            finesseInput++;
            finesseCost = traitCost;
            totalFinesse = newValue
            document.getElementById("finesseCost").innerHTML = finesseCost;
            document.getElementById("finesseTotal").innerHTML = totalFinesse;
        }else if(typeOfTrait == "Cognition"){
            cognitionInput++;
            cognitionCost = traitCost;
            totalCognition = newValue
            document.getElementById("cognitionCost").innerHTML = cognitionCost;
            document.getElementById("cognitionTotal").innerHTML = totalCognition;
        }else{
            console.log("ERROR AT INCREASEMENT");
        }

        document.getElementById("traitCostTotal").innerHTML = traitTotal();

    }

    console.log(newValue);
    startingExperience();

}

// - - - 

function traitDecrease(typeOfTrait){ // Button to decrease :: 
    if(typeOfTrait == "Valor"){
        traitCost = valorCost;                          // The cost in EXP of valor's change
        newValue = valorInput + chosenRace.valor;   // The new value.  
        racialLimit = chosenRace.valor;             // The limit to stop going below the race's trait.
    }else if(typeOfTrait == "Volition"){
        traitCost = volitionCost;
        newValue = volitionInput + chosenRace.volition;
        racialLimit = chosenRace.volition;
    }else if(typeOfTrait == "Finesse"){
        traitCost = finesseCost;
        newValue = finesseInput + chosenRace.finesse;
        racialLimit = chosenRace.finesse;
    }else if(typeOfTrait == "Cognition"){
        traitCost = cognitionCost;
        newValue = cognitionInput + chosenRace.cognition;
        racialLimit = chosenRace.cognition;
    }else{
        console.log("ERROR in picking TypeOfTrait");
    }
    
    if(newValue > 0 && newValue > racialLimit && newValue <= 100){
        
        newValue--;
        
        if(newValue > 0 && newValue <= 10){ //15
            traitCost = traitCost - 15;
            
        }else if(newValue >= 10 && newValue < 20){ //15
            traitCost = traitCost - 15;
            
        }else if(newValue >= 20 && newValue < 30){ //10
            traitCost = traitCost - 10;

        }else if(newValue >= 30 && newValue < 40){ //5
            traitCost = traitCost - 5;
            
        }else if(newValue >= 40 && newValue < 50){ //2
            traitCost = traitCost - 2;

        }else if(newValue >= 50 && newValue < 60){ //2
            traitCost = traitCost - 2;

        }else if(newValue >= 60 && newValue < 70){ //5
            traitCost = traitCost - 5;

        }else if(newValue >= 70 && newValue < 80){ //10
            traitCost = traitCost - 10;
            
        }else if(newValue >= 80 && newValue < 90){ //15
            traitCost = traitCost - 15;
            
        }else if(newValue >= 90 && newValue < 100){ //20
            traitCost = traitCost - 20;

        }

        if(typeOfTrait == "Valor"){
            valorInput--;
            valorCost = traitCost;
            totalValor = newValue
            document.getElementById("valorCost").innerHTML = valorCost;
            document.getElementById("valorTotal").innerHTML = totalValor;
        }else if(typeOfTrait == "Volition"){
            volitionInput--;
            volitionCost = traitCost;
            totalVolition = newValue
            document.getElementById("volitionCost").innerHTML = volitionCost;
            document.getElementById("volitionTotal").innerHTML = totalVolition;
        }else if(typeOfTrait == "Finesse"){
            finesseInput--;
            finesseCost = traitCost;
            totalFinesse = newValue
            document.getElementById("finesseCost").innerHTML = finesseCost;
            document.getElementById("finesseTotal").innerHTML = totalFinesse;
        }else if(typeOfTrait == "Cognition"){
            cognitionInput--;
            cognitionCost = traitCost;
            totalCognition = newValue
            document.getElementById("cognitionCost").innerHTML = cognitionCost;
            document.getElementById("cognitionTotal").innerHTML = totalCognition;
        }else{
            console.log("ERROR AT INCREASEMENT");
        }

        document.getElementById("traitCostTotal").innerHTML = traitTotal();

    }
    
    console.log(newValue);
    startingExperience();

}

// - - -    

function traitTotal(){
    totalTraitCost = valorCost + volitionCost + finesseCost + cognitionCost;
    return totalTraitCost;
}

// - - - 

// - - - CRAFTS

function CraftConstructor(craftName,craftType,learningCost,craftValue,craftCost,baseCraft){ // Constructor for the craft.
    this.craftName = craftName;
    this.craftType = craftType;
    this.learningCost = learningCost;
    this.craftValue = craftValue;
    this.craftCost = craftCost;
    this.baseCraft = baseCraft;
}

    // Combat Crafts

var berserker = new CraftConstructor("berserker","combat",10,0,0,0); var smallWeapons = new CraftConstructor("smallWeapons","combat",10,0,0,0);
var mediumWeapons = new CraftConstructor("mediumWeapons","combat",10,0,0,0); var largeWeapons = new CraftConstructor("largeWeapons","combat",10,0,0,0);
var maneuverability = new CraftConstructor("maneuverability","combat",10,0,0,0); var martialRanged = new CraftConstructor("martialRanged","combat",10,0,0,0);
var simpleRanged = new CraftConstructor("simpleRanged","combat",10,0,0,0); var siegeRanged = new CraftConstructor("siegeRanged","combat",10,0,0,0);
var mountedArchery = new CraftConstructor("mountedArchery","combat",10,0,0,0); var combatTactics  = new CraftConstructor("combatTactics","combat",10,0,0,0);
var defense = new CraftConstructor("defense","combat",10,0,0,1);
    
        // Common Crafts
    
var animalHandling = new CraftConstructor ("animalHandling","common",20,0,0,0); var athletics = new CraftConstructor("athletics","common",20,0,0,0);
var husbandry = new CraftConstructor("husbandry","common",20,0,0,0); var laborer = new CraftConstructor("laborer","common",20,0,0,0);
var riding = new CraftConstructor("riding","common",20,0,0,0); var survivalist = new CraftConstructor("survivalist","common",20,0,0,0);
var seamanship = new CraftConstructor("seamanship","common",20,0,0,0); var thievery = new CraftConstructor("thievery","common",20,0,0,0);
    
        // Skilled Crafts
    
var art = new CraftConstructor("art","skilled",30,0,0,0); var botany = new CraftConstructor("botany","skilled",30,0,0,0,0);
var craftsman = new CraftConstructor("craftsman","skilled",30,0,0,0); var forging = new CraftConstructor("forging","skilled",30,0,0,0);
var lorecraft = new CraftConstructor("lorecraft",30,0,0,0,0); var mercantilism = new CraftConstructor("mercantilism","skilled",30,0,0,0);
var performance = new CraftConstructor("performance","skilled",30,0,0,0); var tinkering = new CraftConstructor("tinkering","skilled",30,0,0,0);
var underworld = new CraftConstructor("underworld","skilled",30,0,0,0);
    
        // Academic Crafts

var alchemy = new CraftConstructor("alchemy","academic",30,0,0,0); var culture = new CraftConstructor("culture","academic",30,0,0,0);
var language = new CraftConstructor("language","academic",30,0,0,0); var linguistics = new CraftConstructor("linguistics","academic",30,0,0,0);
var litigation = new CraftConstructor("litigation","academic",30,0,0,0); var savant = new CraftConstructor("savant","academic",30,0,0,0);
    
        // Magic Crafts
    
var druidcraft = new CraftConstructor("druidcraft","magic",30,0,0,0);

// - - -

racialCraft("reset"); // Calls it first time

function racialCraft(raceName){ // Function to acquire the racial crafts dependant on the race.

    if(raceName == "reset"){                                                       // Set everything to default.

        document.getElementById("alfarRacialCraftTab").style.visibility = "hidden";
        document.getElementById("humanRacialCraftTab").style.visibility = "hidden";
        document.getElementById("mountainDweorgRacialCraftTab").style.visibility = "hidden";
        document.getElementById("stoorsLeprauchanusRacialCraftTab").style.visibility = "hidden";
        document.getElementById("stoorsShirelingRacialCraftTab").style.visibility = "hidden";;
        document.getElementById("svartAlfarRacialCraftTab").style.visibility = "hidden";
        document.getElementById("ungzeferRacialCraftTab").style.visibility = "hidden";
        document.getElementById("yrchRacialCraftTab").style.visibility = "hidden";

        berserker.craftValue = 0;
        berserker.baseCraft = 0;
        berserker.craftCost = 0;
        document.getElementById("berserkerTab").innerHTML = berserker.craftValue;
        document.getElementById("berserkerCost").innerHTML = berserker.craftCost;
        smallWeapons.craftValue = 0;
        smallWeapons.baseCraft = 0;
        smallWeapons.craftCost = 0;
        document.getElementById("smallWeaponsTab").innerHTML = smallWeapons.craftValue;
        document.getElementById("smallWeaponsCost").innerHTML = smallWeapons.craftCost;
        mediumWeapons.craftValue = 0;
        mediumWeapons.baseCraft = 0;
        mediumWeapons.craftCost = 0;
        document.getElementById("mediumWeaponsTab").innerHTML = mediumWeapons.craftValue;
        document.getElementById("mediumWeaponsCost").innerHTML = mediumWeapons.craftCost;
        largeWeapons.craftValue = 0;
        largeWeapons.baseCraft = 0;
        largeWeapons.craftCost = 0;
        document.getElementById("largeWeaponsTab").innerHTML = largeWeapons.craftValue;
        document.getElementById("largeWeaponsCost").innerHTML = largeWeapons.craftCost;
        maneuverability.craftValue = 0;
        maneuverability.baseCraft = 0;
        maneuverability.craftCost = 0;
        document.getElementById("maneuverabilityTab").innerHTML = maneuverability.craftValue;
        document.getElementById("maneuverabilityCost").innerHTML = maneuverability.craftCost;
        martialRanged.craftValue = 0;
        martialRanged.baseCraft = 0;
        martialRanged.craftCost = 0;
        document.getElementById("martialRangedTab").innerHTML = martialRanged.craftValue;
        document.getElementById("martialRangedCost").innerHTML = martialRanged.craftCost;
        simpleRanged.craftValue = 0;
        simpleRanged.baseCraft = 0;
        simpleRanged.craftCost = 0;
        document.getElementById("simpleRangedTab").innerHTML = simpleRanged.craftValue;
        document.getElementById("simpleRangedCost").innerHTML = simpleRanged.craftCost;
        siegeRanged.craftValue = 0;
        siegeRanged.baseCraft = 0;
        siegeRanged.craftCost = 0;
        document.getElementById("siegeRangedTab").innerHTML = siegeRanged.craftValue;
        document.getElementById("siegeRangedCost").innerHTML = siegeRanged.craftCost;
        mountedArchery.craftValue = 0;
        mountedArchery.baseCraft = 0;
        mountedArchery.craftCost = 0;
        document.getElementById("mountedArcheryTab").innerHTML = mountedArchery.craftValue;
        document.getElementById("mountedArcheryCost").innerHTML = mountedArchery.craftCost;
        combatTactics.craftValue = 0;
        combatTactics.baseCraft = 0;
        combatTactics.craftCost = 0;
        document.getElementById("combatTacticsTab").innerHTML = combatTactics.craftValue;
        document.getElementById("combatTacticsCost").innerHTML = combatTactics.craftCost;
        defense.craftValue = 0;
        defense.baseCraft = 0;
        defense.craftCost = 0;
        document.getElementById("defenseTab").innerHTML = defense.craftValue;
        document.getElementById("defenseCost").innerHTML = defense.craftCost;
        animalHandling.craftValue = 0;
        animalHandling.baseCraft = 0;
        animalHandling.craftCost = 0;
        document.getElementById("animalHandlingTab").innerHTML = animalHandling.craftValue;
        document.getElementById("animalHandlingCost").innerHTML = animalHandling.craftCost;
        athletics.craftValue = 0;
        athletics.baseCraft = 0;
        athletics.craftCost = 0;
        document.getElementById("athleticsTab").innerHTML = athletics.craftValue;
        document.getElementById("athleticsCost").innerHTML = athletics.craftCost;
        husbandry.craftValue = 0;
        husbandry.baseCraft = 0;
        husbandry.craftCost = 0;
        document.getElementById("husbandryTab").innerHTML = husbandry.craftValue;
        document.getElementById("husbandryCost").innerHTML = husbandry.craftCost;
        laborer.craftValue = 0;
        laborer.baseCraft = 0;
        laborer.craftCost = 0;
        document.getElementById("laborerTab").innerHTML = laborer.craftValue;
        document.getElementById("laborerCost").innerHTML = laborer.craftCost;
        riding.craftValue = 0;
        riding.baseCraft = 0;
        riding.craftCost = 0;
        document.getElementById("ridingTab").innerHTML = riding.craftValue;
        document.getElementById("ridingCost").innerHTML = riding.craftCost;
        survivalist.craftValue = 0;
        survivalist.baseCraft = 0;
        survivalist.craftCost = 0;
        document.getElementById("survivalistTab").innerHTML = survivalist.craftValue;
        document.getElementById("survivalistCost").innerHTML = survivalist.craftCost;
        seamanship.craftValue = 0;
        seamanship.baseCraft = 0;
        seamanship.craftCost = 0;
        document.getElementById("seamanshipTab").innerHTML = seamanship.craftValue;
        document.getElementById("seamanshipCost").innerHTML = seamanship.craftCost;
        thievery.craftValue = 0;
        thievery.baseCraft = 0;
        thievery.craftCost = 0;
        document.getElementById("thieveryTab").innerHTML = thievery.craftValue;
        document.getElementById("thieveryCost").innerHTML = thievery.craftCost;
        art.craftValue = 0;
        art.baseCraft = 0;
        art.craftCost = 0;
        document.getElementById("artTab").innerHTML = art.craftValue;
        document.getElementById("artCost").innerHTML = art.craftCost;
        botany.craftValue = 0;
        botany.baseCraft = 0;
        botany.craftCost = 0;
        document.getElementById("botanyTab").innerHTML = botany.craftValue;
        document.getElementById("botanyCost").innerHTML = botany.craftCost;
        craftsman.craftValue = 0;
        craftsman.baseCraft = 0;
        craftsman.craftCost = 0;
        document.getElementById("craftsmanTab").innerHTML = craftsman.craftValue;
        document.getElementById("craftsmanCost").innerHTML = craftsman.craftCost;
        forging.craftValue = 0;
        forging.baseCraft = 0;
        forging.craftCost = 0;
        document.getElementById("forgingTab").innerHTML = forging.craftValue;
        document.getElementById("forgingCost").innerHTML = forging.craftCost;
        lorecraft.craftValue = 0;
        lorecraft.baseCraft = 0;
        lorecraft.craftCost = 0;
        document.getElementById("lorecraftTab").innerHTML = lorecraft.craftValue;
        document.getElementById("lorecraftCost").innerHTML = lorecraft.craftCost;
        mercantilism.craftValue = 0;
        mercantilism.baseCraft = 0;
        mercantilism.craftCost = 0;
        document.getElementById("mercantilismTab").innerHTML = mercantilism.craftValue;
        document.getElementById("mercantilismCost").innerHTML = mercantilism.craftCost;
        performance.craftValue = 0;
        performance.baseCraft = 0;
        performance.craftCost = 0;
        document.getElementById("performanceTab").innerHTML = performance.craftValue;
        document.getElementById("performanceCost").innerHTML = performance.craftCost;
        tinkering.craftValue = 0;
        tinkering.baseCraft = 0;
        tinkering.craftCost = 0;
        document.getElementById("tinkeringTab").innerHTML = tinkering.craftValue;
        document.getElementById("tinkeringCost").innerHTML = tinkering.craftCost;
        underworld.craftValue = 0;
        underworld.baseCraft = 0;
        underworld.craftCost = 0;
        document.getElementById("underworldTab").innerHTML = underworld.craftValue;
        document.getElementById("underworldCost").innerHTML = underworld.craftCost;
        alchemy.craftValue = 0;
        alchemy.baseCraft = 0;
        alchemy.craftCost = 0;
        document.getElementById("alchemyTab").innerHTML = alchemy.craftValue;
        document.getElementById("alchemyCost").innerHTML = alchemy.craftCost;
        culture.craftValue = 0;
        culture.baseCraft = 0;
        culture.craftCost = 0;
        document.getElementById("cultureTab").innerHTML = culture.craftValue;
        document.getElementById("cultureCost").innerHTML = culture.craftCost;
        language.craftValue = 0;
        language.baseCraft = 0;
        language.craftCost = 0;
        document.getElementById("languageTab").innerHTML = language.craftValue;
        document.getElementById("languageCost").innerHTML = language.craftCost;
        linguistics.craftValue = 0;
        linguistics.baseCraft = 0;
        linguistics.craftCost = 0;
        document.getElementById("linguisticsTab").innerHTML = linguistics.craftValue;
        document.getElementById("linguisticsCost").innerHTML = linguistics.craftCost;
        litigation.craftValue = 0;
        litigation.baseCraft = 0;
        litigation.craftCost = 0;
        document.getElementById("litigationTab").innerHTML = litigation.craftValue;
        document.getElementById("litigationCost").innerHTML = litigation.craftCost;
        savant.craftValue = 0;
        savant.baseCraft = 0;
        savant.craftCost = 0;
        document.getElementById("savantTab").innerHTML = savant.craftValue;
        document.getElementById("savantCost").innerHTML = savant.craftCost;
        druidcraft.craftValue = 0;
        druidcraft.baseCraft = 0;
        druidcraft.craftCost = 0;
        document.getElementById("druidcraftTab").innerHTML = druidcraft.craftValue;
        document.getElementById("druidcraftCost").innerHTML = druidcraft.craftCost;

    }else if(raceName == "alfar"){

        racialCraft("reset");

        document.getElementById("humanRacialCraftTab").style.visibility = "hidden";
        document.getElementById("mountainDweorgRacialCraftTab").style.visibility = "hidden";
        document.getElementById("stoorsLeprauchanusRacialCraftTab").style.visibility = "hidden";
        document.getElementById("stoorsShirelingRacialCraftTab").style.visibility = "hidden";;
        document.getElementById("svartAlfarRacialCraftTab").style.visibility = "hidden";
        document.getElementById("ungzeferRacialCraftTab").style.visibility = "hidden";
        document.getElementById("yrchRacialCraftTab").style.visibility = "hidden";

        document.getElementById("alfarRacialCraftTab").style.visibility = "visible";

        chosenRacialCraft = document.getElementById("alfarRacialCraft").value;

        if(chosenRacialCraft == "survivalist"){
            survivalist.craftValue = 30;
            survivalist.baseCraft = 30;
            survivalist.craftCost = 0;
            console.log(survivalist.craftValue);
            console.log(survivalist.baseCraft);
            console.log(survivalist.craftCost);
            document.getElementById("survivalistTab").innerHTML = survivalist.craftValue;
            document.getElementById("survivalistCost").innerHTML = survivalist.craftCost;
        }else if(chosenRacialCraft == "martialRanged"){
            martialRanged.craftValue = 30;
            martialRanged.baseCraft = 30;
            martialRanged.craftCost = 0;
            document.getElementById("martialRangedTab").innerHTML = martialRanged.craftValue;
            document.getElementById("martialRangedCost").innerHTML = martialRanged.craftCost;
        }

        // Survivalist at rank 30 | Martial ranged rank 30

    }else if(raceName == "human"){

        racialCraft("reset");

        document.getElementById("alfarRacialCraftTab").style.visibility = "hidden";
        document.getElementById("mountainDweorgRacialCraftTab").style.visibility = "hidden";
        document.getElementById("stoorsLeprauchanusRacialCraftTab").style.visibility = "hidden";
        document.getElementById("stoorsShirelingRacialCraftTab").style.visibility = "hidden";;
        document.getElementById("svartAlfarRacialCraftTab").style.visibility = "hidden";
        document.getElementById("ungzeferRacialCraftTab").style.visibility = "hidden";
        document.getElementById("yrchRacialCraftTab").style.visibility = "hidden";

        document.getElementById("humanRacialCraftTab").style.visibility = "visible";

        chosenRacialCraft = document.getElementById("humanRacialCraft").value;

        if(chosenRacialCraft == "berserker"){
            berserker.craftValue = 30;
            berserker.baseCraft = 30;
            berserker.craftCost = 0;
            document.getElementById("berserkerTab").innerHTML = berserker.craftValue;
            document.getElementById("berserkerCost").innerHTML = berserker.craftCost;
        }else if(chosenRacialCraft == "smallWeapons"){
            smallWeapons.craftValue = 30;
            smallWeapons.baseCraft = 30;
            smallWeapons.craftCost = 0;
            document.getElementById("smallWeaponsTab").innerHTML = smallWeapons.craftValue;
            document.getElementById("smallWeaponsCost").innerHTML = smallWeapons.craftCost;
        }else if(chosenRacialCraft == "mediumWeapons"){
            mediumWeapons.craftValue = 30;
            mediumWeapons.baseCraft = 30;
            mediumWeapons.craftCost = 0;
            document.getElementById("mediumWeaponsTab").innerHTML = mediumWeapons.craftValue;
            document.getElementById("mediumWeaponsCost").innerHTML = mediumWeapons.craftCost;
        }else if(chosenRacialCraft == "largeWeapons"){
            largeWeapons.craftValue = 30;
            largeWeapons.baseCraft = 30;
            largeWeapons.craftCost = 0;
            document.getElementById("largeWeaponsTab").innerHTML = largeWeapons.craftValue;
            document.getElementById("largeWeaponsCost").innerHTML = largeWeapons.craftCost;
        }else if(chosenRacialCraft == "maneuverability"){
            maneuverability.craftValue = 30;
            maneuverability.baseCraft = 30;
            maneuverability.craftCost = 0;
            document.getElementById("maneuverabilityTab").innerHTML = maneuverability.craftValue;
            document.getElementById("maneuverabilityCost").innerHTML = maneuverability.craftCost;
        }else if(chosenRacialCraft == "martialRanged"){
            martialRanged.craftValue = 30;
            martialRanged.baseCraft = 30;
            martialRanged.craftCost = 0;
            document.getElementById("martialRangedTab").innerHTML = martialRanged.craftValue;
            document.getElementById("martialRangedCost").innerHTML = martialRanged.craftCost;
        }else if(chosenRacialCraft == "simpleRanged"){
            simpleRanged.craftValue = 30;
            simpleRanged.baseCraft = 30;
            simpleRanged.craftCost = 0;
            document.getElementById("simpleRangedTab").innerHTML = simpleRanged.craftValue;
            document.getElementById("simpleRangedCost").innerHTML = simpleRanged.craftCost;
        }else if(chosenRacialCraft == "siegeRanged"){
            siegeRanged.craftValue = 30;
            siegeRanged.baseCraft = 30;
            siegeRanged.craftCost = 0;
            document.getElementById("siegeRangedTab").innerHTML = siegeRanged.craftValue;
            document.getElementById("siegeRangedCost").innerHTML = siegeRanged.craftCost;
        }else if(chosenRacialCraft == "mountedArchery"){
            mountedArchery.craftValue = 30;
            mountedArchery.baseCraft = 30;
            mountedArchery.craftCost = 0;
            document.getElementById("mountedArcheryTab").innerHTML = mountedArchery.craftValue;
            document.getElementById("mountedArcheryCost").innerHTML = mountedArchery.craftCost;
        }else if(chosenRacialCraft == "combatTactics"){
            combatTactics.craftValue = 30;
            combatTactics.baseCraft = 30;
            combatTactics.craftCost = 0;
            document.getElementById("combatTacticsTab").innerHTML = combatTactics.craftValue;
            document.getElementById("combatTacticsCost").innerHTML = combatTactics.craftCost;
        }else if(chosenRacialCraft == "defense"){
            defense.craftValue = 30;
            defense.baseCraft = 30;
            defense.craftCost = 0;
            document.getElementById("defenseTab").innerHTML = defense.craftValue;
            document.getElementById("defenseCost").innerHTML = defense.craftCost;
        }else if(chosenRacialCraft == "animalHandling"){
            animalHandling.craftValue = 30;
            animalHandling.baseCraft = 30;
            animalHandling.craftCost = 0;
            document.getElementById("animalHandlingTab").innerHTML = animalHandling.craftValue;
            document.getElementById("animalHandlingCost").innerHTML = animalHandling.craftCost;
        }else if(chosenRacialCraft == "athletics"){
            athletics.craftValue = 30;
            athletics.baseCraft = 30;
            athletics.craftCost = 0;
            document.getElementById("athleticsTab").innerHTML = athletics.craftValue;
            document.getElementById("athleticsCost").innerHTML = athletics.craftCost;
        }else if(chosenRacialCraft == "husbandry"){
            husbandry.craftValue = 30;
            husbandry.baseCraft = 30;
            husbandry.craftCost = 0;
            document.getElementById("husbandryTab").innerHTML = husbandry.craftValue;
            document.getElementById("husbandryCost").innerHTML = husbandry.craftCost;
        }else if(chosenRacialCraft == "laborer"){
            laborer.craftValue = 30;
            laborer.baseCraft = 30;
            laborer.craftCost = 0;
            document.getElementById("laborerTab").innerHTML = laborer.craftValue;
            document.getElementById("laborerCost").innerHTML = laborer.craftCost;
        }else if(chosenRacialCraft == "riding"){
            riding.craftValue = 30;
            riding.baseCraft = 30;
            riding.craftCost = 0;
            document.getElementById("ridingTab").innerHTML = riding.craftValue;
            document.getElementById("ridingCost").innerHTML = riding.craftCost;
        }else if(chosenRacialCraft == "survivalist"){
            survivalist.craftValue = 30;
            survivalist.baseCraft = 30;
            survivalist.craftCost = 0;
            document.getElementById("survivalistTab").innerHTML = survivalist.craftValue;
            document.getElementById("survivalistCost").innerHTML = survivalist.craftCost;
        }else if(chosenRacialCraft == "seamanship"){
            seamanship.craftValue = 30;
            seamanship.baseCraft = 30;
            seamanship.craftCost = 0;
            document.getElementById("seamanshipTab").innerHTML = seamanship.craftValue;
            document.getElementById("seamanshipCost").innerHTML = seamanship.craftCost;
        }else if(chosenRacialCraft == "thievery"){
            thievery.craftValue = 30;
            thievery.baseCraft = 30;
            thievery.craftCost = 0;
            document.getElementById("thieveryTab").innerHTML = thievery.craftValue;
            document.getElementById("thieveryCost").innerHTML = thievery.craftCost;
        }else if(chosenRacialCraft == "art"){
            art.craftValue = 25;
            art.baseCraft = 25;
            art.craftCost = 0;
            document.getElementById("artTab").innerHTML = art.craftValue;
            document.getElementById("artCost").innerHTML = art.craftCost;
        }else if(chosenRacialCraft == "botany"){
            botany.craftValue = 25;
            botany.baseCraft = 25;
            botany.craftCost = 0;
            document.getElementById("botanyTab").innerHTML = botany.craftValue;
            document.getElementById("botanyCost").innerHTML = botany.craftCost;
        }else if(chosenRacialCraft == "craftsman"){
            craftsman.craftValue = 25;
            craftsman.baseCraft = 25;
            craftsman.craftCost = 0;
            document.getElementById("craftsmanTab").innerHTML = craftsman.craftValue;
            document.getElementById("craftsmanCost").innerHTML = craftsman.craftCost;
        }else if(chosenRacialCraft == "forging"){
            forging.craftValue = 25;
            forging.baseCraft = 25;
            forging.craftCost = 0;
            document.getElementById("forgingTab").innerHTML = forging.craftValue;
            document.getElementById("forgingCost").innerHTML = forging.craftCost;
        }else if(chosenRacialCraft == "lorecraft"){
            lorecraft.craftValue = 25;
            lorecraft.baseCraft = 25;
            lorecraft.craftCost = 0;
            document.getElementById("lorecraftTab").innerHTML = lorecraft.craftValue;
            document.getElementById("lorecraftCost").innerHTML = lorecraft.craftCost;
        }else if(chosenRacialCraft == "mercantilism"){
            mercantilism.craftValue = 25;
            mercantilism.baseCraft = 25;
            mercantilism.craftCost = 0;
            document.getElementById("mercantilismTab").innerHTML = mercantilism.craftValue;
            document.getElementById("mercantilismCost").innerHTML = mercantilism.craftCost;
        }else if(chosenRacialCraft == "performance"){
            performance.craftValue = 25;
            performance.baseCraft = 25;
            performance.craftCost = 0;
            document.getElementById("performanceTab").innerHTML = performance.craftValue;
            document.getElementById("performanceCost").innerHTML = performance.craftCost;
        }else if(chosenRacialCraft == "tinkering"){
            tinkering.craftValue = 25;
            tinkering.baseCraft = 25;
            tinkering.craftCost = 0;
            document.getElementById("tinkeringTab").innerHTML = tinkering.craftValue;
            document.getElementById("tinkeringCost").innerHTML = tinkering.craftCost;
        }else if(chosenRacialCraft == "underworld"){
            underworld.craftValue = 25;
            underworld.baseCraft = 25;
            underworld.craftCost = 0;
            document.getElementById("underworldTab").innerHTML = underworld.craftValue;
            document.getElementById("underworldCost").innerHTML = underworld.craftCost;
        }else if(chosenRacialCraft == "alchemy"){
            alchemy.craftValue = 20;
            alchemy.baseCraft = 20;
            alchemy.craftCost = 0;
            document.getElementById("alchemyTab").innerHTML = alchemy.craftValue;
            document.getElementById("alchemyCost").innerHTML = alchemy.craftCost;
        }else if(chosenRacialCraft == "culture"){
            culture.craftValue = 20;
            culture.baseCraft = 20;
            culture.craftCost = 0;
            document.getElementById("cultureTab").innerHTML = culture.craftValue;
            document.getElementById("cultureCost").innerHTML = culture.craftCost;
        }else if(chosenRacialCraft == "language"){
            language.craftValue = 20;
            language.baseCraft = 20;
            language.craftCost = 0;
            document.getElementById("languageTab").innerHTML = language.craftValue;
            document.getElementById("languageCost").innerHTML = language.craftCost;
        }else if(chosenRacialCraft == "linguistics"){
            linguistics.craftValue = 20;
            linguistics.baseCraft = 20;
            linguistics.craftCost = 0;
            document.getElementById("linguisticsTab").innerHTML = linguistics.craftValue;
            document.getElementById("linguisticsCost").innerHTML = linguistics.craftCost;
        }else if(chosenRacialCraft == "litigation"){
            litigation.craftValue = 20;
            litigation.baseCraft = 20;
            litigation.craftCost = 0;
            document.getElementById("litigationTab").innerHTML = litigation.craftValue;
            document.getElementById("litigationCost").innerHTML = litigation.craftCost;
        }else if(chosenRacialCraft == "savant"){
            savant.craftValue = 20;
            savant.baseCraft = 20;
            savant.craftCost = 0;
            document.getElementById("savantTab").innerHTML = savant.craftValue;
            document.getElementById("savantCost").innerHTML = savant.craftCost;
        }else if(chosenRacialCraft == "druidcraft"){
            druidcraft.craftValue = 20;
            druidcraft.baseCraft = 20;
            druidcraft.craftCost = 0;
            document.getElementById("druidcraftTab").innerHTML = druidcraft.craftValue;
            document.getElementById("druidcraftCost").innerHTML = druidcraft.craftCost;
        }

        // Combat or Common craft at rank 30 | Skilled craft at rank 25 | Magic or Academic craft at rank 20

    }else if(raceName == "mountainDweorg"){

        racialCraft("reset");

        document.getElementById("alfarRacialCraftTab").style.visibility = "hidden";
        document.getElementById("humanRacialCraftTab").style.visibility = "hidden";
        document.getElementById("stoorsLeprauchanusRacialCraftTab").style.visibility = "hidden";
        document.getElementById("stoorsShirelingRacialCraftTab").style.visibility = "hidden";;
        document.getElementById("svartAlfarRacialCraftTab").style.visibility = "hidden";
        document.getElementById("ungzeferRacialCraftTab").style.visibility = "hidden";
        document.getElementById("yrchRacialCraftTab").style.visibility = "hidden";

        document.getElementById("mountainDweorgRacialCraftTab").style.visibility = "visible";

        chosenRacialCraft = document.getElementById("mountainDweorgRacialCraft").value;
        
        if(chosenRacialCraft == "tinkering"){
            tinkering.craftValue = 25;
            tinkering.baseCraft = 25;
            tinkering.craftCost = 0;
            document.getElementById("tinkeringTab").innerHTML = tinkering.craftValue;
            document.getElementById("tinkeringCost").innerHTML = tinkering.craftCost;
        }else if(chosenRacialCraft == "simpleRanged"){
            simpleRanged.craftValue = 30;
            simpleRanged.baseCraft = 30;
            simpleRanged.craftCost = 0;
            document.getElementById("simpleRangedTab").innerHTML = simpleRanged.craftValue;
            document.getElementById("simpleRangedCost").innerHTML = simpleRanged.craftCost;
        }
        
        // Tinkering at rank 25 | Simple ranged at rank 30

    }else if(raceName == "stoorsLeprauchanus"){

        racialCraft("reset");

        document.getElementById("alfarRacialCraftTab").style.visibility = "hidden";
        document.getElementById("humanRacialCraftTab").style.visibility = "hidden";
        document.getElementById("mountainDweorgRacialCraftTab").style.visibility = "hidden";
        document.getElementById("stoorsShirelingRacialCraftTab").style.visibility = "hidden";;
        document.getElementById("svartAlfarRacialCraftTab").style.visibility = "hidden";
        document.getElementById("ungzeferRacialCraftTab").style.visibility = "hidden";
        document.getElementById("yrchRacialCraftTab").style.visibility = "hidden";

        document.getElementById("stoorsLeprauchanusRacialCraftTab").style.visibility = "visible";

        chosenRacialCraft = document.getElementById("stoorsLeprauchanusRacialCraft").value;

        if(chosenRacialCraft == "lorecraft"){
            lorecraft.craftValue = 25;
            lorecraft.baseCraft = 25;
            lorecraft.craftCost = 0;
            document.getElementById("lorecraftTab").innerHTML = lorecraft.craftValue;
            document.getElementById("lorecraftCost").innerHTML = lorecraft.craftCost;
        }else if(chosenRacialCraft == "botany"){
            botany.craftValue = 25;
            botany.baseCraft = 25;
            botany.craftCost = 0;
            document.getElementById("botanyTab").innerHTML = botany.craftValue;
            document.getElementById("botanyCost").innerHTML = botany.craftCost;
        }else if(chosenRacialCraft == "alchemy"){
            alchemy.craftValue = 20;
            alchemy.baseCraft = 20;
            alchemy.craftCost = 0;
            document.getElementById("alchemyTab").innerHTML = alchemy.craftValue;
            document.getElementById("alchemyCost").innerHTML = alchemy.craftCost;
        }

        // Lore Craft at rank 25 | Botany at rank 25 | Alchemy at rank 20

    }else if(raceName == "stoorsShireling"){

        racialCraft("reset");

        document.getElementById("alfarRacialCraftTab").style.visibility = "hidden";
        document.getElementById("humanRacialCraftTab").style.visibility = "hidden";
        document.getElementById("mountainDweorgRacialCraftTab").style.visibility = "hidden";
        document.getElementById("stoorsLeprauchanusRacialCraftTab").style.visibility = "hidden";
        document.getElementById("svartAlfarRacialCraftTab").style.visibility = "hidden";
        document.getElementById("ungzeferRacialCraftTab").style.visibility = "hidden";
        document.getElementById("yrchRacialCraftTab").style.visibility = "hidden";

        document.getElementById("stoorsShirelingRacialCraftTab").style.visibility = "visible";

        chosenRacialCraft = document.getElementById("stoorsShirelingRacialCraft").value;

        if(chosenRacialCraft == "lorecraft"){
            lorecraft.craftValue = 25;
            lorecraft.baseCraft = 25;
            lorecraft.craftCost = 0;
            document.getElementById("lorecraftTab").innerHTML = lorecraft.craftValue;
            document.getElementById("lorecraftCost").innerHTML = lorecraft.craftCost;
        }else if(chosenRacialCraft == "botany"){
            botany.craftValue = 25;
            botany.baseCraft = 25;
            botany.craftCost = 0;
            document.getElementById("botanyTab").innerHTML = botany.craftValue;
            document.getElementById("botanyCost").innerHTML = botany.craftCost;
        }else if(chosenRacialCraft == "performance"){
            performance.craftValue = 25;
            performance.baseCraft = 25;
            performance.craftCost = 0;
            document.getElementById("performanceTab").innerHTML = performance.craftValue;
            document.getElementById("performanceCost").innerHTML = performance.craftCost;
        }

        // Lore Craft at rank 25 | Botany at rank 25 | Performance at rank 25

    }else if(raceName == "svartAlfar"){

        racialCraft("reset");

        document.getElementById("alfarRacialCraftTab").style.visibility = "hidden";
        document.getElementById("humanRacialCraftTab").style.visibility = "hidden";
        document.getElementById("mountainDweorgRacialCraftTab").style.visibility = "hidden";
        document.getElementById("stoorsLeprauchanusRacialCraftTab").style.visibility = "hidden";
        document.getElementById("stoorsShirelingRacialCraftTab").style.visibility = "hidden";;
        document.getElementById("ungzeferRacialCraftTab").style.visibility = "hidden";
        document.getElementById("yrchRacialCraftTab").style.visibility = "hidden";

        document.getElementById("svartAlfarRacialCraftTab").style.visibility = "visible";

        chosenRacialCraft = document.getElementById("svartAlfarRacialCraft").value;

        if(chosenRacialCraft == "druidcraft"){
            druidcraft.craftValue = 20;
            druidcraft.baseCraft = 20;
            druidcraft.craftCost = 0;
            document.getElementById("druidcraftTab").innerHTML = druidcraft.craftValue;
            document.getElementById("druidcraftCost").innerHTML = druidcraft.craftCost;
        }else if(chosenRacialCraft == "survivalist"){
            survivalist.craftValue = 30;
            survivalist.baseCraft = 30;
            survivalist.craftCost = 0;
            document.getElementById("survivalistTab").innerHTML = survivalist.craftValue;
            document.getElementById("survivalistCost").innerHTML = survivalist.craftCost;
        }else if(chosenRacialCraft == "underworld"){
            underworld.craftValue = 25;
            underworld.baseCraft = 25;
            underworld.craftCost = 0;
            document.getElementById("underworldTab").innerHTML = underworld.craftValue;
            document.getElementById("underworldCost").innerHTML = underworld.craftCost;
        }

        // Magic at rank 20 | Survivalist at rank 30 | Underworld at rank 25

    }else if(raceName == "ungzefer"){

        racialCraft("reset");

        document.getElementById("alfarRacialCraftTab").style.visibility = "hidden";
        document.getElementById("humanRacialCraftTab").style.visibility = "hidden";
        document.getElementById("mountainDweorgRacialCraftTab").style.visibility = "hidden";
        document.getElementById("stoorsLeprauchanusRacialCraftTab").style.visibility = "hidden";
        document.getElementById("stoorsShirelingRacialCraftTab").style.visibility = "hidden";;
        document.getElementById("svartAlfarRacialCraftTab").style.visibility = "hidden";
        document.getElementById("yrchRacialCraftTab").style.visibility = "hidden";

        document.getElementById("ungzeferRacialCraftTab").style.visibility = "visible";

        chosenRacialCraft = document.getElementById("ungzeferRacialCraft").value;

        if(chosenRacialCraft == "mercantilism"){
            mercantilism.craftValue = 25;
            mercantilism.baseCraft = 25;
            mercantilism.craftCost = 0;
            document.getElementById("mercantilismTab").innerHTML = mercantilism.craftValue;
            document.getElementById("mercantilismCost").innerHTML = mercantilism.craftCost;
        }else if(chosenRacialCraft == "survivalist"){
            survivalist.craftValue = 30;
            survivalist.baseCraft = 30;
            survivalist.craftCost = 0;
            document.getElementById("survivalistab").innerHTML = survivalist.craftValue;
            document.getElementById("survivalistCost").innerHTML = survivalist.craftCost;
        }

        // Mercantilism at rank 25 | Survivalist at rank 30

    }else if(raceName == "yrch"){

        racialCraft("reset");

        document.getElementById("alfarRacialCraftTab").style.visibility = "hidden";
        document.getElementById("humanRacialCraftTab").style.visibility = "hidden";
        document.getElementById("mountainDweorgRacialCraftTab").style.visibility = "hidden";
        document.getElementById("stoorsLeprauchanusRacialCraftTab").style.visibility = "hidden";
        document.getElementById("stoorsShirelingRacialCraftTab").style.visibility = "hidden";;
        document.getElementById("svartAlfarRacialCraftTab").style.visibility = "hidden";
        document.getElementById("ungzeferRacialCraftTab").style.visibility = "hidden";

        document.getElementById("yrchRacialCraftTab").style.visibility = "visible";

        chosenRacialCraft = document.getElementById("yrchRacialCraft").value;

        if(chosenRacialCraft == "berserker"){
            berserker.craftValue = 30;
            berserker.baseCraft = 30;
            berserker.craftCost = 0;
            document.getElementById("berserkerTab").innerHTML = berserker.craftValue;
            document.getElementById("berserkerCost").innerHTML = berserker.craftCost;
        }else if(chosenRacialCraft == "smallWeapons"){
            smallWeapons.craftValue = 30;
            smallWeapons.baseCraft = 30;
            smallWeapons.craftCost = 0;
            document.getElementById("smallWeaponsTab").innerHTML = smallWeapons.craftValue;
            document.getElementById("smallWeaponsCost").innerHTML = smallWeapons.craftCost;
        }else if(chosenRacialCraft == "mediumWeapons"){
            mediumWeapons.craftValue = 30;
            mediumWeapons.baseCraft = 30;
            mediumWeapons.craftCost = 0;
            document.getElementById("mediumWeaponsTab").innerHTML = mediumWeapons.craftValue;
            document.getElementById("mediumWeaponsCost").innerHTML = mediumWeapons.craftCost;
        }else if(chosenRacialCraft == "largeWeapons"){
            largeWeapons.craftValue = 30;
            largeWeapons.baseCraft = 30;
            largeWeapons.craftCost = 0;
            document.getElementById("largeWeaponsTab").innerHTML = largeWeapons.craftValue;
            document.getElementById("largeWeaponsCost").innerHTML = largeWeapons.craftCost;
        }else if(chosenRacialCraft == "maneuverability"){
            maneuverability.craftValue = 30;
            maneuverability.baseCraft = 30;
            maneuverability.craftCost = 0;
            document.getElementById("maneuverabilityTab").innerHTML = maneuverability.craftValue;
            document.getElementById("maneuverabilityCost").innerHTML = maneuverability.craftCost;
        }else if(chosenRacialCraft == "martialRanged"){
            martialRanged.craftValue = 30;
            martialRanged.baseCraft = 30;
            martialRanged.craftCost = 0;
            document.getElementById("martialRangedTab").innerHTML = martialRanged.craftValue;
            document.getElementById("martialRangedCost").innerHTML = martialRanged.craftCost;
        }else if(chosenRacialCraft == "simpleRanged"){
            simpleRanged.craftValue = 30;
            simpleRanged.baseCraft = 30;
            simpleRanged.craftCost = 0;
            document.getElementById("simpleRangedTab").innerHTML = simpleRanged.craftValue;
            document.getElementById("simpleRangedCost").innerHTML = simpleRanged.craftCost;
        }else if(chosenRacialCraft == "siegeRanged"){
            siegeRanged.craftValue = 30;
            siegeRanged.baseCraft = 30;
            siegeRanged.craftCost = 0;
            document.getElementById("siegeRangedTab").innerHTML = siegeRanged.craftValue;
            document.getElementById("siegeRangedCost").innerHTML = siegeRanged.craftCost;
        }else if(chosenRacialCraft == "mountedArchery"){
            mountedArchery.craftValue = 30;
            mountedArchery.baseCraft = 30;
            mountedArchery.craftCost = 0;
            document.getElementById("mountedArcheryTab").innerHTML = mountedArchery.craftValue;
            document.getElementById("mountedArcheryCost").innerHTML = mountedArchery.craftCost;
        }else if(chosenRacialCraft == "combatTactics"){
            combatTactics.craftValue = 30;
            combatTactics.baseCraft = 30;
            combatTactics.craftCost = 0;
            document.getElementById("combatTacticsTab").innerHTML = combatTactics.craftValue;
            document.getElementById("combatTacticsCost").innerHTML = combatTactics.craftCost;
        }else if(chosenRacialCraft == "defense"){
            defense.craftValue = 30;
            defense.baseCraft = 30;
            defense.craftCost = 0;
            document.getElementById("defenseTab").innerHTML = defense.craftValue;
            document.getElementById("defenseCost").innerHTML = defense.craftCost;
        }else if(chosenRacialCraft == "forging"){
            forging.craftValue = 25;
            forging.baseCraft = 25;
            forging.craftCost = 0;
            document.getElementById("forgingTab").innerHTML = forging.craftValue;
            document.getElementById("forgingCost").innerHTML = forging.craftCost;

        // One combat craft at rank 30 | Forging at rank 25
        
    }
    
}

}

// - - - CRAFT FUNCTIONS

var tempCraftValue = 0; var tempCraftCost = 0; var tempLearningCost = 0;

function freeUnlock(){
    var choice = document.getElementById("freeUnlockSelect").value;
    if(choice == "berserker"){
        berserker.learningCost = 0;
        berserker.craftValue = 1;
        berserker.baseCraft = 1;
        // - 
        smallWeapons.learningCost = 10;
        smallWeapons.craftValue = 0;
        smallWeapons.craftValue = 0;
    }else if(choice == "smallWeapons"){
        smallWeapons.learningCost = 0;
        smallWeapons.craftValue = 1;
        smallWeapons.craftValue = 1;
        // - 
        berserker.learningCost = 10;
        berserker.craftValue = 0;
        berserker.baseCraft = 0;
    }
}

function craftIncrease(typeOfCraft,typeOfType){ // Button to increase :: 
    var limit = false;  // bypass everything if false

    if(typeOfType == "combat"){                                                                                         // Combat Crafts
        if(typeOfCraft == "berserker" && berserker.craftValue >= 0 && berserker.craftValue < 100){
            tempCraftValue = berserker.craftValue + 1;      // The craft's value being increased.
            tempCraftCost = berserker.craftCost;            // The craft's total cost.
            tempLearningCost = berserker.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "smallWeapons" && smallWeapons.craftValue >= 0 && smallWeapons.craftValue < 100){
            tempCraftValue = smallWeapons.craftValue + 1;      // The craft's value being increased.
            tempCraftCost = smallWeapons.craftCost;            // The craft's total cost.
            tempLearningCost = smallWeapons.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "mediumWeapons" && mediumWeapons.craftValue >= 0 && mediumWeapons.craftValue < 100){
            tempCraftValue = mediumWeapons.craftValue + 1;      // The craft's value being increased.
            tempCraftCost = mediumWeapons.craftCost;            // The craft's total cost.
            tempLearningCost = mediumWeapons.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "largeWeapons" && largeWeapons.craftValue >= 0 && largeWeapons.craftValue < 100){
            tempCraftValue = largeWeapons.craftValue + 1;      // The craft's value being increased.
            tempCraftCost = largeWeapons.craftCost;            // The craft's total cost.
            tempLearningCost = largeWeapons.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "maneuverability" && maneuverability.craftValue >= 0 && maneuverability.craftValue < 100){
            tempCraftValue = maneuverability.craftValue + 1;      // The craft's value being increased.
            tempCraftCost = maneuverability.craftCost;            // The craft's total cost.
            tempLearningCost = maneuverability.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "martialRanged" && martialRanged.craftValue >= 0 && martialRanged.craftValue < 100){
            tempCraftValue = martialRanged.craftValue + 1;      // The craft's value being increased.
            tempCraftCost = martialRanged.craftCost;            // The craft's total cost.
            tempLearningCost = martialRanged.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "simpleRanged" && simpleRanged.craftValue >= 0 && simpleRanged.craftValue < 100){
            tempCraftValue = simpleRanged.craftValue + 1;      // The craft's value being increased.
            tempCraftCost = simpleRanged.craftCost;            // The craft's total cost.
            tempLearningCost = simpleRanged.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "siegeRanged" && siegeRanged.craftValue >= 0 && siegeRanged.craftValue < 100){
            tempCraftValue = siegeRanged.craftValue + 1;      // The craft's value being increased.
            tempCraftCost = siegeRanged.craftCost;            // The craft's total cost.
            tempLearningCost = siegeRanged.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "mountedArchery" && mountedArchery.craftValue >= 0 && mountedArchery.craftValue < 100){
            tempCraftValue = mountedArchery.craftValue + 1;      // The craft's value being increased.
            tempCraftCost = mountedArchery.craftCost;            // The craft's total cost.
            tempLearningCost = mountedArchery.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "combatTactics" && combatTactics.craftValue >= 0 && combatTactics.craftValue < 100){
            tempCraftValue = combatTactics.craftValue + 1;      // The craft's value being increased.
            tempCraftCost = combatTactics.craftCost;            // The craft's total cost.
            tempLearningCost = combatTactics.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "defense" && defense.craftValue >= 0 && defense.craftValue < 100){
            tempCraftValue = defense.craftValue + 1;      // The craft's value being increased.
            tempCraftCost = defense.craftCost;            // The craft's total cost.
            tempLearningCost = defense.learningCost;      // The learning cost if not paid.
            limit = true;
        }
    }else if(typeOfType == "common"){                                                                                   // Common Crafts
        if(typeOfCraft == "animalHandling" && animalHandling.craftValue >= 0 && animalHandling.craftValue < 100){
            tempCraftValue = animalHandling.craftValue + 1;      // The craft's value being increased.
            tempCraftCost = animalHandling.craftCost;            // The craft's total cost.
            tempLearningCost = animalHandling.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "athletics" && athletics.craftValue >= 0 && athletics.craftValue < 100){
                tempCraftValue = athletics.craftValue + 1;      // The craft's value being increased.
                tempCraftCost = athletics.craftCost;            // The craft's total cost.
                tempLearningCost = athletics.learningCost;      // The learning cost if not paid.
                limit = true;
        }else if(typeOfCraft == "husbandry" && husbandry.craftValue >= 0 && husbandry.craftValue < 100){
                tempCraftValue = husbandry.craftValue + 1;      // The craft's value being increased.
                tempCraftCost = husbandry.craftCost;            // The craft's total cost.
                tempLearningCost = husbandry.learningCost;      // The learning cost if not paid.
                limit = true;
        }else if(typeOfCraft == "laborer" && laborer.craftValue >= 0 && laborer.craftValue < 100){
                tempCraftValue = laborer.craftValue + 1;      // The craft's value being increased.
                tempCraftCost = laborer.craftCost;            // The craft's total cost.
                tempLearningCost = laborer.learningCost;      // The learning cost if not paid.
                limit = true;
        }else if(typeOfCraft == "riding" && riding.craftValue >= 0 && riding.craftValue < 100){
                tempCraftValue = riding.craftValue + 1;      // The craft's value being increased.
                tempCraftCost = riding.craftCost;            // The craft's total cost.
                tempLearningCost = riding.learningCost;      // The learning cost if not paid.
                limit = true;
        }else if(typeOfCraft == "survivalist" && survivalist.craftValue >= 0 && survivalist.craftValue < 100){
                tempCraftValue = survivalist.craftValue + 1;      // The craft's value being increased.
                tempCraftCost = survivalist.craftCost;            // The craft's total cost.
                tempLearningCost = survivalist.learningCost;      // The learning cost if not paid.
                limit = true;
        }else if(typeOfCraft == "seamanship" && seamanship.craftValue >= 0 && seamanship.craftValue < 100){
                tempCraftValue = seamanship.craftValue + 1;      // The craft's value being increased.
                tempCraftCost = seamanship.craftCost;            // The craft's total cost.
                tempLearningCost = seamanship.learningCost;      // The learning cost if not paid.
                limit = true;
        }else if(typeOfCraft == "thievery" && thievery.craftValue >= 0 && thievery.craftValue < 100){
                tempCraftValue = thievery.craftValue + 1;      // The craft's value being increased.
                tempCraftCost = thievery.craftCost;            // The craft's total cost.
                tempLearningCost = thievery.learningCost;      // The learning cost if not paid.
                limit = true;
        }
    }else if(typeOfType == "skilled"){                                                                                  // Skilled Crafts
        if(typeOfCraft == "art" && art.craftValue >= 0 && art.craftValue < 100){                
            tempCraftValue = art.craftValue + 1;
            tempCraftCost = art.craftCost;
            tempLearningCost = art.learningCost;
            limit = true;
        }else if(typeOfCraft == "botany" && botany.craftValue >= 0 && botany.craftValue < 100){
            tempCraftValue = botany.craftValue + 1;
            tempCraftCost = botany.craftCost;
            tempLearningCost = botany.learningCost;
            limit = true;
        }else if(typeOfCraft == "craftsman" && craftsman.craftValue >= 0 && craftsman.craftValue < 100){
            tempCraftValue = craftsman.craftValue + 1;
            tempCraftCost = craftsman.craftCost;
            tempLearningCost = craftsman.learningCost;
            limit = true;
        }else if(typeOfCraft == "forging" && forging.craftValue >= 0 && forging.craftValue < 100){
            tempCraftValue = forging.craftValue + 1;
            tempCraftCost = forging.craftCost;
            tempLearningCost = forging.learningCost;
            limit = true;
        }else if(typeOfCraft == "lorecraft" && lorecraft.craftValue >= 0 && lorecraft.craftValue < 100){
            tempCraftValue = lorecraft.craftValue + 1;
            tempCraftCost = lorecraft.craftCost;
            tempLearningCost = lorecraft.learningCost;
            limit = true;
        }else if(typeOfCraft == "mercantilism" && mercantilism.craftValue >= 0 && mercantilism.craftValue < 100){
            tempCraftValue = mercantilism.craftValue + 1;
            tempCraftCost = mercantilism.craftCost;
            tempLearningCost = mercantilism.learningCost;
            limit = true;
        }else if(typeOfCraft == "performance" && performance.craftValue >= 0 && performance.craftValue < 100){
            tempCraftValue = performance.craftValue + 1;
            tempCraftCost = performance.craftCost;
            tempLearningCost = performance.learningCost;
            limit = true;
        }else if(typeOfCraft == "tinkering" && tinkering.craftValue >= 0 && tinkering.craftValue < 100){
            tempCraftValue = tinkering.craftValue + 1;
            tempCraftCost = tinkering.craftCost;
            tempLearningCost = tinkering.learningCost;
            limit = true;
        }else if(typeOfCraft == "underworld" && underworld.craftValue >= 0 && underworld.craftValue < 100){
            tempCraftValue = underworld.craftValue + 1;
            tempCraftCost = underworld.craftCost;
            tempLearningCost = underworld.learningCost;
            limit = true;
        }
    }else if(typeOfType == "academic"){                                                                                 // Academic Crafts
        if(typeOfCraft == "alchemy" && alchemy.craftValue >= 0 && alchemy.craftValue < 100){            
            tempCraftValue = alchemy.craftValue + 1;
            tempCraftCost = alchemy.craftCost;
            tempLearningCost = alchemy.learningCost;
            limit = true;
        }else if(typeOfCraft == "culture" && culture.craftValue >= 0 && culture.craftValue < 100){            
                tempCraftValue = culture.craftValue + 1;
                tempCraftCost = culture.craftCost;
                tempLearningCost = culture.learningCost;
                limit = true;
        }else if(typeOfCraft == "language" && language.craftValue >= 0 && language.craftValue < 100){            
                tempCraftValue = language.craftValue + 1;
                tempCraftCost = language.craftCost;
                tempLearningCost = language.learningCost;
                limit = true;
        }else if(typeOfCraft == "linguistics" && linguistics.craftValue >= 0 && linguistics.craftValue < 100){            
                tempCraftValue = linguistics.craftValue + 1;
                tempCraftCost = linguistics.craftCost;
                tempLearningCost = linguistics.learningCost;
                limit = true;
        }else if(typeOfCraft == "savant" && savant.craftValue >= 0 && savant.craftValue < 100){            
                tempCraftValue = savant.craftValue + 1;
                tempCraftCost = savant.craftCost;
                tempLearningCost = savant.learningCost;
                limit = true;
        }
    }else if(typeOfType == "magic"){                                                                                    // Magic Crafts
        if(typeOfCraft == "druidcraft" && druidcraft.craftValue >= 0 && druidcraft.craftValue < 100){             
            tempCraftValue = druidcraft.craftValue + 1;
            tempCraftCost = druidcraft.craftCost;
            tempLearningCost = druidcraft.learningCost;
            limit = true;
        }
    }
    
    if(tempCraftValue == 1 && limit == true){
        tempCraftCost = tempLearningCost;                      //Being unlocked
    
    }else if(tempCraftValue > 1 && tempCraftValue <= 25 && limit == true){ //1
        tempCraftCost = tempCraftCost + 1;
        
    }else if(tempCraftValue > 25 && tempCraftValue <= 50 && limit == true){ //2
        tempCraftCost = tempCraftCost + 2;
        
    }else if(tempCraftValue > 50 && tempCraftValue <= 70 && limit == true){ //3
        tempCraftCost = tempCraftCost + 3;

    }else if(tempCraftValue > 70 && tempCraftValue <= 80 && limit == true){ //5
        tempCraftCost = tempCraftCost + 5;
        
    }else if(tempCraftValue > 80 && tempCraftValue <= 90 && limit == true){ //10
        tempCraftCost = tempCraftCost + 10;

    }else if(tempCraftValue > 90 && tempCraftValue < 100 && limit == true){ //20
        tempCraftCost = tempCraftCost + 20;

    }else if(tempCraftValue > 99 && tempCraftValue == 100 && limit == true){ //20
        tempCraftCost = tempCraftCost + 20;

    }

    if(typeOfCraft == "berserker" && limit == true){                             // Combat Crafts
         berserker.craftValue = tempCraftValue;                      // The changed craft's value being returned.
         berserker.craftCost = tempCraftCost;                        // The craft's total cost being returned.
        document.getElementById("berserkerCost").innerHTML = berserker.craftCost;
        document.getElementById("berserkerTotal").innerHTML = berserker.craftValue;
    }else if(typeOfCraft == "smallWeapons" && limit == true){
         smallWeapons.craftValue = tempCraftValue;
         smallWeapons.craftCost = tempCraftCost;
        document.getElementById("smallWeaponsCost").innerHTML =  smallWeapons.craftCost;
        document.getElementById("smallWeaponsTotal").innerHTML =  smallWeapons.craftValue;
    }else if(typeOfCraft == "mediumWeapons" && limit == true){
         mediumWeapons.craftValue = tempCraftValue;
         mediumWeapons.craftCost = tempCraftCost;
        document.getElementById("mediumWeaponsCost").innerHTML =  mediumWeapons.craftCost;
        document.getElementById("mediumWeaponsTotal").innerHTML =  mediumWeapons.craftValue;
    }else if(typeOfCraft == "largeWeapons" && limit == true){
         largeWeapons.craftValue = tempCraftValue;
         largeWeapons.craftCost = tempCraftCost;
        document.getElementById("largeWeaponsCost").innerHTML =  largeWeapons.craftCost;
        document.getElementById("largeWeaponsTotal").innerHTML =  largeWeapons.craftValue;
    }else if(typeOfCraft == "maneuverability" && limit == true){
         maneuverability.craftValue = tempCraftValue;
         maneuverability.craftCost = tempCraftCost;
        document.getElementById("maneuverabilityCost").innerHTML =  maneuverability.craftCost;
        document.getElementById("maneuverabilityTotal").innerHTML =  maneuverability.craftValue;
    }else if(typeOfCraft == "martialRanged" && limit == true){
         martialRanged.craftValue = tempCraftValue;
         martialRanged.craftCost = tempCraftCost;
        document.getElementById("martialRangedCost").innerHTML =  martialRanged.craftCost;
        document.getElementById("martialRangedTotal").innerHTML =  martialRanged.craftValue;
    }else if(typeOfCraft == "simpleRanged" && limit == true){
         simpleRanged.craftValue = tempCraftValue;
         simpleRanged.craftCost = tempCraftCost;
        document.getElementById("simpleRangedCost").innerHTML =  simpleRanged.craftCost;
        document.getElementById("simpleRangedTotal").innerHTML =  simpleRanged.craftValue;
    }else if(typeOfCraft == "siegeRanged" && limit == true){
         siegeRanged.craftValue = tempCraftValue;
         siegeRanged.craftCost = tempCraftCost;
        document.getElementById("siegeRangedCost").innerHTML =  siegeRanged.craftCost;
        document.getElementById("siegeRangedTotal").innerHTML =  siegeRanged.craftValue;
    }else if(typeOfCraft == "mountedArchery" && limit == true){
         mountedArchery.craftValue = tempCraftValue;
         mountedArchery.craftCost = tempCraftCost;
        document.getElementById("mountedArcheryCost").innerHTML =  mountedArchery.craftCost;
        document.getElementById("mountedArcheryTotal").innerHTML =  mountedArchery.craftValue;
    }else if(typeOfCraft == "combatTactics" && limit == true){
         combatTactics.craftValue = tempCraftValue;
         combatTactics.craftCost = tempCraftCost;
        document.getElementById("combatTacticsCost").innerHTML =  combatTactics.craftCost;
        document.getElementById("combatTacticsTotal").innerHTML =  combatTactics.craftValue;
    }else if(typeOfCraft == "defense" && limit == true){
         defense.craftValue = tempCraftValue;
         defense.craftCost = tempCraftCost;
        document.getElementById("defenseCost").innerHTML =  defense.craftCost;
        document.getElementById("defenseTotal").innerHTML =  defense.craftValue;
    }else if(typeOfCraft == "animalHandling" && limit == true){        // Common Crafts
        animalHandling.craftValue = tempCraftValue;
        animalHandling.craftCost = tempCraftCost;
        document.getElementById("animalHandlingCost").innerHTML = animalHandling.craftCost;
        document.getElementById("animalHandlingTotal").innerHTML = animalHandling.craftValue;
    }else if(typeOfCraft == "athletics" && limit == true){
        athletics.craftValue = tempCraftValue;
        athletics.craftCost = tempCraftCost;
        document.getElementById("athleticsCost").innerHTML = athletics.craftCost;
        document.getElementById("athleticsTotal").innerHTML = athletics.craftValue;
    }else if(typeOfCraft == "husbandry" && limit == true){
        husbandry.craftValue = tempCraftValue;
        husbandry.craftCost = tempCraftCost;
        document.getElementById("husbandryCost").innerHTML = husbandry.craftCost;
        document.getElementById("husbandryTotal").innerHTML = husbandry.craftValue;
    }else if(typeOfCraft == "laborer" && limit == true){
        laborer.craftValue = tempCraftValue;
        laborer.craftCost = tempCraftCost;
        document.getElementById("laborerCost").innerHTML = laborer.craftCost;
        document.getElementById("laborerTotal").innerHTML = laborer.craftValue;
    }else if(typeOfCraft == "riding" && limit == true){
        riding.craftValue = tempCraftValue;
        riding.craftCost = tempCraftCost;
        document.getElementById("ridingCost").innerHTML = riding.craftCost;
        document.getElementById("ridingTotal").innerHTML = riding.craftValue;
    }else if(typeOfCraft == "survivalist" && limit == true){
        survivalist.craftValue = tempCraftValue;
        survivalist.craftCost = tempCraftCost;
        document.getElementById("survivalistCost").innerHTML = survivalist.craftCost;
        document.getElementById("survivalistTotal").innerHTML = survivalist.craftValue;
    }else if(typeOfCraft == "seamanship" && limit == true){
        seamanship.craftValue = tempCraftValue;
        seamanship.craftCost = tempCraftCost;
        document.getElementById("seamanshipCost").innerHTML = seamanship.craftCost;
        document.getElementById("seamanshipTotal").innerHTML = seamanship.craftValue;
    }else if(typeOfCraft == "thievery" && limit == true){
        thievery.craftValue = tempCraftValue;
        thievery.craftCost = tempCraftCost;
        document.getElementById("thieveryCost").innerHTML = thievery.craftCost;
        document.getElementById("thieveryTotal").innerHTML = thievery.craftValue;
    }else if(typeOfCraft == "art" && limit == true){                        // Skilled Crafts
        art.craftValue = tempCraftValue;
        art.craftCost = tempCraftCost;
        document.getElementById("artCost").innerHTML = art.craftCost;
        document.getElementById("artTotal").innerHTML = art.craftValue;
    }else if(typeOfCraft == "botany" && limit == true){
        botany.craftValue = tempCraftValue;
        botany.craftCost = tempCraftCost;
        document.getElementById("botanyCost").innerHTML = botany.craftCost;
        document.getElementById("botanyTotal").innerHTML = botany.craftValue;
    }else if(typeOfCraft == "craftsman" && limit == true){
        craftsman.craftValue = tempCraftValue;
        craftsman.craftCost = tempCraftCost;
        document.getElementById("craftsmanCost").innerHTML = craftsman.craftCost;
        document.getElementById("craftsmanTotal").innerHTML = craftsman.craftValue;
    }else if(typeOfCraft == "forging" && limit == true){
        forging.craftValue = tempCraftValue;
        forging.craftCost = tempCraftCost;
        document.getElementById("forgingCost").innerHTML = forging.craftCost;
        document.getElementById("forgingTotal").innerHTML = forging.craftValue;
    }else if(typeOfCraft == "lorecraft" && limit == true){
        lorecraft.craftValue = tempCraftValue;
        lorecraft.craftCost = tempCraftCost;
        document.getElementById("lorecraftCost").innerHTML = lorecraft.craftCost;
        document.getElementById("lorecraftTotal").innerHTML = lorecraft.craftValue;
    }else if(typeOfCraft == "mercantilism" && limit == true){
        mercantilism.craftValue = tempCraftValue;
        mercantilism.craftCost = tempCraftCost;
        document.getElementById("mercantilismCost").innerHTML = mercantilism.craftCost;
        document.getElementById("mercantilismTotal").innerHTML = mercantilism.craftValue;
    }else if(typeOfCraft == "performance" && limit == true){
        performance.craftValue = tempCraftValue;
        performance.craftCost = tempCraftCost;
        document.getElementById("performanceCost").innerHTML = performance.craftCost;
        document.getElementById("performanceTotal").innerHTML = performance.craftValue;
    }else if(typeOfCraft == "tinkering" && limit == true){
        tinkering.craftValue = tempCraftValue;
        tinkering.craftCost = tempCraftCost;
        document.getElementById("tinkeringCost").innerHTML = tinkering.craftCost;
        document.getElementById("tinkeringTotal").innerHTML = tinkering.craftValue;
    }else if(typeOfCraft == "underworld" && limit == true){
        underworld.craftValue = tempCraftValue;
        underworld.craftCost = tempCraftCost;
        document.getElementById("underworldCost").innerHTML = underworld.craftCost;
        document.getElementById("underworldTotal").innerHTML = underworld.craftValue;
    }else if(typeOfCraft == "alchemy" && limit == true){                          // Academic Crafts
        alchemy.craftValue = tempCraftValue;
        alchemy.craftCost = tempCraftCost;
        document.getElementById("alchemyCost").innerHTML = alchemy.craftCost;
        document.getElementById("alchemyTotal").innerHTML = alchemy.craftValue;
    }else if(typeOfCraft == "culture" && limit == true){
        culture.craftValue = tempCraftValue;
        culture.craftCost = tempCraftCost;
        document.getElementById("cultureCost").innerHTML = culture.craftCost;
        document.getElementById("cultureTotal").innerHTML = culture.craftValue;
    }else if(typeOfCraft == "language" && limit == true){
        language.craftValue = tempCraftValue;
        language.craftCost = tempCraftCost;
        document.getElementById("languageCost").innerHTML = language.craftCost;
        document.getElementById("languageTotal").innerHTML = language.craftValue;
    }else if(typeOfCraft == "linguistics" && limit == true){
        linguistics.craftValue = tempCraftValue;
        linguistics.craftCost = tempCraftCost;
        document.getElementById("linguisticsCost").innerHTML = linguistics.craftCost;
        document.getElementById("linguisticsTotal").innerHTML = linguistics.craftValue;
    }else if(typeOfCraft == "litigation" && limit == true){
        litigation.craftValue = tempCraftValue;
        litigation.craftCost = tempCraftCost;
        document.getElementById("litigationCost").innerHTML = litigation.craftCost;
        document.getElementById("litigationTotal").innerHTML = litigation.craftValue;
    }else if(typeOfCraft == "savant" && limit == true){
        savant.craftValue = tempCraftValue;
        savant.craftCost = tempCraftCost;
        document.getElementById("savantCost").innerHTML = savant.craftCost;
        document.getElementById("savantTotal").innerHTML = savant.craftValue;
    }else if(typeOfCraft == "druidcraft" && limit == true){                         // Magic Crafts
        druidcraft.craftValue = tempCraftValue;
        druidcraft.craftCost = tempCraftCost;
        document.getElementById("druidcraftCost").innerHTML = druidcraft.craftCost;
        document.getElementById("druidcraftTotal").innerHTML = druidcraft.craftValue;
    }

    document.getElementById("craftCostTotal").innerHTML = craftTotal();
    startingExperience();

}

// - - - 

function craftDecrease(typeOfCraft,typeOfType){ // Button to decrease :: 
    var limit = false;  // bypass everything if false

    if(typeOfType == "combat"){                                                                                         // Combat Crafts
        if(typeOfCraft == "berserker" && berserker.craftValue > 0 && berserker.craftValue <= 100 && berserker.craftValue > berserker.baseCraft){
            tempCraftValue = berserker.craftValue - 1;      // The craft's value being increased.
            tempCraftCost = berserker.craftCost;            // The craft's total cost.
            tempLearningCost = berserker.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "smallWeapons" && smallWeapons.craftValue > 0 && smallWeapons.craftValue <= 100 && smallWeapons.craftValue > smallWeapons.baseCraft){
            tempCraftValue = smallWeapons.craftValue - 1;      // The craft's value being increased.
            tempCraftCost = smallWeapons.craftCost;            // The craft's total cost.
            tempLearningCost = smallWeapons.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "mediumWeapons" && mediumWeapons.craftValue > 0 && mediumWeapons.craftValue <= 100 && mediumWeapons.craftValue > mediumWeapons.baseCraft){
            tempCraftValue = mediumWeapons.craftValue - 1;      // The craft's value being increased.
            tempCraftCost = mediumWeapons.craftCost;            // The craft's total cost.
            tempLearningCost = mediumWeapons.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "largeWeapons" && largeWeapons.craftValue > 0 && largeWeapons.craftValue <= 100 && largeWeapons.craftValue > berserker.baseCraft){
            tempCraftValue = largeWeapons.craftValue - 1;      // The craft's value being increased.
            tempCraftCost = largeWeapons.craftCost;            // The craft's total cost.
            tempLearningCost = largeWeapons.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "maneuverability" && maneuverability.craftValue > 0 && maneuverability.craftValue <= 100 && maneuverability.craftValue > maneuverability.baseCraft){
            tempCraftValue = maneuverability.craftValue - 1;      // The craft's value being increased.
            tempCraftCost = maneuverability.craftCost;            // The craft's total cost.
            tempLearningCost = maneuverability.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "martialRanged" && martialRanged.craftValue > 0 && martialRanged.craftValue <= 100 && martialRanged.craftValue > martialRanged.baseCraft){
            tempCraftValue = martialRanged.craftValue - 1;      // The craft's value being increased.
            tempCraftCost = martialRanged.craftCost;            // The craft's total cost.
            tempLearningCost = martialRanged.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "simpleRanged" && simpleRanged.craftValue > 0 && simpleRanged.craftValue <= 100 && simpleRanged.craftValue > simpleRanged.baseCraft){
            tempCraftValue = simpleRanged.craftValue - 1;      // The craft's value being increased.
            tempCraftCost = simpleRanged.craftCost;            // The craft's total cost.
            tempLearningCost = simpleRanged.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "siegeRanged" && siegeRanged.craftValue > 0 && siegeRanged.craftValue <= 100 && siegeRanged.craftValue > siegeRanged.baseCraft){
            tempCraftValue = siegeRanged.craftValue - 1;      // The craft's value being increased.
            tempCraftCost = siegeRanged.craftCost;            // The craft's total cost.
            tempLearningCost = siegeRanged.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "mountedArchery" && mountedArchery.craftValue > 0 && mountedArchery.craftValue <= 100 && mountedArchery.craftValue > mountedArchery.baseCraft){
            tempCraftValue = mountedArchery.craftValue - 1;      // The craft's value being increased.
            tempCraftCost = mountedArchery.craftCost;            // The craft's total cost.
            tempLearningCost = mountedArchery.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "combatTactics" && combatTactics.craftValue > 0 && combatTactics.craftValue <= 100 && combatTactics.craftValue > combatTactics.baseCraft){
            tempCraftValue = combatTactics.craftValue - 1;      // The craft's value being increased.
            tempCraftCost = combatTactics.craftCost;            // The craft's total cost.
            tempLearningCost = combatTactics.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "defense" && defense.craftValue > 0 && defense.craftValue <= 100 && defense.craftValue > defense.baseCraft){
            tempCraftValue = defense.craftValue - 1;      // The craft's value being increased.
            tempCraftCost = defense.craftCost;            // The craft's total cost.
            tempLearningCost = defense.learningCost;      // The learning cost if not paid.
            limit = true;
        }
    }else if(typeOfType == "common"){                                                                                   // Common Crafts
        if(typeOfCraft == "animalHandling" && animalHandling.craftValue > 0 && animalHandling.craftValue <= 100 && berserker.craftValue > berserker.baseCraft){
            tempCraftValue = animalHandling.craftValue - 1;      // The craft's value being increased.
            tempCraftCost = animalHandling.craftCost;            // The craft's total cost.
            tempLearningCost = animalHandling.learningCost;      // The learning cost if not paid.
            limit = true;
        }else if(typeOfCraft == "athletics" && athletics.craftValue > 0 && athletics.craftValue <= 100 && athletics.craftValue > athletics.baseCraft){
                tempCraftValue = athletics.craftValue - 1;      // The craft's value being increased.
                tempCraftCost = athletics.craftCost;            // The craft's total cost.
                tempLearningCost = athletics.learningCost;      // The learning cost if not paid.
                limit = true;
        }else if(typeOfCraft == "husbandry" && husbandry.craftValue > 0 && husbandry.craftValue <= 100 && husbandry.craftValue > husbandry.baseCraft){
                tempCraftValue = husbandry.craftValue - 1;      // The craft's value being increased.
                tempCraftCost = husbandry.craftCost;            // The craft's total cost.
                tempLearningCost = husbandry.learningCost;      // The learning cost if not paid.
                limit = true;
        }else if(typeOfCraft == "laborer" && laborer.craftValue > 0 && laborer.craftValue <= 100 && laborer.craftValue > laborer.baseCraft){
                tempCraftValue = laborer.craftValue - 1;      // The craft's value being increased.
                tempCraftCost = laborer.craftCost;            // The craft's total cost.
                tempLearningCost = laborer.learningCost;      // The learning cost if not paid.
                limit = true;
        }else if(typeOfCraft == "riding" && riding.craftValue > 0 && riding.craftValue <= 100 && riding.craftValue > riding.baseCraft){
                tempCraftValue = riding.craftValue - 1;      // The craft's value being increased.
                tempCraftCost = riding.craftCost;            // The craft's total cost.
                tempLearningCost = riding.learningCost;      // The learning cost if not paid.
                limit = true;
        }else if(typeOfCraft == "survivalist" && survivalist.craftValue > 0 && survivalist.craftValue <= 100 && survivalist.craftValue > survivalist.baseCraft){
                tempCraftValue = survivalist.craftValue - 1;      // The craft's value being increased.
                tempCraftCost = survivalist.craftCost;            // The craft's total cost.
                tempLearningCost = survivalist.learningCost;      // The learning cost if not paid.
                limit = true;
        }else if(typeOfCraft == "seamanship" && seamanship.craftValue > 0 && seamanship.craftValue <= 100 && seamanship.craftValue > seamanship.baseCraft){
                tempCraftValue = seamanship.craftValue - 1;      // The craft's value being increased.
                tempCraftCost = seamanship.craftCost;            // The craft's total cost.
                tempLearningCost = seamanship.learningCost;      // The learning cost if not paid.
                limit = true;
        }else if(typeOfCraft == "thievery" && thievery.craftValue > 0 && thievery.craftValue <= 100 && thievery.craftValue > thievery.baseCraft){
                tempCraftValue = thievery.craftValue - 1;      // The craft's value being increased.
                tempCraftCost = thievery.craftCost;            // The craft's total cost.
                tempLearningCost = thievery.learningCost;      // The learning cost if not paid.
                limit = true;
        }
    }else if(typeOfType == "skilled"){                                                                                  // Skilled Crafts
        if(typeOfCraft == "art" && art.craftValue > 0 && art.craftValue <= 100 && art.craftValue > art.baseCraft){                
            tempCraftValue = art.craftValue - 1;
            tempCraftCost = art.craftCost;
            tempLearningCost = art.learningCost;
            limit = true;
        }else if(typeOfCraft == "botany" && botany.craftValue > 0 && botany.craftValue <= 100 && botany.craftValue > botany.baseCraft){
            tempCraftValue = botany.craftValue - 1;
            tempCraftCost = botany.craftCost;
            tempLearningCost = botany.learningCost;
            limit = true;
        }else if(typeOfCraft == "craftsman" && craftsman.craftValue > 0 && craftsman.craftValue <= 100 && craftsman.craftValue > craftsman.baseCraft){
            tempCraftValue = craftsman.craftValue - 1;
            tempCraftCost = craftsman.craftCost;
            tempLearningCost = craftsman.learningCost;
            limit = true;
        }else if(typeOfCraft == "forging" && forging.craftValue > 0 && forging.craftValue <= 100 && forging.craftValue > forging.baseCraft){
            tempCraftValue = forging.craftValue - 1;
            tempCraftCost = forging.craftCost;
            tempLearningCost = forging.learningCost;
            limit = true;
        }else if(typeOfCraft == "lorecraft" && lorecraft.craftValue > 0 && lorecraft.craftValue <= 100 && lorecraft.craftValue > lorecraft.baseCraft){
            tempCraftValue = lorecraft.craftValue - 1;
            tempCraftCost = lorecraft.craftCost;
            tempLearningCost = lorecraft.learningCost;
            limit = true;
        }else if(typeOfCraft == "mercantilism" && mercantilism.craftValue > 0 && mercantilism.craftValue <= 100 && mercantilism.craftValue > mercantilism.baseCraft){
            tempCraftValue = mercantilism.craftValue - 1;
            tempCraftCost = mercantilism.craftCost;
            tempLearningCost = mercantilism.learningCost;
            limit = true;
        }else if(typeOfCraft == "performance" && performance.craftValue > 0 && performance.craftValue <= 100 && performance.craftValue > performance.baseCraft){
            tempCraftValue = performance.craftValue - 1;
            tempCraftCost = performance.craftCost;
            tempLearningCost = performance.learningCost;
            limit = true;
        }else if(typeOfCraft == "tinkering" && tinkering.craftValue > 0 && tinkering.craftValue <= 100 && tinkering.craftValue > tinkering.baseCraft){
            tempCraftValue = tinkering.craftValue - 1;
            tempCraftCost = tinkering.craftCost;
            tempLearningCost = tinkering.learningCost;
            limit = true;
        }else if(typeOfCraft == "underworld" && underworld.craftValue > 0 && underworld.craftValue <= 100 && underworld.craftValue > underworld.baseCraft){
            tempCraftValue = underworld.craftValue - 1;
            tempCraftCost = underworld.craftCost;
            tempLearningCost = underworld.learningCost;
            limit = true;
        }
    }else if(typeOfType == "academic"){                                                                                 // Academic Crafts
        if(typeOfCraft == "alchemy" && alchemy.craftValue > 0 && alchemy.craftValue <= 100 && alchemy.craftValue > alchemy.baseCraft){            
            tempCraftValue = alchemy.craftValue - 1;
            tempCraftCost = alchemy.craftCost;
            tempLearningCost = alchemy.learningCost;
            limit = true;
        }else if(typeOfCraft == "culture" && culture.craftValue > 0 && culture.craftValue <= 100 && culture.craftValue > culture.baseCraft){            
                tempCraftValue = culture.craftValue - 1;
                tempCraftCost = culture.craftCost;
                tempLearningCost = culture.learningCost;
                limit = true;
        }else if(typeOfCraft == "language" && language.craftValue > 0 && language.craftValue <= 100 && language.craftValue > language.baseCraft){            
                tempCraftValue = language.craftValue - 1;
                tempCraftCost = language.craftCost;
                tempLearningCost = language.learningCost;
                limit = true;
        }else if(typeOfCraft == "linguistics" && linguistics.craftValue > 0 && linguistics.craftValue <= 100 && linguistics.craftValue > linguistics.baseCraft){            
                tempCraftValue = linguistics.craftValue - 1;
                tempCraftCost = linguistics.craftCost;
                tempLearningCost = linguistics.learningCost;
                limit = true;
        }else if(typeOfCraft == "savant" && savant.craftValue > 0 && savant.craftValue <= 100 && savant.craftValue > savant.baseCraft){            
                tempCraftValue = savant.craftValue - 1;
                tempCraftCost = savant.craftCost;
                tempLearningCost = savant.learningCost;
                limit = true;
        }
    }else if(typeOfType == "magic"){                                                                                    // Magic Crafts
        if(typeOfCraft == "druidcraft" && druidcraft.craftValue > 0 && druidcraft.craftValue <= 100 && druidcraft.craftValue > druidcraft.baseCraft){             
            tempCraftValue = druidcraft.craftValue - 1;
            tempCraftCost = druidcraft.craftCost;
            tempLearningCost = druidcraft.learningCost;
            limit = true;
        }
    }
    

    
    if(tempCraftValue == 0 && limit == true){
        tempCraftCost = 0;                                     //Being relocked
        
    }else if(tempCraftValue == 1 && limit == true){
        tempCraftCost = tempLearningCost;                      //Being unlocked
    
    }else if(tempCraftValue >= 1 && tempCraftValue < 25 && limit == true){ //1
        tempCraftCost = tempCraftCost - 1;
        
    }else if(tempCraftValue >= 25 && tempCraftValue < 50 && limit == true){ //2
        tempCraftCost = tempCraftCost - 2;
        
    }else if(tempCraftValue >= 50 && tempCraftValue < 70 && limit == true){ //3
        tempCraftCost = tempCraftCost - 3;

    }else if(tempCraftValue >= 70 && tempCraftValue < 80 && limit == true){ //5
        tempCraftCost = tempCraftCost - 5;
        
    }else if(tempCraftValue >= 80 && tempCraftValue < 90 && limit == true){ //10
        tempCraftCost = tempCraftCost - 10;

    }else if(tempCraftValue >= 90 && tempCraftValue < 100 && limit == true){ //20
        tempCraftCost = tempCraftCost - 20;

    }

    if(typeOfCraft == "berserker" && limit == true){                             // Combat Crafts
         berserker.craftValue = tempCraftValue;                      // The changed craft's value being returned.
         berserker.craftCost = tempCraftCost;                        // The craft's total cost being returned.
        document.getElementById("berserkerCost").innerHTML =  berserker.craftCost;
        document.getElementById("berserkerTotal").innerHTML =  berserker.craftValue;
    }else if(typeOfCraft == "smallWeapons" && limit == true){
         smallWeapons.craftValue = tempCraftValue;
         smallWeapons.craftCost = tempCraftCost;
        document.getElementById("smallWeaponsCost").innerHTML =  smallWeapons.craftCost;
        document.getElementById("smallWeaponsTotal").innerHTML =  smallWeapons.craftValue;
    }else if(typeOfCraft == "mediumWeapons" && limit == true){
         mediumWeapons.craftValue = tempCraftValue;
         mediumWeapons.craftCost = tempCraftCost;
        document.getElementById("mediumWeaponsCost").innerHTML =  mediumWeapons.craftCost;
        document.getElementById("mediumWeaponsTotal").innerHTML =  mediumWeapons.craftValue;
    }else if(typeOfCraft == "largeWeapons" && limit == true){
         largeWeapons.craftValue = tempCraftValue;
         largeWeapons.craftCost = tempCraftCost;
        document.getElementById("largeWeaponsCost").innerHTML =  largeWeapons.craftCost;
        document.getElementById("largeWeaponsTotal").innerHTML =  largeWeapons.craftValue;
    }else if(typeOfCraft == "maneuverability" && limit == true){
         maneuverability.craftValue = tempCraftValue;
         maneuverability.craftCost = tempCraftCost;
        document.getElementById("maneuverabilityCost").innerHTML =  maneuverability.craftCost;
        document.getElementById("maneuverabilityTotal").innerHTML =  maneuverability.craftValue;
    }else if(typeOfCraft == "martialRanged" && limit == true){
         martialRanged.craftValue = tempCraftValue;
         martialRanged.craftCost = tempCraftCost;
        document.getElementById("martialRangedCost").innerHTML =  martialRanged.craftCost;
        document.getElementById("martialRangedTotal").innerHTML =  martialRanged.craftValue;
    }else if(typeOfCraft == "simpleRanged" && limit == true){
         simpleRanged.craftValue = tempCraftValue;
         simpleRanged.craftCost = tempCraftCost;
        document.getElementById("simpleRangedCost").innerHTML =  simpleRanged.craftCost;
        document.getElementById("simpleRangedTotal").innerHTML =  simpleRanged.craftValue;
    }else if(typeOfCraft == "siegeRanged" && limit == true){
         siegeRanged.craftValue = tempCraftValue;
         siegeRanged.craftCost = tempCraftCost;
        document.getElementById("siegeRangedCost").innerHTML =  siegeRanged.craftCost;
        document.getElementById("siegeRangedTotal").innerHTML =  siegeRanged.craftValue;
    }else if(typeOfCraft == "mountedArchery" && limit == true){
         mountedArchery.craftValue = tempCraftValue;
         mountedArchery.craftCost = tempCraftCost;
        document.getElementById("mountedArcheryCost").innerHTML =  mountedArchery.craftCost;
        document.getElementById("mountedArcheryTotal").innerHTML =  mountedArchery.craftValue;
    }else if(typeOfCraft == "combatTactics" && limit == true){
         combatTactics.craftValue = tempCraftValue;
         combatTactics.craftCost = tempCraftCost;
        document.getElementById("combatTacticsCost").innerHTML =  combatTactics.craftCost;
        document.getElementById("combatTacticsTotal").innerHTML =  combatTactics.craftValue;
    }else if(typeOfCraft == "defense" && limit == true){
         defense.craftValue = tempCraftValue;
         defense.craftCost = tempCraftCost;
        document.getElementById("defenseCost").innerHTML =  defense.craftCost;
        document.getElementById("defenseTotal").innerHTML =  defense.craftValue;
    }else if(typeOfCraft == "animalHandling" && limit == true){        // Common Crafts
        animalHandling.craftValue = tempCraftValue;
        animalHandling.craftCost = tempCraftCost;
        document.getElementById("animalHandlingCost").innerHTML = animalHandling.craftCost;
        document.getElementById("animalHandlingTotal").innerHTML = animalHandling.craftValue;
    }else if(typeOfCraft == "athletics" && limit == true){
        athletics.craftValue = tempCraftValue;
        athletics.craftCost = tempCraftCost;
        document.getElementById("athleticsCost").innerHTML = athletics.craftCost;
        document.getElementById("athleticsTotal").innerHTML = athletics.craftValue;
    }else if(typeOfCraft == "husbandry" && limit == true){
        husbandry.craftValue = tempCraftValue;
        husbandry.craftCost = tempCraftCost;
        document.getElementById("husbandryCost").innerHTML = husbandry.craftCost;
        document.getElementById("husbandryTotal").innerHTML = husbandry.craftValue;
    }else if(typeOfCraft == "laborer" && limit == true){
        laborer.craftValue = tempCraftValue;
        laborer.craftCost = tempCraftCost;
        document.getElementById("laborerCost").innerHTML = laborer.craftCost;
        document.getElementById("laborerTotal").innerHTML = laborer.craftValue;
    }else if(typeOfCraft == "riding" && limit == true){
        riding.craftValue = tempCraftValue;
        riding.craftCost = tempCraftCost;
        document.getElementById("ridingCost").innerHTML = riding.craftCost;
        document.getElementById("ridingTotal").innerHTML = riding.craftValue;
    }else if(typeOfCraft == "survivalist" && limit == true){
        survivalist.craftValue = tempCraftValue;
        survivalist.craftCost = tempCraftCost;
        document.getElementById("survivalistCost").innerHTML = survivalist.craftCost;
        document.getElementById("survivalistTotal").innerHTML = survivalist.craftValue;
    }else if(typeOfCraft == "seamanship" && limit == true){
        seamanship.craftValue = tempCraftValue;
        seamanship.craftCost = tempCraftCost;
        document.getElementById("seamanshipCost").innerHTML = seamanship.craftCost;
        document.getElementById("seamanshipTotal").innerHTML = seamanship.craftValue;
    }else if(typeOfCraft == "thievery" && limit == true){
        thievery.craftValue = tempCraftValue;
        thievery.craftCost = tempCraftCost;
        document.getElementById("thieveryCost").innerHTML = thievery.craftCost;
        document.getElementById("thieveryTotal").innerHTML = thievery.craftValue;
    }else if(typeOfCraft == "art" && limit == true){                        // Skilled Crafts
        art.craftValue = tempCraftValue;
        art.craftCost = tempCraftCost;
        document.getElementById("artCost").innerHTML = art.craftCost;
        document.getElementById("artTotal").innerHTML = art.craftValue;
    }else if(typeOfCraft == "botany" && limit == true){
        botany.craftValue = tempCraftValue;
        botany.craftCost = tempCraftCost;
        document.getElementById("botanyCost").innerHTML = botany.craftCost;
        document.getElementById("botanyTotal").innerHTML = botany.craftValue;
    }else if(typeOfCraft == "craftsman" && limit == true){
        craftsman.craftValue = tempCraftValue;
        craftsman.craftCost = tempCraftCost;
        document.getElementById("craftsmanCost").innerHTML = craftsman.craftCost;
        document.getElementById("craftsmanTotal").innerHTML = craftsman.craftValue;
    }else if(typeOfCraft == "forging" && limit == true){
        forging.craftValue = tempCraftValue;
        forging.craftCost = tempCraftCost;
        document.getElementById("forgingCost").innerHTML = forging.craftCost;
        document.getElementById("forgingTotal").innerHTML = forging.craftValue;
    }else if(typeOfCraft == "lorecraft" && limit == true){
        lorecraft.craftValue = tempCraftValue;
        lorecraft.craftCost = tempCraftCost;
        document.getElementById("lorecraftCost").innerHTML = lorecraft.craftCost;
        document.getElementById("lorecraftTotal").innerHTML = lorecraft.craftValue;
    }else if(typeOfCraft == "mercantilism" && limit == true){
        mercantilism.craftValue = tempCraftValue;
        mercantilism.craftCost = tempCraftCost;
        document.getElementById("mercantilismCost").innerHTML = mercantilism.craftCost;
        document.getElementById("mercantilismTotal").innerHTML = mercantilism.craftValue;
    }else if(typeOfCraft == "performance" && limit == true){
        performance.craftValue = tempCraftValue;
        performance.craftCost = tempCraftCost;
        document.getElementById("performanceCost").innerHTML = performance.craftCost;
        document.getElementById("performanceTotal").innerHTML = performance.craftValue;
    }else if(typeOfCraft == "tinkering" && limit == true){
        tinkering.craftValue = tempCraftValue;
        tinkering.craftCost = tempCraftCost;
        document.getElementById("tinkeringCost").innerHTML = tinkering.craftCost;
        document.getElementById("tinkeringTotal").innerHTML = tinkering.craftValue;
    }else if(typeOfCraft == "underworld" && limit == true){
        underworld.craftValue = tempCraftValue;
        underworld.craftCost = tempCraftCost;
        document.getElementById("underworldCost").innerHTML = underworld.craftCost;
        document.getElementById("underworldTotal").innerHTML = underworld.craftValue;
    }else if(typeOfCraft == "alchemy" && limit == true){                          // Academic Crafts
        alchemy.craftValue = tempCraftValue;
        alchemy.craftCost = tempCraftCost;
        document.getElementById("alchemyCost").innerHTML = alchemy.craftCost;
        document.getElementById("alchemyTotal").innerHTML = alchemy.craftValue;
    }else if(typeOfCraft == "culture" && limit == true){
        culture.craftValue = tempCraftValue;
        culture.craftCost = tempCraftCost;
        document.getElementById("cultureCost").innerHTML = culture.craftCost;
        document.getElementById("cultureTotal").innerHTML = culture.craftValue;
    }else if(typeOfCraft == "language" && limit == true){
        language.craftValue = tempCraftValue;
        language.craftCost = tempCraftCost;
        document.getElementById("languageCost").innerHTML = language.craftCost;
        document.getElementById("languageTotal").innerHTML = language.craftValue;
    }else if(typeOfCraft == "linguistics" && limit == true){
        linguistics.craftValue = tempCraftValue;
        linguistics.craftCost = tempCraftCost;
        document.getElementById("linguisticsCost").innerHTML = linguistics.craftCost;
        document.getElementById("linguisticsTotal").innerHTML = linguistics.craftValue;
    }else if(typeOfCraft == "litigation" && limit == true){
        litigation.craftValue = tempCraftValue;
        litigation.craftCost = tempCraftCost;
        document.getElementById("litigationCost").innerHTML = litigation.craftCost;
        document.getElementById("litigationTotal").innerHTML = litigation.craftValue;
    }else if(typeOfCraft == "savant" && limit == true){
        savant.craftValue = tempCraftValue;
        savant.craftCost = tempCraftCost;
        document.getElementById("savantCost").innerHTML = savant.craftCost;
        document.getElementById("savantTotal").innerHTML = savant.craftValue;
    }else if(typeOfCraft == "druidcraft" && limit == true){                         // Magic Crafts
        druidcraft.craftValue = tempCraftValue;
        druidcraft.craftCost = tempCraftCost;
        document.getElementById("druidcraftCost").innerHTML = druidcraft.craftCost;
        document.getElementById("druidcraftTotal").innerHTML = druidcraft.craftValue;
    }

    document.getElementById("craftCostTotal").innerHTML = craftTotal();
    startingExperience();

}

// - - - 

function craftTotal(){
    totalCraftCost =  berserker.craftCost +  smallWeapons.craftCost +  mediumWeapons.craftCost +  largeWeapons.craftCost +  maneuverability.craftCost +   martialRanged.craftCost +  simpleRanged.craftCost +   siegeRanged.craftCost +  mountedArchery.craftCost +  combatTactics.craftCost +   defense.craftCost + animalHandling.craftCost + athletics.craftCost + husbandry.craftCost + laborer.craftCost + riding.craftCost + survivalist.craftCost + seamanship.craftCost + thievery.craftCost + art.craftCost + botany.craftCost + craftsman.craftCost + forging.craftCost + lorecraft.craftCost + mercantilism.craftCost + performance.craftCost + tinkering.craftCost + underworld.craftCost + alchemy.craftCost + culture.craftCost + language.craftCost + linguistics.craftCost + litigation.craftCost + savant.craftCost + druidcraft.craftCost
    return totalCraftCost;
}

// - - - EXPERIENCE

var initialValue = 0;

function startingExperience(){
    initialValue = document.getElementById("startingValue").value;
    if(chosenRace == "Human"){
        initialValue + 16;
    }
    document.getElementById("Remaining").innerHTML = initialValue - (craftTotal() + traitTotal());
}

// - - - 

