import { MdOutlineModeEditOutline, MdClose } from 'react-icons/md';

const ChocolateCard = ({chocolate}) => {
    const {image, name, factory, category} = chocolate
    return (
        <tr className='border-b-2 w-full text-center'>
            <td className='py-4'><img src={image} alt={name} /></td>
            <td className='py-4'>{name}</td>
            <td className='py-4'>{factory}</td>
            <td className='py-4'>{category}</td>
            <td ><span className='p-3 rounded inline-block mx-2' style={{background: "linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)"}} ><MdOutlineModeEditOutline/></span><span className='p-3 rounded inline-block mx-2' style={{background: "linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)"}} ><MdClose/></span></td>
        </tr>
    );
};

export default ChocolateCard;