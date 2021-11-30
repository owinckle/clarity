
export default function CardEvent(props) {
    return (
        <div className="card event">
            <img src={ props.image } />
            <div className="head">
                <div className="date">
                    <div className="day">{ props.calendarDate[0] }</div>
                    <div className="day-no">{ props.calendarDate[1] }</div>
                </div>
                <div className="meta">
                    <div className="meet-title">{ props.title }</div>
                    <div className="subtitle">{ props.subtitle }</div>
                </div>
            </div>
            <div className="info">
                 <div className="label">
                    <span className="material-icons">calendar_today</span>
                    <div>
                        <div className="label">{ props.fullDate[0] }</div>
                        <div className="sub-label">{ props.fullDate[1] }</div>
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="label">
                    <span className="material-icons">place</span>
                    <div>
                        <div className="label">{ props.location[0] }</div>
                        <div className="sub-label">{ props.location[1] }</div>
                    </div>
                </div>
            </div>
        </div>
    );
}