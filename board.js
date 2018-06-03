class board {
  constructor( pos, width, height ) {
    this.x = pos.x;
    this.y = pos.y;
    this.width = width;
    this.height = height;
    this.stop = true;
    this.v = 7;
    this.score = 0;
  }

  update() {
    if ( !this.stop ) 
      this.y += this.direction * this.v;
    
    if ( this.y < 0 ) 
      this.y = 0;
    if ( this.y + this.height > height ) 
      this.y = height - this.height;
    }
  
  show() {
    fill( 255 );
    rect( this.x, this.y, this.width, this.height, 10 );
  }
}
