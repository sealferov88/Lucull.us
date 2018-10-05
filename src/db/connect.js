import monk from 'monk'
import dbURL from '../config'


let db = monk(dbURL);

db.then(value => {
    value._state === 'open' ? console.log(`Connected to ${dbURL}`) : console.log(`Cannot connect to ${dbURL}`);
});


export default db;