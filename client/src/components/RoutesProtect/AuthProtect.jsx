import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function AuthProtect({ children }) {
  const user = useSelector((state) => state.user);
  if (!user.id) {
    return children;
  }
  return <Navigate to="/" replace />;
}
