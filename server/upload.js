const Music = require('./models/music');
class musicClass {

    constructor(){
        this.musics = [{
            title : "praise 06",
     description:"This is about the praise and worship 06",
     audioUrl:"./assets/06.mp3",
     speaker:"David Wommack"
        },
        {
            title : "praise 07",
     description:"This is about the praise and worship 07",
     audioUrl:"./assets/07.mp3",
     speaker:"David Wommack"
        },
        {
            title : "At the Cross Medley",
     description:"This is about the Cross Medley",
     audioUrl:"/assets/At the Cross Medley.mp3",
     speaker:"David Wommack"
        },
        {
            title : "praise 06",
     description:{type: String, required:true},
     audioUrl:{type: String,required:true},
     speaker:{type:String,required:true},
        },
        {
            title : "praise 06",
     description:{type: String, required:true},
     audioUrl:{type: String,required:true},
     speaker:{type:String,required:true},
        }]
    }
}