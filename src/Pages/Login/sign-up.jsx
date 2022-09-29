import {
    Box,
    Button,
    Heading,
    HStack,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    SimpleGrid,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { BsEyeFill } from "react-icons/bs";
  import styles from "./Auth.module.css";
  import { Footer } from "./footer";
  
  export const SignUp = () => {
  
    
  
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
  
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");

    return (
      <>
  
        <Box w={["100%", "100%", "100%", "75%"]} m="50px auto" p="0px 40px">
          <SimpleGrid columns={[1, null, 2]} spacing="0px">
            <Box
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              h={["auto", "auto", "auto", "auto"]}
              textAlign={"center"}
            >
              <VStack
                justify={"space-between"}
                h={["auto", "auto", "auto", "100vh"]}
              >
                <Box w="80%" m="auto" className={styles.signuppage}>
                  <Image
                    width={"150px"}
                    pt="40px"
                    px="30px"
                    src="https://app.hellobonsai.com/assets/logos/bonsai-0fe7c417d79806408d8117d5a0ca871f0be3afb1104d54b53f59f53cbda2f28b.svg"
                  />
                  <Text
                    fontWeight={"bold"}
                    width="70%"
                    m="auto"
                    textAlign={"left"}
                  >
                    Join 500,000+ freelancers and agencies using Bonsai.
                  </Text>
                </Box>
                <Box w="60%" m="auto">
                  <svg
                    className="signup-page-cp-quote-icon"
                    width="22"
                    height="16"
                    viewBox="0 0 22 16"
                    fill="none"
                  >
                    <path
                      d="M20.4582 3.2C18.1262 3.36 16.1387 4.82667 15.1847 6.85333H18.2057C19.4512 6.85333 20.4847 7.86667 20.4847 9.14667V13.7067C20.4847 14.96 19.4777 16 18.2057 16H13.6212C12.3756 16 11.3421 14.9867 11.3421 13.7067V9.14667C11.3421 4.10667 15.4232 0 20.4317 0C20.4317 0 21.3328 0 21.3328 0.906667C21.3328 0.906667 21.3328 1.06667 21.3328 2.26667C21.3593 3.2 20.4582 3.2 20.4582 3.2ZM9.08961 3.2C6.75758 3.36 4.77006 4.82667 3.81605 6.85333H6.83708C8.0826 6.85333 9.11611 7.86667 9.11611 9.14667V13.7067C9.11611 14.96 8.1091 16 6.83708 16H2.27903C1.03351 16 0 14.9867 0 13.7067V9.14667C0 4.10667 4.08105 0 9.08961 0C9.08961 0 9.99062 0 9.99062 0.906667C9.99062 0.906667 9.99062 1.06667 9.99062 2.26667C9.99062 3.2 9.08961 3.2 9.08961 3.2Z"
                      fill="#00b289"
                    ></path>
                  </svg>
                  <Text fontSize="12" fontStyle={"italic"}>
                    Anyone doing #freelance work should use @bonsaiinc for
                    contracts/payment. It's amazing and saves boatloads of time.
                    Nathanael Smith, Product Designer
                  </Text>
                </Box>
              </VStack>
            </Box>
  
            <Box
              textAlign={"center"}
              p="30px 0px"
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            >
              <Heading p="0px 30px" as="h3" size="lg" textAlign={"left"}>
                Try Bonsai free with your Workflow today{" "}
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
              <Text fontSize={"12px"} textAlign={"center"} color="#bbbbbb">
                OR
              </Text>
              <br />
              <form >
                <Box w="80%" m="0px auto">
                  <Text
                    textAlign={"left"}
                    mb="8px"
                    textTransform={"uppercase"}
                    fontSize="14px"
                  >
                    Email
                  </Text>
  
                  <Input
                    type="email"
                    placeholder="your@gmail.com"
                    borderRadius={0}
                    required
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    // value="eve.holt@reqres.in"
                  />
                </Box>
                <br />
                <Box w="80%" m="0px auto">
                  <Text
                    textAlign={"left"}
                    mb="8px"
                    textTransform={"uppercase"}
                    fontSize="14px"
                  >
                    full name
                  </Text>
  
                  <Input
                    type="text"
                    placeholder="Aniket Rasal"
                    borderRadius={0}
                    // value="John Smith"
                  />
                </Box>
                <br />
                <Box w="80%" m="0px auto">
                  <Text
                    textAlign={"left"}
                    mb="8px"
                    textTransform={"uppercase"}
                    fontSize="14px"
                  >
                    Password
                  </Text>
  
                  <InputGroup m="auto">
                    <Input
                      type={show ? "text" : "password"}
                      placeholder="Password"
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                      // value="cityslicka"
                    />
  
                    <InputRightElement
                      cursor={"pointer"}
                      onClick={handleClick}
                      children={<BsEyeFill color="gray.300" />}
                    />
                  </InputGroup>
                  <Text fontSize="10px" textAlign={"left"} mt="5px">
                    Your password must be at least 6 characters
                  </Text>
                </Box>
  
                <Box w="80%" m="20px auto">
                  <HStack gap="20px">
                    <Box w="60%">
                      <Text
                        textAlign={"left"}
                        mb="8px"
                        textTransform={"uppercase"}
                        fontSize="14px"
                      >
                        country
                      </Text>
  
                      <Select placeholder="India" textTransform={"uppercase"}>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Åland Islands">Åland Islands</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran, Islamic Republic of">
                          Iran, Islamic Republic of
                        </option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea, Democratic People's Republic of">
                          Korea, Democratic People's Republic of
                        </option>
                        <option value="Korea, Republic of">
                          Korea, Republic of
                        </option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao People's Democratic Republic">
                          Lao People's Democratic Republic
                        </option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libyan Arab Jamahiriya">
                          Libyan Arab Jamahiriya
                        </option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macao">Macao</option>
                        <option value="Macedonia, The Former Yugoslav Republic of">
                          Macedonia, The Former Yugoslav Republic of
                        </option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">Marshall Islands</option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia, Federated States of">
                          Micronesia, Federated States of
                        </option>
                        <option value="Moldova, Republic of">
                          Moldova, Republic of
                        </option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Netherlands Antilles">
                          Netherlands Antilles
                        </option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Northern Mariana Islands">
                          Northern Mariana Islands
                        </option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestinian Territory, Occupied">
                          Palestinian Territory, Occupied
                        </option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">Papua New Guinea</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russian Federation">
                          Russian Federation
                        </option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Helena">Saint Helena</option>
                        <option value="Saint Kitts and Nevis">
                          Saint Kitts and Nevis
                        </option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Pierre and Miquelon">
                          Saint Pierre and Miquelon
                        </option>
                        <option value="Saint Vincent and The Grenadines">
                          Saint Vincent and The Grenadines
                        </option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">
                          Sao Tome and Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
  
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
  
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
  
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
  
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-leste">Timor-leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                      </Select>
                    </Box>
                    <Box>
                      <Text
                        textAlign={"left"}
                        mb="8px"
                        textTransform={"uppercase"}
                        fontSize="14px"
                      >
                        currency
                      </Text>
                      <Select placeholder="inr" textTransform={"uppercase"}>
                        <option value="AFN">AFN</option>
                        <option value="ALL">ALL</option>
                        <option value="DZD">DZD</option>
                        <option value="AOA">AOA</option>
                        <option value="ARS">ARS</option>
                        <option value="AMD">AMD</option>
                        <option value="AWG">AWG</option>
                        <option value="AUD">AUD</option>
                        <option value="AZN">AZN</option>
                        <option value="BSD">BSD</option>
                        <option value="BHD">BHD</option>
                        <option value="BDT">BDT</option>
                        <option value="BBD">BBD</option>
                        <option value="BYR">BYR</option>
                        <option value="BEF">BEF</option>
                        <option value="BZD">BZD</option>
                        <option value="BMD">BMD</option>
                        <option value="BTN">BTN</option>
                        <option value="BTC">BTC </option>
                        <option value="BOB">BOB</option>
                        <option value="BWP">BWP</option>
                        <option value="BRL">BRL</option>
                        <option value="GBP">GBP </option>
                        <option value="BND">BND</option>
                        <option value="BGN">BGN</option>
                        <option value="BIF">BIF</option>
                        <option value="KHR">KHR</option>
                        <option value="CAD">CAD</option>
                        <option value="CVE">CVE </option>
                        <option value="KYD">KYD </option>
                        <option value="XOF">XOF </option>
                        <option value="XAF">XAF </option>
                        <option value="XPF">XPF</option>
                        <option value="CLP">CLP</option>
                        <option value="CNY">CNY</option>
                        <option value="COP">COP</option>
                        <option value="KMF">KMF</option>
                        <option value="CDF">CDF</option>
                        <option value="CRC">CRC </option>
                        <option value="HRK">HRK</option>
                        <option value="CUC">CUC </option>
                        <option value="CZK">CZK </option>
                        <option value="DKK">DKK</option>
                        <option value="DJF">DJF</option>
                        <option value="DOP">DOP</option>
                        <option value="XCD">XCD </option>
                        <option value="EGP">EGP</option>
                        <option value="ERN">ERN</option>
                        <option value="EEK">EEK</option>
                        <option value="ETB">ETB</option>
                        <option value="EUR">EUR </option>
                        <option value="FKP">FKP </option>
                        <option value="FJD">FJD</option>
                        <option value="GMD">GMD</option>
                        <option value="GEL">GEL</option>
                        <option value="DEM">DEM</option>
                        <option value="GHS">GHS</option>
                        <option value="GIP">GIP</option>
                        <option value="GRD">GRD</option>
                        <option value="GTQ">GTQ</option>
                        <option value="GNF">GNF</option>
                        <option value="GYD">GYD</option>
                        <option value="HTG">HTG</option>
                        <option value="HNL">HNL</option>
                        <option value="HKD">HKD </option>
                        <option value="HUF">HUF</option>
                        <option value="ISK">ISK</option>
                        <option value="INR">INR</option>
                        <option value="IDR">IDR</option>
                        <option value="IRR">IRR</option>
                        <option value="IQD">IQD</option>
                        <option value="ILS">ILS </option>
                        <option value="ITL">ITL</option>
                        <option value="JMD">JMD</option>
                        <option value="JPY">JPY</option>
                        <option value="JOD">JOD</option>
                        <option value="KZT">KZT</option>
                        <option value="KES">KES</option>
                        <option value="KWD">KWD</option>
                        <option value="KGS">KGS</option>
                        <option value="LAK">LAK</option>
                        <option value="LVL">LVL</option>
                        <option value="LBP">LBP</option>
                        <option value="LSL">LSL</option>
                        <option value="LRD">LRD</option>
                        <option value="LYD">LYD</option>
                        <option value="LTL">LTL</option>
                        <option value="MOP">MOP</option>
                        <option value="MKD">MKD</option>
                        <option value="MGA">MGA</option>
                        <option value="MWK">MWK</option>
                        <option value="MYR">MYR</option>
                        <option value="MVR">MVR</option>
                        <option value="MRO">MRO</option>
                        <option value="MUR">MUR</option>
                        <option value="MXN">MXN</option>
                        <option value="MDL">MDL</option>
                        <option value="MNT">MNT</option>
                        <option value="MAD">MAD</option>
                        <option value="MZM">MZM</option>
                        <option value="MMK">MMK</option>
                        <option value="NAD">NAD</option>
                        <option value="NPR">NPR</option>
                        <option value="NIO">NIO</option>
                        <option value="NGN">NGN</option>
                        <option value="NOK">NOK</option>
                        <option value="OMR">OMR</option>
                        <option value="PKR">PKR</option>
                        <option value="PAB">PAB</option>
                        <option value="PYG">PYG</option>
                        <option value="PHP">PHP</option>
                        <option value="PLN">PLN</option>
                        <option value="QAR">QAR</option>
                        <option value="RON">RON</option>
                        <option value="RUB">RUB</option>
                        <option value="RWF">RWF</option>
                        <option value="SVC">SVC</option>
                        <option value="WST">WST</option>
                        <option value="SAR">SAR</option>
                        <option value="RSD">RSD</option>
                        <option value="SCR">SCR</option>
                        <option value="SGD">SGD</option>
                        <option value="SKK">SKK</option>
                        <option value="SOS">SOS</option>
                        <option value="SRD">SRD</option>
                        <option value="SZL">SZL</option>
                        <option value="SEK">SEK</option>
                        <option value="CHF">CHF</option>
                        <option value="SYP">SYP</option>
                        <option value="TJS">TJS</option>
                        <option value="TND">TND</option>
                        <option value="TRY">TRY</option>
                        <option value="TMT">TMT</option>
                        <option value="UGX">UGX</option>
                        <option value="UAH">UAH</option>
                      </Select>
                    </Box>
                  </HStack>
                </Box>
  
                <br />
  
                <Box w="80%" m="0px auto">
                  <Button
                    w="100%"
                    colorScheme="green"
                    borderRadius={0}
                    type="submit"
                  >
                    Create Free Account
                  </Button>
                </Box>
              </form>
  
              <Text
                my="20px"
                fontSize={"12px"}
                textAlign={"center"}
                color="#bbbbbb
  "
              >
                Already have an account
              </Text>
              <Box w="80%" m="0px auto">
                {/* <Link to="/login"> */}
                  <Button
                    variant="outline"
                    w="100%"
                    colorScheme="green"
                    borderRadius={0}
                  >
                    Login
                  </Button>
                {/* </Link> */}
              </Box>
              <br />
            </Box>
          </SimpleGrid>
        </Box>
        <Footer/>
      </>
    );
  };