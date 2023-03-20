import PropTypes from "prop-types";
import { Table, Head, Row, Cell, Body } from './TransactionHystory.styled';
export const TransactionHistory = ({ items }) => {
  return (
   <Table>
    <Head>
      <Row>
        <Cell>Type</Cell>
        <Cell>Amount</Cell>
        <Cell>Currency</Cell>
      </Row>
    </Head>
    <Body>
      {items.map(item => (
        <Row key={item.id}>
          <Cell>{item.type}</Cell>
          <Cell>{item.amount}</Cell>
          <Cell>{item.currency}</Cell>
        </Row>
      ))}
    </Body>
  </Table>
);
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
