var board1;
var board2;

function setup()
{
    createCanvas( 1600, 1000 );
    var pos1 = createVector( 20, 400 );
    var pos2 = createVector( 1550, 400 );
    board1 = new board( pos1, 30, 200 );
    board2 = new board( pos2, 30, 200 );

}

function draw()
{
    background( 29 );


    board1.update();
    board1.show();
    board2.update();
    board2.show();






}

function keyPressed()
{
    switch ( keyCode )
    {
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

function keyReleased()
{
    switch ( keyCode )
    {
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