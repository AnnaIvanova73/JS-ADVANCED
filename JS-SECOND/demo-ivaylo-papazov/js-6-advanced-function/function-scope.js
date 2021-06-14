let universe = 'DCU';

function heroFight() {
    let heroName = 'Superman';

    console.log(`${heroName} is from ${universe} universe!`);

    function foo() {
        console.log('boo');
        console.log(this);
    }

    foo();
}

heroFight()
