export const Container = ({children}) => {

    const style= {
        display: 'flex',
        flexDirection:'column',
        gap:'5px',
        maxWidth:'800px'
    }
    return(
        <div className="mx-auto" style={style}>
            {children}
        </div>
    )
}