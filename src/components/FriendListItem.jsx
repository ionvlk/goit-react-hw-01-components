import PropTypes from 'prop-types';
import {
  ItemContainer,
  Status,
  Avatar,
  Name,
} from "./FriendListItem.styled";

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <ItemContainer>
            <Status isOnline={isOnline} />
            <Avatar src={avatar} alt={name} />
            <Name>{name}</Name>
        </ItemContainer>
    );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};

export default FriendListItem;