var ball,img,paddle,ball1,paddle1;
function preload() {
  /* preload your images here of the ball and the paddle */
  ball1=loadImage("ball.png");
  paddle1=loadImage("paddle.png");
  
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(50,200,10,10);
  paddle = createSprite(300,200,20,100);
  
  /* assign the images to the sprites */
  ball.addImage("ball_moving",ball1);
   paddle.addImage("paddle_moving",paddle1);
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  ball.bounceOff(paddle);
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle,explosion);
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
 

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */

  
  /* Prevent the paddle from going out of the edges */
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y+20;
  }
  
  paddle.collide(edges[2]); 
  paddle.collide(edges[3]);
  
  drawSprites();
  
}


  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */

 function explosion()
{
  ball.velocityY=random(-8,8);
}


