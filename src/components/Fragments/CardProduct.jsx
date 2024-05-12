import Button from "../Elements/Button";

const CardProduct = (props) => {
     // eslint-disable-next-line react/prop-types
    const { children } = props;
    return (
            <div className="w-full max-w-sm bg-gray-800 border border-gary-700 rounded-lg shadow mx-2">
            {children}
            </div>
      
    );

};

const Header = (props) => {
    // eslint-disable-next-line react/prop-types
    const {image} = props;
    return (
        <a href="#">
                    <img src={image} alt="product" className="p-8 rounded-t-lg"/>
                </a>
    );
};

const Body = (props) => {
    // eslint-disable-next-line react/prop-types
    const {children,title} = props
    return (
        <div className="px-5 pb-5">
        <a href="">
            <h5 className="text-xl-semibold tracking-tight text-white">{title}</h5>
            <p className="text-m text-white">{children}</p>
        </a>
    </div>
    )

}

const Footer = (props) => {
      // eslint-disable-next-line react/prop-types
    const { price } = props;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
        <span className="text-xl font-bold text-white">{price}</span>
        <Button classname="bg-blue-600 flex justify-center px-2 py-2">Add to Cart</Button>
    </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;

//https://youtu.be/Z_omTIQL5pw?si=Dbyo0Jqyl73VsweZ  Tutorial React JS Bahasa Indonesia : 9.Rendering Lists