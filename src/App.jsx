import { useState } from 'react';
import Foodlist from './components/Foodlist';
import Search from './components/Search';
import Nav from './components/Nav';
import './App.css';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';
import FoodDetails from './components/FoodDetails';

export default function App() {
  const [foodData, setfoodData] = useState([]);
  const [foodId, setfoodid] = useState("656329");
  return (
    <div className='App'>
      <Nav />
      <Search foodData={foodData} setfoodData={setfoodData} />
      <Container>
        <InnerContainer className="firstchild">
          <Foodlist setfoodid={setfoodid} foodData={foodData} />
        </InnerContainer>
        <InnerContainer className="secondchild">
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}


