import { AiOutlinePlus } from 'react-icons/ai';
import chocolate from "/favicon.png"
const Home = () => {
    return (
        <div className='mt-[50px]'>
            <button className='flex items-center gap-2 border rounded p-3'><AiOutlinePlus/> <span>New Chocolate</span> <img src={chocolate} alt="" /></button>
            <table className='w-full mt-10'>
                <thead style={{background: "radial-gradient(173.43% 182.1% at 50% 49.99%, rgba(220, 141, 72, 0.3) 0%, rgba(211, 135, 69, 0.3) 4.19%, rgba(145, 87, 43, 0.3) 36.95%, rgba(94, 49, 22, 0.3) 66.01%, rgba(63, 26, 10, 0.3) 87.87%, rgba(51, 17, 5, 0.3) 100%)"}}>
                    <tr>
                        <th className='p-4'>Image</th>
                        <th className='p-4'>Name</th>
                        <th className='p-4'>Country/Factory</th>
                        <th className='p-4'>Category</th>
                        <th className='p-4'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    );
};

export default Home;