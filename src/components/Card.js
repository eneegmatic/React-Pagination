export const Card = ({text}) => {
    return(
        <div className="card">
            <div className="card-body">
                <div className="card-text">{text}</div>
            </div>
        </div>
    )
}