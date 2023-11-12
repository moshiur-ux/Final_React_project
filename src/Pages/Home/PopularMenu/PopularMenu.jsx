
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Menuitem from "../../Shared/MenuItem/Menuitem";
import UseMenu from "../../../Hooks/UseMenu";



const PopularMenu = () => {

    const[menu]=UseMenu();
    const Popular =menu.filter(item=>item.category=='popular')


    return (
        <div>
            <section className="mb-12">
                <SectionTitle

                heading="From Our Menu"
                subHeading="Popular Items"
                
                >
                    
                </SectionTitle>
                <div className="grid md:grid-cols-2 gap-10">{
                    Popular.map(item=><Menuitem key={item.id} item={item}></Menuitem>)
                    }</div>

                
            </section>
            
        </div>
    );
};

export default PopularMenu;