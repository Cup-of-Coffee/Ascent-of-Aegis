
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

// - - - CRAFTS

function CraftConstructor(craftName,learningCost,craftValue,craftCost){ // Constructor for the craft.
    this.craftName = craftName;
    this.learningCost = learningCost;
    this.craftValue = craftValue;
    this.craftCost = craftCost;
}

    // Combat Crafts

    /* TESTING
var combatCrafts = {
    berserker: new CraftConstructor("Berserker",10,0,0), smallWeapons: new CraftConstructor("Small Weapons",10,0,0), 
    mediumWeapons: new CraftConstructor("Medium Weapons",10,0,0), largeWeapons: new CraftConstructor("Large Weapons",10,0,0),
    maneuverability: new CraftConstructor("Maneuverability",10,0,0), martialRanged: new CraftConstructor("Martial Ranged",10,0,0),
    simpleRanged: new CraftConstructor("Simple Ranged",10,0,0), siegeRanged: new CraftConstructor("Siege Ranged",10,0,0),
    mountedArchery: new CraftConstructor("Mounted Archery",10,0,0), combatTactics : new CraftConstructor("Combat Tactics",10,0,0),
    defense: new CraftConstructor("Defense",10,0,0)
}
    */

var berserker = new CraftConstructor("Berserker",10,0,0); var smallWeapons = new CraftConstructor("Small Weapons",10,0,0);
var mediumWeapons = new CraftConstructor("Medium Weapons",10,0,0); var largeWeapons = new CraftConstructor("Large Weapons",10,0,0);
var maneuverability	= new CraftConstructor("Maneuverability",10,0,0); var martialRanged = new CraftConstructor("Martial Ranged",10,0,0);
var simpleRanged = new CraftConstructor("Simple Ranged",10,0,0); var siegeRanged = new CraftConstructor("Siege Ranged",10,0,0);
var mountedArchery = new CraftConstructor("Mounted Archery",10,0,0); var combatTactics = new CraftConstructor("Combat Tactics",10,0,0);
var defense = new CraftConstructor("Defense",10,0,0);

    // Common Crafts

    /* TESTING
var commonCrafts = {
    animalHandling: new CraftConstructor("animalHandling",20,0,0), athletics: new CraftConstructor("athletics",20,0,0),
    husbandry: new CraftConstructor("Husbandry",20,0,0), laborer: new CraftConstructor("laborer",20,0,0),
    riding: new CraftConstructor("Riding",20,0,0), survivalist: new CraftConstructor("Survivalist",20,0,0),
    seamanship: new CraftConstructor("Seamanship",20,0,0), thievery: new CraftConstructor("Thievery",20,0,0)
}
    */

var animalHandling = new CraftConstructor("Animal Handling",20,0,0); var athletics = new CraftConstructor("Athletics",20,0,0);
var husbandry = new CraftConstructor("Husbandry",20,0,0); var laborer = new CraftConstructor("Laborer",20,0,0);
var riding = new CraftConstructor("Riding",20,0,0); var survivalist = new CraftConstructor("Survivalist",20,0,0);
var seamanship = new CraftConstructor("Seamanship",20,0,0); var thievery = new CraftConstructor("Thievery",20,0,0);

    // Skilled Crafts

    /* TESTING
var skilledCrafts = {
    art: new CraftConstructor("Art",30,0,0), botany: new CraftConstructor("Botany",30,0,0),
    craftsman: new CraftConstructor("Craftsman",30,0,0), forging: new CraftConstructor("Forging",30,0,0),
    lorecraft: new CraftConstructor("Lorecraft",30,0,0), mercantilism: new CraftConstructor("Mercantilism",30,0,0),
    performance: new CraftConstructor("Performance",30,0,0), tinkering: new CraftConstructor("Tinkering",30,0,0),
    underworld: new CraftConstructor("Underworld",30,0,0)
}
    */

var art = new CraftConstructor("Art",30,0,0); var botany = new CraftConstructor("Botany",30,0,0);
var craftsman = new CraftConstructor("Craftsman",30,0,0); var forging = new CraftConstructor("Forging",30,0,0);
var lorecraft = new CraftConstructor("Lorecraft",30,0,0); var mercantilism = new CraftConstructor("Mercantilism",30,0,0);
var performance = new CraftConstructor("Performance",30,0,0); var tinkering = new CraftConstructor("Tinkering",30,0,0);
var underworld = new CraftConstructor("Underworld",30,0,0);

    // Academic Crafts

    /* TESTING
var academicCrafts = {
    alchemy: new CraftConstructor("Alchemy",30,0,0), culture: new CraftConstructor("Culture",30,0,0),
    language: new CraftConstructor("Language",30,0,0), linguistics: new CraftConstructor("Linguistics",30,0,0),
    litigation: new CraftConstructor("Litigation",30,0,0), savant: new CraftConstructor("Savant",30,0,0)
}
    */

var alchemy = new CraftConstructor("Alchemy",30,0,0); var culture = new CraftConstructor("Culture",30,0,0);
var language = new CraftConstructor("Language",30,0,0); var linguistics = new CraftConstructor("Linguistics",30,0,0);
var litigation = new CraftConstructor("Litigation",30,0,0); var savant = new CraftConstructor("Savant",30,0,0);

    // Magic Crafts

    /* TESTING
var magicCrafts = {
    druidcraft: new CraftConstructor("Druidcraft",30,0,0) 
}
    */

var druidcraft = new CraftConstructor("Druidcraft",30,0,0);

// - - - CRAFT FUNCTIONS

var tempCraftValue = 0; var tempCraftCost = 0; var tempLearningCost = 0;

function craftIncrease(typeOfCraft){ // Button to increase :: 
    var limit = true;  // bypass everything if false

    if(typeOfCraft == "Berserker" && berserker.craftValue >= 0 && berserker.craftValue < 100){                             // Combat Crafts
        tempCraftValue = berserker.craftValue + 1;     // The craft's value being increased.
        tempCraftCost = berserker.craftCost;         // The craft's total cost.
        tempLearningCost = berserker.learningCost;   // The learning cost if not paid.
    }else if(typeOfCraft == "Small Weapons" && smallWeapons.craftValue >= 0 && smallWeapons.craftValue < 100){
        tempCraftValue = smallWeapons.craftValue + 1;
        tempCraftCost = smallWeapons.craftCost;
        tempLearningCost = smallWeapons.learningCost;
    }else if(typeOfCraft == "Medium Weapons" && mediumWeapons.craftValue >= 0 && mediumWeapons.craftValue < 100){
        tempCraftValue = mediumWeapons.craftValue + 1;
        tempCraftCost = mediumWeapons.craftCost;
        tempLearningCost = mediumWeapons.learningCost;
    }else if(typeOfCraft == "Large Weapons" && largeWeapons.craftValue >= 0 && largeWeapons.craftValue < 100){
        tempCraftValue = largeWeapons.craftValue + 1;
        tempCraftCost = largeWeapons.craftCost;
        tempLearningCost = largeWeapons.learningCost;
    }else if(typeOfCraft == "Maneuverability" && maneuverability.craftValue >= 0 && maneuverability.craftValue < 100){
        tempCraftValue = maneuverability.craftValue + 1;
        tempCraftCost = maneuverability.craftCost;
        tempLearningCost = maneuverability.learningCost;
    }else if(typeOfCraft == "Martial Ranged" && martialRanged.craftValue >= 0 && martialRanged.craftValue < 100){
        tempCraftValue = martialRanged.craftValue + 1;
        tempCraftCost = martialRanged.craftCost;
        tempLearningCost = martialRanged.learningCost;
    }else if(typeOfCraft == "Simple Ranged" && simpleRanged.craftValue >= 0 && simpleRanged.craftValue < 100){
        tempCraftValue = simpleRanged.craftValue + 1;
        tempCraftCost = simpleRanged.craftCost;
        tempLearningCost = simpleRanged.learningCost;
    }else if(typeOfCraft == "Siege Ranged" && siegeRanged.craftValue >= 0 && siegeRanged.craftValue < 100){
        tempCraftValue = siegeRanged.craftValue + 1;
        tempCraftCost = siegeRanged.craftCost;
        tempLearningCost = siegeRanged.learningCost;
    }else if(typeOfCraft == "Mounted Archery" && mountedArchery.craftValue >= 0 && mountedArchery.craftValue < 100){
        tempCraftValue = mountedArchery.craftValue + 1;
        tempCraftCost = mountedArchery.craftCost;
        tempLearningCost = mountedArchery.learningCost;
    }else if(typeOfCraft == "Combat Tactics" && combatTactics.craftValue >= 0 && combatTactics.craftValue < 100){
        tempCraftValue = combatTactics.craftValue + 1;
        tempCraftCost = combatTactics.craftCost;
        tempLearningCost = combatTactics.learningCost;
    }else if(typeOfCraft == "Defense" && defense.craftValue >= 0 && defense.craftValue < 100){
        tempCraftValue = defense.craftValue + 1;
        tempCraftCost = defense.craftCost;
        tempLearningCost = defense.learningCost;
    }else if(typeOfCraft == "Animal Handling" && animalHandling.craftValue >= 0 && animalHandling.craftValue < 100){        // Common Crafts
        tempCraftValue = animalHandling.craftValue + 1;
        tempCraftCost = animalHandling.craftCost;
        tempLearningCost = animalHandling.learningCost;
    }else if(typeOfCraft == "Athletics" && athletics.craftValue >= 0 && athletics.craftValue < 100){
        tempCraftValue = athletics.craftValue + 1;
        tempCraftCost = athletics.craftCost;
        tempLearningCost = athletics.learningCost;
    }else if(typeOfCraft == "Husbandry" && husbandry.craftValue >= 0 && husbandry.craftValue < 100){
        tempCraftValue = husbandry.craftValue + 1;
        tempCraftCost = husbandry.craftCost;
        tempLearningCost = husbandry.learningCost;
    }else if(typeOfCraft == "Laborer" && laborer.craftValue >= 0 && laborer.craftValue < 100){
        tempCraftValue = laborer.craftValue + 1;
        tempCraftCost = laborer.craftCost;
        tempLearningCost = laborer.learningCost;
    }else if(typeOfCraft == "Riding" && riding.craftValue >= 0 && riding.craftValue < 100){
        tempCraftValue = riding.craftValue + 1;
        tempCraftCost = riding.craftCost;
        tempLearningCost = riding.learningCost;
    }else if(typeOfCraft == "Survivalist" && survivalist.craftValue >= 0 && survivalist.craftValue < 100){
        tempCraftValue = survivalist.craftValue + 1;
        tempCraftCost = survivalist.craftCost;
        tempLearningCost = survivalist.learningCost;
    }else if(typeOfCraft == "Seamanship" && seamanship.craftValue >= 0 && seamanship.craftValue < 100){
        tempCraftValue = seamanship.craftValue + 1;
        tempCraftCost = seamanship.craftCost;
        tempLearningCost = seamanship.learningCost;
    }else if(typeOfCraft == "Thievery" && thievery.craftValue >= 0 && thievery.craftValue < 100){
        tempCraftValue = thievery.craftValue + 1;
        tempCraftCost = thievery.craftCost;
        tempLearningCost = thievery.learningCost;
    }else if(typeOfCraft == "Art" && art.craftValue >= 0 && art.craftValue < 100){                                          // Skilled Crafts
        tempCraftValue = art.craftValue + 1;
        tempCraftCost = art.craftCost;
        tempLearningCost = art.learningCost;
    }else if(typeOfCraft == "Botany" && botany.craftValue >= 0 && botany.craftValue < 100){
        tempCraftValue = botany.craftValue + 1;
        tempCraftCost = botany.craftCost;
        tempLearningCost = botany.learningCost;
    }else if(typeOfCraft == "Craftsman" && craftsman.craftValue >= 0 && craftsman.craftValue < 100){
        tempCraftValue = craftsman.craftValue + 1;
        tempCraftCost = craftsman.craftCost;
        tempLearningCost = craftsman.learningCost;
    }else if(typeOfCraft == "Forging" && forging.craftValue >= 0 && forging.craftValue < 100){
        tempCraftValue = forging.craftValue + 1;
        tempCraftCost = forging.craftCost;
        tempLearningCost = forging.learningCost;
    }else if(typeOfCraft == "Lorecraft" && lorecraft.craftValue >= 0 && lorecraft.craftValue < 100){
        tempCraftValue = lorecraft.craftValue + 1;
        tempCraftCost = lorecraft.craftCost;
        tempLearningCost = lorecraft.learningCost;
    }else if(typeOfCraft == "Mercantilism" && mercantilism.craftValue >= 0 && mercantilism.craftValue < 100){
        tempCraftValue = mercantilism.craftValue + 1;
        tempCraftCost = mercantilism.craftCost;
        tempLearningCost = mercantilism.learningCost;
    }else if(typeOfCraft == "Performance" && performance.craftValue >= 0 && performance.craftValue < 100){
        tempCraftValue = performance.craftValue + 1;
        tempCraftCost = performance.craftCost;
        tempLearningCost = performance.learningCost;
    }else if(typeOfCraft == "Tinkering" && tinkering.craftValue >= 0 && tinkering.craftValue < 100){
        tempCraftValue = tinkering.craftValue + 1;
        tempCraftCost = tinkering.craftCost;
        tempLearningCost = tinkering.learningCost;
    }else if(typeOfCraft == "Underworld" && underworld.craftValue >= 0 && underworld.craftValue < 100){
        tempCraftValue = underworld.craftValue + 1;
        tempCraftCost = underworld.craftCost;
        tempLearningCost = underworld.learningCost;
    }else if(typeOfCraft == "Alchemy" && alchemy.craftValue >= 0 && alchemy.craftValue < 100){                          // Academic Crafts
        tempCraftValue = alchemy.craftValue + 1;
        tempCraftCost = alchemy.craftCost;
        tempLearningCost = alchemy.learningCost;
    }else if(typeOfCraft == "Culture" && culture.craftValue >= 0 && culture.craftValue < 100){
        tempCraftValue = culture.craftValue + 1;
        tempCraftCost = culture.craftCost;
        tempLearningCost = culture.learningCost;
    }else if(typeOfCraft == "Language" && language.craftValue >= 0 && language.craftValue < 100){
        tempCraftValue = language.craftValue + 1;
        tempCraftCost = language.craftCost;
        tempLearningCost = language.learningCost;
    }else if(typeOfCraft == "Linguistics" && linguistics.craftValue >= 0 && linguistics.craftValue < 100){
        tempCraftValue = linguistics.craftValue + 1;
        tempCraftCost = linguistics.craftCost;
        tempLearningCost = linguistics.learningCost;
    }else if(typeOfCraft == "Litigation" && litigation.craftValue >= 0 && litigation.craftValue < 100){
        tempCraftValue = litigation.craftValue + 1;
        tempCraftCost = litigation.craftCost;
        tempLearningCost = litigation.learningCost;
    }else if(typeOfCraft == "Savant" && savant.craftValue >= 0 && savant.craftValue < 100){
        tempCraftValue = savant.craftValue + 1;
        tempCraftCost = savant.craftCost;
        tempLearningCost = savant.learningCost;
    }else if(typeOfCraft == "Druidcraft" && druidcraft.craftValue >= 0 && druidcraft.craftValue < 100){                 // Magic Crafts
        tempCraftValue = druidcraft.craftValue + 1;
        tempCraftCost = druidcraft.craftCost;
        tempLearningCost = druidcraft.learningCost;
    }else{
        limit = false; // if it isn't within a 0 - 100, bypass the calculations.
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

    }else if(tempCraftValue > 90 && tempCraftValue <= 100 && limit == true){ //20
        tempCraftCost = tempCraftCost + 20;

    }

    if(typeOfCraft == "Berserker" && limit == true){                             // Combat Crafts
        berserker.craftValue = tempCraftValue;                                   // The changed craft's value being returned.
        berserker.craftCost = tempCraftCost;                                     // The craft's total cost being returned.
        document.getElementById("berserkerCost").innerHTML = berserker.craftCost;
        document.getElementById("berserkerTotal").innerHTML = berserker.craftValue;
    }else if(typeOfCraft == "Small Weapons" && limit == true){
        smallWeapons.craftValue = tempCraftValue;
        smallWeapons.craftCost = tempCraftCost;
        document.getElementById("smallWeaponsCost").innerHTML = smallWeapons.craftCost;
        document.getElementById("smallWeaponsTotal").innerHTML = smallWeapons.craftValue;
    }else if(typeOfCraft == "Medium Weapons" && limit == true){
        mediumWeapons.craftValue = tempCraftValue;
        mediumWeapons.craftCost = tempCraftCost;
        document.getElementById("mediumWeaponsCost").innerHTML = mediumWeapons.craftCost;
        document.getElementById("mediumWeaponsTotal").innerHTML = mediumWeapons.craftValue;
    }else if(typeOfCraft == "Large Weapons" && limit == true){
        largeWeapons.craftValue = tempCraftValue;
        largeWeapons.craftCost = tempCraftCost;
        document.getElementById("largeWeaponsCost").innerHTML = largeWeapons.craftCost;
        document.getElementById("largeWeaponsTotal").innerHTML = largeWeapons.craftValue;
    }else if(typeOfCraft == "Maneuverability" && limit == true){
        maneuverability.craftValue = tempCraftValue;
        maneuverability.craftCost = tempCraftCost;
        document.getElementById("maneuverabilityCost").innerHTML = maneuverability.craftCost;
        document.getElementById("maneuverabilityTotal").innerHTML = maneuverability.craftValue;
    }else if(typeOfCraft == "Martial Ranged" && limit == true){
        martialRanged.craftValue = tempCraftValue;
        martialRanged.craftCost = tempCraftCost;
        document.getElementById("martialRangedCost").innerHTML = martialRanged.craftCost;
        document.getElementById("martialRangedTotal").innerHTML = martialRanged.craftValue;
    }else if(typeOfCraft == "Simple Ranged" && limit == true){
        simpleRanged.craftValue = tempCraftValue;
        simpleRanged.craftCost = tempCraftCost;
        document.getElementById("simpleRangedCost").innerHTML = simpleRanged.craftCost;
        document.getElementById("simpleRangedTotal").innerHTML = simpleRanged.craftValue;
    }else if(typeOfCraft == "Siege Ranged" && limit == true){
        siegeRanged.craftValue = tempCraftValue;
        siegeRanged.craftCost = tempCraftCost;
        document.getElementById("siegeRangedCost").innerHTML = siegeRanged.craftCost;
        document.getElementById("siegeRangedTotal").innerHTML = siegeRanged.craftValue;
    }else if(typeOfCraft == "Mounted Archery" && limit == true){
        mountedArchery.craftValue = tempCraftValue;
        mountedArchery.craftCost = tempCraftCost;
        document.getElementById("mountedArcheryCost").innerHTML = mountedArchery.craftCost;
        document.getElementById("mountedArcheryTotal").innerHTML = mountedArchery.craftValue;
    }else if(typeOfCraft == "Combat Tactics" && limit == true){
        combatTactics.craftValue = tempCraftValue;
        combatTactics.craftCost = tempCraftCost;
        document.getElementById("combatTacticsCost").innerHTML = combatTactics.craftCost;
        document.getElementById("combatTacticsTotal").innerHTML = combatTactics.craftValue;
    }else if(typeOfCraft == "Defense" && limit == true){
        defense.craftValue = tempCraftValue;
        defense.craftCost = tempCraftCost;
        document.getElementById("defenseCost").innerHTML = defense.craftCost;
        document.getElementById("defenseTotal").innerHTML = defense.craftValue;
    }else if(typeOfCraft == "Animal Handling" && limit == true){        // Common Crafts
        animalHandling.craftValue = tempCraftValue;
        animalHandling.craftCost = tempCraftCost;
        document.getElementById("animalHandlingCost").innerHTML = animalHandling.craftCost;
        document.getElementById("animalHandlingTotal").innerHTML = animalHandling.craftValue;
    }else if(typeOfCraft == "Athletics" && limit == true){
        athletics.craftValue = tempCraftValue;
        athletics.craftCost = tempCraftCost;
        document.getElementById("athleticsCost").innerHTML = athletics.craftCost;
        document.getElementById("athleticsTotal").innerHTML = athletics.craftValue;
    }else if(typeOfCraft == "Husbandry" && limit == true){
        husbandry.craftValue = tempCraftValue;
        husbandry.craftCost = tempCraftCost;
        document.getElementById("husbandryCost").innerHTML = husbandry.craftCost;
        document.getElementById("husbandryTotal").innerHTML = husbandry.craftValue;
    }else if(typeOfCraft == "Laborer" && limit == true){
        laborer.craftValue = tempCraftValue;
        laborer.craftCost = tempCraftCost;
        document.getElementById("laborerCost").innerHTML = laborer.craftCost;
        document.getElementById("laborerTotal").innerHTML = laborer.craftValue;
    }else if(typeOfCraft == "Riding" && limit == true){
        riding.craftValue = tempCraftValue;
        riding.craftCost = tempCraftCost;
        document.getElementById("ridingCost").innerHTML = riding.craftCost;
        document.getElementById("ridingTotal").innerHTML = riding.craftValue;
    }else if(typeOfCraft == "Survivalist" && limit == true){
        survivalist.craftValue = tempCraftValue;
        survivalist.craftCost = tempCraftCost;
        document.getElementById("survivalistCost").innerHTML = survivalist.craftCost;
        document.getElementById("survivalistTotal").innerHTML = survivalist.craftValue;
    }else if(typeOfCraft == "Seamanship" && limit == true){
        seamanship.craftValue = tempCraftValue;
        seamanship.craftCost = tempCraftCost;
        document.getElementById("seamanshipCost").innerHTML = seamanship.craftCost;
        document.getElementById("seamanshipTotal").innerHTML = seamanship.craftValue;
    }else if(typeOfCraft == "Thievery" && limit == true){
        thievery.craftValue = tempCraftValue;
        thievery.craftCost = tempCraftCost;
        document.getElementById("thieveryCost").innerHTML = thievery.craftCost;
        document.getElementById("thieveryTotal").innerHTML = thievery.craftValue;
    }else if(typeOfCraft == "Art" && limit == true){                        // Skilled Crafts
        art.craftValue = tempCraftValue;
        art.craftCost = tempCraftCost;
        document.getElementById("artCost").innerHTML = art.craftCost;
        document.getElementById("artTotal").innerHTML = art.craftValue;
    }else if(typeOfCraft == "Botany" && limit == true){
        botany.craftValue = tempCraftValue;
        botany.craftCost = tempCraftCost;
        document.getElementById("botanyCost").innerHTML = botany.craftCost;
        document.getElementById("botanyTotal").innerHTML = botany.craftValue;
    }else if(typeOfCraft == "Craftsman" && limit == true){
        craftsman.craftValue = tempCraftValue;
        craftsman.craftCost = tempCraftCost;
        document.getElementById("craftsmanCost").innerHTML = craftsman.craftCost;
        document.getElementById("craftsmanTotal").innerHTML = craftsman.craftValue;
    }else if(typeOfCraft == "Forging" && limit == true){
        forging.craftValue = tempCraftValue;
        forging.craftCost = tempCraftCost;
        document.getElementById("forgingCost").innerHTML = forging.craftCost;
        document.getElementById("forgingTotal").innerHTML = forging.craftValue;
    }else if(typeOfCraft == "Lorecraft" && limit == true){
        lorecraft.craftValue = tempCraftValue;
        lorecraft.craftCost = tempCraftCost;
        document.getElementById("lorecraftCost").innerHTML = lorecraft.craftCost;
        document.getElementById("lorecraftTotal").innerHTML = lorecraft.craftValue;
    }else if(typeOfCraft == "Mercantilism" && limit == true){
        mercantilism.craftValue = tempCraftValue;
        mercantilism.craftCost = tempCraftCost;
        document.getElementById("mercantilismCost").innerHTML = mercantilism.craftCost;
        document.getElementById("mercantilismTotal").innerHTML = mercantilism.craftValue;
    }else if(typeOfCraft == "Performance" && limit == true){
        performance.craftValue = tempCraftValue;
        performance.craftCost = tempCraftCost;
        document.getElementById("performanceCost").innerHTML = performance.craftCost;
        document.getElementById("performanceTotal").innerHTML = performance.craftValue;
    }else if(typeOfCraft == "Tinkering" && limit == true){
        tinkering.craftValue = tempCraftValue;
        tinkering.craftCost = tempCraftCost;
        document.getElementById("tinkeringCost").innerHTML = tinkering.craftCost;
        document.getElementById("tinkeringTotal").innerHTML = tinkering.craftValue;
    }else if(typeOfCraft == "Underworld" && limit == true){
        underworld.craftValue = tempCraftValue;
        underworld.craftCost = tempCraftCost;
        document.getElementById("underworldCost").innerHTML = underworld.craftCost;
        document.getElementById("underworldTotal").innerHTML = underworld.craftValue;
    }else if(typeOfCraft == "Alchemy" && limit == true){                          // Academic Crafts
        alchemy.craftValue = tempCraftValue;
        alchemy.craftCost = tempCraftCost;
        document.getElementById("alchemyCost").innerHTML = alchemy.craftCost;
        document.getElementById("alchemyTotal").innerHTML = alchemy.craftValue;
    }else if(typeOfCraft == "Culture" && limit == true){
        culture.craftValue = tempCraftValue;
        culture.craftCost = tempCraftCost;
        document.getElementById("cultureCost").innerHTML = culture.craftCost;
        document.getElementById("cultureTotal").innerHTML = culture.craftValue;
    }else if(typeOfCraft == "Language" && limit == true){
        language.craftValue = tempCraftValue;
        language.craftCost = tempCraftCost;
        document.getElementById("languageCost").innerHTML = language.craftCost;
        document.getElementById("languageTotal").innerHTML = language.craftValue;
    }else if(typeOfCraft == "Linguistics" && limit == true){
        linguistics.craftValue = tempCraftValue;
        linguistics.craftCost = tempCraftCost;
        document.getElementById("linguisticsCost").innerHTML = linguistics.craftCost;
        document.getElementById("linguisticsTotal").innerHTML = linguistics.craftValue;
    }else if(typeOfCraft == "Litigation" && limit == true){
        litigation.craftValue = tempCraftValue;
        litigation.craftCost = tempCraftCost;
        document.getElementById("litigationCost").innerHTML = litigation.craftCost;
        document.getElementById("litigationTotal").innerHTML = litigation.craftValue;
    }else if(typeOfCraft == "Savant" && limit == true){
        savant.craftValue = tempCraftValue;
        savant.craftCost = tempCraftCost;
        document.getElementById("savantCost").innerHTML = savant.craftCost;
        document.getElementById("savantTotal").innerHTML = savant.craftValue;
    }else if(typeOfCraft == "Druidcraft" && limit == true){                         // Magic Crafts
        druidcraft.craftValue = tempCraftValue;
        druidcraft.craftCost = tempCraftCost;
        document.getElementById("druidcraftCost").innerHTML = druidcraft.craftCost;
        document.getElementById("druidcraftTotal").innerHTML = druidcraft.craftValue;
    }

    document.getElementById("craftCostTotal").innerHTML = craftTotal();
    startingExperience();

}

// - - - 

function craftDecrease(typeOfCraft){ // Button to decrease :: 
    var limit = true;  // bypass everything if false

    if(typeOfCraft == "Berserker" && berserker.craftValue > 0 && berserker.craftValue <= 100){                             // Combat Crafts
        tempCraftValue = berserker.craftValue - 1;     // The craft's value being increased.
        tempCraftCost = berserker.craftCost;         // The craft's total cost.
        tempLearningCost = berserker.learningCost;   // The learning cost if not paid.
    }else if(typeOfCraft == "Small Weapons" && smallWeapons.craftValue > 0 && smallWeapons.craftValue <= 100){
        tempCraftValue = smallWeapons.craftValue - 1;
        tempCraftCost = smallWeapons.craftCost;
        tempLearningCost = smallWeapons.learningCost;
    }else if(typeOfCraft == "Medium Weapons" && mediumWeapons.craftValue > 0 && mediumWeapons.craftValue <= 100){
        tempCraftValue = mediumWeapons.craftValue - 1;
        tempCraftCost = mediumWeapons.craftCost;
        tempLearningCost = mediumWeapons.learningCost;
    }else if(typeOfCraft == "Large Weapons" && largeWeapons.craftValue > 0 && largeWeapons.craftValue <= 100){
        tempCraftValue = largeWeapons.craftValue - 1;
        tempCraftCost = largeWeapons.craftCost;
        tempLearningCost = largeWeapons.learningCost;
    }else if(typeOfCraft == "Maneuverability" && maneuverability.craftValue > 0 && maneuverability.craftValue <= 100){
        tempCraftValue = maneuverability.craftValue - 1;
        tempCraftCost = maneuverability.craftCost;
        tempLearningCost = maneuverability.learningCost;
    }else if(typeOfCraft == "Martial Ranged" && martialRanged.craftValue > 0 && martialRanged.craftValue <= 100){
        tempCraftValue = martialRanged.craftValue - 1;
        tempCraftCost = martialRanged.craftCost;
        tempLearningCost = martialRanged.learningCost;
    }else if(typeOfCraft == "Simple Ranged" && simpleRanged.craftValue > 0 && simpleRanged.craftValue <= 100){
        tempCraftValue = simpleRanged.craftValue - 1;
        tempCraftCost = simpleRanged.craftCost;
        tempLearningCost = simpleRanged.learningCost;
    }else if(typeOfCraft == "Siege Ranged" && siegeRanged.craftValue > 0 && siegeRanged.craftValue <= 100){
        tempCraftValue = siegeRanged.craftValue - 1;
        tempCraftCost = siegeRanged.craftCost;
        tempLearningCost = siegeRanged.learningCost;
    }else if(typeOfCraft == "Mounted Archery" && mountedArchery.craftValue > 0 && mountedArchery.craftValue <= 100){
        tempCraftValue = mountedArchery.craftValue - 1;
        tempCraftCost = mountedArchery.craftCost;
        tempLearningCost = mountedArchery.learningCost;
    }else if(typeOfCraft == "Combat Tactics" && combatTactics.craftValue > 0 && combatTactics.craftValue <= 100){
        tempCraftValue = combatTactics.craftValue - 1;
        tempCraftCost = combatTactics.craftCost;
        tempLearningCost = combatTactics.learningCost;
    }else if(typeOfCraft == "Defense" && defense.craftValue > 0 && defense.craftValue <= 100){
        tempCraftValue = defense.craftValue - 1;
        tempCraftCost = defense.craftCost;
        tempLearningCost = defense.learningCost;
    }else if(typeOfCraft == "Animal Handling" && animalHandling.craftValue > 0 && animalHandling.craftValue <= 100){        // Common Crafts
        tempCraftValue = animalHandling.craftValue - 1;
        tempCraftCost = animalHandling.craftCost;
        tempLearningCost = animalHandling.learningCost;
    }else if(typeOfCraft == "Athletics" && athletics.craftValue > 0 && athletics.craftValue <= 100){
        tempCraftValue = athletics.craftValue - 1;
        tempCraftCost = athletics.craftCost;
        tempLearningCost = athletics.learningCost;
    }else if(typeOfCraft == "Husbandry" && husbandry.craftValue > 0 && husbandry.craftValue <= 100){
        tempCraftValue = husbandry.craftValue - 1;
        tempCraftCost = husbandry.craftCost;
        tempLearningCost = husbandry.learningCost;
    }else if(typeOfCraft == "Laborer" && laborer.craftValue > 0 && laborer.craftValue <= 100){
        tempCraftValue = laborer.craftValue - 1;
        tempCraftCost = laborer.craftCost;
        tempLearningCost = laborer.learningCost;
    }else if(typeOfCraft == "Riding" && riding.craftValue > 0 && riding.craftValue <= 100){
        tempCraftValue = riding.craftValue - 1;
        tempCraftCost = riding.craftCost;
        tempLearningCost = riding.learningCost;
    }else if(typeOfCraft == "Survivalist" && survivalist.craftValue > 0 && survivalist.craftValue <= 100){
        tempCraftValue = survivalist.craftValue - 1;
        tempCraftCost = survivalist.craftCost;
        tempLearningCost = survivalist.learningCost;
    }else if(typeOfCraft == "Seamanship" && seamanship.craftValue > 0 && seamanship.craftValue <= 100){
        tempCraftValue = seamanship.craftValue - 1;
        tempCraftCost = seamanship.craftCost;
        tempLearningCost = seamanship.learningCost;
    }else if(typeOfCraft == "Thievery" && thievery.craftValue > 0 && thievery.craftValue <= 100){
        tempCraftValue = thievery.craftValue - 1;
        tempCraftCost = thievery.craftCost;
        tempLearningCost = thievery.learningCost;
    }else if(typeOfCraft == "Art" && art.craftValue > 0 && art.craftValue <= 100){                                          // Skilled Crafts
        tempCraftValue = art.craftValue - 1;
        tempCraftCost = art.craftCost;
        tempLearningCost = art.learningCost;
    }else if(typeOfCraft == "Botany" && botany.craftValue > 0 && botany.craftValue <= 100){
        tempCraftValue = botany.craftValue - 1;
        tempCraftCost = botany.craftCost;
        tempLearningCost = botany.learningCost;
    }else if(typeOfCraft == "Craftsman" && craftsman.craftValue > 0 && craftsman.craftValue <= 100){
        tempCraftValue = craftsman.craftValue - 1;
        tempCraftCost = craftsman.craftCost;
        tempLearningCost = craftsman.learningCost;
    }else if(typeOfCraft == "Forging" && forging.craftValue > 0 && forging.craftValue <= 100){
        tempCraftValue = forging.craftValue - 1;
        tempCraftCost = forging.craftCost;
        tempLearningCost = forging.learningCost;
    }else if(typeOfCraft == "Lorecraft" && lorecraft.craftValue > 0 && lorecraft.craftValue <= 100){
        tempCraftValue = lorecraft.craftValue - 1;
        tempCraftCost = lorecraft.craftCost;
        tempLearningCost = lorecraft.learningCost;
    }else if(typeOfCraft == "Mercantilism" && mercantilism.craftValue > 0 && mercantilism.craftValue <= 100){
        tempCraftValue = mercantilism.craftValue - 1;
        tempCraftCost = mercantilism.craftCost;
        tempLearningCost = mercantilism.learningCost;
    }else if(typeOfCraft == "Performance" && performance.craftValue > 0 && performance.craftValue <= 100){
        tempCraftValue = performance.craftValue - 1;
        tempCraftCost = performance.craftCost;
        tempLearningCost = performance.learningCost;
    }else if(typeOfCraft == "Tinkering" && tinkering.craftValue > 0 && tinkering.craftValue <= 100){
        tempCraftValue = tinkering.craftValue - 1;
        tempCraftCost = tinkering.craftCost;
        tempLearningCost = tinkering.learningCost;
    }else if(typeOfCraft == "Underworld" && underworld.craftValue > 0 && underworld.craftValue <= 100){
        tempCraftValue = underworld.craftValue - 1;
        tempCraftCost = underworld.craftCost;
        tempLearningCost = underworld.learningCost;
    }else if(typeOfCraft == "Alchemy" && alchemy.craftValue > 0 && alchemy.craftValue <= 100){                          // Academic Crafts
        tempCraftValue = alchemy.craftValue - 1;
        tempCraftCost = alchemy.craftCost;
        tempLearningCost = alchemy.learningCost;
    }else if(typeOfCraft == "Culture" && culture.craftValue > 0 && culture.craftValue <= 100){
        tempCraftValue = culture.craftValue - 1;
        tempCraftCost = culture.craftCost;
        tempLearningCost = culture.learningCost;
    }else if(typeOfCraft == "Language" && language.craftValue > 0 && language.craftValue <= 100){
        tempCraftValue = language.craftValue - 1;
        tempCraftCost = language.craftCost;
        tempLearningCost = language.learningCost;
    }else if(typeOfCraft == "Linguistics" && linguistics.craftValue > 0 && linguistics.craftValue <= 100){
        tempCraftValue = linguistics.craftValue - 1;
        tempCraftCost = linguistics.craftCost;
        tempLearningCost = linguistics.learningCost;
    }else if(typeOfCraft == "Litigation" && litigation.craftValue > 0 && litigation.craftValue <= 100){
        tempCraftValue = litigation.craftValue - 1;
        tempCraftCost = litigation.craftCost;
        tempLearningCost = litigation.learningCost;
    }else if(typeOfCraft == "Savant" && savant.craftValue > 0 && savant.craftValue <= 100){
        tempCraftValue = savant.craftValue - 1;
        tempCraftCost = savant.craftCost;
        tempLearningCost = savant.learningCost;
    }else if(typeOfCraft == "Druidcraft" && druidcraft.craftValue > 0 && druidcraft.craftValue <= 100){                 // Magic Crafts
        tempCraftValue = druidcraft.craftValue - 1;
        tempCraftCost = druidcraft.craftCost;
        tempLearningCost = druidcraft.learningCost;
    }else{
        limit = false; // if it isn't within a 0 - 100, bypass the calculations.
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

    if(typeOfCraft == "Berserker" && limit == true){                             // Combat Crafts
        berserker.craftValue = tempCraftValue;                                   // The changed craft's value being returned.
        berserker.craftCost = tempCraftCost;                                     // The craft's total cost being returned.
        document.getElementById("berserkerCost").innerHTML = berserker.craftCost;
        document.getElementById("berserkerTotal").innerHTML = berserker.craftValue;
    }else if(typeOfCraft == "Small Weapons" && limit == true){
        smallWeapons.craftValue = tempCraftValue;
        smallWeapons.craftCost = tempCraftCost;
        document.getElementById("smallWeaponsCost").innerHTML = smallWeapons.craftCost;
        document.getElementById("smallWeaponsTotal").innerHTML = smallWeapons.craftValue;
    }else if(typeOfCraft == "Medium Weapons" && limit == true){
        mediumWeapons.craftValue = tempCraftValue;
        mediumWeapons.craftCost = tempCraftCost;
        document.getElementById("mediumWeaponsCost").innerHTML = mediumWeapons.craftCost;
        document.getElementById("mediumWeaponsTotal").innerHTML = mediumWeapons.craftValue;
    }else if(typeOfCraft == "Large Weapons" && limit == true){
        largeWeapons.craftValue = tempCraftValue;
        largeWeapons.craftCost = tempCraftCost;
        document.getElementById("largeWeaponsCost").innerHTML = largeWeapons.craftCost;
        document.getElementById("largeWeaponsTotal").innerHTML = largeWeapons.craftValue;
    }else if(typeOfCraft == "Maneuverability" && limit == true){
        maneuverability.craftValue = tempCraftValue;
        maneuverability.craftCost = tempCraftCost;
        document.getElementById("maneuverabilityCost").innerHTML = maneuverability.craftCost;
        document.getElementById("maneuverabilityTotal").innerHTML = maneuverability.craftValue;
    }else if(typeOfCraft == "Martial Ranged" && limit == true){
        martialRanged.craftValue = tempCraftValue;
        martialRanged.craftCost = tempCraftCost;
        document.getElementById("martialRangedCost").innerHTML = martialRanged.craftCost;
        document.getElementById("martialRangedTotal").innerHTML = martialRanged.craftValue;
    }else if(typeOfCraft == "Simple Ranged" && limit == true){
        simpleRanged.craftValue = tempCraftValue;
        simpleRanged.craftCost = tempCraftCost;
        document.getElementById("simpleRangedCost").innerHTML = simpleRanged.craftCost;
        document.getElementById("simpleRangedTotal").innerHTML = simpleRanged.craftValue;
    }else if(typeOfCraft == "Siege Ranged" && limit == true){
        siegeRanged.craftValue = tempCraftValue;
        siegeRanged.craftCost = tempCraftCost;
        document.getElementById("siegeRangedCost").innerHTML = siegeRanged.craftCost;
        document.getElementById("siegeRangedTotal").innerHTML = siegeRanged.craftValue;
    }else if(typeOfCraft == "Mounted Archery" && limit == true){
        mountedArchery.craftValue = tempCraftValue;
        mountedArchery.craftCost = tempCraftCost;
        document.getElementById("mountedArcheryCost").innerHTML = mountedArchery.craftCost;
        document.getElementById("mountedArcheryTotal").innerHTML = mountedArchery.craftValue;
    }else if(typeOfCraft == "Combat Tactics" && limit == true){
        combatTactics.craftValue = tempCraftValue;
        combatTactics.craftCost = tempCraftCost;
        document.getElementById("combatTacticsCost").innerHTML = combatTactics.craftCost;
        document.getElementById("combatTacticsTotal").innerHTML = combatTactics.craftValue;
    }else if(typeOfCraft == "Defense" && limit == true){
        defense.craftValue = tempCraftValue;
        defense.craftCost = tempCraftCost;
        document.getElementById("defenseCost").innerHTML = defense.craftCost;
        document.getElementById("defenseTotal").innerHTML = defense.craftValue;
    }else if(typeOfCraft == "Animal Handling" && limit == true){        // Common Crafts
        animalHandling.craftValue = tempCraftValue;
        animalHandling.craftCost = tempCraftCost;
        document.getElementById("animalHandlingCost").innerHTML = animalHandling.craftCost;
        document.getElementById("animalHandlingTotal").innerHTML = animalHandling.craftValue;
    }else if(typeOfCraft == "Athletics" && limit == true){
        athletics.craftValue = tempCraftValue;
        athletics.craftCost = tempCraftCost;
        document.getElementById("athleticsCost").innerHTML = athletics.craftCost;
        document.getElementById("athleticsTotal").innerHTML = athletics.craftValue;
    }else if(typeOfCraft == "Husbandry" && limit == true){
        husbandry.craftValue = tempCraftValue;
        husbandry.craftCost = tempCraftCost;
        document.getElementById("husbandryCost").innerHTML = husbandry.craftCost;
        document.getElementById("husbandryTotal").innerHTML = husbandry.craftValue;
    }else if(typeOfCraft == "Laborer" && limit == true){
        laborer.craftValue = tempCraftValue;
        laborer.craftCost = tempCraftCost;
        document.getElementById("laborerCost").innerHTML = laborer.craftCost;
        document.getElementById("laborerTotal").innerHTML = laborer.craftValue;
    }else if(typeOfCraft == "Riding" && limit == true){
        riding.craftValue = tempCraftValue;
        riding.craftCost = tempCraftCost;
        document.getElementById("ridingCost").innerHTML = riding.craftCost;
        document.getElementById("ridingTotal").innerHTML = riding.craftValue;
    }else if(typeOfCraft == "Survivalist" && limit == true){
        survivalist.craftValue = tempCraftValue;
        survivalist.craftCost = tempCraftCost;
        document.getElementById("survivalistCost").innerHTML = survivalist.craftCost;
        document.getElementById("survivalistTotal").innerHTML = survivalist.craftValue;
    }else if(typeOfCraft == "Seamanship" && limit == true){
        seamanship.craftValue = tempCraftValue;
        seamanship.craftCost = tempCraftCost;
        document.getElementById("seamanshipCost").innerHTML = seamanship.craftCost;
        document.getElementById("seamanshipTotal").innerHTML = seamanship.craftValue;
    }else if(typeOfCraft == "Thievery" && limit == true){
        thievery.craftValue = tempCraftValue;
        thievery.craftCost = tempCraftCost;
        document.getElementById("thieveryCost").innerHTML = thievery.craftCost;
        document.getElementById("thieveryTotal").innerHTML = thievery.craftValue;
    }else if(typeOfCraft == "Art" && limit == true){                        // Skilled Crafts
        art.craftValue = tempCraftValue;
        art.craftCost = tempCraftCost;
        document.getElementById("artCost").innerHTML = art.craftCost;
        document.getElementById("artTotal").innerHTML = art.craftValue;
    }else if(typeOfCraft == "Botany" && limit == true){
        botany.craftValue = tempCraftValue;
        botany.craftCost = tempCraftCost;
        document.getElementById("botanyCost").innerHTML = botany.craftCost;
        document.getElementById("botanyTotal").innerHTML = botany.craftValue;
    }else if(typeOfCraft == "Craftsman" && limit == true){
        craftsman.craftValue = tempCraftValue;
        craftsman.craftCost = tempCraftCost;
        document.getElementById("craftsmanCost").innerHTML = craftsman.craftCost;
        document.getElementById("craftsmanTotal").innerHTML = craftsman.craftValue;
    }else if(typeOfCraft == "Forging" && limit == true){
        forging.craftValue = tempCraftValue;
        forging.craftCost = tempCraftCost;
        document.getElementById("forgingCost").innerHTML = forging.craftCost;
        document.getElementById("forgingTotal").innerHTML = forging.craftValue;
    }else if(typeOfCraft == "Lorecraft" && limit == true){
        lorecraft.craftValue = tempCraftValue;
        lorecraft.craftCost = tempCraftCost;
        document.getElementById("lorecraftCost").innerHTML = lorecraft.craftCost;
        document.getElementById("lorecraftTotal").innerHTML = lorecraft.craftValue;
    }else if(typeOfCraft == "Mercantilism" && limit == true){
        mercantilism.craftValue = tempCraftValue;
        mercantilism.craftCost = tempCraftCost;
        document.getElementById("mercantilismCost").innerHTML = mercantilism.craftCost;
        document.getElementById("mercantilismTotal").innerHTML = mercantilism.craftValue;
    }else if(typeOfCraft == "Performance" && limit == true){
        performance.craftValue = tempCraftValue;
        performance.craftCost = tempCraftCost;
        document.getElementById("performanceCost").innerHTML = performance.craftCost;
        document.getElementById("performanceTotal").innerHTML = performance.craftValue;
    }else if(typeOfCraft == "Tinkering" && limit == true){
        tinkering.craftValue = tempCraftValue;
        tinkering.craftCost = tempCraftCost;
        document.getElementById("tinkeringCost").innerHTML = tinkering.craftCost;
        document.getElementById("tinkeringTotal").innerHTML = tinkering.craftValue;
    }else if(typeOfCraft == "Underworld" && limit == true){
        underworld.craftValue = tempCraftValue;
        underworld.craftCost = tempCraftCost;
        document.getElementById("underworldCost").innerHTML = underworld.craftCost;
        document.getElementById("underworldTotal").innerHTML = underworld.craftValue;
    }else if(typeOfCraft == "Alchemy" && limit == true){                          // Academic Crafts
        alchemy.craftValue = tempCraftValue;
        alchemy.craftCost = tempCraftCost;
        document.getElementById("alchemyCost").innerHTML = alchemy.craftCost;
        document.getElementById("alchemyTotal").innerHTML = alchemy.craftValue;
    }else if(typeOfCraft == "Culture" && limit == true){
        culture.craftValue = tempCraftValue;
        culture.craftCost = tempCraftCost;
        document.getElementById("cultureCost").innerHTML = culture.craftCost;
        document.getElementById("cultureTotal").innerHTML = culture.craftValue;
    }else if(typeOfCraft == "Language" && limit == true){
        language.craftValue = tempCraftValue;
        language.craftCost = tempCraftCost;
        document.getElementById("languageCost").innerHTML = language.craftCost;
        document.getElementById("languageTotal").innerHTML = language.craftValue;
    }else if(typeOfCraft == "Linguistics" && limit == true){
        linguistics.craftValue = tempCraftValue;
        linguistics.craftCost = tempCraftCost;
        document.getElementById("linguisticsCost").innerHTML = linguistics.craftCost;
        document.getElementById("linguisticsTotal").innerHTML = linguistics.craftValue;
    }else if(typeOfCraft == "Litigation" && limit == true){
        litigation.craftValue = tempCraftValue;
        litigation.craftCost = tempCraftCost;
        document.getElementById("litigationCost").innerHTML = litigation.craftCost;
        document.getElementById("litigationTotal").innerHTML = litigation.craftValue;
    }else if(typeOfCraft == "Savant" && limit == true){
        savant.craftValue = tempCraftValue;
        savant.craftCost = tempCraftCost;
        document.getElementById("savantCost").innerHTML = savant.craftCost;
        document.getElementById("savantTotal").innerHTML = savant.craftValue;
    }else if(typeOfCraft == "Druidcraft" && limit == true){                         // Magic Crafts
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
    totalCraftCost = berserker.craftCost + smallWeapons.craftCost + mediumWeapons.craftCost + largeWeapons.craftCost + maneuverability.craftCost + martialRanged.craftCost + simpleRanged.craftCost + siegeRanged.craftCost + mountedArchery.craftCost + combatTactics.craftCost + defense.craftCost + animalHandling.craftCost + athletics.craftCost + husbandry.craftCost + laborer.craftCost + riding.craftCost + survivalist.craftCost + seamanship.craftCost + thievery.craftCost + art.craftCost + botany.craftCost + craftsman.craftCost + forging.craftCost + lorecraft.craftCost + mercantilism.craftCost + performance.craftCost + tinkering.craftCost + underworld.craftCost + alchemy.craftCost + culture.craftCost + language.craftCost + linguistics.craftCost + litigation.craftCost + savant.craftCost + druidcraft.craftCost
    return totalCraftCost;
}

// - - - 


// - - - 



// - - - EXPERIENCE

var initialValue = 0;

function startingExperience(){
    initialValue = document.getElementById("startingValue").value;
    document.getElementById("Remaining").innerHTML = initialValue - (craftTotal() + traitTotal());
}


