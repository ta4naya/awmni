const express =require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const Music = require('./models/music');
const Upload = require('./upload');
const musicRoutes = require('./routes/routers');
mongoose.connect(config.CONFIG_URL).then(()=>{
    const upload = new Upload();
    upload.seedDb();
});
const app = express();
app.use('/api/v1/music',musicRoutes)

const PORT = process.env.PORT || 3001
app.listen(PORT, function(){
console.log('I am running');
});
