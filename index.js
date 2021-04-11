let gt = require("growtopia-details");
 
gt.getDetail().then(e=>{
	console.log(`Online GT Counter by Purge#1338`)
    console.log(`${e.onlineUsersCount} Players Online in real gt!`);
    console.log(e);
})
