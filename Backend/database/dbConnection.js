import mongoose from "mongoose";

// Connect to MongoDB
export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName:"RESTAURANT",
    })
   .then(() => console.log("Connected to MongoDB successfully"))

.catch((err) => console.log(`Some error occurred while connecting to MongoDB ${err}`)
);
};
