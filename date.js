// module.exports.getdate = 
exports.getdate = function (){
const today=new Date();
const options={
     weekend:"Long",
     day:"numeric",
     month:"long"
 };
 return today.toLocaleDateString("en-US",options);
};

// module.exports.getday =
module.exports.getday = function (){
    const today=new Date();
    const options={
         weekend:"Long"
     };
     return today.toLocaleDateString("en-US",options);
    
    };
