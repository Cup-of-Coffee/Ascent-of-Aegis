
// - - - RACES

function RaceConstructor(raceName,raceValor,raceVolition,raceFinesse,raceCognition){ // Constructor for the races.
    this.raceName = raceName;
    this.raceValor = raceValor;
    this.raceVolition = raceVolition;
    this.raceCognition = raceCognition;
    this.raceFinesse = raceFinesse;
}

let Alfar = new RaceConstructor("Alfar",40,45,65,50);

let Human = new RaceConstructor("Human",50,50,50,50);

let MountainDweorg = new RaceConstructor("Mountain Dweorg",35,40,60,65);

let StoorsLeprauchanus = new RaceConstructor("Stoors(Leprauchanus",35,45,50,70);

let StoorsShireling = new RaceConstructor("Stoors(Shireling)",30,70,55,45);

let SvartAlfar = new RaceConstructor("SvartAlfar",50,40,50,60);

let Ungzefer = new RaceConstructor("Ungzefer",30,30,80,30);

let Yrch = new RaceConstructor("Yrch",70,50,40,40);

var ChosenRace = new RaceConstructor();

// - - - FUNCTIONS

function getRace() { // The menu to select race :: 
    
    race = document.getElementById("raceTab").innerHTML = document.getElementById("raceSelect").value; // Get the chosen race from the dropdown

    if(race == "Alfar"){
        ChosenRace.raceName = Alfar.raceName;
        document.getElementById("valorTab").innerHTML = ChosenRace.raceValor = Alfar.raceValor;
        document.getElementById("volitionTab").innerHTML = ChosenRace.raceVolition = Alfar.raceVolition;
        document.getElementById("finesseTab").innerHTML = ChosenRace.raceFinesse = Alfar.raceFinesse;
        document.getElementById("cognitionTab").innerHTML = ChosenRace.raceCognition = Alfar.raceCognition;
        // document.getElementById("specialTab").innerHTML = "special traits";
    }else if(race == "Human"){   // Human Traits
        ChosenRace.raceName = Human.raceName;
        document.getElementById("valorTab").innerHTML = ChosenRace.raceValor = Human.raceValor;
        document.getElementById("volitionTab").innerHTML = ChosenRace.raceVolition = Human.raceVolition;
        document.getElementById("finesseTab").innerHTML = ChosenRace.raceFinesse = Human.raceFinesse;
        document.getElementById("cognitionTab").innerHTML = ChosenRace.raceCognition = Human.raceCognition;
        // document.getElementById("specialTab").innerHTML = "special traits";
    }else if(race == "Mountain Dweorg"){
        ChosenRace.raceName = MountainDweorg.raceName;
        document.getElementById("valorTab").innerHTML = ChosenRace.raceValor = MountainDweorg.raceValor;
        document.getElementById("volitionTab").innerHTML = ChosenRace.raceVolition = MountainDweorg.raceVolition;
        document.getElementById("finesseTab").innerHTML = ChosenRace.raceFinesse = MountainDweorg.raceFinesse;
        document.getElementById("cognitionTab").innerHTML = ChosenRace.raceCognition = MountainDweorg.raceCognition;
        // document.getElementById("specialTab").innerHTML = "special traits";
    }else if(race == "Stoors(Leprauchanus)"){
        ChosenRace.raceName = StoorsLeprauchanus.raceName;
        document.getElementById("valorTab").innerHTML = ChosenRace.raceValor = StoorsLeprauchanus.raceValor;
        document.getElementById("volitionTab").innerHTML = ChosenRace.raceVolition = StoorsLeprauchanus.raceVolition;
        document.getElementById("finesseTab").innerHTML = ChosenRace.raceFinesse = StoorsLeprauchanus.raceFinesse;
        document.getElementById("cognitionTab").innerHTML = ChosenRace.raceCognition = StoorsLeprauchanus.raceCognition;
        // document.getElementById("specialTab").innerHTML = "special traits";
    }else if(race == "Stoors(Shireling)"){
        ChosenRace.raceName = StoorsShireling.raceName;
        document.getElementById("valorTab").innerHTML = ChosenRace.raceValor = StoorsShireling.raceValor;
        document.getElementById("volitionTab").innerHTML = ChosenRace.raceVolition = StoorsShireling.raceVolition;
        document.getElementById("finesseTab").innerHTML = ChosenRace.raceFinesse = StoorsShireling.raceFinesse;
        document.getElementById("cognitionTab").innerHTML = ChosenRace.raceCognition = StoorsShireling.raceCognition;
        // document.getElementById("specialTab").innerHTML = "special traits";
    }else if(race == "SvartAlfar"){
        ChosenRace.raceName = SvartAlfar.raceName;
        document.getElementById("valorTab").innerHTML = ChosenRace.raceValor = SvartAlfar.raceValor;
        document.getElementById("volitionTab").innerHTML = ChosenRace.raceVolition = SvartAlfar.raceVolition;
        document.getElementById("finesseTab").innerHTML = ChosenRace.raceFinesse = SvartAlfar.raceFinesse;
        document.getElementById("cognitionTab").innerHTML = ChosenRace.raceCognition = SvartAlfar.raceCognition;
        // document.getElementById("specialTab").innerHTML = "special traits";
    }else if(race == "Ungzefer"){
        ChosenRace.raceName = Ungzefer.raceName;
        document.getElementById("valorTab").innerHTML = ChosenRace.raceValor = Ungzefer.raceValor;
        document.getElementById("volitionTab").innerHTML = ChosenRace.raceVolition = Ungzefer.raceVolition;
        document.getElementById("finesseTab").innerHTML = ChosenRace.raceFinesse = Ungzefer.raceFinesse;
        document.getElementById("cognitionTab").innerHTML = ChosenRace.raceCognition = Ungzefer.raceCognition;
        // document.getElementById("specialTab").innerHTML = "special traits";
    }else if(race == "Yrch"){
        ChosenRace.raceName = Yrch.raceName;
        document.getElementById("valorTab").innerHTML = ChosenRace.raceValor = Yrch.raceValor;
        document.getElementById("volitionTab").innerHTML = ChosenRace.raceVolition = Yrch.raceVolition;
        document.getElementById("finesseTab").innerHTML = ChosenRace.raceFinesse = Yrch.raceFinesse;
        document.getElementById("cognitionTab").innerHTML = ChosenRace.raceCognition = Yrch.raceCognition;
        // document.getElementById("specialTab").innerHTML = "special traits";
    }

    totalValor = ChosenRace.raceValor;
    totalVolition = ChosenRace.raceVolition;
    totalFinesse = ChosenRace.raceFinesse;
    totalCognition = ChosenRace.raceCognition;
    
}

// - - - 

var valorInput = 0; var volitionInput = 0; var finesseInput = 0; var cognitionInput = 0; var newValue = 0;
var valorCost = 0; var volitionCost = 0; var finesseCost = 0; var cognitionCost = 0; var traitCost = 0;
var totalTraitCost = 0; // The total cost of EXP for changing to the set value.

var totalValor = 0;     
var totalVolition = 0;  
var totalFinesse = 0;   
var totalCognition = 0; 

function increase(typeOfTrait){ // Button to increase :: 
    if(typeOfTrait == "Valor"){
        traitCost = valorCost;                          // The cost in EXP of valor's change
        newValue = valorInput + ChosenRace.raceValor;   // The new value.
    }else if(typeOfTrait == "Volition"){
        traitCost = volitionCost;
        newValue = volitionInput + ChosenRace.raceVolition;
    }else if(typeOfTrait == "Finesse"){
        traitCost = finesseCost;
        newValue = finesseInput + ChosenRace.raceFinesse;
    }else if(typeOfTrait == "Cognition"){
        traitCost = cognitionCost;
        newValue = cognitionInput + ChosenRace.raceCognition;
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
            traitTotal(totalValor);                                         // Total EXP counter
            document.getElementById("valorCost").innerHTML = valorCost;
            document.getElementById("valorTotal").innerHTML = totalValor;
        }else if(typeOfTrait == "Volition"){
            volitionInput++;
            volitionCost = traitCost;
            totalVolition = newValue
            traitTotal(totalVolition);
            document.getElementById("volitionCost").innerHTML = volitionCost;
            document.getElementById("volitionTotal").innerHTML = totalVolition;
        }else if(typeOfTrait == "Finesse"){
            finesseInput++;
            finesseCost = traitCost;
            totalFinesse = newValue
            traitTotal(totalFinesse);
            document.getElementById("finesseCost").innerHTML = finesseCost;
            document.getElementById("finesseTotal").innerHTML = totalFinesse;
        }else if(typeOfTrait == "Cognition"){
            cognitionInput++;
            cognitionCost = traitCost;
            totalCognition = newValue
            traitTotal(totalCognition);
            document.getElementById("cognitionCost").innerHTML = cognitionCost;
            document.getElementById("cognitionTotal").innerHTML = totalCognition;
        }else{
            console.log("ERROR AT INCREASEMENT");
        }

        document.getElementById("traitCostTotal").innerHTML = traitTotal();

    }

    console.log(newValue);

}

// - - - 

function decrease(typeOfTrait){ // Button to decrease :: 
    if(typeOfTrait == "Valor"){
        traitCost = valorCost;                          // The cost in EXP of valor's change
        newValue = valorInput + ChosenRace.raceValor;   // The new value.  
        racialLimit = ChosenRace.raceValor;             // The limit to stop going below the race's trait.
    }else if(typeOfTrait == "Volition"){
        traitCost = volitionCost;
        newValue = volitionInput + ChosenRace.raceVolition;
        racialLimit = ChosenRace.raceVolition;
    }else if(typeOfTrait == "Finesse"){
        traitCost = finesseCost;
        newValue = finesseInput + ChosenRace.raceFinesse;
        racialLimit = ChosenRace.raceFinesse;
    }else if(typeOfTrait == "Cognition"){
        traitCost = cognitionCost;
        newValue = cognitionInput + ChosenRace.raceCognition;
        racialLimit = ChosenRace.raceCognition;
    }else{
        console.log("ERROR in picking TypeOfTrait");
    }
    
    if(newValue > 0 && newValue > racialLimit && newValue <= 100){
        
        newValue--;
        
        if(newValue > 0 && newValue <= 10){ //15
            traitCost = traitCost - 15;
            
        }else if(newValue > 10 && newValue <= 20){ //15
            traitCost = traitCost - 15;
            
        }else if(newValue > 20 && newValue <= 30){ //10
            traitCost = traitCost - 10;

        }else if(newValue > 30 && newValue <= 40){ //5
            traitCost = traitCost - 5;
            
        }else if(newValue > 40 && newValue <= 50){ //2
            traitCost = traitCost - 2;

        }else if(newValue > 50 && newValue <= 60){ //2
            traitCost = traitCost - 2;

        }else if(newValue > 60 && newValue <= 70){ //5
            traitCost = traitCost - 5;

        }else if(newValue > 70 && newValue <= 80){ //10
            traitCost = traitCost - 10;
            
        }else if(newValue > 80 && newValue <= 90){ //15
            traitCost = traitCost - 15;
            
        }else if(newValue > 90 && newValue <= 100){ //20
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

}

// - - - 

function traitTotal(){
    return totalTraitCost = valorCost + volitionCost + finesseCost + cognitionCost;
}

// - - - 

