import { useField } from "formik";
import PropTypes from "prop-types";

export const MyCheckbox = ({ className, children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label>
                <input className={className} type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

MyCheckbox.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
