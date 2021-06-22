import React from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SuccessToast(msg) {
    return (toast.success(msg),{
        position:'top-right',
        autoClose:3000
    });
}
