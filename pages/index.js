import Head from 'next/head';
import Header from '../components/Header.jsx';
import {
  Flex,
  Button,
  Divider,
  Container,
  Text,
  Box,
  Alert,
  AlertIcon,
  Link
} from '@chakra-ui/react';
import Web3 from 'web3';
import { injected } from "../components/wallet.js";
import { useWeb3React } from "@web3-react/core";
import { BsWallet2 } from "react-icons/bs";
import { useEffect, useState } from 'react';

export default function StakingPage() {
  const { account, activate, deactivate } = useWeb3React()
  async function connectWallet() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  const [totalHeld, setTotalHeld] = useState(0.00)
  const [totalEarned, setTotalEarned] = useState(0.00)
  const [farmType, setFarmType] = useState(1)

  const NODE_URL = 'https://speedy-nodes-nyc.moralis.io/a1c8f6dd1d9faf78fda78394/bsc/mainnet'
  const web3 = new Web3(new Web3.providers.HttpProvider(NODE_URL));
  
  const address = "0xe7f10da15c762a4ea4ef4c61d17f42b9fa94f31f"
  const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_walletMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"approveMax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"authorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buybacksMarketingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimDividend","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"dividendDistributor","outputs":[{"internalType":"contract DividendDistributor","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCirculatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"isAuthorized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isDividendExempt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isFeeExempt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isTxLimitExempt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"iswalletMaxExempt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"restrictWhales","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IDEXRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapAndLiquifyByLimitOnly","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"totalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFeeIfSelling","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"adr","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"unauthorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
  const contractVar = new web3.eth.Contract(abi, address);

  function setFarm() {
    {account ? contractVar.methods.balanceOf(account).call({from:'0x0000000000000000000000000000000000000000'}, function(error, result){
      let farmValues = Math.ceil(((web3.utils.fromWei(result, "ether")) * 100) / 2)
      if (farmValues > 50) {
        setFarmType(50)
      } else if (farmValues == 0) {
        setFarmType(1)
      } else {
        setFarmType(farmValues)
      }
    }) : null}
  }

  function setFields() {
    {account ? contractVar.methods.balanceOf(account).call({from:'0x0000000000000000000000000000000000000000'}, function(error, result){
      setTotalHeld(parseFloat(web3.utils.fromWei(result, "ether")).toFixed(2))
    }) : null}

    {account ? fetch('https://api.bscscan.com/api?module=account&action=txlistinternal&address=0x67B98E7B9D17Ff9A5168df361B1b34F2EB3475cE&startblock=0&endblock=99999999&offset=10&sort=asc&apikey=ER5KQ8DPZPDY8M3ARWMMM9172PRSZD94TV')
    .then(response => response.json())
    .then(data => {
      data["result"].forEach(element => {
        if(String(element["to"]).toLowerCase() == account.toLowerCase() && element["isError"] == "0"){
          let valueS = web3.utils.fromWei(element["value"], "ether")
          setTotalEarned(totalEarned + valueS)
        }
    });
    }) : null}
  }

  useEffect(()=>{
    setFarm();
    setFields();
  }, [account])

  return (
    <div>
      <Head>
        {/* Meta Combined UX*/}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:locale" content="en_US" />
        <title>🚜 Track Your Farm - Farm The Dip</title>
        <meta
          name="description"
          content="Holding FARM? Use this page to track your rewards and FARM holdings - watch your FARM grow in real-time!"
        />
        <link rel="canonical" href="https://farmthedip.com/farm" />
        {/* */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="🚜 Track Your Farm - Farm The Dip" />
        <meta
          property="og:description"
          content="Holding FARM? Use this page to track your rewards and FARM holdings - watch your FARM grow in real-time!"
        />
        <meta property="og:image" content="/logo-512.png" />
        <meta property="og:image:width" content={512} />
        <meta property="og:image:height" content={512} />
        <meta property="og:url" content="https://farmthedip.com/farm" />
        <meta property="og:site_name" content="Farm The Dip" />
        <meta property="og:type" content="website" />
        {/* */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="🚜 Track Your Farm - Farm The Dip" />
        <meta
          name="twitter:description"
          content="Holding FARM? Use this page to track your rewards and FARM holdings - watch your FARM grow in real-time!"
        />
        <meta name="twitter:image" content="/logo-512.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap" rel="stylesheet"/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-193733109-7"></script>
        <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'UA-193733109-7');`
        }} />
      </Head>
      <Header />
      <Container>
        <Flex alignItems={'center'} direction={"column"} justifyContent={'center'} minHeight="calc(100vh - 74px)">
          {account ? <div className="mb-5 pb-3 mt-5 mt-md-0"><img src={`/farms/farm-${farmType}.svg`} alt="Your Farm" className='farmSVG' /></div> : null}
            <Divider />
              {account ? <Box className='px-0 d-flex w-100 justify-content-center align-items-center flex-column'>
                  {account ? <div><Text fontSize={'1.5rem'} className="mt-5 stakingInfo" textAlign={'center'}><Text as={'span'} fontWeight={'500'}>Total Held:</Text> {String(totalHeld)} <Text as={'span'} fontWeight={'300'}>FARM</Text></Text><Text fontSize={'1.5rem'} className="mt-4 stakingInfo mb-5" textAlign={'center'}><Text as={'span'} fontWeight={'500'}>Rewards:</Text> {totalEarned > 0 ? parseFloat(totalEarned).toFixed(2) : "0.00"} <Text as={'span'} fontWeight={'300'}>BNB</Text></Text></div> : null}
                </Box>
              : <div> {!account ? <Button colorScheme='green' variant='outline' className='mt-5 mb-5' p={9} size={'lg'} onClick={() => connectWallet()} rightIcon={<BsWallet2 />}>
                Connect Wallet
              </Button> : null}</div> 
              }
            <Divider className='mb-4' />
            {account ? farmType < 50 ? <Alert borderRadius='7.5px' status='info'> <AlertIcon /> <span>Grow your FARM to earn more rewards. <Link className='remainHover' textDecoration={'none!important'} color={'blue.300'} href={'https://pancakeswap.finance/swap?outputCurrency=0xe7f10da15c762a4ea4ef4c61d17f42b9fa94f31f'}>Buy FARM on PancakeSwap</Link>.</span> </Alert> : null : null}
        </Flex>
      </Container>
    </div>
  )
}
