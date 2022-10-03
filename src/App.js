import React from 'react';
import Card from './components/Card/Card'
import './App.css'
import Data from './data/houseData1.json'
import Filter from './components/filter/Filter';
import {ImLocation2} from 'react-icons/im'
import {BsHouseFill} from 'react-icons/bs'
import {GiTreehouse} from 'react-icons/gi'
import DatePickerComponent from './components/filter/DatePickerComponent';
import RangeSlider from './components/filter/RangeSlider';
import {WiDaySunny} from 'react-icons/wi'
import {MdNightlight} from 'react-icons/md'

export default function App() {
  // theme
  const [theme, setTheme] = React.useState(false);
  const toggleTheme = () => setTheme(old => !old);
  // theme
  // Move In date filter 
  const newDate = Date();
  const [Dateobj, setObj] = React.useState(newDate);
  const [seenDate, setSeen] = React.useState(toString(newDate).split(" "));
  const onDateChange = (newValue) => {
    setObj(newValue);
    setSeen(toString(newValue).split(" "));
  }
  // Move In date filter 

  // range
  const [PriceRange, setPrice] = React.useState([5000,20000]);

  const handlePriceChange = (newValue) => {
    setPrice(newValue);
  };
  // range

  const [loc, setLoc] = React.useState("");
  const [houseType, setType] = React.useState("");

  // options for select
  const [arrayLoc, setArray] = React.useState(['Germany','Canada','United States','Australia']);
  const [houseArray, sethouseArray] = React.useState(['house', 'appartment']);
  // options for select
  
  // handles location filter
  const handleLoc = (value) => {
    setLoc(value);
  };
  // handles location filter
  const handleHouse = (value) => {
    setType(value);
  };

  // const handleLoc = (value) => setLoc(value);

  // filters data
  function filterData() { 
    // checking country
    var res = Data;
    res = loc === "" ? res : res.filter(data => data.country === loc)
    
    // checking housetype
    res = houseType === "" ? res : res.filter(data => data.house === houseType)
    
    // checking upper range 
    res = PriceRange[1] === "" ? res : res.filter(data => data.price <= PriceRange[1])
    
    // checking Lower range 
    res = PriceRange[0] === "" ? res : res.filter(data => data.price >= PriceRange[0])
    
    // sorts acc to price also
    res.sort((a, b) => {
      return a.price - b.price;
    });
    return res;
  }

  // seperating popular estate and !popular estate
  const popular= filterData().filter(data => data.popularity)
  const normalData = filterData().filter(data => !data.popularity)

  return (
    <div className={`container ${theme&&"darkTheme"}`}>
      <div className={`navBar ${theme&&"darkTheme"}`}>
        <div className="company">
          <GiTreehouse style={{color:'var(--base)',fontSize:'1.5em',marginRight:'12px'}} />
          Reel-Estate
        </div>
        {theme?<MdNightlight onClick={toggleTheme} style={{color:"white",fontSize:'25px',marginRight:'30px',cursor:'pointer',transform:'rotate(-20deg)'}}/>:<WiDaySunny onClick={toggleTheme} style={{color:"black",fontSize:'35px',marginRight:'25px',cursor:'pointer'}}/>}
      </div>
      <div className="landing">
        <div className="landingText">
          Buy, Sell, Rent Property<br />without any hussle.
        </div>
        <div className={`imageDiv ${theme&&'darkTheme'}`} style={ {backgroundImage:'url(assets/homeHero.jpg)'}}></div>
      </div>

      <div className={`filter ${theme&&"darkTheme"}`}>

        <Filter
          value={loc}
          handleChange={handleLoc}
          list={arrayLoc} place={"Location"}
          symbol={<ImLocation2 style={{ color: 'var(--base)', marginRight: '5px' }} />}
          theme={theme}
        />

        <div style={{width:'1px',height:'8vh',background:'rgb(35,35,35,0.2)'}}></div>

        <Filter
          value={houseType}
          handleChange={handleHouse}
          list={houseArray}
          place={"House Type"}
          symbol={<BsHouseFill style={{ color: 'var(--base)',marginRight:'5px'}} />}
          theme={theme}
        />

        <div style={{width:'1px',height:'8vh',background:'rgb(35,35,35,0.2)'}}></div>

        <DatePickerComponent
          value={Dateobj}
          seenValue={seenDate}
          onDateChange={onDateChange}
          theme={theme}
        />
        
        <div style={{width:'0.5px',height:'8vh',background:'rgb(35,35,35,0.2)'}}></div>
        
        <RangeSlider
          value={PriceRange}
          handleChange={handlePriceChange}
          theme={theme}
        />

      </div>
      <div className={`searchResult ${theme&&"darkTheme"}`}>
        {popular.map((data => <Card obj = {data} theme={theme}/>))}
        {normalData.map((data => <Card obj = {data} theme={theme}/>))}
        
      </div>
    </div>
  )
}
