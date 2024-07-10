import { expect } from "@playwright/test"

export function({page}){
const visit = async() => {
    await page.goto('/register')
    
    await expect(page.getByText('Sing up')).toBeVisible()
}

const fillUsername = () =>{
    await page.getByTestId('input-username').fill(faker.person.firstName())
}

const fillPassword = () =>{
    await page.getByTestId('input-email').fill(faker.internet.email())
}

const fillName = () =>{
    await page.getByTestId('input-password').fill('12345678')
}

return {
    visit,
    fillUsername,
    fillPassword,
    fillName,
    }
}