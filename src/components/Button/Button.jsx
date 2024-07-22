const Button = ({ label, event }) => {
    return (
        <button type="button" onClick={event}>
            {label}
        </button>
    );
}

export default Button;