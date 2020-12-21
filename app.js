const moongoose = require(`mongoose`);

mongoose 
    .connect(`mongodb://localhost/exampleApp`, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`));
    .catch(err => console.error(`error connecting to mongo`, err));

const Cat = mongoose.model(`Cat`, {name: String});