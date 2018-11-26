import React from 'react'

const Sushi = (props) => {
  let {sushi, handleEatSushi, taken} = props
  return (
    <div className="sushi" onClick={()=> handleEatSushi(sushi)}>
      <div className="plate">
        {taken ? null : <img src={sushi.img_url} alt="sushi" width="100%"/>}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi

// <div className="plate"
//      onClick={/* Give me a callback! */ null}>
//   {
//     /* Tell me if this sushi has been eaten! */
//     true ?
//       null
//     :
//       <img src={/* Give me an image source! */} width="100%" />
//   }
// </div>
// <h4 className="sushi-details">
//   {/* Give me a name! */} - ${/* Give me a price! */}
// </h4>
