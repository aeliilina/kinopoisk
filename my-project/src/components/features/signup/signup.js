'use client'
import { useState } from "react"
import { Button, Input } from "antd"
import CustomModal from "@/components/UI/modal/modal"

export default function SignUp() {
    const [isOpen, setIsOpen] = useState(false)

    const [authData, setAuthData] = useState({
        username: {
            value: '',
            error: false,
            pattern: /^[a-zA-Z0-9_]{3,}$/  // Минимум 3 символа, буквы, цифры и подчеркивания
        },
        phone_number: {
            value: '',
            error: false,
            pattern: /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/  // Формат для телефонного номера
        },
        email: {
            value: '',
            error: false,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[cC][oO][mM]$/  // Должен содержать @ и заканчиваться на .com
        }
    })

    const postData = {
        phone_number: '',
        username: '',
        email: ''
    }

    const handleChange = (type, newValue) => {
        setAuthData(prev => ({
            ...prev,
            [type]: { ...prev[type], value: newValue, error: false }
        }))
    }

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleCheckAuthData = () => {
        const authKeys = Object.keys(authData)
        let hasError = false

        authKeys.forEach(item => {
            if (authData[item].value) {
                if (authData[item].pattern) {
                    if (authData[item].pattern.test(authData[item].value)) {
                        postData[item] = authData[item].value
                    } else {
                        hasError = true
                        setAuthData(prev => ({
                            ...prev,
                            [item]: { ...prev[item], error: true }
                        }))
                    }
                } else {
                    postData[item] = authData[item].value
                }
            } else {
                hasError = true
                setAuthData(prev => ({
                    ...prev,
                    [item]: { ...prev[item], error: true }
                }))
            }
        })

        return !hasError
    }

    const handleAuth = () => {
        if (handleCheckAuthData()) {
            fetch('https://baktyiar.pythonanywhere.com/api/user/profile/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data)
                })
                .catch((error) => {
                    console.error('Error:', error)
                })
        }
    }

    return (
        <>
            <Button className="text-white text-[16px]" type="text" onClick={handleOpen}>Войти</Button>
            <CustomModal title={'Войти'} isOpen={isOpen} onCancel={handleClose} onOk={handleAuth}>
                <div className="flex flex-col gap-[12px] mt-[36px]">
                    <Input
                        status={authData.phone_number.error ? 'error' : ''}
                        placeholder="Phone Number"  // Обновлено здесь
                        value={authData.phone_number.value}
                        onChange={(e) => handleChange('phone_number', e.target.value)}
                    />
                    <Input
                        status={authData.username.error ? 'error' : ''}
                        placeholder="Username"
                        value={authData.username.value}
                        onChange={(e) => handleChange('username', e.target.value)}
                    />
                    <Input
                        status={authData.email.error ? 'error' : ''}
                        placeholder="Email"
                        value={authData.email.value}
                        onChange={(e) => handleChange('email', e.target.value)}
                    />
                </div>
            </CustomModal>
        </>
    )
}

