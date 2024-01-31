const fsExtra =require('fs-extra');
const fs =require("fs");
const path = require('path');

let folders =["Images", "Text","Html","Javascript","CSS", "Music", "EJS","Misc"];
let filenames =[];
let filetypes =[];
let names = [];
const userInput = process.argv[2];

filenames = fs.readdirSync( userInput).filter((file)=>{
    return /[.]/.test(file)  ;
});

console.log( userInput);
// file names get
 filenames.forEach((file)=>{
    let filetype = file.split('.');
    filetypes.push( filetype[1]);
     names.push(filetype[0]);          
      
     
});

// get all paths 
const srcs= filenames.map((file)=>{
     return path.join( userInput , file);
});
const dests =folders.map((file,i)=>{
     return path.join(userInput, folders[i]);
})

 folders.forEach( (name, i)=>{
   
    fsExtra.mkdir(path.join(userInput, name),
    (err) => {
        if (err) {
            return console.error(err);
        }
         console.log('Directory created successfully!');
     });
    
     });
filetypes.forEach((filetype,i)=>{

    if( filetype ==="jpg" || filetype ==="png" || filetype ==="jpeg" || filetype ==="gif"){
        fsExtra.move(srcs[i], path.join(dests[0],filenames[i]), (err) => { 
            if (err) return console.log(err); 
            console.log(` ${filetype} inserted into ${dests[i]}!!`); 
          });
     }
     else if( filetype ==="txt"){
        fsExtra.move(srcs[i], path.join(dests[1] ,filenames[i]), (err) => { 
            if (err) return console.log(err); 
            console.log(` ${filetype} inserted into ${dests[i]}!!`); 
          });
     }
     else if( filetype ==="html"){
        fsExtra.move(srcs[i],path.join(dests[2],filenames[i]) , (err) => { 
            if (err) return console.log(err); 
            console.log(` ${filetype} inserted into ${dests[i]}!!`); 
          });
     }
     else if( filetype ==="js"){
        fsExtra.move(srcs[i], path.join(dests[3],filenames[i]), (err) => { 
            if (err) return console.log(err); 
            console.log(` ${filetype} inserted into ${dests[i]}!!`); 
          });
     }
     else if( filetype ==="css"){
        fsExtra.move(srcs[i], path.join(dests[4],filenames[i]), (err) => { 
            if (err) return console.log(err); 
            console.log(` ${filetype} inserted into ${dests[i]}!!`); 
          });
     }
     else if( filetype ==="mp3" || filetype ==="mp4"){
        fsExtra.move(srcs[i], path.join(dests[5],filenames[i]), (err) => { 
            if (err) return console.log(err); 
            console.log(` ${filetype} inserted into ${dests[i]}!!`); 
          });
     }
     else if( filetype ==="ejs"){
        fsExtra.move(srcs[i], path.join(dests[6],filenames[i]), (err) => { 
            if (err) return console.log(err); 
            console.log(` ${filetype} inserted into ${dests[i]}!!`); 
          });
     }else {
        fsExtra.move(srcs[i], path.join(dests[7],filenames[i]), (err) => { 
            if (err) return console.log(err); 
            console.log(` ${filetype} inserted into ${dests[i]}!!`); 
          });

     }
   
});

folders.forEach((folder)=>{
    fs.rmdirSync( path.join(userInput, folder)); 
}

);
