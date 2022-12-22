class geeks { 
   constructor(g) { 
      this.Character = g
   } 
} 
class GeeksforGeeks extends geeks { 
   disp() { 
      console.log("No of Character:  "+this.Character) 
   } 
} 
var obj = new GeeksforGeeks(13); 
obj.disp()

class GeeksforGeeks1 { 
   doPrint() {
      console.log("This doPrint() from Parent called.") 
   } 
}  
class gfg extends GeeksforGeeks1 { 
   doPrint() { 
      super.doPrint() 
      console.log("This doPrint() is printing a string.") 
   } 
} 
var obj = new gfg() 
obj.doPrint()