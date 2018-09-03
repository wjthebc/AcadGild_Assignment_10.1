class rectangle {
//constructor
  constructor(length, breadth)
  {
    this.length = length;
    this.breadth = breadth;
    
//getter for calculateArea method
  }
  get area ()
  {
    return this.calculateArea();
  }
  
//method that calculates area of passed values
  calculateArea()
  {
    return this.length * this.breadth
  }
}

