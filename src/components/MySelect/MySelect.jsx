import { useField } from "formik";
import PropTypes from "prop-types";

export const MySelect = ({ containerStyle, labelStyle, selectStyle, label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={containerStyle}>
            <label className={labelStyle} htmlFor={props.id || props.name}>{label}</label>
            <select className={selectStyle} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

MySelect.propTypes = {
    containerStyle: PropTypes.string,
    labelStyle: PropTypes.string,
    selectStyle: PropTypes.string,
    label: PropTypes.string,
};