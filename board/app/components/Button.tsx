'use client';
import { useRouter } from "next/navigation";
import { signIn, signOut } from 'next-auth/react';
import * as buttonStyle from '../styles/components/Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

interface BoardControlsProps extends ButtonProps {
  result: {
    _id: string;
  };
}
export const ButtonType01: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className={buttonStyle.defaultBtn} {...props}>
      {children}
    </button>
  )
};

export const RegisterBtn: React.FC<ButtonProps> = () => {
  const router = useRouter();
  return (
    <button type="button" onClick={() => { router.push('/register') }} className={buttonStyle.defaultBtn}>Join Us</button>
  )
};

export const LoginBtn: React.FC<ButtonProps> = () => {
  return (
    <button type="button" onClick={() => { signIn() }} className={buttonStyle.defaultBtn}>Login</button>
  )
};

export const LogoutBtn: React.FC<ButtonProps> = () => {
  return (
    <button type="button" onClick={() => { signOut() }} className={buttonStyle.defaultBtn}>Logout</button>
  )
};

export const ListLink: React.FC<ButtonProps> = ({ children, ...props }) => {
  const router = useRouter();
  const handleListBtn = () => {
    router.push('/board');
  };
  return (
    <button type="button" className={`${buttonStyle.defaultBtn} ${buttonStyle.type.type01}`} onClick={handleListBtn} {...props}>
      {children}
    </button>
  )
};

export const BoardControls: React.FC<BoardControlsProps> = ({ result, children, ...props }) => {
  const router = useRouter();

  const handleEditBtn = () => {
    router.push(`/edit/${result._id.toString()}`);
  };

  const handleDeleteBtn = async () => {
    const response = await fetch('/api/post/delete', {
      method: 'POST',
      body: result._id
    });

    if (response.ok) {
      alert('삭제완료');
      router.push('/board');
      router.refresh();
    } else {
      const errorMessage = await response.json();
      alert(errorMessage);
    }
  };

  return (
    <>
      <button type="button" className={buttonStyle.defaultBtn} onClick={handleEditBtn}>수정</button>
      <button type="button" className={`${buttonStyle.defaultBtn} ${buttonStyle.type.type01}`} onClick={handleDeleteBtn}>삭제</button>
      <button type="button" className={buttonStyle.defaultBtn} onClick={() => { router.push('/board') }}>목록</button>
    </>
  )
};

