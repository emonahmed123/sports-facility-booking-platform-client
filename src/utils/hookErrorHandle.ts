import { FieldErrors, FieldValues } from "react-hook-form";

export function getErrorMessage<TFieldValues extends FieldValues>(
  errors: FieldErrors<TFieldValues>,
  fieldName: keyof TFieldValues
): string | undefined {
  return errors[fieldName]?.message as string | undefined;
}
