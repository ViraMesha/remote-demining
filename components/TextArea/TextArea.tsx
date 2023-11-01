import { ComponentProps, forwardRef } from "react";
import { FieldError } from "react-hook-form/dist/types";

import styles from "./TextArea.module.css";

enum InputSize {
  base = "base",
  full = "full",
}

type BackgroundColors = "primary" | "secondary";

interface InputProps {
  placeholder?: ComponentProps<"textarea">["placeholder"];
  name?: ComponentProps<"textarea">["name"];
  onChange?: ComponentProps<"textarea">["onChange"];
  onBlur?: ComponentProps<"textarea">["onBlur"];
  rows?: ComponentProps<"textarea">["rows"];
  className?: ComponentProps<"textarea">["className"];
  noBorder?: boolean;
  size?: keyof typeof InputSize;
  label?: string;
  height?: number;
  width?: number;
  backgroundCl?: BackgroundColors;
  error?: FieldError | undefined;
  errorMessage?: string;
  id?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(
  (
    {
      size = InputSize.full,
      label,
      width,
      height,
      backgroundCl = "primary",
      error,
      errorMessage,
      id,
      ...InputProps
    },
    ref
  ) => {
    const InputStyle = {
      height: height ? `${height}px` : undefined,
      width: width ? `${width}px` : undefined,
    };

    return (
      <div>
        {label && (
          <label className={styles.label} htmlFor={id}>
            {label}
          </label>
        )}
        <textarea
          className={`${styles[size]} ${styles.textarea} ${styles[backgroundCl]}`}
          ref={ref}
          {...InputProps}
          style={InputStyle}
          id={id}
        />
        {error && <p className={styles.error}>{errorMessage}</p>}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
