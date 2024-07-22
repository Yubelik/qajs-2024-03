export function AuthPage ({page}){
    const visit = async () => {
        await page.goto('https://rwa-194.87.102.103.sslip.io/register')
    }    
    const fillUsername=()=>{

    }

    const fillPassword=()=>{
    
    }
    const fillEmail=()=>{
    
    }

    return{
        visit,
        fillUsername,
        fillPassword,
        fillEmail,

    }
}