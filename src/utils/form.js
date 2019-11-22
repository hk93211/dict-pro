/**
 * 将 formData 对象编译成键值对，以便通过 ajax 方式提交表单
 * @param {Object} formData
 */
export const formDataSerialize = (formData = {}) => {
  const form = new FormData();
  Object.keys(formData).forEach(item => form.append(item, formData[item]));
  return form;
};
