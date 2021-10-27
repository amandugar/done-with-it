import React from "react"
import { useFormikContext } from "formik"

import AppPicker from "../AppPicker"
import AppErrorMessage from "./AppErrorMessage"

function AppFormPicker({
  items,
  name,
  numberOfColumns,
  PickerItemComponet,
  placeholder,
  width,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext()

  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={item => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        PickerItemComponent={PickerItemComponet}
        width={width}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormPicker
