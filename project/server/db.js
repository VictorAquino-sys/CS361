const typeorm = require('typeorm');

class Creator {
    constructor(id, title, price, score, webURL) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.score = score;
        this.webURL = webURL;
    }    
}

const EntitySchema = require("typeorm").EntitySchema; 

const CreatorSchema = new EntitySchema({
    name: "Creator",
    target: Creator,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        title: {
            type: "text",
        },
        price: {
            type: "varchar"
        },
        score: {
            type: "text"
        },
        webURL: {
            type: "text"
        }
    }
});

async function getConnection() {
    return await typeorm.createConnection({
        connectionLimit : 1000,
        connectTimeout  : 60 * 60 * 1000,
        acquireTimeout  : 60 * 60 * 1000,
        timeout         : 60 * 60 * 1000,
        type: "mysql",
        host: "localhost",
        port: 3000,
        username: "root",
        password: "password",
        database: "setupscrapper",
        synchronize: true,
        logging: false,
        entities: [
            CreatorSchema
        ]
    })
}

async function getAllCreators() {
    const connection = await getConnection();
    const creatorRepo = connection.getRepository(Creator);
    const creators = await creatorRepo.find();
    connection.close();
    return creators;
}


async function insertCreator(title, price, webURL) {
    const connection = await getConnection();
    
    // create
    const creator = new Creator();
    creator.title = title;
    creator.price = price;
    creator.webURL = webURL;

    // save
    const creatorRepo = connection.getRepository(Creator);
    const res = await creatorRepo.save(creator);
    console.log('saved', res);

    // return new list
    const allCreators = await creatorRepo.find();
    connection.close();
    return allCreators;

}

module.exports = {
    getAllCreators,
    insertCreator
}