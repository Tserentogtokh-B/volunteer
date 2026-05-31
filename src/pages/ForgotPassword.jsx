import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/ForgotPassword.css'

const CODE_LENGTH = 6

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function generateCode() {
  const min = 10 ** (CODE_LENGTH - 1)
  const max = 10 ** CODE_LENGTH - 1
  return String(Math.floor(min + Math.random() * (max - min + 1)))
}

export default function ForgotPassword() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [sentCode, setSentCode] = useState('')
  const [codeInput, setCodeInput] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [info, setInfo] = useState('')
  const [error, setError] = useState('')

  function clearMessages() {
    setInfo('')
    setError('')
  }

  function handleSendCode(event) {
    event.preventDefault()
    clearMessages()

    if (!isValidEmail(email)) {
      setError('Имэйл хаягаа зөв оруулна уу.')
      return
    }

    const nextCode = generateCode()
    setSentCode(nextCode)
    setCodeInput('')
    setStep(2)
    setInfo('Нууц код имэйлээр илгээгдлээ. Кодоо оруулна уу.')
  }

  function handleVerifyCode(event) {
    event.preventDefault()
    clearMessages()

    if (codeInput.length !== CODE_LENGTH) {
      setError('6 оронтой код оруулна уу.')
      return
    }

    if (codeInput !== sentCode) {
      setError('Нууц код буруу байна.')
      return
    }

    setStep(3)
    setInfo('Код баталгаажлаа. Одоо шинэ нууц үг оруулна уу.')
  }

  function handleResetPassword(event) {
    event.preventDefault()
    clearMessages()

    if (password.length < 6) {
      setError('Нууц үг дор хаяж 6 тэмдэгт байна.')
      return
    }

    if (password !== confirmPassword) {
      setError('Нууц үгүүд таарахгүй байна.')
      return
    }

    setStep(4)
    setInfo('Нууц үг амжилттай шинэчлэгдлээ.')
  }

  function handleResend() {
    clearMessages()

    if (!isValidEmail(email)) {
      setError('Имэйл хаягаа зөв оруулна уу.')
      setStep(1)
      return
    }

    const nextCode = generateCode()
    setSentCode(nextCode)
    setCodeInput('')
    setInfo('Шинэ нууц код илгээгдлээ.')
  }

  function handleBackToEmail() {
    clearMessages()
    setStep(1)
    setSentCode('')
    setCodeInput('')
  }

  function handleBackToCode() {
    clearMessages()
    setStep(2)
  }

  const stepDisplay = Math.min(step, 3)

  return (
    <div className="forgot" style={{ padding: 20 }}>
      <h2>Нууц үг сэргээх</h2>
      <p>Имэйлээр илгээсэн нууц кодоор нууц үгээ шинэчилнэ.</p>

      {step <= 3 && <div className="step-pill">Алхам {stepDisplay} / 3</div>}
      {step <= 3 && info && <div className="status info">{info}</div>}
      {step <= 3 && error && <div className="status error">{error}</div>}

      {step === 1 && (
        <form onSubmit={handleSendCode}>
          <input
            type="email"
            name="email"
            placeholder="Имэйл хаяг"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div className="actions">
            <button className="btn btn-primary" type="submit">Нууц код илгээх</button>
            <Link className="text-link" to="/signin">Нэвтрэх рүү буцах</Link>
          </div>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleVerifyCode}>
          <div className="code-note">Код илгээсэн имэйл: <strong>{email}</strong></div>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            name="code"
            placeholder="6 оронтой код"
            autoComplete="one-time-code"
            value={codeInput}
            onChange={(event) => {
              const nextValue = event.target.value.replace(/\D/g, '').slice(0, CODE_LENGTH)
              setCodeInput(nextValue)
            }}
          />
          {sentCode && <div className="code-note">Туршилтын орчин: код {sentCode}</div>}
          <div className="actions">
            <button className="btn btn-primary" type="submit">Код баталгаажуулах</button>
            <button className="btn btn-ghost" type="button" onClick={handleResend}>Код дахин илгээх</button>
            <button className="btn btn-ghost" type="button" onClick={handleBackToEmail}>Имэйл солих</button>
          </div>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleResetPassword}>
          <input
            type="password"
            name="password"
            placeholder="Шинэ нууц үг"
            autoComplete="new-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Нууц үгээ давтан оруулна уу"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <div className="actions">
            <button className="btn btn-primary" type="submit">Нууц үг шинэчлэх</button>
            <button className="btn btn-ghost" type="button" onClick={handleBackToCode}>Буцах</button>
          </div>
        </form>
      )}

      {step === 4 && (
        <div>
          <div className="status info">{info || 'Нууц үг амжилттай шинэчлэгдлээ.'}</div>
          <div className="actions">
            <Link className="btn btn-primary" to="/signin">Нэвтрэх</Link>
            <button className="btn btn-ghost" type="button" onClick={handleBackToEmail}>Дахин сэргээх</button>
          </div>
        </div>
      )}
    </div>
  )
}
