import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu//banner3.jpg'
import dessertimg from '../../../assets/menu/dessert-bg.jpeg'
import Pizzaimg from '../../../assets/menu/pizza-bg.jpg'
import soupimg from '../../../assets/menu/soup-bg.jpg'
import saladimg from '../../../assets/menu/salad-bg.jpg'
import UseMenu from '../../../Hooks/UseMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => { 
    const [menu]=UseMenu();
    const dessert =menu.filter(item=>item.category=='dessert')
    const soup =menu.filter(item=>item.category=='soup')
    const salad =menu.filter(item=>item.category=='salad')
    const pizza =menu.filter(item=>item.category=='pizza')
    const offered =menu.filter(item=>item.category=='offered')


    return (
        <div>
            <Helmet>
            <title>Bistro Boss |Menu</title>
            </Helmet>


            <Cover img ={menuImg} title='Our menu'></Cover>
           
            <SectionTitle
               
               subHeading="Dont Miss"
               heading="Todays offer"

            
            
            ></SectionTitle>

            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title="Dessert" img={dessertimg} ></MenuCategory>
            <MenuCategory items={pizza} title="Pizza" img={Pizzaimg} ></MenuCategory>
            <MenuCategory items={soup} title="Soup" img={soupimg} ></MenuCategory>
            <MenuCategory items={salad} title="salad" img={saladimg} ></MenuCategory>
            
        </div>
    );
};

export default Menu;