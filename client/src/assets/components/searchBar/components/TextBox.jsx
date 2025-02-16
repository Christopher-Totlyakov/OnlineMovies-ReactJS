import styles from './SearchBar.module.css';



export default function TextBox({type, name, placeholder, onChange, value}) {
    return (
        <div className={styles['inputSurch']}>
            <div className={styles['glow']}></div>
            <div className={styles['darkBorderBg']}></div>
            <div className={styles['darkBorderBg']}></div>
            <div className={styles['darkBorderBg']}></div>

            <div className={styles['white']}></div>
            <div className={styles['border']}></div>

            <div className={styles['inputBox']}>
                <input type={type} name={name} className={styles['input']} placeholder={placeholder} onChange={onChange} value={value} />

                <div className={styles['input-mask']}></div>
                <div className={styles['pink-mask']}></div>
            </div>
        </div>
    );
}