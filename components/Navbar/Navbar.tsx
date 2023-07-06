import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState } from "react";


export function Navbar() {
  const address = useAddress();
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/logo.png"
              width={48}
              height={48}
              alt="NFT marketplace sample logo"
            />
          </Link>
          <div className={styles.navToggle} onClick={handleToggleMenu}>
            <div className={`${styles.toggleBar} ${showMenu && styles.active}`} />
            <div className={`${styles.toggleBar} ${showMenu && styles.active}`} />
            <div className={`${styles.toggleBar} ${showMenu && styles.active}`} />
          </div>
        </div>

        <div className={showMenu ? styles.navMobile : styles.navMiddle}>
          <Link href="/buy" className={styles.link}>
            Buy
          </Link>
          <Link href="/sell" className={styles.link}>
            Sell
          </Link>
          
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectWallet theme="dark" btnTitle="Sign In" />
          </div>
          {address && (
            <Link className={styles.link} href={`/profile/${address}`}>
              <Image
                className={styles.profileImage}
                src="/user-icon.png"
                width={42}
                height={42}
                alt="Profile"
              />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}