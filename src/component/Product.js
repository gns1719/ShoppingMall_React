import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <div>
      <img src={props.coverImg} alt={props.title} width={"300px"} height={"300px"}/>
      <h2>브랜드 : {props.maker}</h2>
      <h2>
        <Link to={`/detail/${props.id}`}>{props.title}</Link>
      </h2>
      <h3>{props.price}원!</h3>
      <hr></hr>
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  maker: PropTypes.string.isRequired,
};

export default Product;