import { toast, ToastContent, ToastOptions, Slide, Id } from 'react-toastify';

export const defaultToastOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
  transition: Slide,
  style: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '8px',
  },
};

type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default';

interface ToastProps {
  type?: ToastType;
  message?: string;
  options?: Partial<ToastOptions>;
}

/**
 * Display toast
 *
 * @param {ToastType} type
 * @param {ToastContent} content
 * @param {ToastOptions} [options=defaultToastOption]
 * @return {Id}
 */
export const showToast = ({
  type = 'success',
  message,
  options,
}: ToastProps): Id => {
  const optionsToApply = { ...defaultToastOptions, ...options };

  switch (type) {
    case 'success':
      return toast.success(message, optionsToApply);
    case 'error':
      return toast.error(message, optionsToApply);
    case 'info':
      return toast.info(message, optionsToApply);
    case 'warning':
      return toast.warn(message, optionsToApply);
    case 'default':
      return toast(message, optionsToApply);
    default:
      return toast(message, optionsToApply);
  }
};
