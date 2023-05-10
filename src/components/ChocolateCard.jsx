import { MdOutlineModeEditOutline, MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ChocolateCard = ({chocolate}) => {
    const {_id, image, name, factory, category} = chocolate
    return (
        <tr className='border-b-2 w-full text-center'>
            <td className='py-4'><img src={image} alt={name} /></td>
            <td className='py-4'>{name}</td>
            <td className='py-4'>{factory}</td>
            <td className='py-4'>{category}</td>
            <td ><Link to={`/${_id}/edit`}><span className='p-3 rounded inline-block mx-2' style={{background: "linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)"}} ><MdOutlineModeEditOutline/></span></Link><span className='p-3 rounded inline-block mx-2' style={{background: "linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)"}} ><MdClose/></span></td>
        </tr>
    );
};

export default ChocolateCard;

