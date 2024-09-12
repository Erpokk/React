import FriendListItem from "../FriendListItem/FriendListItem"
import { FriendListUl } from "./FriendList.module.jsx";

const FriendList = ({ friends }) => {
    return (
        <FriendListUl>
            
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem
                    key={id}
                    status={isOnline}
                    avatar={avatar}
                    name={name}
                />
            ))}
        </FriendListUl>
    );
};

export default FriendList;