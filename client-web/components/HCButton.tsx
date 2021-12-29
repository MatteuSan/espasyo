/*
 *
 *  Copyright (c) 2021 Matteu
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 */

import React from 'react';
import Link from 'next/link';

interface HCButtonProps {
    label?: string;
    icon?: any;
    iconTrailing?: string;
    type?: string;
    context?: any;
    link?: string | null;
    isDisabled?: boolean;
    isSubmit?: boolean;
    isReset?: boolean;
    onClick?: any;
}

const HCButton: React.FC<HCButtonProps> = ({
   label,
   icon,
   iconTrailing,
   type,
   link,
   isDisabled,
   onClick,
   children,
   context = 'button',
}) => {

    const ButtonBase = (
        <button
            className={ `hc-button
            ${ type?.includes('outlined') ? ' hc-button--outlined' : type?.includes('filled') ? ' hc-button--filled' : '' }${ type?.includes('inverted') ? ' hc-button--inverted' : '' }${ type?.includes('full-width') ? ' hc-button--full-width' : '' }${ isDisabled ? ' disabled' : '' }${ !children ? ' hs-button--icon-only' : '' }` }
            disabled={ isDisabled }
            type={ context }
            onClick={ onClick }
        >
            { icon && <i className="hc-button__icon material-icons">{ icon }</i> }
            { label || children && <span className="hc-button__label">{ label || children }</span> }
            { iconTrailing && <i className="hc-button__icon material-icons">{ iconTrailing }</i> }
        </button>
    );

    if (!link) {
        return ButtonBase;
    }

    return (
        <Link href={ link } passHref>
            { ButtonBase }
        </Link>
    );
};

export default HCButton;