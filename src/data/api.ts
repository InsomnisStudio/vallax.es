export async function sendEmail(
  email: string,
  name: string,
  title: string,
  content: string,
) {
  const response = await fetch("https://backend.hexstock.com/sendmail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      _key: "vallaxdev@gmail.com",
      email,
      name,
      title,
      content,
    }),
  });

  if (!response.ok) {
    throw new Error(`Email request failed with status ${response.status}`);
  }
}
