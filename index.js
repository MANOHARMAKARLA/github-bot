const jsonfile = require('jsonfile');
const moment = require('moment');
 const simpleGit =  require('simple-git'); 
const FILE_PATH = './data.json';

const random  = require("random-number-csprng");



const makecommit = (n)=>{

  if(n===0) return 0;
  simpleGit().push();
  const x = random(0,54);
  const y = random(0,6);
  const DATE  = moment().subtract(1,'y').add(1,'d')
                  .add(x,'w').add(y,'d').format();
  const data = {
    date: DATE
  }
  console.log(data);
  jsonfile.writeFile(FILE_PATH, data,()=>{

    simpleGit().add(FILE_PATH).commit (DATE,{'--date': DATE },makecommit.bind(this,--n));
  
  });
  
}
 
makecommit(10000);