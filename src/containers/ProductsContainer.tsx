import { connect } from "react-redux";
import React from "react";
import {
  Card,
  Container,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
  Spinner,
  Jumbotron,
} from "reactstrap";
import { fetchProducts } from "../store/actions/product.actions";
import { Products } from "../models/response/products";

interface IProps {
  dispatch: any;
  products: Products[];
  loading: boolean;
  status: boolean | number;
}
class ProductsContainer extends React.Component<IProps> {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  renderCard(product: Products) {
    return (
      <Col md={3} key={product.id} className="mt-3">
        <Card>
          <CardImg top width="100%" src={product.image} alt={product.title} />
          <CardBody>
            <CardTitle tag="h5">{product.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {product.price}
            </CardSubtitle>
            <CardText>{product.description.slice(0, 40)}...</CardText>
            <Button color="danger">Add to Cart</Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
  render() {
    const { products, loading, status } = this.props;
    console.log({
      data: products,
      loading,
      status,
    });
    return (
      <Container>
        <Jumbotron>
          {!loading ? (
            <Row>{products.map((product) => this.renderCard(product))}</Row>
          ) : (
            <div className="d-flex justify-content-center">
              <Spinner size="md" color="primary" />
            </div>
          )}
        </Jumbotron>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  products: state.productsResult.products,
  loading: state.productsResult.loading,
  status: state.productsResult.status,
});
export default connect(mapStateToProps)(ProductsContainer);
