import React from 'react';
import JSONData  from '../../json/recipe'
console.log('JSONData', JSONData)
class App extends React.Component {
  render() {
    return (
      <div>I AM APP!!!!!!!!!!!!!!! {JSONData.foo}</div>
    )
  }
}

export default App;