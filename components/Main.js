import React, { useContext } from 'react';
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('../assets/cannabis_Forest.png')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center md:flex-nowrap`,
    copyContainer: `w-1/2`,
    title: `relative text-[38px] text-white sm:text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-10 py-3 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: ` relative text-lg font-semibold px-10 py-3 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `hidden md:flex rounded-[3rem] flex-wrap`,
    infoContainer: `hidden h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
  }

const Main = () => {
  /* const {connectWallet, currentAccount} = useContext(TransactionContext) */
  const connectWithMetamask = useMetamask()
  const address = useAddress()

  return (
  <div className={style.wrapper}>
      <div className={style.container}>
          <div className={style.contentWrapper}>
                <div className={style.copyContainer}>
                    <div className={style.title}>
                        Discover, collect and check cannabis licenses
                    </div>
                    <div className={style.description}>
                        Tri-coma is the world&apos;s first and largest blockchain cannabis marketplace
                    </div>
                    <div className={style.ctaContainer}>
                        {address ? (
                          <button className={style.accentedButton}>
                            You are conected!
                          </button>
                        ) : (
                          <button 
                            className={style.accentedButton}
                            onClick={() => connectWithMetamask()}
                          >
                            Connect Wallet
                          </button>
                        )
                        }
                        
                        <button className={style.button}>Explore</button>
                </div>
                </div>
                <div className={style.cardContainer}>
                    <img 
                        className='rounded-t-lg' 
                        src='https://i.ibb.co/qJTy3H3/a-cannabis-forest-with-impressionist-style-4.png' 
                        alt=''
                    />
                    <div className={style.infoContainer}>
                        <img 
                            className='h-[2.25rem] rounded-full' 
                            src="https://i.ibb.co/N3220D2/logo-tri.png" 
                            alt="" 
                        />
                        <div className={style.author}>
                            <div className={style.name}>IA</div>
                            <a 
                                className='text-[#1868b7]'
                                href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/85237985525734684917380424682378680952947795822601319472306616631339503321089"
                            >
                                Brushstroke Forest
                            </a>
                        </div>
                    </div>
                </div>
          </div>
      </div>
  </div>
)};

export default Main;