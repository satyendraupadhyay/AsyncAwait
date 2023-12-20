console.log('Person 1: Shows Ticket');
console.log("Person 2: Shows Ticket");

const promiseWifeBringingTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Ticket')
    }, 3000)
})

const popcorn = promiseWifeBringingTicket.then((m) => {
    console.log("Wife: I have tickets");
    console.log('Husband: We should go in');
    console.log('Wife: No! I am Hungry');
    return new Promise((resolve) => resolve(`${m} Popcorn`));
})

const butter = popcorn.then((t) => {
    console.log('Husband: Here Is a Popcorn, We should go in');
    console.log('Wife: No! I need Butter');
    return new Promise((resolve) => resolve(`${t} butter`))
});

const getCoke = butter.then((b) => {
    console.log('Husband: Here Is a Butter, We should go in');
    console.log('Wife: No! I need Coke');
    return new Promise((resolve) => resolve(`${b} coke`))
})

getCoke.then((c) => console.log(c));

console.log('Person 4: Shows Ticket');
console.log("Person 5: Shows Ticket");