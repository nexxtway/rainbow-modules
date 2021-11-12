import { useState } from 'react';

const useCopyToClipboardMessage = (): [boolean, () => void] => {
    const [isMessageVisible, setIsMessageVisible] = useState<boolean>(false);

    const showMessage = () => {
        if (!isMessageVisible) {
            setIsMessageVisible(true);
            setTimeout(() => {
                setIsMessageVisible(false);
            }, 3000);
        }
    };

    return [isMessageVisible, showMessage];
};

export default useCopyToClipboardMessage;
