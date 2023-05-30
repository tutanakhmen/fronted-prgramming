
function Alert(props) {

    return (
        <div style={{ color: 'red' }}>
            <span> {props.children}</span>
        </div>
    )
}

export default Alert;