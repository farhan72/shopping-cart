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
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { fetchProducts } from "../redux/actions/product.actions";
import { Products } from "../models/response/products";
import { ProductsRequest } from "./../models/request/products-request";
import { PRODUCT_DECREAMENT, PRODUCT_INCREAMENT } from "../redux/actions/types";

interface IProps {
  dispatch: any;
  products: Products[];
  loading: boolean;
  quantity: number;
  status: boolean | number;
}
class ProductsContainer extends React.Component<IProps> {
  componentDidMount() {
    this.props.dispatch(fetchProducts(this.queryParams()));
  }

  queryParams(limit: number = 5, order: string = "desc") {
    const request: ProductsRequest = {
      limit,
      sort: order,
    };
    return request;
  }

  increment = () => {
    this.props.dispatch({ type: PRODUCT_INCREAMENT });
  };

  decrement = () => {
    this.props.dispatch({ type: PRODUCT_DECREAMENT });
  };

  renderCard(product: Products) {
    return (
      <Col md={3} key={product.id} className="mt-3">
        <Card>
          <CardImg top width="100%" src={product.image} alt={product.title} />
          <CardBody>
            <CardTitle tag="h5">{product.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              ${product.price}
            </CardSubtitle>
            <CardText>{product.description.slice(0, 50)}...</CardText>
            <div className="text-center">
              <div>
                <Button color="danger" onClick={() => this.queryParams()}>
                  Add to Cart
                </Button>
              </div>
              <div className="mt-3">
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <Button color="warning" onClick={() => this.decrement()}>
                      -
                    </Button>
                  </InputGroupAddon>
                  <Input
                    type="number"
                    className="text-center"
                    value={this.props.quantity}
                    onChange={() => this.props.quantity}
                  />
                  <InputGroupAddon addonType="append">
                    <Button color="primary" onClick={() => this.increment()}>
                      +
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }
  render() {
    const { products, loading } = this.props;
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
  quantity: state.productsResult.quantity,
});
export default connect(mapStateToProps)(ProductsContainer);
