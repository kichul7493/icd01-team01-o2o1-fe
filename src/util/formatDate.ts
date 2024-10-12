export const formatDate = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1 // 월은 0부터 시작하므로 1을 더해야 함
  const day = date.getDate()

  return `${year}. ${month}. ${day}.`
}
