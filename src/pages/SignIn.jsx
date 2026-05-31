import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import '../css/SignIn.css'

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('volunteer')
    const [error, setError] = useState('')
    const { signIn } = useAuth()
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        setError('')

        if (!email.trim()) {
            setError('Имэйл хаягаа оруулна уу.')
            return
        }

        signIn(email.trim(), role)
        const target = role === 'organization' ? '/org/dashboard' : role === 'admin' ? '/admin/overview' : '/dashboard'
        navigate(target)
    }

    return (
        <div className="signin">
            <h2>Нэвтрэх</h2>
            <p>Үргэлжлүүлэхийн тулд нэвтэрнэ үү</p>
            {error && <div className="status error">{error}</div>}
            <form className="signin-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <select value={role} onChange={(event) => setRole(event.target.value)}>
                    <option value="volunteer">Сайн дурын ажилтан</option>
                    <option value="organization">Байгууллага</option>
                    <option value="admin">Админ</option>
                </select>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <div className="foot">
                    <button className="btn btn-primary" type="submit">Нэвтрэх</button>
                    <label className="rememberMe">
                        <input className="check" type="checkbox" /> Намайг санах
                    </label>
                    <Link to="/forgot-password">Нууц үг мартсан?</Link>
                </div>
            </form>
        </div>
    )
}