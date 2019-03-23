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
            title : "busysinging-49125",
            description:"This is about Busysinging",
            audioUrl:"/assets/busysinging-49125.mp3",
            speaker:"David Wommack"
        },
        {
            title : "EKWUEME - Daniel Kalu",
            description:"This is about Busysinging",
            audioUrl:"/assets/EKWUEME - Daniel Kalu.mp3",
            speaker:"David Wommack"
        }]
    }

    async cleanDb() {
        await Music.remove({});
    }
    
    pushMusicsToDo() {
        this.musics.forEach((music)=> {
           const newMusic = new Music(music);
        })
    }
     seedDb(){
         this.cleanDb();
         this.pushMusicsToDo();
     }
}
modules.export = musicClass