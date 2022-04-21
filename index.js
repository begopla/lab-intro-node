class SortedList {
  constructor(items,length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
     this.items.push(item);
     this.length = this.items.length;
     this.items.sort((a,b)=>a-b)
  }

  get(pos) {
    if(!this.items[pos]){
      throw new Error('OutOfBounds');
    }
    return this.items[pos]
  }

  max() {
    if(!this.length ){
      throw new Error('EmptySortedList')
    }
    else return this.items[this.length-1]
  }

  min() {
    if(!this.length ){
      throw new Error('EmptySortedList')
    }
    else return this.items[0]
  }

  sum() {
//  let totalValue = 0;
//  this.items.forEach(num =>{
//    totalValue += num;
//  })
//  return totalValue;

//!using reduce:
return this.items.reduce((acc,value)=>acc+value,0)

  }

  avg() {
    if(!this.length ){
      throw new Error('EmptySortedList')
    }
    else {
      let averageValue = this.sum()/this.length;
      return averageValue;
    }
  }
}

module.exports = SortedList;
