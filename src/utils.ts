export function splitProps<T>(allProps: object, propsSchema: { [key: keyof T]: any }): { internalProps: object, restProps: object } {
  const internalPropsList = Object.keys(propsSchema) as Array<keyof typeof propsSchema>
  const splitProps = (filterIncluded: boolean) => Object.fromEntries(
    Object.entries(allProps)
      .filter(
        ([key]) => internalPropsList.includes(key as keyof typeof propsSchema) === filterIncluded
      )
  )
  const restProps = splitProps(false)
  const internalProps = splitProps(true)
  return { restProps, internalProps }
}