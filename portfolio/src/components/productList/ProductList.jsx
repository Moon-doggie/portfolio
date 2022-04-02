import Product from "../product/Product"
import "./productList.css"

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-text">
            <h1 className="pl-title">Example Heading</h1>
            <p className="pl-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nesciunt neque ipsam odio nihil? Perspiciatis eveniet quia ab dolor debitis minima sed ex animi, impedit, laboriosam modi obcaecati? Neque, id.</p>
        </div>
        <div className="pl-list">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
  )
}

export default ProductList