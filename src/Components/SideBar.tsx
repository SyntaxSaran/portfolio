
import { Burger, Drawer } from "@mantine/core";
import { IconHexagonLetterS, IconX } from "@tabler/icons-react";
import { useDisclosure } from '@mantine/hooks';
import { navLinks } from "./Header";

const SideBar=()=> {
    const [opened, {toggle}] = useDisclosure();
    return (
    <>
        <Drawer.Root className="bs:hidden !-z-10" 
        bg= "#0a192f" position='right'
        size='50vw' opened={opened} onClose={toggle}>
        <Drawer.Overlay className="!-z-0" style={{ backgroundOpacity: 0.5, blur: 4 }}/>
        <Drawer.Content className="!-z-0" bg= "#0a192f" >
          <Drawer.Body className="mt-20 flex flex-col gap-5" bg= "#0a192f" >{navLinks(true,toggle)}</Drawer.Body>
        </Drawer.Content>
        </Drawer.Root>
        <Burger className="bs:hidden !z-10" color='#64ffda' size="lg" opened={opened} onClick={toggle} />  

    </>
    );
}
export default SideBar;
