exports.getFleet = function()  {
    function Automobile(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    
    var a = new Automobile("Mercedes-Benz", "A 170", 2008, "silver");
    var b = new Automobile("Mercedes-Benz", "B 170", 2005, "black");
    var ml = new Automobile("Mercedes-Benz", "ML 230", 2000, "black");
    var fleet = [];
    fleet.push(a);
    fleet.push(b);
    fleet.push(ml);
    for (let item of fleet) {
        console.log("item: \n " + item.make + " " + item.model);
      }

     return fleet;
}