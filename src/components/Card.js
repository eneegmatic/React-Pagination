export const Card = ({text, duration,title}) => {
    return(
        <div className="card text-white bg-dark" data-aos="fade-left"  data-aos-duration={200*duration}>
            <div className="card-body">
                {/*<h5 className="card-title">{title}</h5>*/}
                <div className="card-text">{text}</div>
            </div>
        </div>
    )
}