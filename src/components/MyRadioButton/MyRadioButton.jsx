import { useField } from "formik";
import PropTypes from "prop-types";

export const MyRadioButton = ({ containerStyle, labelStyle, inputStyle, children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'radio' })
    return (
        <div className={containerStyle}>
            <label className={labelStyle}>
                <input className={inputStyle} type="radio" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

MyRadioButton.propTypes = {
    containerStyle: PropTypes.string,
    labelStyle: PropTypes.string,
    inputStyle: PropTypes.string,
    children: PropTypes.node,
};