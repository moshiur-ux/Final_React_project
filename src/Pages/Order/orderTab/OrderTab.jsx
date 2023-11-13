import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTab = ({items}) => {
    return (
        <div className='grid gap-6 md: grid-cols-2 lg:grid-cols-3'>
        {
            items.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
        }
        </div>
    );
};

export default OrderTab;