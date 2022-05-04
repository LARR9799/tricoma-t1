import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import triLogo from '../assets/logo_tri.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

const style = {
    wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
    logoContainer: `hidden sm:flex flex items-center cursor-pointer`,
    logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
    searchBar: `hidden md:flex flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    headerItems: ` flex items-center justify-end text-xs`,
    headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer md:text-base`,
    headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}

const Header = () => {
  //Auth
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()
  // ---

  /* useEffect(() => {
    setUserName(`${currentAccount.slice(0, 4)}...${currentAccount.slice(38)}`)
  }, [currentAccount]) */

  return <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
            <Image src={triLogo} height={40} width={40} />
            <div className={style.logoText}>Tri-coma</div>
        </div>
      </Link>
      <div className={style.searchBar}>
          <div className={style.searchIcon}>
            <AiOutlineSearch />
          </div>
          <input 
            className={style.searchInput} 
            placeholder='Search items, collections, and accounts'
          />
      </div>
      <div className={style.headerItems}>
        <Link href='/NFTCollections'>
            <div className={style.headerItem}>Collections</div>
        </Link>
        <div className={style.headerItem}>Listings</div>
        <div className={style.headerItem}>Minted</div>
        
        {address ? (
          <div className={style.headerItem}>
            {address.substring(0,5)}...{address.substring(address.length - 5)}
          </div>
        ) : (
          <div 
            onClick={() => connectWithMetamask()}
            className={style.headerItem}
          >
            Connect Wallet
          </div>
        )}

        <div className={style.headerIcon}>
            <CgProfile />
        </div>
        <div className={style.headerIcon}>
            <MdOutlineAccountBalanceWallet />
        </div>
      </div>
  </div>;
};

export default Header;