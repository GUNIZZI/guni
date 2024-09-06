import React, { ComponentProps, ReactNode, useEffect, useMemo } from 'react';

import { LoaderCircle } from '../../loader';

import { ImageNotSupportedOutlined } from '@mui/icons-material';

interface OwnProps extends ComponentProps<'div'> {
    children?: ReactNode;
}

const LazyImage = ({ children, ...props }: OwnProps) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const imageUrl = useMemo((): string | null => {
        if (React.isValidElement(children) && children.type === 'img') {
            return children.props.src || null;
        }
        if (props.style && (props.style.backgroundImage || props.style.background)) {
            const urlMatch = /url\(["']?([^"']*)["']?\)/.exec(
                (props.style.backgroundImage as string) || (props.style.background as string),
            );
            if (urlMatch && urlMatch[1] !== 'null') {
                return urlMatch[1];
            }
        }
        return null;
    }, [children, props.style]);

    useEffect(() => {
        if (imageUrl !== null) {
            const image = new Image();
            image.src = imageUrl;
            image.onload = () => {
                setIsLoading(false);
            };
        }
        if (imageUrl === null) {
            setIsLoading(false);
        }
    }, [imageUrl]);

    if (isLoading) return <LoaderCircle size="3em" />;

    if (!imageUrl)
        return <ImageNotSupportedOutlined className="isNoneImage" sx={{ fontSize: '6rem' }} />;

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <div {...props}>{children}</div>
    );
};

export { LazyImage };
