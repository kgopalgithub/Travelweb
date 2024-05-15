const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://jishu:1234@cluster0.vcrtl9z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(`no connection`);
});
