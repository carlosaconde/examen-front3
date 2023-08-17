
export const Card = ({data}) => {
  return (
    <div>
        
        <span>Bienvenido  {data.name} {data.lastName}</span>
        
        <span> Tu marca de autos preferida es {data.preferredCar}</span>
    </div>

  )
}
export default Card