/* 未提取组件之前 */

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img src={props.author.avatarUrl} alt={props.author.name} />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

/* 未提取组件之前 */

/**开始提取组件 */
function Avatar(props) {
  return <img src={props.author.avatarUrl} alt={props.author.name} />;
}

function UserInfo(props) {
  return <div className="UserInfo">
    <div className="UserInfo-name">{props.author.name}</div>
    <Avatar user={props.user} />
  </div>
}
