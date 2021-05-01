


const pamarskomu = (player) => {
    
    
    let npc1 = Math.floor( Math.random() * 3 + 1);
    let npc2 = Math.floor( Math.random() * 3 + 1);

    switch(player){
        case 1:
            console.log("Player: ✊");
            break;
        case 2:
            console.log("Player: ✋");
            break;
        case 3:
            console.log("Player: ✌");
            break;
        case 0:
            break;
        default:
            console.log("-----------------");
            console.log("Idiotas. Bandyk dar karta");
            console.log("Pasirinkimai:");
            console.log("1 - ✊, 2 - ✋, 3 - ✌, 0 - pabaiga");
            break;
    }
    if (player === 0 || player === '') {
        
        switch(npc1){
            case 1:
                console.log("npc1: ✊");
                break;
            case 2:
                console.log("npc1: ✋");
                break;
            case 3:
                console.log("npc1: ✌");
                break;
            default:
                break;
        }
    }

    switch(npc2){
        case 1:
            console.log("-----------------");
            console.log("npc2: ✊");

            break;
        case 2:
            console.log("-----------------");
            console.log("npc2: ✋");
            break;
        case 3:
            console.log("-----------------");
            console.log("npc2: ✌");
            break;
        default:
            break;
    }
    
    if (player === 1 && npc2 === 3) {
        console.log('---------------');
        console.log('player laimejo!!! 🏆');
    }
    if (npc2 === 1 && player === 3) {
        console.log('---------------');
        console.log('npc2 laimejo!!! 🏆');
    }
    if (player === 2 && npc2 === 1) {
        console.log('---------------');
        console.log('player laimejo!!! 🏆');
    }
    if (npc2 === 2 && player === 1) {
        console.log('---------------');
        console.log('npc2 laimejo!!! 🏆');
    }
    if (player === 3 && npc2 === 2) {
        console.log('---------------');
        console.log('player laimejo!!! 🏆');
    }
    if (npc2 === 3 && player === 2) {
        console.log('---------------');
        console.log('npc2 laimejo!!! 🏆');
    }
    if (player === npc2) {
        console.log('---------------');
        console.log('Lygiosios!!!');
    }
    
if (player === 0) {
    
    if (npc1 === 1 && npc2 === 3) {
        console.log('---------------');
        console.log('npc1 laimejo!!! 🏆');
    }
    if (npc2 === 1 && npc1 === 3) {
        console.log('---------------');
        console.log('npc2 laimejo!!! 🏆');
    }
    if (npc1 === 2 && npc2 === 1) {
        console.log('---------------');
        console.log('npc1 laimejo!!! 🏆');
    }
    if (npc2 === 2 && npc1 === 1) {
        console.log('---------------');
        console.log('npc2 laimejo!!! 🏆');
    }
    if (npc1 === 3 && npc2 === 2) {
        console.log('---------------');
        console.log('npc1 laimejo!!! 🏆');
    }
    if (npc2 === 3 && npc1 === 2) {
        console.log('---------------');
        console.log('npc2 laimejo!!! 🏆');
    }
    if (npc1 === npc2) {
        console.log('---------------');
        console.log('Lygiosios!!!');
    }
}

    
}

pamarskomu(0);

