import React from 'react'

import { Container } from './styles'
import utils from '../../utils/utils';
const CodeMirror = require('react-codemirror');
require('codemirror/lib/codemirror.css');
require('codemirror/mode/markdown/markdown');
class Codehost extends React.Component<props,object>{
  
  constructor(props:object){
    super(props);
    this.state = {
      code:utils.hostdata
    };
  }
  componentDidMount(){
    // const fs = require('fs')
    // fs.watch(utils.sys_hosts_path,(type,name)=>{
    //   console.log('change',name)
    //   let hostdata
    //   try {
    //     hostdata = fs.readFileSync(utils.sys_hosts_path, 'utf8')
    //   } catch (err) {
    //     hostdata = 'error'
    //   }
    //   console.log(hostdata)
    // })
  }
  updateCode() {
    console.log('改变了内容')
    const fs = require('fs');
    fs.writeFile(utils.sys_hosts_path, this.state.code, function(err) {
      if(err) {
        require("electron").remote.dialog.showErrorBox('', String(err))
         return;
      }
      console.log("The file was saved!");
  });
	
  }

  render() {
    
		var options = {
      lineNumbers: true,
      mode: "markdown",
      lineWrapping:true,
      height:'100vh',
		};
		return (
      <Container>
      <div className="view">
        <CodeMirror value={this.state.code} onChange={()=>{this.updateCode()}} options={options} /></div>
      </Container>)
	}
}

export default Codehost
