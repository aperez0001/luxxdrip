import ActionButton from "@/shared/ActionButtonExternal";


type Props = {
    name: string;
    description?: string;
    image: string;
}

const Product = ({ name, description, image }: Props) => {
    
    const overlayStyles = `p-5 absolute z-30 flex h-[450px] w-[300px] flex-col items-center justify-center whitespace-normal bg-secondary-300 text-center text-black opacity-0 transition duration-500 hover:opacity-90`
  
    return (
    <li className="relative mx-5 inline-block h-[380px] w-[300px]">
        <div className={overlayStyles}>
            <p className="text-2xl">{name}</p>
            <p className="mt-5">{description}</p>
            <div className="mt-5">
                <ActionButton>Book Now</ActionButton>
            </div>
            
        </div>
        <img alt={`${image}`} src={image} />
       
    </li>
  )
}

export default Product