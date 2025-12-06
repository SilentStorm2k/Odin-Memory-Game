import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.siteFooter}>
            <div className={styles.footerInner}>
                <div className={styles.footerLeft}>
                    <span>© 2025–{currentYear}</span>
                    <span className={styles.dot} />
                    <span>Built by @SilentStorm2k</span>
                </div>

                <div className={styles.footerCenter}>
                    <a
                        href="https://github.com/SilentStorm2k"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.githubLink}
                        aria-label="GitHub Profile"
                    >
                        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                            <path
                                fill="currentColor"
                                d="M12 0C5.37 0 0 5.39 0 12.05c0 5.33 3.44 9.84 8.2 11.44.6.11.82-.26.82-.58v-2.05c-3.34.74-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.79-1.35-1.79-1.1-.77.08-.76.08-.76 1.22.09 1.86 1.27 1.86 1.27 1.08 1.87 2.84 1.33 3.53 1.02.11-.8.42-1.34.76-1.65-2.66-.31-5.47-1.35-5.47-6.01 0-1.33.47-2.41 1.24-3.26-.12-.31-.54-1.56.12-3.25 0 0 1.01-.33 3.3 1.24a11.2 11.2 0 0 1 6 0c2.3-1.57 3.3-1.24 3.3-1.24.66 1.69.24 2.94.12 3.25.77.85 1.24 1.93 1.24 3.26 0 4.67-2.82 5.7-5.51 6 .43.38.81 1.12.81 2.26v3.35c0 .32.22.7.82.58C20.56 21.89 24 17.38 24 12.05 24 5.39 18.63 0 12 0z"
                            />
                        </svg>
                        <span>GitHub</span>
                    </a>
                </div>

                <div className={styles.footerRight}>
                    <button
                        className={styles.topButton}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        ↑ Back to top
                    </button>
                </div>
            </div>
        </footer>
    );
}
