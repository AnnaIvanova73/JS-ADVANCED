// function solve() {
//
//     const canCast = (state) => ({ //decorator
//         cast: (spell) => {
//             state.mana = state.mana -1;
//             console.log(`${state.name} cast ${spell}`)
//         }
//     })
//
//     const canFight = (state) => ({
//         fight: () => {
//             state.stamina = state.stamina - 1;
//             console.log(`${this.name}'s name} slashes at the foe!`)
//         }
//     })
//
//     const mage = (name) => {
//         let state = {
//             name,
//             health: 100,
//             mana: 100,
//         }
//         return  Object.assign(state, canCast(state))
//     }
//
//     const fighter = (name) => {
//         let state = {
//             name,
//             health: 100,
//             stamina: 100,
//         }
//         return  Object.assign(state, canFight(state))
//     }
//
//     return{mage: mage, fighter: fighter}
// }
//
//
// let create = solve();
//
// const scorcher = create.mage("Scorcher");
//
// scorcher.cast("fireball")
//
// scorcher.cast("thunder")
//
// scorcher.cast("light")
//
//
// const scorcher2 = create.fighter("Scorcher 2");
//
// scorcher2.fight()
//
//
// console.log(scorcher2.stamina);
//
// console.log(scorcher.mana);
//
//
// function solve1() {
//
//     function cast(spell) {
//         this.mana -= 1;
//         console.log(`${this.name} cast ${spell}`)
//     }
//
//     function fight() {
//         this.stamina -= 1;
//         console.log(`${this.name}'s name} slashes at the foe!`)
//     }
//
//     function user (name){
//         return {name,health: 100}
//     }
//     const fighter = (name) => {
//         let obj = user(name);
//         obj.stamine = 100;
//
//     }
//     const mage = (name) => {
//
//     }
//
//     return ({mage: mage, fighter: fighter})
// }
//
// function exampleDecision() {
//
//     const canCast = (state) => ({ //decorator
//         cast: (spell) => {
//             state.mana = state.mana -1;
//             console.log(`${state.name} cast ${spell}`)
//         }
//     })
//
//     const canFight = (state) => ({
//         fight: () => {
//             state.stamina = state.stamina - 1;
//             console.log(`${this.name}'s name} slashes at the foe!`)
//         }
//     })
//
//     const mage = (name) => {
//         let state = {
//             name,
//             health: 100,
//             mana: 100,
//         }
//         return  Object.assign(state, canCast(state))
//     }
//
//     const fighter = (name) => {
//         let state = {
//             name,
//             health: 100,
//             stamina: 100,
//         }
//         return  Object.assign(state, canFight(state))
//     }
//
//     return{mage: mage, fighter: fighter}
// }