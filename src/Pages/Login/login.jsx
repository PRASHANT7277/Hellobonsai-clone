import {
  Box,
  Button,
  Checkbox,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./Auth.module.css";
import { FooterLogin } from "./footerlogin";
import { useNavigate } from "react-router-dom";
import { LoginNavbar } from "./Login_navbar";
import Axios from "axios";
export const Login = () => {
  const navigate = useNavigate();
  const url = "https://hellobonsaibackend.herokuapp.com/users/login";
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  async function submit(e){
      e.preventDefault();
      await Axios.post(url,{
        email: data.email,
        password: data.password,

      })
      .then(res=> {
        console.log(res.data);
        alert("Login Sucessful!")
        localStorage.setItem("token",res.data.token)
        navigate("/vendor/dashboard");
      })
      .catch((err)=>{
        console.log(err)
        alert("Invalid Credential")
      }
        
      )
      
  }

  function handleData(e){
      const newData = {...data}
      newData[e.target.id] = e.target.value
      setData(newData)
      console.log(newData)
  }

  return (
    <div >
      <LoginNavbar />
      <Box  w={["100%", "100%", "100%", "65%"]} m="50px auto" p="0px 40px" mt="100px">
        <SimpleGrid columns={[1, null, 2]} spacing="90px">
          <Box
              width="350px"
              
             overflow="scroll"
          //   h={["auto", "auto", "auto", 400]}
            height="550px"
            textAlign={"center"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          >
               <Heading as='h5' size='sm' pt="20px">
               The Changelog
              </Heading>    
            <HStack
              p="0px 20px"
              borderLeft={"3px solid #00B289"}
              alignItems={"flex-start"}
              my="10px"
              
            >
              <Text textAlign={"left"} fontSize="14px">
                <Button
                  bg="#00B289"
                  color={"#fff"}
                  _hover={{ bg: "#00B289" }}
                  size="12px"
                  p="2px 5px"
                  m="0px 5px"
                >
                  New
                </Button>
                <b className={styles.boldte}>
                  Automatically send your Bonsai invoices to QuickBooks Online
                  (US only){" "}
                </b>
                Keep your accounting synced between Bonsai and QuickBooks with
                the new QuickBooks Online...
              </Text>
            </HStack>
            <HStack p="0px 20px" alignItems={"flex-start"} my="10px">
              <Text textAlign={"left"} fontSize="14px">
                <Button
                  bg="#00B289"
                  color={"#fff"}
                  _hover={{ bg: "#00B289" }}
                  size="12px"
                  p="2px 5px"
                  m="0px 5px"
                >
                  New
                </Button>
                <b className={styles.boldte}>A new Client Forms experience.</b>
                You can now create client forms and surveys, no matter which
                plan you are on. The forms also...
              </Text>
            </HStack>
            <HStack p="0px 20px" alignItems={"flex-start"} my="10px">
              <Text textAlign={"left"} fontSize="14px">
                <Button
                  bg="#00B289"
                  color={"#fff"}
                  _hover={{ bg: "#00B289" }}
                  size="12px"
                  p="2px 5px"
                  m="0px 5px"
                >
                  New
                </Button>
                <b className={styles.boldte}>
                  A new client payment experience. only){" "}
                </b>
                In your invoice settings, you can now pick “Simplified payment
                page”. Instead of seeing the...
              </Text>
            </HStack>
            <HStack p="0px 20px" alignItems={"flex-start"} my="10px">
              <Text textAlign={"left"} fontSize="14px">
                <Button
                  bg="#EEF9F5"
                  border={"none"}
                  size="12px"
                  p="2px 5px"
                  m="0px 5px"
                >
                  Improvment
                </Button>
                <b className={styles.boldte}>
                  Drag and Drops items on your invoices.
                </b>
              </Text>
            </HStack>
            <HStack
              borderLeft={"3px solid #00B289"}
              p="0px 20px"
              alignItems={"flex-start"}
              my="10px"
            >
              <Text textAlign={"left"} fontSize="14px">
                <Button
                  bg="#EEF9F5"
                  border={"none"}
                  size="12px"
                  p="2px 5px"
                  m="0px 5px"
                >
                  Improvment
                </Button>
                <b className={styles.boldte}>Update Intgration page.</b>
                <br />
                Discover all the ways you can connect Bonsai to your workflow on
                the new integrations page....
              </Text>
            </HStack>
            <VStack>
              <Box borderTop={"0.2px solid #000"} bg="#FCFCFC" w="100%">
                Bonsai updates powered by Headway
              </Box>
            </VStack>
          </Box>

          <Box
            textAlign={"center"}
            p="30px 0px"
            width="450px"
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          >
            <Heading as="h3" size="lg" fontWeight={"normal"}>
              Sign In
            </Heading>
            <br />
            <br />
            <Button
              w="80%"
              variant={"outline"}
              borderRadius={0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="169"
                height="18"
                fill="none"
                viewBox="0 0 169 18"
              >
                <path
                  fill="#4285F4"
                  fillRule="evenodd"
                  d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#34A853"
                  fillRule="evenodd"
                  d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#FBBC05"
                  fillRule="evenodd"
                  d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#EA4335"
                  fillRule="evenodd"
                  d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#4285F4"
                  fillRule="evenodd"
                  d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#34A853"
                  fillRule="evenodd"
                  d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#FBBC05"
                  fillRule="evenodd"
                  d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#EA4335"
                  fillRule="evenodd"
                  d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                  clipRule="evenodd"
                ></path>
                <path
                  transform="translate(0 2)"
                  fill="#757575"
                  d="M48.214 10.437c0-.438-.155-.775-.465-1.012-.305-.237-.859-.476-1.661-.718s-1.44-.51-1.914-.807c-.907-.57-1.36-1.312-1.36-2.228 0-.802.325-1.463.977-1.983.656-.52 1.506-.779 2.55-.779.692 0 1.31.128 1.852.383.543.255.969.62 1.279 1.094.31.47.465.99.465 1.565h-1.723c0-.52-.164-.925-.492-1.217-.324-.296-.789-.444-1.395-.444-.565 0-1.005.12-1.32.362-.31.242-.464.58-.464 1.012 0 .365.169.67.506.916.337.242.893.479 1.668.711.775.228 1.397.49 1.866.786.47.292.814.629 1.032 1.012.219.378.328.822.328 1.333 0 .83-.319 1.49-.957 1.982-.633.488-1.494.732-2.584.732-.72 0-1.383-.132-1.989-.397-.601-.269-1.07-.638-1.408-1.107-.333-.47-.5-1.016-.5-1.64h1.73c0 .564.187 1.002.56 1.312.375.31.91.465 1.607.465.602 0 1.053-.121 1.354-.363.305-.246.458-.57.458-.97zM53.067 13h-1.66V5.604h1.66V13zm-1.763-9.317c0-.256.08-.468.239-.636.164-.169.397-.253.697-.253.301 0 .533.084.697.253.165.168.247.38.247.636 0 .25-.082.46-.246.629-.165.164-.397.246-.698.246-.3 0-.533-.082-.697-.246a.88.88 0 01-.24-.63zm3.288 5.564c0-1.148.269-2.064.806-2.748.543-.688 1.26-1.032 2.154-1.032.843 0 1.506.294 1.989.882l.075-.745h1.497v7.17c0 .971-.303 1.737-.909 2.297-.602.56-1.415.841-2.44.841a3.929 3.929 0 01-1.593-.342c-.515-.223-.907-.517-1.176-.882l.786-.998c.51.607 1.14.91 1.887.91.551 0 .987-.15 1.306-.452.319-.296.478-.733.478-1.312v-.5c-.478.534-1.116.8-1.914.8-.866 0-1.574-.343-2.126-1.031-.547-.689-.82-1.641-.82-2.858zm1.654.144c0 .742.15 1.328.451 1.757.306.423.727.635 1.265.635.67 0 1.167-.287 1.49-.861V7.668c-.314-.56-.806-.84-1.476-.84-.547 0-.973.216-1.279.649-.3.433-.45 1.07-.45 1.914zm8.121-3.787l.048.854c.547-.66 1.265-.991 2.153-.991 1.54 0 2.325.882 2.352 2.645V13h-1.661V8.208c0-.47-.103-.816-.308-1.04-.2-.227-.53-.34-.991-.34-.67 0-1.169.302-1.497.908V13h-1.661V5.604h1.565zM76.091 13h-1.723V3.047h1.723V13zm3.507-7.396l.047.854c.547-.66 1.265-.991 2.154-.991 1.54 0 2.324.882 2.351 2.645V13h-1.66V8.208c0-.47-.103-.816-.308-1.04-.2-.227-.531-.34-.992-.34-.67 0-1.168.302-1.497.908V13h-1.66V5.604h1.565zm16.235 5.106l1.176-5.106h1.62L96.612 13h-1.367L93.66 7.92 92.101 13h-1.368L88.71 5.604h1.62l1.196 5.051 1.518-5.051h1.25l1.539 5.106zm5.674 2.29h-1.661V5.604h1.661V13zm-1.764-9.317c0-.256.08-.468.24-.636.163-.169.396-.253.697-.253.3 0 .533.084.697.253.164.168.246.38.246.636 0 .25-.082.46-.246.629-.164.164-.397.246-.697.246-.301 0-.534-.082-.698-.246a.88.88 0 01-.239-.63zm5.66.123v1.798h1.306v1.23h-1.306v4.129c0 .282.055.488.164.615.114.123.315.185.602.185.191 0 .385-.023.581-.069v1.285a4.092 4.092 0 01-1.094.158c-1.276 0-1.914-.704-1.914-2.113v-4.19h-1.217v-1.23h1.217V3.806h1.661zm4.218 2.604a2.6 2.6 0 012.058-.943c1.577 0 2.376.9 2.399 2.7V13h-1.661V8.229c0-.51-.112-.87-.335-1.08-.219-.215-.542-.322-.971-.322-.665 0-1.162.296-1.49.889V13h-1.661V2.5h1.661v3.91zm17.418 5.298c-.36.47-.859.825-1.497 1.066-.638.242-1.363.363-2.174.363-.834 0-1.572-.19-2.215-.568a3.808 3.808 0 01-1.49-1.62c-.346-.706-.526-1.529-.54-2.468v-.779c0-1.504.36-2.677 1.08-3.52.72-.848 1.725-1.272 3.015-1.272 1.107 0 1.987.274 2.638.82.652.547 1.044 1.336 1.176 2.366h-1.695c-.191-1.199-.886-1.798-2.085-1.798-.775 0-1.365.28-1.771.84-.401.557-.608 1.375-.622 2.455v.765c0 1.076.226 1.912.677 2.51.456.592 1.087.888 1.894.888.884 0 1.513-.2 1.886-.602V9.206h-2.05V7.894h3.773v3.814zm1.429-2.475c0-.724.143-1.376.43-1.955.288-.583.691-1.03 1.21-1.34.52-.314 1.117-.471 1.791-.471.998 0 1.807.321 2.427.964.625.642.962 1.494 1.012 2.556l.007.39c0 .73-.142 1.38-.424 1.955a3.08 3.08 0 01-1.203 1.333c-.52.315-1.121.472-1.805.472-1.044 0-1.88-.347-2.509-1.04-.624-.697-.936-1.624-.936-2.782v-.082zm1.661.144c0 .761.157 1.358.472 1.791.314.428.752.643 1.312.643.561 0 .996-.22 1.306-.657.314-.437.471-1.078.471-1.92 0-.748-.161-1.34-.485-1.778-.319-.437-.754-.656-1.306-.656-.542 0-.973.216-1.292.65-.319.428-.478 1.07-.478 1.927zm6.309-.144c0-.724.144-1.376.431-1.955a3.122 3.122 0 011.21-1.34c.52-.314 1.117-.471 1.791-.471.998 0 1.807.321 2.427.964.624.642.961 1.494 1.012 2.556l.006.39c0 .73-.141 1.38-.423 1.955a3.076 3.076 0 01-1.204 1.333c-.519.315-1.121.472-1.804.472-1.044 0-1.88-.347-2.509-1.04-.624-.697-.937-1.624-.937-2.782v-.082zm1.662.144c0 .761.157 1.358.471 1.791.315.428.752.643 1.313.643.56 0 .996-.22 1.305-.657.315-.437.472-1.078.472-1.92 0-.748-.162-1.34-.485-1.778-.319-.437-.754-.656-1.306-.656-.542 0-.973.216-1.292.65-.319.428-.478 1.07-.478 1.927zm6.33-.13c0-1.148.269-2.064.806-2.748.543-.688 1.26-1.032 2.154-1.032.843 0 1.506.294 1.989.882l.075-.745h1.497v7.17c0 .971-.303 1.737-.909 2.297-.602.56-1.415.841-2.44.841a3.925 3.925 0 01-1.593-.342c-.515-.223-.907-.517-1.176-.882l.786-.998c.511.607 1.139.91 1.887.91.551 0 .987-.15 1.306-.452.319-.296.478-.733.478-1.312v-.5c-.478.534-1.116.8-1.914.8-.866 0-1.575-.343-2.126-1.031-.547-.689-.82-1.641-.82-2.858zm1.654.144c0 .742.15 1.328.451 1.757.305.423.727.635 1.265.635.67 0 1.166-.287 1.49-.861V7.668c-.314-.56-.807-.84-1.477-.84-.546 0-.973.216-1.278.649-.301.433-.451 1.07-.451 1.914zM154.431 13h-1.661V2.5h1.661V13zm5.072.137c-1.053 0-1.907-.33-2.564-.992-.651-.665-.977-1.549-.977-2.652v-.205c0-.738.141-1.397.424-1.976a3.27 3.27 0 011.203-1.36 3.172 3.172 0 011.723-.485c1.007 0 1.784.321 2.331.964.551.642.827 1.551.827 2.727v.67h-4.833c.05.61.253 1.094.608 1.45.36.355.811.532 1.354.532.761 0 1.38-.307 1.859-.922l.896.854a3.016 3.016 0 01-1.19 1.032 3.72 3.72 0 01-1.661.363zm-.198-6.337c-.456 0-.825.16-1.108.478-.278.32-.455.764-.533 1.333h3.165v-.123c-.036-.556-.184-.975-.444-1.258-.26-.287-.62-.43-1.08-.43z"
                ></path>
              </svg>
            </Button>
            <br />
            <br />
            <Text fontSize={"12px"} textAlign={"center"}>
              OR
            </Text>
            <br />
            <form onSubmit={(e)=> submit(e)} >
              <Input
                type="email"
                id="email"
                value={data.email}
                required
                w="80%"
                placeholder="Email"
                borderRadius={0}
                onChange={(e)=>handleData(e)}
              />
              <br />
              <br />
              <Input
                required
                w="80%"
                placeholder="Password"
                borderRadius={0}
                type="password"
                    id="password"
                    value={data.password}
                    onChange={(e)=>handleData(e)}
              />
              <br />
              <HStack justifyContent={"center"} m="20px">
                <Checkbox />
                <Text> Remember me</Text>
              </HStack>
              <Button
                colorScheme="green"
                w="80%"
                borderRadius={0}
                type="submit"
              >
                Log in
              </Button>
            </form>
            <br />
            <br />
            <Text color="#00AC85">Reset Password</Text>
            <br />
            <Text color="#00AC85">Resend Verification Email</Text>
          </Box>
        </SimpleGrid>
      </Box>
      <FooterLogin />
    </div>
  );
};
