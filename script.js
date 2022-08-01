console.log("Welcome to Spotify");
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));
let songs = [
    {songName: "Industry Baby - Lil Nas X & Jack Harlow",filePath: "songs/1.mp3", coverPath: "covers/ib.jpg"},
    {songName: "Stunning - dj Kiss",filePath: "songs/2.mp3", coverPath: "covers/st.jpg"},
    {songName: "Royalty - Egzod,Maestro Chives & NEONI",filePath: "songs/3.mp3", coverPath: "covers/ez.jpg"},
    {songName: "See Me Fall - Ro Ransom",filePath: "songs/4.mp3", coverPath: "covers/smf.jpg"},
    {songName: "The Banjo Beat - Hayasa ",filePath: "songs/5.mp3", coverPath: "covers/tbb.jpg"},
]

songItem.forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})
// audioElement.play();


//Handle play/pause click

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
       
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
    gif.style.opacity=0;
   
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
   
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) *100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})






songItemPlay.forEach((element)=>{
element.addEventListener('click', (e)=>{
if(audioElement.paused || audioElement.currentTime<=0)
{
    songIndex = parseInt(e.target.id);
   
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
gif.style.opacity = 1;
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');


}
else if(audioElement.played || audioElement.currentTime !=0){
   

    songIndex = parseInt(e.target.id);
    
    audioElement.pause();
    e.target.classList.add('fa-circle-play');
    e.target.classList.remove('fa-circle-pause');
    
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = ((audioElement.currentTime/audioElement.duration) *100) * audioElement.duration/100;
   
gif.style.opacity=0;
masterPlay.classList.add('fa-circle-play');
masterPlay.classList.remove('fa-circle-pause');
}

})
})










document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4){
        songIndex=0;
    }

        else{
            songIndex += 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');


    
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }

        else{
            songIndex -= 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');

    
})