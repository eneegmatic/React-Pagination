export const Card = ({text, duration}) => {
    return(
        <div className="card" data-aos="fade-left"  data-aos-duration={200*duration}>
            <div className="card-body">
                <div className="card-text">{text}</div>
            </div>
        </div>
    )
}