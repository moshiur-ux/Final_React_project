import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-12 my-20">
           <SectionTitle 

           subHeading="check it out"
           heading="Feature"
           
           >


           </SectionTitle>
           <div className="md:flex justify-center items-center pb-20 pt-12 px-36 py-8 bg-slate-500 bg-opacity-60 ">

            <div>
                <img src={featuredImg} alt="" />

            </div>
            <div className="md:ml-10">
                <p>Aug 20,2029</p>
                <p className="uppercase">Where can i get some?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo minima quibusdam magni necessitatibus!</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4 ">Order Now</button>


            </div>
           </div>
            
        </div>
    );
};

export default Featured;