import React from 'react'
import './SideMenu.css'
import { useState } from 'react'
//recipe

export const SideMenu = ({ menu, recipe, setRecipe }) => {



    function addOrRemoveingredient(e) {

        if (e.currentTarget.classList.contains('selected')) {
            e.currentTarget.classList.remove('selected')
            e.currentTarget.classList.remove('btn-primary')
            e.currentTarget.classList.add('btn-outline-primary')

            const newRecipe = [...recipe, ...[]]
            const index = newRecipe.indexOf(e.currentTarget.textContent)
            console.log(index)
            newRecipe.splice(index, 1)
            console.log(newRecipe)
            setRecipe(newRecipe)
            return
        }

        e.currentTarget.classList.remove('btn-outline-primary')
        e.currentTarget.classList.add('btn-primary')
        e.currentTarget.classList.add('selected')
        const merge = [...recipe, ...[e.currentTarget.textContent]]
        setRecipe(merge)

    }



    return (
        <aside className='sideMenu'>
            {Object.keys(menu.data).map((key, index) => (
                <div className='sideMenu-button'>
                    <span>{key}</span>
                    <div>
                        {menu.data[key].map((item, i) => (
                            <button onClick={addOrRemoveingredient} type="button" class="btn btn-outline-primary btn-sm">{item}</button>
                        ))}

                    </div>
                </div>
            ))
            }

        </aside >
    )
}