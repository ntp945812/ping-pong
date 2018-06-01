var board1;
var board2;
var ball1;

function setup() {
  createCanvas( 1600, 1000 );
  var pos1 = createVector( 20, 400 );
  var pos2 = createVector( 1550, 400 );
  board1 = new board( pos1, 23, 120 );
  board2 = new board( pos2, 23, 120 );
  var ballpos = createVector( width / 2, height / 2 );
  var ballV = createVector( random( -1, 1 ), random( -0.5, 0.5 ) );
  ballV.setMag( 10 );
  ball1 = new ball( ballpos, 18, ballV );

}

function draw() {
  background( 29 );

  board1.update();
  board1.show();
  board2.update();
  board2.show();
  ball1.update();
  ball1.bounce( board1, board2 );
  ball1.show();

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
