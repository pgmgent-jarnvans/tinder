import '../styles/main.scss'

let whoAreYou = (user = 'Maggi') => {
    console.log(`Hello ${user}`);
}

whoAreYou('Tatjana');
whoAreYou('Magalie');
whoAreYou();