import PropTypes from 'prop-types';
import { FriendListContainer}  from './FriendList.styled';
import  FriendListItem  from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendListContainer>
  );
};

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

