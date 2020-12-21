const mongoose = require(`mongoose`);

mongoose 
    .connect(`mongodb://localhost/exampleApp`, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error(`error connecting to mongo`, err));

const Cat = mongoose.model(`Cat`, {name: String});
const kitty = new Cat({name: `Ironhacker`});

kitty
    .save()
    .then(newCat => console.log(`A new cat is created: ${newCat}!`))
    .catch(err => console.log(`Error while creating new car ${err}`));

Cat.find()
    .then(catsFromDB => {
        catsFromDB.forEach(oneCat => console.log(`one cat -->: ${oneCat.name}`));
    })
    .catch(error => console.log(`Error when getting cats: ${error}`));