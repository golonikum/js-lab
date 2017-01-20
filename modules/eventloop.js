/**
 * Demonstrates the single thread model of JS
 */

function f(where) {
    for (let i = 2000000; i--;) {
        let k = i * i;
        if (i % 1000000 === 0) console.log(`${where}: ${i}`);
    }
}

void function run() {
    setTimeout( function(){ f('2'); } );
    setTimeout( function(){ f('3'); }, 0 );
    f('1');
}();

