import Logo from "@/assets/logo.svg"

type Props = {}

const Footer = ( props : Props) => {
  return (
    <footer
        className="bg-black py-16"
    >
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" className="w-24" src={Logo} />
                <p className="my-5 text-secondary-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aspernatur debitis molestiae optio. Voluptate excepturi, neque magni animi maxime earum, suscipit porro sunt veniam sit, provident nihil reiciendis rem. Minus.
                </p>
            </div>
            <div></div>
            <div></div>
        </div>

    </footer>
  )
}

export default Footer