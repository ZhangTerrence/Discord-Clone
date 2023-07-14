import { useState, useEffect } from "react";

function Friends() {
  const [selectedStatus, setSelectedStatus] = useState("online");
  const [friends, setFriends] = useState<string[]>([]);

  useEffect(() => {
    (document.getElementById(selectedStatus) as HTMLInputElement).checked = true;
  }, [selectedStatus]);

  return (
    <div className="friends-page">
      <div className="friends-page__statuses">
        <label onClick={() => setSelectedStatus("online")}>
          <input id="online" type="radio" name="status" />
          <div>Online</div>
        </label>
        <label onClick={() => setSelectedStatus("all")}>
          <input id="all" type="radio" name="status" />
          <div>All</div>
        </label>
        <label onClick={() => setSelectedStatus("pending")}>
          <input id="pending" type="radio" name="status" />
          <div>Pending</div>
        </label>
        <label>
          <input id="add-friend" className="friends-page__add-friend" type="radio" name="status" />
          <div>Add Friend</div>
        </label>
      </div>
      <div className="friends-page__search">
        <input type="text" />
      </div>
      <h6 className="friends-page__divider">{selectedStatus.toUpperCase()}</h6>
      <div className="friends-page__friends">
        {friends.map((friend) => {
          return <div key={friend}>{friend}</div>;
        })}
      </div>
    </div>
  );
}

export default Friends;
