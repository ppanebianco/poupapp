import styles from './tipography.module.css'

const TAGS = {
    h1: 'h1',
    h2: 'h2',
    body: 'p'
}

export const Tipography = ({children, variant}) => {
    
    const Component = TAGS[variant] || 'p'
    const variantClass = styles[variant] || styles.p
    return (
        <Component className={variantClass}>
            {children}
        </Component>
    )
}