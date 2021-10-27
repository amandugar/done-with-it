import { useFormikContext } from "formik"
import React from "react"
import ImageInputList from "../ImageInputList"
import AppErrorMessage from "./AppErrorMessage"

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext()
  const imageUris = values[name]
  const handleAdd = uri => {
    setFieldValue(name, [...imageUris, uri])
  }

  const handleRemove = uri => {
    setFieldValue(
      name,
      imageUris.filter(imageUri => imageUri !== uri)
    )
  }

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onRemoveImage={handleRemove}
        onAddImage={handleAdd}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default FormImagePicker
