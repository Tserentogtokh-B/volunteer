import '../css/SignUp.css'
export default function SignUp() {
    return (
        <div className="signup" style={{ padding: 20 }}>
            <h2>Sign Up</h2>
            <p>Sign up to continue</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 360 }}>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <div className="foot" style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'nowrap' }}>
                    <button className="btn btn-primary">Sign up</button>
                    <label className="rememberMe" style={{ display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
                        <input className="check" type="checkbox" /> Remember me
                    </label>
                </div>
            </div>
        </div>
    )
}