import ActionButton from "@/shared/ActionButtonExternal";


type Props = {
    name: string;
    description?: string;
    image: string;
    overlay: boolean
}

const Product = ({ overlay, name, description, image }: Props) => {
    
    const overlayStyles = `p-5 absolute z-30 flex h-[420px] w-[300px] flex-col items-center justify-center whitespace-normal bg-secondary-300 text-center text-black opacity-0 transition duration-500 hover:opacity-90`
  
    return (
        <>
        
        {overlay ? (
            <li className="relative mx-5 inline-block h-[380px] w-[300px] mb-20">
                <div className={overlayStyles}>
                    <p className="text-2xl">{name}</p>
                    <p className="mt-5">{description}</p>
                    <div className="mt-5">
                        <ActionButton>Book Now</ActionButton>
                    </div>
                </div>
                <img alt={`${image}`} src={image} />
            </li>
        ) : (
            <li className="inline-block mb-20">
                <div className="text-center">
                    <div className="mx-auto max-w-[450px]">
                        <img className="" alt={`${image}`} src={image} />
                    </div>
                    <p className="text-2xl">{name}</p>
                    <p className="mt-5">{description}</p>
                    <div className="mt-5">
                        <ActionButton>Book Now</ActionButton>
                    </div>
                </div>
            </li>
        )}

        </>
  )
}

export default Product