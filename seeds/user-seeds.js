const { User } = require('../models');

const userData = [
    {
        username: "joemac",
        twitter: "joemacaroni",
        github: "josephmac",
        email: "josephmac@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "bubba",
        twitter: "bubbaa2",
        github: "Anthonyalv",
        email: "bubba_a@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "jason_d",
        twitter: "jayd",
        github: "shaun",
        email: "jay_d@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "kobeb",
        twitter: "kobebean",
        github: "kobebryant",
        email: "kobe@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "lebron",
        twitter: "lebronjames",
        github: "lebron",
        email: "lebron_j@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "tyler",
        twitter: "tylera",
        github: "tylerambros",
        email: "tylera@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;