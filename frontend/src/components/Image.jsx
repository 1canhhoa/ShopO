import { useState, forwardRef } from 'react';
import image from '~/Assests/images';
// eslint-disable-next-line react/display-name
const Image = forwardRef(
    // th1: fallback mặc định rỗng nó sẽ lấy src truyền vào 
    // th2: src lỗi , sẽ lấy fallback truyền vào, fallback mặc định là noImage(muốn thay đổi có thể truyền từ ngoài vào)
    ({ src, alt, className, fallback: customFallback = image.noImage, ...props }, ref) => {
        const [fallback, setFallback] = useState('');
        const handleError = () => {
            setFallback(customFallback);
        };
        return (

            <img
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...props}
                className={className}
                onError={handleError}
            />
        );
    }
);

export default Image;
