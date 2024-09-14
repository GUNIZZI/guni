import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';

import { Interpolation, Theme } from '@emotion/react';

import { style } from './PfTextfield.css';

interface OwnProps {
    id?: string;
    placeholder?: string;
    vmodel: [
        { text: string; percent?: number },
        Dispatch<SetStateAction<{ text: string; percent?: number }>>,
    ];
}

const PfTextfield = ({ id, placeholder, vmodel }: OwnProps) => {
    const [setValue, setValueDispatch] = vmodel;
    const [txt, setText] = useState(setValue.text);
    const [per, setPer] = useState<number>(setValue.percent || 0);
    const perChk = useMemo(() => {
        return Object.keys(setValue).includes('percent');
    }, []);

    const handleChangeTxt = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    const handleChangePer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPer(Number(event.target.value) > 100 ? 100 : Number(event.target.value) || 0);
    };

    useEffect(() => {
        if (perChk) {
            setValueDispatch({
                text: txt,
                percent: Number(per),
            });
        } else {
            setValueDispatch({
                text: txt,
            });
        }
    }, [txt, per]);

    return (
        <div css={style as Interpolation<Theme>}>
            <input
                id={`${id}_txt`}
                type="text"
                placeholder={placeholder}
                value={txt}
                onChange={handleChangeTxt}
            />
            {perChk && (
                <input
                    id={`${id}percent`}
                    type="number"
                    min={0}
                    max={100}
                    value={per}
                    onChange={handleChangePer}
                />
            )}
        </div>
    );
};

export { PfTextfield };
