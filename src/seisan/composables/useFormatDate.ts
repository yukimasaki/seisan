const useFormatDate = () => {
  /**
   * Dateオブジェクトとフォーマット文字列を受け取り、フォーマットされた日付文字列を返す関数
   * @param {Date} date - フォーマット対象のDateオブジェクト
   * @param {string} format - フォーマットの形式（yyyy/mm/dd(a)など）
   * @returns {string} - フォーマットされた日付文字列
   */
  const formatDate = (date, format) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1 // getMonth()メソッドは0から始まるため、1を足して月を取得する
    const day = date.getDate()
    const weekday = ["日", "月", "火", "水", "木", "金", "土"][date.getDay()] // 曜日の配列
    const zeroPad = (num) => num < 10 ? `0${num}` : num // 1桁の数値を2桁に変換する関数

    // フォーマット文字列に合わせて日付文字列を生成する
    const formattedDate = format
      .replace(/yyyy/g, year)
      .replace(/mm/g, zeroPad(month))
      .replace(/dd/g, zeroPad(day))
      .replace(/a/g, weekday)
      .replace(/m/g, month)
      .replace(/d/g, day)

      return formattedDate
    }

  return { formatDate }
}
export default useFormatDate
