import React from 'react';

interface HCTextFieldProps {
    id: string;
    label: string;
    helper?: string;
    type?: string;
}

const HCTextField: React.FC<HCTextFieldProps> = ({ id, label, helper, type = 'text' }) => {
    if (type == 'textarea') {
        return (
            <label className="hc-text-field">
                <textarea className="hc-text-field__input" placeholder="a" name={ id } rows={10}/>
                <span className="hc-text-field__label">{ label }</span>
                <small className="hc-text-field__helper">{ helper }</small>
            </label>
        );
    } else {
        return (
            <label className="hc-text-field">
                <input type={ type } className="hc-text-field__input" placeholder="a" name={ id } />
                <span className="hc-text-field__label">{ label }</span>
                <small className="hc-text-field__helper">{ helper }</small>
            </label>
        );
    }
};

export default HCTextField;