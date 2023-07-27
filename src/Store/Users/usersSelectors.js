import { createSelector } from "@reduxjs/toolkit"

export const itemsSelector = state => state.users.users
export const filterUsersSelector = state => state.users.filter

export const usersSelector = createSelector([itemsSelector, filterUsersSelector], (users, filter)=>{
    if(!users.items)return users
    const lowerFilter = filter.toLowerCase()
    const filteredItems = users.items.filter(user =>
        user.firstName.toLowerCase().includes(lowerFilter) || user.phone.replaceAll(' ', '').includes(filter)
    )
    return {...users, items: filteredItems || null}
})