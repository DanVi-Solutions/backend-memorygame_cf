import mongoose from 'mongoose';

const connectDatabase = () => {
    console.log('Wait connection to the database');
    mongoose.connect(
        'mongodb+srv://adminuser:mVqz2n46BBSngB0u@clustermc.qv3bczp.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMC'
    )
    .then(() => console.log('MongoDB Atlas Connected'))
    .catch((error) => console.log(error));  
}

export default connectDatabase;