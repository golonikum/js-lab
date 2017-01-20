/**
 * Example of using Promise class.
 */

let p = new Promise((resolve, reject) => {
        let num = ~~(Math.random() * 10);
        if (num % 3 === 0) throw `${num}`;
        setTimeout(() => {
            if (num % 2 == 0) resolve(num);
            else reject(num);
        }, 1000);
    })
    .then(num => {
        return new Promise( resolve => {
            setTimeout(() => {
                console.log(`Success: ${num}`);
                resolve(0);
            }, 1000);
        });
    })
    .catch(num => {
        return new Promise( resolve => {
            setTimeout(() => {
                console.log(`Failed: ${num}`);
                resolve(-1);
            }, 1000);
        });
    })
    .then(code => console.log(`Return code: ${code}`))
    .then(() => console.log('End'));


