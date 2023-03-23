import {Policy, Facebook, Twitter, LinkedIn, GitHub, Gavel} from '@mui/icons-material'
export const footerNavegationButtons = {
    legal: [
        {
            button: 'Politica de privacidad',
            href: '/politica_de_privacidad',
            icon: <Policy />,
            id: 'privacy'
        },
        {
            button: 'Términos y condiciones',
            href: '/terminos y condiciones',
            id: 'terms',
            icon: <Gavel />
        }
    ],
    redes: [
        {
            button: 'FeliMed94',
            href: 'https://www.facebook.com/FeliMed94',
            icon: <Facebook />,
            id: 'facebook'
        },
        {
            button: 'FM9408',
            href: 'https://www.github.com/FM9408',
            icon: <GitHub />,
            id: 'github'
        },
        {
            button: '@FeLiPe_MeDiNa',
            href: 'https://twitter.com/FeLiPe_MeDiNa_',
            icon: <Twitter />,
            id: 'twitter'
        },
        {
            button: 'FM9408',
            href: 'https://www.linkedin.com/in/fm9408/',
            icon: <LinkedIn />,
            id: 'linkedin'
        }
    ]
}