export default function CardDefault(props) {
    const iconClasses = { color: props.iconColor, background: props.iconBackground };

    return (
        <div className="card-default">
            <div class="data">
                <div className="title">{ props.title }</div>
                <div className="data">{ props.data }</div>
            </div>
            <span className="material-icons" style={iconClasses }>{ props.icon }</span>
        </div>
    );
}