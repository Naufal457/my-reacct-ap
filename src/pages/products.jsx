// import Button from "../components/Elements/Button";

import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
        <CardProduct>
            <CardProduct.Header image="/images/shoes-1.jpg"/>
            <CardProduct.Body title="Sepatu baru">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, neque ipsa! Ex voluptatibus nisi quibusdam. Tempore harum saepe quidem, mollitia aliquid quisquam eos a doloribus eveniet, nesciunt numquam id! Reprehenderit.</CardProduct.Body>
            <CardProduct.Footer price="Rp. 1000.000"/>
        </CardProduct>
        </div>
      
    )
};

export default ProductsPage;