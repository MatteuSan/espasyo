import React from 'react';
import { Field, ErrorMessage } from 'formik';

interface HCTextFieldProps {
    id: string;
    label: string;
    helper?: string;
    type?: string;
    rows?: number;
    errors?: any;
    isRequired?: boolean;
}

const HCTextField: React.FC<HCTextFieldProps> = ({ id, label, helper, isRequired, errors, type = 'text', rows = 5 }) => {
    if (type == 'textarea') {
        return (
            <label className={`hc-text-field${ errors ? ' error' : '' }`}>
                <Field name={ id } className="hc-text-field__input" placeholder="a" as="textarea" rows={ rows } required={ isRequired } />
                <span className="hc-text-field__label">{ label }</span>
                <small className="hc-text-field__helper">{ helper }</small>
            </label>
        );
    } else {
        return (
            <label className={`hc-text-field${ errors ? ' error' : '' }`}>
                <Field name={ id } type={ type } className="hc-text-field__input" placeholder="a" required={ isRequired } />
                <span className="hc-text-field__label">{ label }</span>
                <small className="hc-text-field__helper">{ helper }</small>
            </label>
        );
    }
};

export default HCTextField;