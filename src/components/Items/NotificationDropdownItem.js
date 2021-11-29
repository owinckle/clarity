export default function NotificationDropdownItem(props) {
    return (
        <div className="notification-dropdown-item">
            <img src={ props.avatar } />
            <div className="content">
                <div className="label">{ props.label }</div>
                <div className="timestamp">{ props.timestamp }</div>
            </div>
        </div>
    );
}