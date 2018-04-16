var sketch1= function(p){
	
	p.setup = function () {
        p.createCanvas(1000,400);
            var istanbul = p.createImg("https://media.giphy.com/media/joX2vj9TLEjxC/source.gif");
            istanbul.position(0,0);
            istanbul.size(p.width, p.height/3.2);

    };
};
var myp5 = new p5(sketch1);

var sketch2 = function(p) {
    p.setup = function (){
        p.createCanvas(400,400);
        var tower = p.createImage("https://media.giphy.com/media/7d5Oh7q6zeKWY/source.gif");
        tower.position(0, 300);
        tower.size(720, 266);        
        
    };    
};

var myp5 = new p5(sketch2);

var sketch3 = function (p){
    p.preload = function(){
    p.song = loadSound("https://www.youtube.com/watch?v=W7aIdw-drtM");
        
    };
    
    p.setup = function () {
       p.song.play(); 
        
    };    
    
};
var myp5 = new p5(sketch3);