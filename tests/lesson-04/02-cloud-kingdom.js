
//Cách số 2
let powerUp = 'mushroom';
if (powerUp === 'mushroom') {
    console.log('Mario becomes Super!');
}
if (powerUp === 'flower') {
    console.log('Mario can shoot fireballs!');
}
if (powerUp === 'star') {
    console.log('Mario is invincible!');
}
if (powerUp === 'none') {
    console.log('Mario is normal');
}
if (powerUp !== 'mushroom'&& powerUp !=='flower' && powerUp !=='star' && powerUp !=='none') {
    console.log('Unknown power-up');
}