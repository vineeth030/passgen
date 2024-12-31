import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [generatedPassword, setGeneratedPassword] = useState("")
  const [passwordLength, setPasswordLength] = useState(12)
  const [isClicked, setIsClicked] = useState(false)
  const minPasswordLength = 8;
  const maxPasswordLength = 20;

  function copyToClipboard() {
    setIsClicked(true)
    navigator.clipboard.writeText(generatedPassword)
    console.log('Generated Password: ', generatedPassword)
  }

  function generatePassword() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += charset[Math.floor(Math.random() * charset.length)];
    }
    setGeneratedPassword(password)
  }

  useEffect(() => {
    generatePassword()
  }, [passwordLength])

  useEffect(() => {
    setTimeout(() => {
      setIsClicked(false)
    }, 3000);
  }, [isClicked])

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold font-sans text-gray-800 mb-8">Password Generator</h1>
      <p id="passwordDisplay" onClick={ () => copyToClipboard() } 
        className={`text-6xl font-mono bg-white rounded-md shadow-md p-6 mb-6 cursor-pointer ${isClicked ? 'text-gray-200' : 'text-black-600' }`}>
        {generatedPassword}
        
      </p>
      <div className={`${isClicked ? 'block' : 'hidden'} h-8 flex justify-center items-center gap-4`}>
        <p className="text-xs text-gray-800 font-bold">Password Copied!</p>
      </div>
      <div className={`${isClicked ? 'hidden' : 'block'} h-8 flex justify-center items-center gap-4`}>
        <svg onClick={ () => generatePassword() } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 cursor-pointer hover:fill-slate-500">
          <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={ () => setPasswordLength(minPasswordLength < passwordLength ? passwordLength - 1 : passwordLength) } fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7 cursor-pointer">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
            <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5ZM3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd"/>
          </svg>
          <span className="absolute inset-0 flex justify-center items-center text-xs font-bold text-black">
            {passwordLength}
          </span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" 
          onClick={ () => setPasswordLength(maxPasswordLength > passwordLength ? passwordLength + 1 : passwordLength) } 
          fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7 cursor-pointer">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
    </div>
  )
}

export default App
