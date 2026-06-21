import FoodList from "./components/FoodList.jsx";
import Nav from "./components/nav.jsx";
import Search from "./components/Search.jsx"
import { useState } from "react";
import "./App.css";
import Container from "./components/Container.jsx";
import InnerContainer from "./components/InnerContainer.jsx";
import FoodDetail from "./components/FoodDetail.jsx";


function App() {
  const [foodData, setFoodData]=useState([]);
  const [foodId, setFoodId]= useState("656329");

  return (
    <>
      <div className="App">
        <Nav/>
        <Search key="foodData" foodData={foodData} setFoodData={setFoodData}/>
        <Container>
          <InnerContainer>
            <FoodList key="foodData" foodData={foodData} setFoodId={setFoodId}/>
          </InnerContainer>
          <InnerContainer>
            <FoodDetail foodId={foodId}/>
          </InnerContainer>
        </Container>
      
      </div>
     
    </>
  )
}

export default App
