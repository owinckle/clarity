export default function CardInfo(props) {
    const iconClasses = { color: props.iconColor, background: props.iconBackground };

    return (
        <div className="card-info">
            <div className="data">
                <div className="title">{ props.title }</div>
                <div className="data">{ props.data }</div>
            </div>
            <span className="material-icons" style={ iconClasses }>{ props.icon }</span>
        </div>
    );
}