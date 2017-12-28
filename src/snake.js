const Snake=function(head,body) {
  this.head=head;
  this.body=body;
}

Snake.prototype={
  getBody:function() {
    return this.body;
  },
  getHead:function() {
    return this.head;
  },
  move:function() {
    this.body.push(this.head);
    this.head=this.head.next();
    return this.body.shift();
  },
  grow:function() {
    this.body.unshift(new Position(Infinity,Infinity,this.direction));
  },
  turnLeft:function() {
    this.head=this.head.turnLeft();
  },
  turnRight:function() {
    this.head=this.head.turnRight();
  },
  isEattenItself: function(){
    let head = this.head;
     return this.body.some(bodyPosition => {
      return head.isSameCoordAs(bodyPosition);
    });
  },
   isCollidedWithWall: function(maxRows,maxCols) {
    return this.head.isCollidedWithWall(maxRows,maxCols);
  }
}
