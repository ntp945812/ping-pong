class ball {

  constructor( pos, r, v ) {

    this.pos = pos;
    this.r = r;
    this.v = v;

  }

  show() {
    fill( 255 );
    ellipse( this.pos.x, this.pos.y, this.r );
  }

  update() {
    this.pos = p5.Vector.add( this.pos, this.v );
  }

  bounce( board1, board2 ) {
    if ( this.pos.y + this.r > height || this.pos.y - this.r < 0 ) {
      this.v.y = -this.v.y;
    }

    if ( this.pos.y > board1.y && this.pos.y < board1.y + board1.height && this.pos.x - this.r < board1.x + board1.width && this.pos.x > board1.x ) {
      this.pos.x = board1.x + board1.width + this.r;
      this.v.x = -this.v.x;
    }

    if ( this.pos.y > board2.y && this.pos.y < board2.y + board2.height && this.pos.x + this.r > board2.x && this.pos.x < board2.x + board2.width ) {
      this.pos.x = board2.x - this.r;
      this.v.x = -this.v.x;
    }

  }

}
