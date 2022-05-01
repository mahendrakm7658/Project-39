class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');

     contestantCountRef.on("value",(data)=>{
      contestantCount = data.val();
     })


  
  }

  updateCount(count){
    
    database.ref('/').update({
      contestantCount: count
    });


    // database.ref('/').update({
    //   contestantCount: 0
    // });


    // database.ref('').update({
    //   contestantCount: counts
    // });


    // database.ref('/').update({
    //   contestantCount: count
    // });

  }

  static getPlayerInfo(){
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
  }
}