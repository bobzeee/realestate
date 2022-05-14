import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  HStack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const DesktopMenu = [
    {
      name: "Home",
      link: "/",
      Icon: <FcHome />,
    },
    {
      name: "Search",
      link: "/search",
      Icon: <BsSearch />,
    },
    {
      name: "Buy Property",
      link: "search?purpose=for-sale",
      Icon: <FcAbout />,
    },
    {
      name: "Rent Property",
      link: "search?purpose=for-sale",
      Icon: <FiKey />,
    },
  ];
  return (
    <Flex p="2" borderBottom="1px" borderColor="gray.300">
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link href="/" paddingLeft="2">
          Realtor
        </Link>
      </Box>
      <Spacer />

      {isLargerThan600 ? (
        <HStack spacing="34px">
          {DesktopMenu.map((menu, i) => (
            <Link key={i} href={menu.link} passHref>
              <Box display="flex" alignItems="center" cursor="pointer">
                <Text fontSize="lg" _hover={{ color: "blue" }}>
                  {menu.name}
                </Text>
              </Box>
            </Link>
          ))}
        </HStack>
      ) : (
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<FcMenu />}
              variant="outlined"
              color="red.400"
            />
            <MenuList>
              {DesktopMenu.map((menu, i) => (
                <Link key={i} href={menu.link} passHref>
                  <MenuItem icon={menu.Icon}>{menu.name}</MenuItem>
                </Link>
              ))}
            </MenuList>
          </Menu>
        </Box>
      )}
    </Flex>
  );
};

export default Navbar;
