import { Suspense } from "react";
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import Technologies from "./Components/Technologies";
import type { Technology } from "./Types/technologyType";
import Footer from "./Components/Footer";

const technologiesFetch = async(): Promise<Technology[]> =>{
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}

function App() {
  const technologiesPromise = technologiesFetch();

  return (
    <> 
      
      <Nav/>
      <Banner/>
      <Suspense fallback = {<h2>Loading........</h2>}>
          <Technologies technologiesPromise = {technologiesPromise}/>
      </Suspense>
      <Footer/>
      


    </>
  )
}

export default App
