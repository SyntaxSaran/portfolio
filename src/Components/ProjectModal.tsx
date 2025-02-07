import { Badge, Group, Text, Image, Indicator, Modal, Button, ScrollArea } from "@mantine/core";

const ProjectModal = (props: any) => {
    return (
        <Modal.Root size="70%" className="font-mono" scrollAreaComponent={ScrollArea.Autosize} opened={props.opened} onClose={props.close}>
            <Modal.Overlay />
            <Modal.Content className="!rounded-3xl">
                <Modal.Header className="!bg-bgColor !rounded-tl-3xl !rounded-tr-3xl !border-2 !border-b-0  !border-primaryColor">
                    <Modal.Title data-autofocus className="flex gap-3 items-center !text-4xl text-white !font-bold">{props.title}
                        {props.live == true && <Badge className="flex items-center gap-1" variant="outline" size="lg" color="red" rightSection={
                            <Indicator size={10} color="red" position="middle-end" radius="sm" processing></Indicator>}>LIVE</Badge>}
                    </Modal.Title>
                    <Modal.CloseButton className="!bg-bgColor !text-red-500" />
                </Modal.Header>
                <Modal.Body className="!pt-3 !bg-bgColor !rounded-bl-3xl !rounded-br-3xl !border-2 !border-t-0  !border-primaryColor">
                    <Image className="!rounded-xl !shadow-[0_0_6px_0_#64FFDA]"
                        src={props.image}
                        alt={props.image}
                    />
                    <Group mt="md" mb="xs">
                        {props.technologies.map((tech: string, index: number) => <Badge key={index} size="xl" variant="light" color="#64FFDA">{tech}</Badge>)}
                    </Group>
                    <Text className="!text-justify" size="lg" c="dimmed">
                        {props.desc}
                    </Text>
                    <Group justify="space-between" mt="md" mb="xs">
                        <a href={props.github} target="_blank" className="w-[48%]"><Button variant="outline" color="#64FFDA" fullWidth mt="md" radius="md">
                            View Code
                        </Button></a>
                        <a href={props.link} target="_blank" className="w-[48%]"><Button className="!bg-primaryColor !text-bgColor" fullWidth mt="md" radius="md">
                            View Live App
                        </Button></a>
                    </Group>
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>
    )
}
export default ProjectModal;