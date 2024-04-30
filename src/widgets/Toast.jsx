// components/Toast.js
import { motion } from 'framer-motion';

const Toast = ({ closeToast, type, message }) => (
    <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className={`max-w-xs feature-card border rounded-xl shadow-lg toast-right z-50 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
        role="alert"
    >
        <div className="flex p-4">
            <div className="flex-shrink-0">
                {type === 'success' ? (
                    <svg className="flex-shrink-0 size-4 text-teal-400 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                    </svg>
                ) : (
                    <svg className="flex-shrink-0 size-4 text-red-400 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 1.5a6.5 6.5 0 1 0 0 13A6.5 6.5 0 0 0 8 1.5zm.5 9.5a.5.5 0 1 1-1 0V7.5a.5.5 0 1 1 1 0v3.5zM8 6a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 1 0v.5A.5.5 0 0 1 8 6z"></path>
                    </svg>
                )}
            </div>
            <div className="ms-3">
                <p className="text-sm text-white">
                    {message}
                </p>
            </div>
            <button className="ml-4 text-white" onClick={closeToast}>×</button>
        </div>
    </motion.div>
);

export default Toast;
