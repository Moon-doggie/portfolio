import Product from "../product/Product"
import "./productList.css"
import {products} from  "../../assets/data/data"

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-text">
            <h1 className="pl-title">Example Heading</h1>
            <p className="pl-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nesciunt neque ipsam odio nihil? Perspiciatis eveniet quia ab dolor debitis minima sed ex animi, impedit, laboriosam modi obcaecati? Neque, id.</p>
        </div>
        <div className="pl-list">
            {products.map((item) => (
                <Product key={item.id} img={item.img} link={item.link}/>
            ))}
        </div>
    </div>
  )
}

export default ProductList