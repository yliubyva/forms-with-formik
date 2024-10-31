import { useField } from "formik";
import PropTypes from "prop-types";

export const MyTextInput = ({ containerStyle, labelStyle, inputStyle, label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className={containerStyle}>
            <label className={labelStyle} htmlFor={props.id || props.name}>{label}</label>
            <input className={inputStyle} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

MyTextInput.propTypes = {
    containerStyle: PropTypes.string,
    labelStyle: PropTypes.string,
    inputStyle: PropTypes.string,
    label: PropTypes.string,
};