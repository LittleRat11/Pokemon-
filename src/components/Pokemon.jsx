import React from 'react'

const Pokemon = ({data}) => {
   console.log(data)
  return (
    <>
    {
      (!data) ?  "" : (
         <>
      <h1>{data.name}</h1>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
      <div className="abilities">
         {
            data.abilities.map(poke => {
               return(
                  <div className="group">
                        <h2>{poke.ability.name}</h2>
                  </div>
               )
            })
         }
        
         
      </div>
      <div className="base-stat">
        {
         data.stats.map(poke => {
            return (
               <>
                  <h3>{poke.stat.name} : {poke.base_stat}</h3>
               </>
            )
         })
        }
       
        {
         data.types.map(poke => {
            return (
               <>
                  <h3>Types : {poke.type.name}</h3>
               </>
            )
         })
        }
      </div>
         </>
      )
    }
    </>
  )
}

export default Pokemon
