type ErrorHandler = (error: any | null) => void;

let globalErrorHandler: ErrorHandler | null = null;

const setGlobalErrorHandler = (handler: ErrorHandler | null) => {
    globalErrorHandler = handler;
};

const handleError = (error: any) => {
    if (globalErrorHandler) {
        globalErrorHandler(error);
    } else {
        console.error('Unhandled error:', error);
    }
};

export { setGlobalErrorHandler, handleError };
