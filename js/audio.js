function volumein(q){
    if(q.volume){
       var InT = 0;
       var setVolume = 0.2; // volumen
       var speed = 0.005; // incremento
       q.volume = InT;
       var eAudio = setInterval(function(){
           InT += speed;
           q.volume = InT.toFixed(1);
           if(InT.toFixed(1) >= setVolume){
              clearInterval(eAudio);
           };
       },50);
    };
};

function volumeout(q){
    if(q.volume){
       var InT = 0.4;
       var setVolume = 0;  // volumen
       var speed = 0.050;  // decremento
       q.volume = InT;
       var fAudio = setInterval(function(){
           InT -= speed;
           q.volume = InT.toFixed(1);
           if(InT.toFixed(1) <= setVolume){
              clearInterval(fAudio);
           };
       },50);
    };
};