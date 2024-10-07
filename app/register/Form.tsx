'use client'
import { joinUs } from '../data.js';
import { ButtonType01 } from '../components/Button.js';
import * as globalStyles from "../styles/global.css";
import * as pageStyles from '../styles/Pages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Form() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleEye = ()=>{
    setShowPassword(!showPassword);
  };

  return (
    <form method="POST" action="/api/auth/signup">
      {
        joinUs.map((form, idx) => (
          <div className={globalStyles.formGroup} key={idx}>
            <label htmlFor={form.id} className={`${globalStyles.label} ${globalStyles.ess}`}>{form.title}</label>
            <div className={globalStyles.formInner}>
              {
                form.type == 'password' ? (
                  <>
                    <input
                      type={showPassword ? 'text' : form.type}
                      name={form.id}
                      className={`${globalStyles.inputStyles} ${globalStyles.inputTypeStyles.password}`}
                      id={form.id}
                      placeholder={form.title}
                      required={form.state === 'required'}
                    />
                    <span className={globalStyles.eyeBtn} onClick={toggleEye}>
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}/>
                    </span>
                  </>
                ) : (
                  <input
                    type={form.type}
                    name={form.id}
                    className={globalStyles.inputStyles}
                    id={form.id}
                    placeholder={form.title}
                    required={form.state === 'required'}
                  />
                )
              }
            </div>
          </div>
        ))
      }
      <div className={pageStyles.btnWrap}>
        <ButtonType01 type="submit">계정만들기</ButtonType01>
      </div>
    </form>
  )
}