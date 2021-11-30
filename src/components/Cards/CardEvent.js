
export default function CardEvent(props) {
    return (
        <div className="card event">
            <img src={ props.image } />
            <div className="head">
                <div className="date">
                    <div className="day">Thu</div>
                    <div className="day-no">24</div>
                </div>
                <div className="meta">
                    <div className="meet-title">Product Design Meeting</div>
                    <div className="subtitle">Meeting with the product team</div>
                </div>
            </div>
            <div className="info">
                 <div className="label">
                    <span className="material-icons">calendar_today</span>
                    <div>
                        <div className="label">Sat, May 25, 2020</div>
                        <div className="sub-label">10AM to 6PM</div>
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="label">
                    <span className="material-icons">place</span>
                    <div>
                        <div className="label">Sat, May 25, 2020</div>
                        <div className="sub-label">10AM to 6PM</div>
                    </div>
                </div>
            </div>
        </div>
    );
}