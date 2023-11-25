import React, {useEffect, useRef, useState} from 'react';
import IMask from "imask";

function PopupForm() {
    const checkInRef = useRef(null);
    const checkOutRef = useRef(null);
    const numberRef = useRef(null);

    const [checkInValue, setCheckInValue] = useState('__.__.____');
    const [checkOutValue, setCheckOutValue] = useState('__.__.____');
    const [numberValue, setNumberValue] = useState('человек(-а)');

    useEffect(() => {
        const dateMaskOptions = {
            mask: Date,
            lazy: false,
            min: new Date(),
            max: new Date(2050, 0, 1),
        };
        const checkInMask = IMask(checkInRef.current, dateMaskOptions);
        const checkOutMask = IMask(checkOutRef.current, dateMaskOptions);

        const numberMask = IMask(numberRef.current, {
            mask: '0 человек(-а)',
            lazy: false,
            blocks: {
                0: {
                    mask: Number,
                    min: 1,
                    max: 20,
                    validate: value => {
                        return value >= 1;
                    },
                },
            },
        });

        checkInMask.on('accept', () => {
            setCheckInValue(checkInMask.value);
        });

        checkOutMask.on('accept', () => {
            setCheckOutValue(checkOutMask.value);
        });

        numberMask.on('accept', () => {
            setNumberValue(numberMask.value);
        });
        return () => {
            checkInMask.destroy();
            checkOutMask.destroy();
            numberMask.destroy();
        };
    }, []);




    return (
        <form className="popup__form">
            <div className="popup__form-input-row">
                <label>
                    Дата заезда
                    <input
                        type="text"
                        ref={checkInRef}
                        className="popup__form-input--check-in"
                        value={checkInValue}
                    />
                </label>

                <label>
                    Дата выезда
                    <input
                        type="text"
                        ref={checkOutRef}
                        className="popup__form-input--check-out"
                        value={checkOutValue}
                    />
                </label>

                <label>
                    Количество
                    <input
                        type="text"
                        ref={numberRef}
                        className="popup__form-input--number"
                        value={numberValue}
                        placeholder="Введите количество человек..."
                    />
                </label>
            </div>
            <div className="popup__form-button-row">
                <button className="button">Купить билеты</button>
            </div>
        </form>
    );
}

export default PopupForm;