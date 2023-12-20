console.log('Person 1: Shows Ticket');
console.log("Person 2: Shows Ticket");

const preMovie = async() => {
    const promiseWifeBringingTicket = new Promise(resolve => {
        setTimeout(() => {
            resolve('Ticket')
        }, 3000)
    })

    const getpopcorn = new Promise((resolve) => resolve(`popcorn`));

    const getButter = new Promise((resolve) => resolve(`butter`));

    const getCandy = new Promise((resolve) => resolve(`candy`));

    const getCoke = new Promise((resolve) => resolve(`coke`));

    let ticket = await promiseWifeBringingTicket;

    let [popcorn, butter, candy, coke] = await Promise.all([getpopcorn, getButter, getCandy, getCoke])

    console.log(`${popcorn} ${butter} ${candy} ${coke}`);

    return ticket;
}

preMovie().then((m) => console.log(`Person 4: Shows ${m}`));

console.log('Person 4: Shows Ticket');
console.log("Person 5: Shows Ticket");