import React from "react";
import {
  chakra,
  HStack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  VStack,
  Button,
  useColorMode,
  SimpleGrid
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import { BsWallet2 } from "react-icons/bs";
import Web3 from 'web3';
import { injected } from "../components/wallet.js";
import { useWeb3React } from "@web3-react/core";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("#fafafa", "gray.800");
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = useColorModeValue("gray.800", "#fafafa");
  const mobileNav = useDisclosure();

  const { account, activate, deactivate } = useWeb3React()
  async function connectWallet() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  const NODE_URL = 'https://bsc-dataseed.binance.org/'
  const web3 = new Web3(new Web3.providers.HttpProvider(NODE_URL));

  const Section = (props) => {
    const ic = useColorModeValue("brand.600", "brand.50");
    const hbg = useColorModeValue("gray.50", "brand.400");
    const tcl = useColorModeValue("gray.900", "gray.50");
    const dcl = useColorModeValue("gray.500", "gray.50");
    return (
      <Link
        m={-3}
        p={3}
        display="flex"
        alignItems="start"
        rounded="lg"
        _hover={{ bg: hbg }}
        
      >
        <chakra.svg
          flexShrink={0}
          h={6}
          w={6}
          color={ic}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </chakra.svg>
        <Box ml={4}>
          <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
            {props.title}
          </chakra.p>
          <chakra.p mt={1} fontSize="sm" color={dcl}>
            {props.children}
          </chakra.p>
        </Box>
      </Link>
    );
  };

  return (
    <React.Fragment>
      <chakra.header
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        w="full"
        position={"sticky"}
        top={"0"}
        zIndex={'999'}
        borderBottomWidth={2}
        borderBottomColor={useColorModeValue("gray.200", "gray.900")}
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex
            w="full"
            h="full"
            px="6"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex>
              <Link href="/">
                <HStack>
                    <img src={useColorModeValue('/HeaderFarmLT.png','/HeaderFarmLM.png')} alt="Farm The Dip" />
                </HStack>
              </Link>
            </Flex>
            <Flex>
            <Flex justify="flex-end" align="center" color="gray.400">
               {account ? <Button leftIcon={<BsWallet2 />} colorScheme='blue' variant='outline'>
                  {String(account).substring(0, 4)+"..."+String(account).substring(account.length - 3, account.length)}
               </Button> : <Button leftIcon={<BsWallet2 />} onClick={() => connectWallet()}  colorScheme='green' variant='outline'>
                  Connect
               </Button>}
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: "3" }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
            </Flex>
          </Flex>
          </Flex>
        </chakra.div>
      </chakra.header>
    </React.Fragment>
  );
}