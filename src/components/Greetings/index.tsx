import React from 'react'

import { Container ,Item} from './styles'
import { Switch } from 'antd';
import utils from '../../utils/utils';
function onChange(checked:Boolean) {
  const fs = require('fs');
  console.log(`switch to ${checked}`);
}
console.log(React)

const Greetings: React.FC = () => {
  return (
    <Container>
     <div>
       <Item><span>My hosts</span><Switch defaultChecked onChange={onChange} /></Item>
       <Item><span>backup</span><Switch defaultChecked onChange={onChange} /></Item>
     </div>
    </Container>
  )
}

export default Greetings
