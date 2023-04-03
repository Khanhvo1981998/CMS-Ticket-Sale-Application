import { AppleOutlined, FacebookOutlined, GoogleOutlined } from '@ant-design/icons'
import { signInWithPopup } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, provider } from '../../../lib/firebase/firebase'
import { localStorageService } from '../../../services/LocalService'

type Props = {}
export const ACCESS_TOKEN = "ACCESS_TOKEN"
export default function DangNhap({}: Props) {
    const [value, setValue] = useState("")
    const fName = value?.charAt(0).toUpperCase()
    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((data: any) => {
                const dataUser = data.user?.email;
                //   console.log({ data });
                const Token = data.user?.getIdToken?.();
                //   console.log({ Token });

                if (dataUser) {
                    setValue(dataUser);
                    localStorage.setItem(ACCESS_TOKEN, data.user.accessToken);
                    localStorageService.setUserLocal(dataUser);
                }
            })
            .catch((error: any) => console.log(error));
    }
    useEffect(() => {
        setValue(localStorageService.getUserLocal())
    })

  return (
    <div className=''>
    <div className='flex justify-center mb-4 onclick'>
        <h1 className='text-3xl '>Login</h1>
    </div>
    <div className='px-20'>
        <div
            onClick={handleLogin}
            className='flex items-center justify-start p-2 my-3 bg-red-600 border cursor-pointer rounded-xl'>
            <div className='pb-2 mr-2'>
                <span className='pb-2 text-2xl'><GoogleOutlined /></span>
            </div>
            <div className='text-2xl text-white'>
                <span> Login With Google</span>
            </div>
        </div>
        <div className='flex items-center justify-start p-2 my-3 bg-blue-600 border cursor-pointer rounded-xl'>
            <div className='pb-2 mr-2'>
                <span className='pb-2 text-2xl'><FacebookOutlined /></span>
            </div>
            <div className='text-2xl text-white'>
                <span> Login With Facebook</span>
            </div>

        </div>

        <div className='flex items-center justify-start p-2 my-3 bg-blue-600 border cursor-pointer rounded-xl'>
            <div className='pb-2 mr-2'>
                <span className='pb-2 text-2xl'><AppleOutlined /></span>
            </div>
            <div className='text-2xl text-white'>
                <span> Login With Apple</span>
            </div>

        </div>
    </div>
</div>
  )
}