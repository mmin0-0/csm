'use client'
import { useEffect, useState } from "react"

export function WriteAlert(){
  const [hasAlerted, setHasAlerted] = useState(false);
  useEffect(()=>{
    if(!hasAlerted){
      alert('로그인 후 이용해주세요.');
      setHasAlerted(true);

      setTimeout(()=>{
        window.location.href = '/api/auth/signin'
      },500);
    }
  }, [hasAlerted]);
  return null;
}