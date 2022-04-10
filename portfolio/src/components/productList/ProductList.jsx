import Product from "../product/Product";
import "./productList.css";
import { contactDetails, products } from "../../assets/data/data";

const ProductList = () => {
	return (
		<div className="pl">
			<div className="pl-text">
				<h1 className="pl-title">Portfolio Projects</h1>
				<p className="pl-desc">
					All projects in my portfolio can be found in on my{" "}
					<b>
						<a href={contactDetails.GitHub} className="link">
							GitHub
						</a>
					</b>
					. To be directed to the repository for a particular project,
					click the images below.
				</p>
			</div>
			<div className="pl-list">
				{products.map((item) => (
					<Product key={item.id} img={item.img} link={item.link} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
