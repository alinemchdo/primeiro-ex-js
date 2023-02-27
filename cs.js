const round = 2; //Entre 1 e 16
let money = 1200;
const killWApon = 'Knife'; // 'Knife', 'AWP', 'Desert Eagle', 'Motolov'
const win = true;
const howWin = 'Bomb explode';//'Eliminado', 'Tempo esgotado', 'Bomb has been planted',Bomb has been defused', 'Bomb Explode'
const defuseBomb = true;
const BombDeTOnate = false;

if(round === 1 || round === 16){   
    money = 800; 
} else if(win === true && (howWin === 'Eliminando' || 'Tempo esgotado')){
    money += 3250;
}
else if(win === true && (howWin === 'Bomb has been planted' || 'Tempo esgotado')){
    money += 3550;
}
else if(win === true && (howWin === 'Bomb has been planted' || 'Bomb explode')){
    money += 3550;
}
if( round != 1 && round != 16){
    switch (killWApon) {
        case 'Knife':
            money += 1500;
            break;
            
        case 'AWP':
                money += 100;
                break;

        case 'Desert Eagle':
                    money += 300;
                    break;

        case 'Motolov':
            money += 500;
            break;
    
        default: 
        console.log('Arma não Encontrada')
            break;
    }
}

console.log('money:$' + money)