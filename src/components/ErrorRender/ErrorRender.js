// Error Component that renders when something is not found and show a specific message
const ErrorRender = ({error}) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-3">
            <i class="fa-solid fa-exclamation fa-2xl text-danger mb-3"></i>
            <h1 className='text-center text-danger'>{error}</h1>
        </div>
    )
}
export default ErrorRender

