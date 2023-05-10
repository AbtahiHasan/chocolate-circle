import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";


const UpdateChocolate = () => {
    const [chocolate, setChocolate] = useState([])
    const {name, factory, category, image} = chocolate
    const {id} = useParams()
    useEffect(() => {
        fetch(`http://localhost:3000/${id}`)
        .then(res => res.json()) 
        .then(data => setChocolate(data))
    },[id])
    const addNewChocolate = (e) => {
        e.preventDefault()
        const form = e.target 
        const name = form.name.value 
        const factory = form.factory.value
        const category = form.category.value
        const image = form.image.value
        const chocolate = {name, factory, category, image}

        fetch(`http://localhost:3000/${id}`, {
            method: "put",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(chocolate)
        })

    }
    return (
        <main>
            <div>
                <Link to="/"><button className="flex items-center gap-3"><AiOutlineArrowLeft/><span> All Chocolates</span> </button></Link>
            </div>
            <hr className="w-full my-3" />
            <form className="bg-[#14141411] rounded px-[100px] py-5" onSubmit={addNewChocolate}>
                <div className="text-center my-3">
                    <h2 className="text-2xl font-bold">Add New Chocolate</h2>
                    <p className="mt-2">Use the below form to create a new product</p>
                </div>
                <div className="w-full my-5">
                    <span className="block font-bold">Name</span>
                    <input name="name" defaultValue={name} type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded" placeholder="example: Hot Pink Chocolate"/>
                </div>
                <div className="w-full my-5">
                    <span className="block font-bold">Country</span>
                    <input name="factory" defaultValue={factory} type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded" placeholder="Enter Country Name"/>
                </div>
                <div className="w-full my-5">
                    <span className="block font-bold">Image</span>
                    <input name="image" defaultValue={image} type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded" placeholder="image url"/>
                </div>
                <div className="w-full my-5">
                    <span className="block font-bold">Category</span>
                    <select className="w-full px-4 py-3 outline-0 border-2 bg-white mt-3" name="category" id="">
                        <option selected={category === "Premium" ? true : false} value="Premium">Premium</option>
                        <option selected={category === "dark chocolate" ? true : false} value="dark chocolate">dark chocolate</option>
                        <option selected={category === "white chocolate" ? true : false} value="white chocolate">white chocolate</option>
                        <option selected={category === "milk chocolate" ? true : false} value="milk chocolate">milk chocolate</option>
                    </select>
                </div>
                <div >
                    <button className="px-4 block mt-10 py-3 rounded text-white w-full" style={{background:"linear-gradient(0deg, #91572B, #91572B)"}} type="submit">Save</button>
                </div>
                
            </form>
        </main>
    );
};

export default UpdateChocolate;