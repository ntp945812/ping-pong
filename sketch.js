var board1;
var board2;
var Theball;

function setup() {
  createCanvas( 1600, 1000 );
  var pos1 = createVector( 20, 400 );
  var pos2 = createVector( 1550, 400 );
  board1 = new board( pos1, 23, 120 );
  board2 = new board( pos2, 23, 120 );
  var ballpos = createVector( width / 2, height / 2 );
  var ballV = createVector( random( -1, 1 ), random( -0.45, 0.45 ) );
  ballV.setMag( 10 );
  Theball = new ball( ballpos, 18, ballV );

}

function draw() {
  background( 29 );
  Score();
  board1.update();
  board1.show();
  board2.update();
  board2.show();
  Theball.update();
  Theball.bounce( board1, board2 );
  Theball.show();

}

function keyPressed() {
  switch ( keyCode ) {
    case 38:
      board2.stop = false;
      board2.direction = -1;
      break;
    case 40:
      board2.stop = false;
      board2.direction = 1;
      break;
    case 87:
      board1.stop = false;
      board1.direction = -1;
      break;
    case 83:
      board1.stop = false;
      board1.direction = 1;
      break;
  }

}

function keyReleased() {
  switch ( keyCode ) {
    case 38:
    case 40:
      board2.stop = true;
      break;
    case 87:
    case 83:
      board1.stop = true;
      break;
  }

}

function Score() {
  textFont( 'Courier New', 40 );
  text( board1.score, 480, 50 );
  text( board2.score, 1080, 50 );

  if ( Theball.pos.x < 0 ) {
    board2.score += 1;
    var ballpos = createVector( width / 2, height / 2 );
    var ballV = createVector( random( -1, 1 ), random( -0.45, 0.45 ) );
    ballV.setMag( 10 );
    Theball = new ball( ballpos, 18, ballV );

  } else if ( Theball.pos.x > width ) {
    board1.score += 1;
    var ballpos = createVector( width / 2, height / 2 );
    var ballV = createVector( random( -1, 1 ), random( -0.45, 0.45 ) );
    ballV.setMag( 10 );
    Theball = new ball( ballpos, 18, ballV );
  }

}
