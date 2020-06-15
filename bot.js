const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const prefix = "!"
var currentCriticalHitSetting = true;
var exampleEmbed = new Discord.MessageEmbed();
var embed = new Discord.MessageEmbed();



client.on('ready', () => {
    console.log("Online");
});

//check if message is send | msg = message
client.on('message', msg => {
    //create access to the json file where the user data is saved
    var content = fs.readFileSync("./daten.json");
    var editedcontent = JSON.parse(content)[msg.author.username];


    //create embed message with user character data
   if(msg.content.toLowerCase().startsWith(prefix + 'stats') ){
        exampleEmbed.setTitle(editedcontent.name)
        exampleEmbed.setAuthor([msg.author.username], editedcontent.setimg, editedcontent.setimg)
        exampleEmbed.setDescription(editedcontent.name + " ist ein/e " + editedcontent.rasse + ". Er/Sie ist hauptberuflich " + editedcontent.klasse + ".")
        exampleEmbed.setColor("#B900FF");
        exampleEmbed.addFields(

            { name: 'STATS!', value: "hier befinden sich deine Charakter Statistiken:" },
            
            //{ name: '\u200B', value: '\u200B' },
            { name: 'Level:', value: "> " + editedcontent.level, inline: true },
            { name: 'Proficiency:', value: "+ " + editedcontent.prof, inline: true },
            { name: '\u300A', value: '\u300A' },
            { name: 'STR:', value: "> " + editedcontent.str + "\n " + "\u300B+" + Math.floor((editedcontent.str - 10)/ 2), inline: true },
            { name: 'DEX:', value: "> " + editedcontent.dex + "\n " + "\u300B+" + Math.floor((editedcontent.dex - 10)/ 2), inline: true },
            { name: 'CON:', value: "> " + editedcontent.con + "\n " + "\u300B+" + Math.floor((editedcontent.con - 10)/ 2), inline: true },
            { name: 'INT:', value: "> " + editedcontent.int + "\n " + "\u300B+" + Math.floor((editedcontent.int - 10)/ 2), inline: true },
            { name: 'WIS:', value: "> " + editedcontent.wis + "\n " + "\u300B+" + Math.floor((editedcontent.wis - 10)/ 2), inline: true },
            { name: 'CHA:', value: "> " + editedcontent.cha + "\n " + "\u300B+" + Math.floor((editedcontent.cha - 10)/ 2), inline: true },
        )
        exampleEmbed.setImage(editedcontent.setimg)
        exampleEmbed.setTimestamp()
        exampleEmbed.setFooter('Akryptik Bot by S3CS#0619', 'https://i.imgur.com/onja8bP.png');
    
        msg.channel.send(exampleEmbed);

        exampleEmbed = new Discord.MessageEmbed()
        }
        
        if(msg.content.toLowerCase().startsWith(prefix + 'prof') ){
            //Saving Throws
            if(editedcontent.savingthrows.Strength != true){var tempostr = "\u2610"; var tempostrsum = Math.floor(((editedcontent.str - 10) / 2)) }
             else{tempostr = "\u2612"; var tempostrsum = Math.floor(((editedcontent.str - 10) / 2)) + editedcontent.prof};
            if(editedcontent.savingthrows.Dexterity != true){var tempodex = "\u2610"; var tempodexsum = Math.floor(((editedcontent.dex - 10) / 2)) }
             else{tempodex = "\u2612"; var tempodexsum = Math.floor(((editedcontent.dex - 10) / 2)) + editedcontent.prof};
            if(editedcontent.savingthrows.Consti != true){var tempocon = "\u2610";var tempoconsum = Math.floor(((editedcontent.con - 10) / 2)) }
             else{tempocon = "\u2612"; var tempoconsum = Math.floor(((editedcontent.con - 10) / 2)) + editedcontent.prof};
            if(editedcontent.savingthrows.Wisdom != true){var tempowis = "\u2610"; var tempowissum = Math.floor(((editedcontent.wis - 10) / 2)) }
             else{tempowis = "\u2612"; var tempowissum = Math.floor(((editedcontent.wis - 10) / 2)) + editedcontent.prof};
            if(editedcontent.savingthrows.Intel != true){var tempoint = "\u2610";var tempointsum = Math.floor(((editedcontent.int - 10) / 2)) }
             else{tempoint = "\u2612"; var tempointsum = Math.floor(((editedcontent.int - 10) / 2)) + editedcontent.prof };
            if(editedcontent.savingthrows.Charisma != true){var tempocha = "\u2610";var tempochasum = Math.floor(((editedcontent.cha - 10) / 2))  }
             else{tempocha = "\u2612"; var tempochasum = Math.floor(((editedcontent.cha - 10) / 2)) + editedcontent.prof};
            //Proficiencies
            if(editedcontent.proficiencies.Athletics != true){var tempoath = "\u2610"; var tempoathsum  = Math.floor(((editedcontent.str - 10) / 2))}
             else{tempoath = "\u2612"; var tempoathsum = Math.floor(((editedcontent.str - 10) / 2)) + editedcontent.prof };
            if(editedcontent.proficiencies.Acrobatics != true){var tempoacro = "\u2610"; var tempoacrosum = Math.floor(((editedcontent.dex - 10) / 2))}
             else{tempoacro = "\u2612"; var tempoathsum = Math.floor(((editedcontent.dex - 10) / 2)) + editedcontent.prof };
            if(editedcontent.proficiencies.Sleight != true){var temposle = "\u2610"; var temposlesum = Math.floor(((editedcontent.dex - 10) / 2))}
            else{temposle = "\u2612"; var temposlesum = Math.floor(((editedcontent.dex - 10) / 2)) + editedcontent.prof};
            if(editedcontent.proficiencies.Stealth != true){var temposte = "\u2610"; var tempostesum = Math.floor(((editedcontent.dex - 10) / 2))}
            else{temposte = "\u2612"; var tempostesum = Math.floor(((editedcontent.dex - 10) / 2)) + editedcontent.prof};
            if(editedcontent.proficiencies.Arcana != true){var tempoarc = "\u2610"; var tempoarcsum = Math.floor(((editedcontent.int - 10) / 2))}
            else{tempoarc = "\u2612"; var tempoarcsum = Math.floor(((editedcontent.int - 10) / 2)) + editedcontent.prof};
            if(editedcontent.proficiencies.History != true){var tempohis = "\u2610"; var tempohissum = Math.floor(((editedcontent.int - 10) / 2))}
            else{tempohis = "\u2612"; var tempohissum = Math.floor(((editedcontent.int - 10) / 2)) + editedcontent.prof};
            if(editedcontent.proficiencies.Investigation != true){var tempoinv = "\u2610"; var tempoinvsum = Math.floor(((editedcontent.int - 10) / 2))}
            else{tempoinv = "\u2612"; var tempoinvsum = Math.floor(((editedcontent.int - 10) / 2)) + editedcontent.prof};
            if(editedcontent.proficiencies.Nature != true){var temponat = "\u2610"; var temponatsum = Math.floor(((editedcontent.int - 10) / 2))}
            else{temponat = "\u2612"; var temponatsum = Math.floor(((editedcontent.int - 10) / 2)) + editedcontent.prof};
            if(editedcontent.proficiencies.Religion != true){var temporel = "\u2610"; var temporelsum = Math.floor(((editedcontent.int - 10) / 2))}
            else{temporel = "\u2612"; var temporelsum = Math.floor(((editedcontent.int - 10) / 2)) + editedcontent.prof};
            if(editedcontent.proficiencies.Animal != true){var tempoani = "\u2610"; var tempoanisum = Math.floor(((editedcontent.wis - 10) / 2))}
            else{tempoani = "\u2612"; var tempoanisum = Math.floor(((editedcontent.wis - 10) / 2)) + editedcontent.prof};
            if(editedcontent.proficiencies.Insight != true){var tempoins = "\u2610"; var tempoinssum = Math.floor(((editedcontent.wis - 10) / 2))}
            else{tempoins = "\u2612"; var tempoinssum = Math.floor(((editedcontent.wis - 10) / 2)) + editedcontent.prof};
            if(editedcontent.proficiencies.Medizin != true){var tempomed = "\u2610"; var tempomedsum = Math.floor(((editedcontent.wis - 10) / 2))}
            else{tempomed = "\u2612"; var tempomedsum = Math.floor(((editedcontent.wis - 10) / 2)) + editedcontent.prof};
            if(editedcontent.proficiencies.Perception != true){var tempoperc = "\u2610"; var tempopercsum = Math.floor(((editedcontent.wis - 10) / 2))}
            else{tempoperc = "\u2612"; var tempopercsum = Math.floor(((editedcontent.wis - 10) / 2)) + editedcontent.prof};
            if(editedcontent.proficiencies.Survival != true){var temposur = "\u2610" ; var temposursum = Math.floor(((editedcontent.wis - 10) / 2))}
             else{temposur = "\u2612"; var temposursum = Math.floor(((editedcontent.wis - 10) / 2)) + editedcontent.prof};
            if(editedcontent.proficiencies.Deception != true){var tempodec = "\u2610"; var tempodecsum = Math.floor(((editedcontent.cha - 10) / 2))}
            else{tempodec = "\u2612"; var tempodecsum = Math.floor(((editedcontent.cha - 10) / 2)) + editedcontent.prof};
            if(editedcontent.proficiencies.Intimidation != true){var tempointi = "\u2610"; var tempointisum = Math.floor(((editedcontent.cha - 10) / 2))}
            else{tempointi = "\u2612"; var tempointisum = Math.floor(((editedcontent.cha - 10) / 2)) + editedcontent.prof};
            if(editedcontent.proficiencies.Performance != true){var tempoperf = "\u2610"; var tempoperfsum = Math.floor(((editedcontent.cha - 10) / 2))} 
            else{tempoperf = "\u2612"; var tempoperfsum = Math.floor(((editedcontent.cha - 10) / 2)) + editedcontent.prof};
            if(editedcontent.proficiencies.Persuasion != true){var tempopers = "\u2610"; var tempoperssum = Math.floor(((editedcontent.cha - 10) / 2))}
            else{tempopers = "\u2612"; var tempoperssum = Math.floor(((editedcontent.cha - 10) / 2)) + editedcontent.prof};
            //FUCK ME
            
            exampleEmbed.setTitle(editedcontent.name)
            exampleEmbed.setAuthor([msg.author.username], editedcontent.setimg, editedcontent.setimg)
            exampleEmbed.setColor("#B900FF");
            exampleEmbed.addFields(
    
                { name: 'Proficiencies!', value: "hier befinden sich deine Charakter Proficiencies und Features:" },
                
                //{ name: '\u200B', value: '\u200B' },
                { name: "\u200B", value: 'Saving Throws:', inline: false },
                { name: 'Strength:', value: tempostr + " +" + tempostrsum, inline: false},
                { name: 'Athletics:', value: tempoath + " +" +tempoathsum, inline: true},
                { name: '\u200B', value: '\u200B' },
                { name: 'Dexterity:', value: tempodex + " +" + tempodexsum, inline: false },
                { name: 'Acrobatics:', value: tempoacrosum + " +" + tempoacro, inline: true },
                { name: 'Sleight of Hand:', value: temposle + " +" + temposlesum , inline: true },
                { name: 'Stealth:', value: temposte + " +" + tempostesum, inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: 'Constitution:', value: tempocon + " +" + tempoconsum , inline: false },
                { name: '\u200B', value: '\u200B' },
                { name: 'Intelligence:', value: tempoint + " +" + tempointsum, inline: false },
                { name: 'Arcana:', value: tempoarc + " +" + tempoarcsum, inline: true },
                { name: 'History:', value: tempohis + " +" + tempohissum, inline: true },
                { name: 'Investigation:', value: tempoinv + " +" + tempoinvsum, inline: true},
                { name: 'Nature:', value: temponat + " +" + temponatsum, inline: true },
                { name: '\u200B', value: "\u200B", inline: true},
                { name: 'Religion:', value: temporel + " +" + temporelsum , inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: 'Wisdom:', value: tempowis + " +" + tempowissum, inline: false },
                { name: 'Animal Handling:', value: tempoani + " +" + tempoanisum, inline: true },
                { name: 'Insight:', value: tempoins + " +" + tempoinssum, inline: true },
                { name: 'Medizin:', value: tempomed + " +" + tempomedsum, inline: true },
                { name: 'Perception:', value: tempoperc + " +" + tempopercsum, inline: true},
                { name: 'Survival:', value: temposur + " +" + temposursum, inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: 'Charisma:', value: tempocha + " +" + tempochasum, inline: false },
                { name: 'Deception:', value: tempodec + " +" + tempodecsum , inline: true },
                { name: 'Intimidation:', value: tempointi + " +" + tempointisum, inline: true },
                { name: 'Performance:', value: tempoperf + " +" + tempoperfsum, inline: true },
                { name: 'Performance:', value: tempopers + " +" + tempoperssum, inline: true }
//                { name: '\u200B', value: '\u200B' },

            )
            exampleEmbed.setImage(editedcontent.setimg)
            exampleEmbed.setTimestamp()
            exampleEmbed.setFooter('Akryptik Bot by S3CS#0619', 'https://i.imgur.com/onja8bP.png');
        
            msg.channel.send(exampleEmbed);
    
            exampleEmbed = new Discord.MessageEmbed()
        }
            
//command list
    listOfCommands = ["!help \n","!new \n","!stats \n","!criton \n","!critoff \n","2d20 \n","!d20 \n","!d100 \n","!d12 \n","!d10 \n","!d8 \n","!d6 \n","!d4 \n"];

    if(msg.content.startsWith(prefix + "help")) {
        if(msg.author.id === client.user.id) return;
        msg.channel.send(listOfCommands);
    }
//Throw 1 D20
            if (msg.content == prefix +'d20') {
                var response = [Math.floor(Math.random() * 20 + 1)];

                if (currentCriticalHitSetting === true) {
                    if (response === 1) {
                        msg.reply('You rolled a 1! :persevere:  Critical Fail!!')
                    }
                    if (response === 20) {
                        msg.reply('You rolled a 20!! :fire::smiley_cat:  CRITICAL HIT!!!')
                    }
                    if (response <= 10 && response != 1 & response != 20) {
                        msg.reply("You rolled a " + response + " !  :eyes: ")
                    }
                    if (response > 10 && response != 1 && response != 20) {
                        msg.reply("You rolled a " + response + " !  :100:")
                    }
                }
                if (currentCriticalHitSetting === false) {
                    if (response >= 10) {
                        msg.reply("You rolled a " + response + " !  :fire: ")
                    }
                    if (response < 10) {
                        msg.reply("You rolled a " + response + " !  :upside_down: ")
                    }
                }
            }

//Dis- & Advantage
    if (msg.content == '2d20') {
        var firstResponse = [Math.floor(Math.random() * 20 + 1)];
        var secondResponse = [Math.floor(Math.random() * 20 + 1)];

        if (currentCriticalHitSetting == true) {

            if (firstResponse == 1) {
                msg.reply('Your first roll is a 1! :skull_crossbones: :skull_crossbones: :skull_crossbones:   Yikes!!')
            }
            if (firstResponse == 20) {
                msg.reply('Your first roll is a 20!! :fire::smiley_cat: HELL YEAH!!')
            }
            if (firstResponse <= 10 && firstResponse != 1 & firstResponse != 20) {
                msg.reply("Your first roll is a " + firstResponse + " !  :eyes:")
            }
            if (firstResponse > 10 && firstResponse != 1 && firstResponse != 20) {
                msg.reply("Your first roll is a " + firstResponse + " !  :100:")
            }
        }
        if (currentCriticalHitSetting == false) {
            if (response >= 10) {
                msg.reply("Your first roll was a " + firstResponse + " !  :fire: ")
            }
            if (response < 10) {
                msg.reply("Your first roll was a " + firstResponse + " !  :grimacing: ")
            }
        }

        if (currentCriticalHitSetting == true) {

            if (secondResponse == 1) {
                msg.reply('Your second roll is a 1! FeelsBadMan!!')
            }
            if (secondResponse == 20) {
                msg.reply('Your second roll is a 20!! :fire::fire::fire:  Comeback is real!')
            }
            if (secondResponse <= 10 && secondResponse != 1 & secondResponse != 20) {
                msg.reply("Your second roll is a " + secondResponse + " !  :skull:")
            }
            if (secondResponse > 10 && secondResponse != 1 && secondResponse != 20) {
                msg.reply("Your second roll is a " + secondResponse + " !  :100:")
            }
        }
        if (currentCriticalHitSetting == false) {
            if (response >= 10) {
                msg.reply("You rolled a " + secondResponse + " !  :fire: ")
            }
            if (response < 10) {
                msg.reply("You rolled a " + secondResponse + " !  :upside_down: ")
            }
        }

    }
//D100
    if (msg.content == prefix + 'd100') {
        var response = [Math.floor(Math.random() * 100 + 1)];
        
        if (response <= 99) {
            msg.reply("You rolled a " + response + " ! ")
        } else if (response == 100) {
            msg.reply("You rolled a " + response + " !?!?!?! ")
        }
    }
//D10
    if (msg.content == prefix +'d10') {
        var response = [Math.floor(Math.random() * 10 + 1)];

        if (response <= 10) {
            msg.reply("You rolled a " + response + " ! ")
        }
        if (response > 10) {
            msg.reply("ERROR")
        }
    
}
//D4
    if (msg.content == prefix +'d4') {
        var response = [Math.floor(Math.random() * 4 + 1)];

        if (response <= 4) {
            msg.reply("You rolled a " + response + " ! ")
        }
        if (response > 4) {
            msg.reply("ERROR")
        }

    }
//D12
    if (msg.content == prefix +'d12') {
        var response = [Math.floor(Math.random() * 12 + 1)];

        if (response <= 12) {
            msg.reply("You rolled a " + response + " ! ")
        }
        if (response > 12) {
            msg.reply("ERROR")
        }

    }
//D8
    if (msg.content == prefix +'d8') {
        var response = [Math.floor(Math.random() * 8 + 1)];

        if (response <= 8) {
            msg.reply("You rolled a " + response + " ! ")
        }
        if (response > 8) {
            msg.reply("ERROR")
        }

    }
//D6
    if (msg.content == prefix +'d6') {
        var response = [Math.floor(Math.random() * 6 + 1)];

        if (response <= 6) {
            msg.reply("You rolled a " + response + " ! ")
        }
        if (response > 6) {
            msg.reply("ERROR")
        }

    }
//new character stats
    if (msg.content == '!new') {
        for(i =0; i<=5; i++){
        var firstResponse = [Math.floor(Math.random() * 6 + 1)];
        var secondResponse = [Math.floor(Math.random() * 6 + 1)];
        var thirdResponse = [Math.floor(Math.random() * 6 + 1)];
        var fourthResponse = [Math.floor(Math.random() * 6 + 1)];

        var array1 = [firstResponse, secondResponse, thirdResponse, fourthResponse];
        var response = array1.sort();

        msg.channel.send("\r" + response);
        }
    }

//Critical hits off
    if (msg.content == '!critoff' && currentCriticalHitSetting != false) {
        currentCriticalHitSetting = !currentCriticalHitSetting;
        msg.reply("Critical Roles are now turned off! :thumbsup: ")
    } else if (msg.content == '!critoff' && currentCriticalHitSetting == false) {
        msg.reply("Critical Roles are already off! :100:")
    }

//Critical hits on
    if (msg.content == '!criton' && currentCriticalHitSetting != true) {
        currentCriticalHitSetting = !currentCriticalHitSetting;
        msg.reply("Critical Roles are now turned on! :thumbsup: ")
    } else if (msg.content == '!criton' && currentCriticalHitSetting == true) {
        msg.reply("Critical Roles are already on! :100:")
    }

});

if(1 == 1){ //Auth-Token
client.login('NjkyMDMzODM1MzY1MzAyMzUz.XnosJA.ZJSMDlHAB35eo7vm8yAsZt5zM5s');
}