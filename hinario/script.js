let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let titulo = document.getElementById('titulo_musica');

let timer;
let  index_no = 0;
let playing_song = false;

//create a audio element

let track = document.createElement('audio');


    
// All function
let All_song = [
    {name: ' - ',
    path: '/../music/',
    img: '/../img/player/piano.jpg'},
    ];


//function load the track
function load_track(index_no){
    clearInterval(timer);
    reset_slider();
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    track.load();
    
    timer = setInterval(range_slider , 1000);
}

 
    load_track(index_no);
//reset song slider
function reset_slider(){
    slider.vakye = 0;
}

// checking the song is playing or not
function justplay(){
    if(playing_song==false){
        playsong();
    } else{
        pausesong();
    }
}


//play song
function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause"></i>';
}

//pause song
function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML =  '<i class="fa fa-play"></i>';
}

//next song

function next_song(){
    if (index_no < All_song.length - 1){
        index_no += 1;
        load_track(index_no);
        pausesong();
    } else {
        index_no = 0;
        load_track(index_no);
        pausesong();
    }
}

//prev song

function previous_song(){
    if (index_no > 0){
        index_no -= 1;
        load_track(index_no);
        pausesong();
    } else {
        index_no = All_song.length;
        load_track(index_no);
        pausesong();
    }
}

//change volume
function volume_change(){
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value / 100;
}

//change slider position
function change_duration(){
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

function range_slider(){
    let position = 0;
    //update slider position
    if(!isNaN(track.duration)){
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }
    let timer_position = document.querySelector('#time_position');
    timer_position.textContent = timer_position_load(Math.floor(track.currentTime))
}


function timer_position_load(segundo){
    minuto = Math.floor(track.currentTime / 60);
if(Math.floor(track.currentTime % 60 < 10)){
segundo = '0'+Math.floor(track.currentTime % 60);
} else {segundo = Math.floor(track.currentTime % 60);}

return minuto+":"+segundo;
    
}
