/* eslint-disable no-unused-vars */
import { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../Hooks/UseMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import OrderTab from '../orderTab/OrderTab';
const Order = () => {
    const [tabIndex,setTabIndex]=useState(0)

    const [menu]=UseMenu();
    const dessert =menu.filter(item=>item.category=='dessert')
    const soup =menu.filter(item=>item.category=='soup')
    const salad =menu.filter(item=>item.category=='salad')
    const pizza =menu.filter(item=>item.category=='pizza')
    const offered =menu.filter(item=>item.category=='offered')
    const drinks =menu.filter(item=>item.category=='drinks')


    return (
        <div>
            <Cover img={orderCover} title="order Food"></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Dessert</Tab>
    <Tab>pizzza</Tab>
    <Tab>Salad</Tab>
    <Tab>Soup</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
   <OrderTab items={dessert}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={pizza}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={salad}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={soup}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={drinks}></OrderTab>
  </TabPanel>
</Tabs>
            
        </div>
    );
};

export default Order;