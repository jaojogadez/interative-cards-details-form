export async function submitFormData(formData) {
  try {
    const response = await fetch(
      "https://api.sheetmonkey.io/form/9qGHZ1Ki5b8WLuknMeVd1g",
      {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    return await response.json();
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    throw error;
  }
}
