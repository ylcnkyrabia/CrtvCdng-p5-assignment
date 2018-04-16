var sketch1= function(p){
	
	p.setup = function () {
            var istanbul = p.createImg("https://media.giphy.com/media/joX2vj9TLEjxC/source.gif");
            istanbul.position(0,0);
            istanbul.size(200, 100);

    };
};
var myp5 = new p5(sketch1, "istanbul");

var sketch2 = function(p) {
    p.setup = function (){
        var tower = p.createImg("https://media.giphy.com/media/7d5Oh7q6zeKWY/source.gif");
        tower.position(30, 700);
        tower.size(420, 166);        
        
    };    
};

var myp5 = new p5(sketch2);

var sketch3 = function (p){
    p.preload = function(){
    p.song = p.loadSound("Mercan Dede - Istanbul.mp3");
        
    };
    
    p.setup = function () {
       p.song.play(); 
        
    };    
    
};
var myp5 = new p5(sketch3);
