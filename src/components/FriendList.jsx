import PropTypes from "prop-types";

export const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map((friend) => (
      <li key={friend.id}>
        <h3>{friend.name}</h3>
        <p>Age: {friend.age}</p>
        <p>Location: {friend.location}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};


