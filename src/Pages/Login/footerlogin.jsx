import {
  Stack,
  Box,
  Flex,
  Text,
  Link,
  Image,
} from "@chakra-ui/react";
import { ImMobile } from "react-icons/im";
import { CgLaptop } from "react-icons/cg";
// import Timer from ".";
import React from "react";

export const FooterLogin = () => {
  return (
    <Stack color="#aaa" mt={5}>
            <Flex
              fontSize="11px"
              fontWeight="600"
              align="center"
              justify="center"
              gap={3}
            >
              <Link>Feature Requests </Link>
              <Text>●</Text>
              <Link>Help Center </Link>
              <Text>●</Text>
              <Link>Blog & Resources </Link>

              <Text>●</Text>
              <Link>Pricing </Link>
              <Text>●</Text>
              <Link>Privacy Policy</Link>
            </Flex>
            <Flex
              fontSize="13px"
              fontWeight="600"
              align="center"
              justify="center"
              gap={3}
            >
              <Link fontWeight="normal">Bonsai Apps: </Link>
              <Text>
                <ImMobile />
              </Text>
              <Link>IPhone</Link>
              <Text>
                <CgLaptop />
              </Text>
              <Link>MacOS</Link>

              <Text>
                <ImMobile />
              </Text>
              <Link>Android </Link>
              <Image
                src="https://cdn.iconscout.com/icon/free/png-64/chrome-2489187-2082906.png"
                alt="icon"
                w="11px"
              />
              <Link>Chrome</Link>
            </Flex>

            <Box w="100%">
              <Text
                fontWeight="normal"
                fontSize="12px"
                textAlign="center"
                w="80%"
                m="auto"
                color="#ccd0d2"
              >
                ©2022 Bonsai Technologies Inc — Payments, banking, and issuing
                services are provided by Stripe Payments Company, Evolve Bank &
                Trust (Member FDIC), and Celtic Bank (Member FDIC),
                respectively. Bonsai is not a law firm, and does not provide
                legal services, advice, or representation. Terms Credits
              </Text>
            </Box>
          </Stack>
  );
};
