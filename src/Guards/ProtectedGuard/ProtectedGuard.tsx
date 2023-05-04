import React, { FC, ReactNode } from 'react';
import './ProtectedGuard.css';
import { Navigate } from 'react-router';

interface ProtectedGuardProps {
  component: ReactNode, isLogin: boolean

}

const ProtectedGuard: FC<ProtectedGuardProps> = (props) => {
  console.log(props.isLogin)
  return (
    <div className="ProtectedGuard" data-testid="ProtectedGuard">
      {props.isLogin ? (<>{props.component}</>) : (<Navigate to="/" />)}
    </div>
  )
}

export default ProtectedGuard;
