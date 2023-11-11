import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Menuitem from "../../Shared/MenuItem/Menuitem";



const PopularMenu = () => {

    const [menu,setMenu]=useState([])

    useEffect(()=>{

        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>
            {
                const populatitem=data.filter(item=>item.category=='popular')


                setMenu(populatitem)
                console.log(populatitem)

            })
          

    },[])





    return (
        <div>
            <section className="mb-12">
                <SectionTitle

                heading="From Our Menu"
                subHeading="Popular Items"
                
                >
                    
                </SectionTitle>
                <div className="grid md:grid-cols-2 gap-10">{
                    menu.map(item=><Menuitem key={item.id} item={item}></Menuitem>)
                    }</div>

                
            </section>
            
        </div>
    );
};

export default PopularMenu;