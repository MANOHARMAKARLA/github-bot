const jsonfile = require('jsonfile');
const moment = require('moment');
 const simpleGit =  require('simple-git'); 
const FILE_PATH = './data.json';
const makecommit = (x)=>{
  const DATE  = moment().subtract(1,'y').add(1,'d')
                  .add(x,'d').format();
  const data = {
    date: DATE
  }
  jsonfile.writeFile(FILE_PATH, data,()=>{
    simpleGit().add(FILE_PATH).commit (DATE,{'--date': DATE }).push();
  
  });
  
}
for (let i = 0; i < 365; i++) {
makecommit(i);
}