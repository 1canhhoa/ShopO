export const HandleRating = (dataRating,fillStar,outlineStar)=>{
  const rating = []
  for (let index = 0; index < 5; index++) {
    if (index < dataRating) {
      rating[index] = fillStar
    } else if (index >= dataRating) {
      rating[index] = outlineStar
    }
  }
  return rating
}