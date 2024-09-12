import {FriendStatus, FriendListLi, FriendListName} from "./FriendListItem.module.jsx"
import PropTypes from 'prop-types'

const FriendListItem = ({ status, avatar, name }) => {
    return (
    <FriendListLi>
        <img src={avatar} alt="Avatar" width="48" />
        <FriendListName>{name}</FriendListName>
        <FriendStatus status={status}>{status ? "Online" : "Offline"}</FriendStatus>
    </FriendListLi>
    );
}

export default FriendListItem;

FriendListItem.propTypes = {
    status: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string
}