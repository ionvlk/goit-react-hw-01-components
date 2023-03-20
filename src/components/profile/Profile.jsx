import PropTypes from "prop-types";
import { ProfileContainer, DescriptionContainer, Avatar, Name, Tag, Location, StatsContainer, Stat, Label, Quantity } from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
  return (
    <ProfileContainer>
    <DescriptionContainer>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{username}</Name>
      <Tag>{tag}</Tag>
      <Location>{location}</Location>
    </DescriptionContainer>
    <StatsContainer>
      <Stat>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </Stat>
      <Stat>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </Stat>
      <Stat>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </Stat>
    </StatsContainer>
  </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
