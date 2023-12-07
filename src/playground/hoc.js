import React from "react"
import { createRoot } from 'react-dom/client';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is the info: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private information. Please dont share!</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>You are not authenticated!</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

const root = createRoot(document.getElementById('app'));
root.render(<AuthInfo isAuthenticated={true} info="These are the details" />);