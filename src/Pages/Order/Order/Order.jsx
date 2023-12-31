/* eslint-disable no-unused-vars */
import { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../Hooks/UseMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import OrderTab from '../orderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {

    const categories=['dessert','pizza','salad','soup','drinks']
    const {category} =useParams();
    const initialindex =categories.indexOf(category)

    const [tabIndex,setTabIndex]=useState(initialindex)

 
    const [menu]=UseMenu();
    
    
    const dessert =menu.filter(item=>item.category=='dessert')
    const soup =menu.filter(item=>item.category=='soup')
    const salad =menu.filter(item=>item.category=='salad')
    const pizza =menu.filter(item=>item.category=='pizza')
    const offered =menu.filter(item=>item.category=='offered')
    const drinks =menu.filter(item=>item.category=='drinks')


    return (
        <div>

            <Helmet>
            <title>Bistro Boss |Order Food</title>
            </Helmet>




            <Cover img={orderCover} title="order Food"></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Dessert</Tab>
    <Tab>pizza</Tab>
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