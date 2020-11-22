class Food{
    constructor(){
        this.foodStock = 0
        this.lastFed
        this.Foodimage = loadImage("Food.js/Milk.png")
        this.Bedimage = loadImage("images/Bed Room.png")
        this.Gardenimage = loadImage("images/Garden.png")
        this.Bathimage = loadImage("images/Wash Room.png")
    }
  getFoodStock(){
     return this.foodStock
      }
  updateFoodStock(food){
     this.foodStock = food
  }
 deductFood(){
     if(this.foodStock>0){
         this.foodStock = this.foodStock-1
     }
 }
getFedTime(lastFed){
this.lastFed=lastFed
}

bedroom(){
    background(this.Bedimage,550,500);
}

garden(){
    background(this.Gardenimage,550,500);
}

washroom(){
    background(this.Bathimage,550,500);
}



display() {
    var x=80,y=100;

    imageMode(CENTER);
    image(this.Foodimage,720,220,70,70);

    if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
            if(i%10==0){
                x=80;
                y=y+50;
            }
            image(this.Foodimage,x,y,50,50);
            x=x+30
        }
    }
}
}