export const formatDate =  (date: Date | string) => {
  return new Date(date || 0).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}