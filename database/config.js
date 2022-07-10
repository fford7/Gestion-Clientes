
const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
            //serverApi: ServerApiVersion.v1
            //useCreateIndex: true
        });
        console.log('Database connection successful')
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectarse a la DB');
    }
}

module.exports = {
     dbConnection
    }