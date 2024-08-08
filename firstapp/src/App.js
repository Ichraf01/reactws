import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
var name = "Ichraf"
  return (
    <div className="App">
       <Card style={{ width: '18rem' }}>
      <Image variant="top" src="holder.js/100px180"/>
      <Card.Body>
        <Name/>
        <Card.Text>
        <Description/>
        </Card.Text>
        <Price/>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    {
      name?(<p>{`hello ${name}`}</p>):(<p> hello there !</p>)
    }

{
      name?(<Image/>):(<p>Bye!</p>)
    }

    </div>
  );
}

export default App;
