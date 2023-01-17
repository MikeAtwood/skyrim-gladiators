// this allows us to name our player and save that data to playerName
 let playerName = window.prompt("What is your name?");
 let playerHealth = 100;
 let playerAttack = 10;

 let enemyName = ["Forsworn"]
 let enemyHealth = 50;
 let enemyAttack = 12;

const fight = () => {
    window.alert("Welcome to Skyrim!"); 
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has " +  enemyHealth + " health left.");
    }

    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!")
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.")
    } 
}

fight();

